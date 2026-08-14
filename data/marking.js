/* Self-marking engine.
   This is a static site — there is no AI here. It cannot understand prose.
   What it does do, honestly and deterministically:
     1. splits the model answer into marking points and looks for the language
        of each one in your answer, so you can see what you probably hit
     2. runs structural checks that genuinely predict levels-based marks:
        contextualisation, developed explanations, balance, and a conclusion
     3. makes YOU confirm the final mark, which is the bit that actually
        teaches you the mark scheme
   Treat the automatic part as a prompt for self-marking, not as an examiner. */

window.TLMARK = (function () {
  'use strict';

  var STOP = ('a an and are as at be been being but by can could for from had has have he her his ' +
    'how i if in into is it its may might more most must no not of on or other our out over own she ' +
    'should so some such than that the their them then there these they this those to too up use used ' +
    'using was we were what when where which while who will with would you your it\'s also each any all ' +
    'both very much many one two three first second').split(' ');

  var CONNECTIVES = ['however', 'whereas', 'although', 'in contrast', 'on the other hand', 'conversely',
    'despite', 'nevertheless', 'alternatively', 'by comparison', 'while'];

  var CONCLUSION = ['overall', 'in conclusion', 'on balance', 'therefore', 'to conclude', 'i would recommend',
    'the best option', 'most appropriate', 'most suitable', 'in summary'];

  var DEVELOP = ['because', 'which means', 'so that', 'this means', 'resulting in', 'leading to',
    'this leads to', 'as a result', 'therefore', 'which allows', 'so the', 'meaning that'];

  var POSITIVE = ['benefit', 'advantage', 'improves', 'improve', 'allows', 'faster', 'cheaper', 'reduces',
    'increases', 'saves', 'efficient', 'strength'];

  var NEGATIVE = ['drawback', 'disadvantage', 'risk', 'however', 'cost', 'limitation', 'weakness', 'slower',
    'expensive', 'problem', 'downside', 'fails'];

  function words(text) {
    return String(text).toLowerCase().replace(/[^a-z0-9\s'-]/g, ' ').split(/\s+/).filter(Boolean);
  }
  function stem(w) { return w.length > 5 ? w.slice(0, 5) : w; }
  function contentWords(text) {
    var seen = {}, out = [];
    words(text).forEach(function (w) {
      if (w.length < 4 || STOP.indexOf(w) !== -1) return;
      var s = stem(w);
      if (!seen[s]) { seen[s] = 1; out.push(s); }
    });
    return out;
  }
  function countPhrases(text, list) {
    var lower = ' ' + String(text).toLowerCase() + ' ';
    var hits = [];
    list.forEach(function (p) { if (lower.indexOf(p) !== -1) hits.push(p); });
    return hits;
  }

  /* Split a model answer into marking points. Model answers in this site mark
     each creditable point with "(1)" or "(2)"; where they do not (the levels-
     based extended answers) we fall back to sentences as indicative content. */
  function derivePoints(modelAnswer) {
    var a = String(modelAnswer);
    if (/\(\d\)/.test(a)) {
      var parts = a.split(/\((\d)\)/);
      var pts = [];
      for (var i = 0; i < parts.length - 1; i += 2) {
        var text = parts[i].replace(/^[\s.;—-]+/, '').trim();
        var worth = parseInt(parts[i + 1], 10) || 1;
        if (text.length > 8) pts.push({ text: text, marks: worth });
      }
      if (pts.length) return pts;
    }
    return a.split(/(?<=\.)\s+(?=[A-Z])/).filter(function (s) { return s.trim().length > 25; })
      .map(function (s) { return { text: s.trim(), marks: 1 }; });
  }

  function isLevelsBased(exam) {
    return exam.marks >= 6 && !/\(\d\)/.test(exam.a);
  }

  /* Match each marking point against the student's answer. */
  function matchPoints(answer, points) {
    var ansStems = {};
    words(answer).forEach(function (w) { ansStems[stem(w)] = 1; });

    return points.map(function (p) {
      var keys = contentWords(p.text);
      if (!keys.length) return { point: p, hit: 'unknown', ratio: 0, missing: [] };
      var found = 0, missing = [];
      keys.forEach(function (k) { if (ansStems[k]) found++; else missing.push(k); });
      var ratio = found / keys.length;
      var hit = ratio >= 0.34 ? 'likely' : ratio >= 0.17 ? 'partial' : 'missing';
      return { point: p, hit: hit, ratio: ratio, missing: missing.slice(0, 6) };
    });
  }

  /* Words from the question stem that represent the scenario. Used to check
     contextualisation, which is the single biggest differentiator between a
     Level 1 and a Level 3 answer. */
  function scenarioTerms(question) {
    return contentWords(question).filter(function (w) {
      return ['expla', 'descr', 'evalu', 'discu', 'ident', 'state', 'justi', 'analy', 'compa',
        'marks', 'quest', 'answe', 'given', 'follo', 'shoul', 'would', 'could'].indexOf(w) === -1;
    }).slice(0, 12);
  }

  function analyse(answer, exam) {
    var wordCount = words(answer).length;
    var levels = isLevelsBased(exam);
    var expected = levels ? exam.marks * 28 : exam.marks * 16;

    var scen = scenarioTerms(exam.q);
    var ansStems = {};
    words(answer).forEach(function (w) { ansStems[stem(w)] = 1; });
    var scenHits = scen.filter(function (s) { return ansStems[s]; });

    var connectives = countPhrases(answer, CONNECTIVES);
    var conclusion = countPhrases(answer, CONCLUSION);
    var develops = countPhrases(answer, DEVELOP);
    var pos = countPhrases(answer, POSITIVE);
    var neg = countPhrases(answer, NEGATIVE);

    var checks = [];
    checks.push({
      k: 'Length', ok: wordCount >= expected * 0.6,
      msg: wordCount >= expected * 0.6
        ? wordCount + ' words — a reasonable length for ' + exam.marks + ' marks.'
        : 'Only ' + wordCount + ' words. For ' + exam.marks + ' marks aim for roughly ' + expected +
          '. Short answers are the most common reason marks are left on the table.'
    });
    checks.push({
      k: 'Contextualisation', ok: scenHits.length >= Math.min(3, scen.length),
      msg: scenHits.length >= Math.min(3, scen.length)
        ? 'You referred to the scenario (' + scenHits.slice(0, 5).join(', ') + ').'
        : 'Weak link to the scenario. An extended answer that never names the organisation or system in the question is capped at Level 1. Try to work in: ' + scen.slice(0, 5).join(', ') + '.'
    });
    checks.push({
      k: 'Developed points', ok: develops.length >= 2,
      msg: develops.length >= 2
        ? 'Good — you used linking language (' + develops.slice(0, 3).join(', ') + ') so points are being developed.'
        : 'Few developed explanations. Use "because", "which means", "so that" to force the second and third mark out of each point — the examiner\'s most common criticism is answers that stop one step early.'
    });

    if (levels) {
      checks.push({
        k: 'Balance', ok: connectives.length >= 1 && pos.length >= 1 && neg.length >= 1,
        msg: (connectives.length >= 1 && pos.length >= 1 && neg.length >= 1)
          ? 'Both sides are present, which you need for Level 2 and above.'
          : 'This looks one-sided. Skewing wholly towards advantages or wholly towards drawbacks caps you at Level 1 or 2. Add a "however…" paragraph.'
      });
      checks.push({
        k: 'Conclusion', ok: conclusion.length >= 1,
        msg: conclusion.length >= 1
          ? 'A conclusion is present (' + conclusion[0] + ').'
          : 'No conclusion detected. An extended response without a supported conclusion cannot reach Level 3. End with "Overall…" and a recommendation that follows from your points.'
      });
    }

    var passed = checks.filter(function (c) { return c.ok; }).length;
    var estimate = null;
    if (levels) {
      var lvl = passed >= 5 ? 3 : passed >= 3 ? 2 : 1;
      var band = lvl === 3
        ? Math.ceil(exam.marks * 0.75) + '–' + exam.marks
        : lvl === 2
          ? Math.ceil(exam.marks * 0.42) + '–' + Math.floor(exam.marks * 0.7)
          : '1–' + Math.floor(exam.marks * 0.36);
      estimate = { level: lvl, band: band };
    }

    return { wordCount: wordCount, levels: levels, checks: checks, estimate: estimate, passed: passed };
  }

  function tips(analysis, matches) {
    var out = [];
    analysis.checks.forEach(function (c) { if (!c.ok) out.push(c.msg); });
    var missed = (matches || []).filter(function (m) { return m.hit === 'missing'; });
    if (missed.length) {
      out.push('Marking points you do not appear to have covered: ' + missed.length + ' of ' +
        matches.length + '. Read the model answer and note the wording it uses.');
    }
    if (!out.length) out.push('Structurally this is a strong answer. Compare it line by line with the model answer and mark yourself honestly.');
    return out;
  }

  return {
    derivePoints: derivePoints,
    isLevelsBased: isLevelsBased,
    matchPoints: matchPoints,
    analyse: analyse,
    tips: tips
  };
})();
