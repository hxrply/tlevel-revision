/* Self-marking engine.
   This is a static site — there is no AI here. It cannot understand prose.
   What it does do, honestly and deterministically:
     1. splits the model answer into marking points and looks for the key
        terms of each one in your answer, so you can see what you probably hit
     2. runs structural checks that suit the command word: recall questions
        are checked for the number of items asked for, explanations for
        development, extended answers for balance and a conclusion
     3. makes YOU confirm the final mark, which is the bit that actually
        teaches you the mark scheme
   Treat the automatic part as a prompt for self-marking, not as an examiner.

   Matching rules (each one fixes a way the first version went wrong):
     * acronyms count — RAM, ROM, SSD, CPU, GPU, IDE, LAN, VPN, SQL, API, OS…
       The first version dropped every word under four letters.
     * words are compared by a light stemmer plus a close-prefix rule, never by
       a bare five-letter prefix — that treated internet, interrupt and
       interpreter as the same word.
     * "read only" matches "read-only", "non volatile" matches "non-volatile".
     * a term preceded by not / no / never / cannot does not count as a hit.
     * words that appear in almost every answer (data, system, user…) are
       ignored, so they cannot inflate a match. */

window.TLMARK = (function () {
  'use strict';

  var STOP = ('a an and are as at be been being but by can could for from had has have he her his ' +
    'how i if in into is it its may might more most must no not of on or other our out over own she ' +
    'should so some such than that the their them then there these they this those to too up use used ' +
    'using was we were what when where which while who will with would you your also each any all ' +
    'both very much many one two three four five first second third does do done get gets got make makes ' +
    'made like just only well way ways able need needs etc example eg such called known').split(' ');

  /* In this subject these appear in nearly every answer, so they say nothing
     about whether a particular marking point was hit. */
  var GENERIC = ('data system systems user users information computer computers program programs ' +
    'organisation organisations business company software hardware device devices process processes ' +
    'provide provides allow allows allowed thing things people time used means mean because').split(' ');

  var NEGATORS = ['not', 'no', 'never', 'cannot', 'cant', 'isnt', 'doesnt', 'dont', 'without', 'wont', 'neither', 'nor'];

  /* Small synonym groups: every word maps to the group's first word. */
  var SYN = {};
  [['fast', 'quick', 'rapid', 'speedy'], ['cheap', 'inexpensive', 'affordable', 'lowcost'],
   ['expensive', 'costly', 'dear', 'pricey'], ['store', 'save', 'hold', 'keep'],
   ['remove', 'delete', 'erase'], ['error', 'bug', 'fault', 'mistake', 'defect'],
   ['permanent', 'persistent'], ['increase', 'raise', 'boost'],
   ['reduce', 'lower', 'decrease'], ['translate', 'convert'], ['whole', 'entire']
  ].forEach(function (g) { g.forEach(function (w) { SYN[w] = g[0]; }); });

  var CONNECTIVES = ['however', 'whereas', 'although', 'in contrast', 'on the other hand', 'conversely',
    'despite', 'nevertheless', 'alternatively', 'by comparison', 'while'];
  var CONCLUSION = ['overall', 'in conclusion', 'on balance', 'therefore', 'to conclude', 'i would recommend',
    'the best option', 'most appropriate', 'most suitable', 'in summary'];
  var DEVELOP = ['because', 'which means', 'so that', 'this means', 'resulting in', 'leading to',
    'this leads to', 'as a result', 'therefore', 'which allows', 'so the', 'meaning that', 'so it', 'so they', 'so you'];
  var POSITIVE = ['benefit', 'advantage', 'improves', 'improve', 'allows', 'faster', 'cheaper', 'reduces',
    'increases', 'saves', 'efficient', 'strength'];
  var NEGATIVE = ['drawback', 'disadvantage', 'risk', 'however', 'cost', 'limitation', 'weakness', 'slower',
    'expensive', 'problem', 'downside', 'fails'];

  var RECALL = ['state', 'identify', 'give', 'name', 'list', 'define', 'what', 'which', 'outline'];
  var NUMBERS = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10 };

  /* ── Text handling ─────────────────────────────────────────────── */
  function normalise(text) {
    return String(text).toLowerCase()
      .replace(/[‘’`]/g, "'")
      .replace(/\bnon[\s-]+/g, 'non')            /* non volatile, non-volatile → nonvolatile */
      .replace(/([a-z0-9])-([a-z0-9])/g, '$1$2')  /* read-only → readonly */
      .replace(/'/g, '')                         /* doesn't → doesnt */
      .replace(/[^a-z0-9\s]/g, ' ');
  }
  function tokens(text) { return normalise(text).split(/\s+/).filter(Boolean); }

  function canon(w) {
    if (SYN[w]) return SYN[w];
    var suffixes = ['ings', 'ing', 'edly', 'ed', 'ers', 'er', 'est', 'ies', 'es', 's', 'ly'];
    for (var i = 0; i < suffixes.length; i++) {
      var s = suffixes[i];
      if (w.length - s.length >= 4 && w.slice(-s.length) === s) {
        w = w.slice(0, -s.length) + (s === 'ies' ? 'y' : '');
        break;
      }
    }
    return SYN[w] || w;
  }
  function sameWord(a, b) {
    if (a === b) return true;
    var short = a.length <= b.length ? a : b, long = short === a ? b : a;
    /* "cache" / "caches", "compile" / "compiler": a near-complete prefix only */
    return short.length >= 4 && long.indexOf(short) === 0 && long.length - short.length <= 2;
  }

  /* Acronyms written in capitals in the model answer are always key terms. */
  function acronymsIn(text) {
    var out = {};
    (String(text).match(/\b[A-Z][A-Z0-9]{1,5}s?\b/g) || []).forEach(function (a) {
      out[a.toLowerCase().replace(/s$/, '')] = 1;
    });
    return out;
  }

  function keyTerms(pointText) {
    var acr = acronymsIn(pointText), seen = {}, out = [];
    tokens(pointText).forEach(function (w) {
      var bare = w.replace(/s$/, '');
      var isAcr = !!acr[bare] || !!acr[w];
      if (!isAcr && (w.length < 4 || STOP.indexOf(w) !== -1 || GENERIC.indexOf(w) !== -1)) return;
      var c = isAcr ? bare : canon(w);
      if (!isAcr && GENERIC.indexOf(c) !== -1) return;
      if (!seen[c]) { seen[c] = 1; out.push({ c: c, word: w }); }
    });
    return out;
  }

  /* The answer's words, plus adjacent pairs joined ("read only" → "readonly"),
     each remembering whether it was negated. */
  function answerIndex(answer) {
    var t = tokens(answer), idx = [];
    function negatedAt(i) {
      for (var k = Math.max(0, i - 2); k < i; k++) if (NEGATORS.indexOf(t[k]) !== -1) return true;
      return false;
    }
    t.forEach(function (w, i) {
      var neg = negatedAt(i);
      idx.push({ c: canon(w), raw: w, neg: neg });
      if (i + 1 < t.length) idx.push({ c: canon(w + t[i + 1]), raw: w + t[i + 1], neg: neg });
    });
    return idx;
  }
  function found(key, idx) {
    for (var i = 0; i < idx.length; i++) {
      var e = idx[i];
      if (!e.neg && (sameWord(key.c, e.c) || sameWord(key.c, e.raw))) return true;
    }
    return false;
  }

  /* ── Marking points ────────────────────────────────────────────── */
  /* Model answers mark each creditable point with "(1)" or "(2)"; where they
     do not (levels-based extended answers) sentences are used as indicative
     content. */
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

  /* Terms copied from the question ("RAM", "ROM" in "differences between RAM
     and ROM") appear in every answer, right or wrong, so they are not evidence. */
  function matchPoints(answer, points, question) {
    var idx = answerIndex(answer);
    var inQuestion = {};
    if (question) keyTerms(question).forEach(function (k) { inQuestion[k.c] = 1; });
    return points.map(function (p) {
      var all = keyTerms(p.text);
      var keys = all.filter(function (k) { return !inQuestion[k.c]; });
      if (!keys.length) keys = all;
      if (!keys.length) return { point: p, hit: 'unknown', ratio: 0, missing: [] };
      var hits = 0, missing = [];
      keys.forEach(function (k) { if (found(k, idx)) hits++; else missing.push(k.word); });
      /* A long marking point is usually paraphrased: four or five of its key
         terms is a strong signal, so the bar is capped rather than a fixed share. */
      var need = Math.min(keys.length, Math.max(keys.length <= 2 ? 1 : 2, Math.min(5, Math.ceil(keys.length * 0.4))));
      var hit = hits >= need ? 'likely' : hits >= Math.max(1, Math.ceil(need / 2)) ? 'partial' : 'missing';
      return { point: p, hit: hit, ratio: hits / keys.length, missing: missing.slice(0, 6) };
    });
  }

  /* ── Structural checks, chosen by command word ─────────────────── */
  function commandOf(question) {
    var first = tokens(question)[0] || '';
    return RECALL.indexOf(first) !== -1 ? 'recall' : first;
  }
  function itemsAskedFor(question) {
    var m = normalise(question).match(/\b(one|two|three|four|five|six|seven|eight|nine|ten)\b/);
    return m ? NUMBERS[m[1]] : 0;
  }
  function itemsGiven(answer) {
    return String(answer).split(/[\n;,•]|\.\s|\band\b/).filter(function (s) { return s.trim().length > 1; }).length;
  }
  function scenarioTerms(question) {
    return keyTerms(question).map(function (k) { return k.c; }).filter(function (w) {
      return ['explain', 'describe', 'evaluate', 'discus', 'discuss', 'identify', 'state', 'justify', 'analyse',
        'compare', 'mark', 'question', 'answer', 'give', 'follow', 'should', 'would', 'could', 'difference', 'between'].indexOf(w) === -1;
    }).slice(0, 12);
  }
  function countPhrases(text, list) {
    var lower = ' ' + String(text).toLowerCase() + ' ';
    return list.filter(function (p) { return lower.indexOf(p) !== -1; });
  }

  function analyse(answer, exam) {
    var wordCount = tokens(answer).length;
    var levels = isLevelsBased(exam);
    var cmd = commandOf(exam.q);
    var checks = [];

    if (cmd === 'recall' && !levels) {
      /* State / identify / give: the marks are for the items, not the prose. */
      var asked = itemsAskedFor(exam.q), given = itemsGiven(answer);
      if (asked) {
        checks.push({
          k: 'Items', ok: given >= asked,
          msg: given >= asked
            ? 'You gave ' + given + ' item' + (given === 1 ? '' : 's') + ' — the question asks for ' + asked + '.'
            : 'The question asks for ' + asked + ' and this reads as ' + given + '. A State question gives a mark per correct item, so a missing item is a missing mark.'
        });
      }
    } else {
      var expected = levels ? exam.marks * 28 : exam.marks * 12;
      var develops = countPhrases(answer, DEVELOP);
      checks.push({
        k: 'Length', ok: wordCount >= expected * 0.5,
        msg: wordCount >= expected * 0.5
          ? wordCount + ' words — a reasonable length for ' + exam.marks + ' marks.'
          : 'Only ' + wordCount + ' words. For ' + exam.marks + ' marks aim for roughly ' + expected + '.'
      });
      var needDev = levels ? 2 : Math.max(1, Math.floor(exam.marks / 2));
      checks.push({
        k: 'Developed points', ok: develops.length >= needDev,
        msg: develops.length >= needDev
          ? 'Good — linking language (' + develops.slice(0, 3).join(', ') + ') develops your points.'
          : 'Each point needs its "so what". Use "because", "which means" or "so that" to earn the second mark of each point.'
      });
      var scen = scenarioTerms(exam.q);
      /* only questions that describe an organisation or situation have a scenario to apply */
      var hasScenario = /^(a|an)\s/i.test(exam.q.trim()) ||
        /(company|business|college|school|hospital|retailer|organisation|charity|council|shop|firm|manufacturer|bank|surgery|clinic|centre)/i.test(exam.q);
      if (levels || (exam.marks >= 4 && hasScenario && scen.length >= 3)) {
        var idx = answerIndex(answer);
        var scenHits = scen.filter(function (s) { return found({ c: s }, idx); });
        var enough = scenHits.length >= Math.min(3, scen.length);
        checks.push({
          k: 'Contextualisation', ok: enough,
          msg: enough
            ? 'You referred to the scenario (' + scenHits.slice(0, 5).join(', ') + ').'
            : 'Weak link to the scenario in the question. Name the organisation or system and apply each point to it.'
        });
      }
      if (levels) {
        var connectives = countPhrases(answer, CONNECTIVES), pos = countPhrases(answer, POSITIVE), neg = countPhrases(answer, NEGATIVE);
        var balanced = connectives.length >= 1 && pos.length >= 1 && neg.length >= 1;
        checks.push({ k: 'Balance', ok: balanced,
          msg: balanced ? 'Both sides are present, which you need for Level 2 and above.'
                        : 'This looks one-sided. An answer with only advantages or only drawbacks is capped low. Add a "however…" paragraph.' });
        var conclusion = countPhrases(answer, CONCLUSION);
        checks.push({ k: 'Conclusion', ok: conclusion.length >= 1,
          msg: conclusion.length >= 1 ? 'A conclusion is present (' + conclusion[0] + ').'
                                      : 'No conclusion detected. End with "On balance… because… provided that…".' });
      }
    }

    var passed = checks.filter(function (c) { return c.ok; }).length;
    var estimate = null;
    if (levels) {
      var lvl = passed >= 5 ? 3 : passed >= 3 ? 2 : 1;
      var band = lvl === 3 ? Math.ceil(exam.marks * 0.75) + '–' + exam.marks
        : lvl === 2 ? Math.ceil(exam.marks * 0.42) + '–' + Math.floor(exam.marks * 0.7)
        : '1–' + Math.floor(exam.marks * 0.36);
      estimate = { level: lvl, band: band };
    }
    return { wordCount: wordCount, levels: levels, command: cmd, checks: checks, estimate: estimate, passed: passed };
  }

  function tips(analysis, matches) {
    var out = [];
    analysis.checks.forEach(function (c) { if (!c.ok) out.push(c.msg); });
    var missed = (matches || []).filter(function (m) { return m.hit === 'missing'; });
    if (missed.length) {
      out.push('Marking points not found in your answer: ' + missed.length + ' of ' + matches.length +
        '. Check them against the model answer — the matcher looks for key terms, so a correct idea in very different words can be missed.');
    }
    if (analysis.command === 'recall') {
      out.push('For a State question the exact term is the mark. Use the word the specification uses.');
    }
    if (!out.length) out.push('This covers the marking points the matcher can see. Compare it line by line with the model answer and mark yourself honestly.');
    return out;
  }

  return { derivePoints: derivePoints, isLevelsBased: isLevelsBased, matchPoints: matchPoints, analyse: analyse, tips: tips };
})();
