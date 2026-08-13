/* T Level Digital revision app.
   No build step, no network, no dependencies — everything is stored in
   localStorage on this device only. */

(function () {
  'use strict';

  var D = window.TLDATA;
  var AREAS = D.paper1.concat(D.paper2);
  var KEY = 'tl-rev-v1';

  /* ── State ─────────────────────────────────────────────────────── */
  var state = load();

  function load() {
    var base = { conf: {}, chk: {}, box: {}, quiz: { asked: 0, right: 0, byArea: {} }, exams: {}, theme: 'dark', papers: [] };
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return base;
      var saved = JSON.parse(raw);
      for (var k in base) if (!(k in saved)) saved[k] = base[k];
      if (!saved.quiz.byArea) saved.quiz.byArea = {};
      return saved;
    } catch (e) { return base; }
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  }

  /* ── Helpers ───────────────────────────────────────────────────── */
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function allTopics() {
    var out = [];
    AREAS.forEach(function (a) { a.topics.forEach(function (t) { out.push({ area: a, topic: t }); }); });
    return out;
  }
  function confOf(id) { return state.conf[id] || 0; }
  function areaProgress(area) {
    var total = area.topics.length * 3, got = 0;
    area.topics.forEach(function (t) { got += confOf(t.id); });
    return total ? Math.round(got / total * 100) : 0;
  }
  function overallProgress() {
    var t = allTopics(), total = t.length * 3, got = 0;
    t.forEach(function (x) { got += confOf(x.topic.id); });
    return total ? Math.round(got / total * 100) : 0;
  }
  function daysUntil(d) {
    if (!d) return null;
    var then = new Date(d + 'T09:00:00');
    if (isNaN(then)) return null;
    return Math.ceil((then - new Date()) / 86400000);
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }
  function bar(pct) {
    return '<div class="bar"><i style="width:' + pct + '%"></i></div><div class="pct">' + pct + '%</div>';
  }
  function listOf(items, cls) {
    return '<ul class="tight ' + (cls || '') + '">' +
      items.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul>';
  }

  /* ── Navigation ────────────────────────────────────────────────── */
  var NAV = [
    { g: 'Overview' },
    { id: 'dash', ico: '◈', label: 'Dashboard' },
    { g: 'Core exams' },
    { id: 'p1', ico: '①', label: 'Paper 1' },
    { id: 'p2', ico: '②', label: 'Paper 2' },
    { g: 'Projects' },
    { id: 'esp', ico: '▤', label: 'Employer Set Project' },
    { id: 'os', ico: '◆', label: 'Occupational Specialism' },
    { g: 'Practice' },
    { id: 'quiz', ico: '✓', label: 'Quiz' },
    { id: 'cards', ico: '⧉', label: 'Flashcards' },
    { id: 'papers', ico: '⎘', label: 'My past papers' },
    { id: 'python', ico: '{}', label: 'Python & algorithms' },
    { id: 'technique', ico: '✎', label: 'Exam technique' }
  ];

  function renderNav() {
    var cur = currentView();
    $('#nav').innerHTML = NAV.map(function (n) {
      if (n.g) return '<div class="nav-group-label">' + n.g + '</div>';
      var badge = '';
      if (n.id === 'p1') badge = '<span class="badge">' + areaAvg(D.paper1) + '%</span>';
      if (n.id === 'p2') badge = '<span class="badge">' + areaAvg(D.paper2) + '%</span>';
      return '<button class="nav-btn' + (cur === n.id ? ' active' : '') + '" data-go="' + n.id + '">' +
        '<span class="ico">' + n.ico + '</span> ' + n.label + badge + '</button>';
    }).join('');
  }
  function areaAvg(areas) {
    var total = 0, got = 0;
    areas.forEach(function (a) {
      a.topics.forEach(function (t) { total += 3; got += confOf(t.id); });
    });
    return total ? Math.round(got / total * 100) : 0;
  }
  function currentView() { return (location.hash || '#dash').slice(1).split('/')[0]; }
  function go(id) { location.hash = '#' + id; }

  /* ── Views ─────────────────────────────────────────────────────── */
  var views = {};

  /* Dashboard */
  views.dash = function () {
    var weak = allTopics()
      .filter(function (x) { return confOf(x.topic.id) < 3; })
      .sort(function (a, b) { return confOf(a.topic.id) - confOf(b.topic.id); })
      .slice(0, 6);

    var d1 = daysUntil(state.exams.p1), d2 = daysUntil(state.exams.p2), de = daysUntil(state.exams.esp);
    var acc = state.quiz.asked ? Math.round(state.quiz.right / state.quiz.asked * 100) : 0;

    var h = '<h1>Revision dashboard</h1>' +
      '<p class="lede">Everything for the Pearson T Level Digital core and specialism: eight content areas across two papers, the five Employer Set Project tasks, and the Occupational Specialism project. Rate each topic red / amber / green as you revise and this page tracks what is left.</p>';

    h += '<div class="grid four" style="margin-bottom:18px">' +
      statCard(overallProgress() + '%', 'Syllabus confident') +
      statCard(allTopics().filter(function (x) { return confOf(x.topic.id) === 3; }).length + '/' + allTopics().length, 'Topics green') +
      statCard(state.quiz.asked ? acc + '%' : '—', 'Quiz accuracy') +
      statCard(D.quiz.length, 'Questions available') +
      '</div>';

    h += '<div class="grid two">';

    /* countdown panel */
    h += '<section class="panel"><h3>Exam countdown</h3>' +
      '<div class="grid three" style="margin:10px 0 14px">' +
      cdBlock('Paper 1', d1) + cdBlock('Paper 2', d2) + cdBlock('ESP', de) +
      '</div>' +
      '<div class="grid three">' +
      dateField('p1', 'Paper 1 date') + dateField('p2', 'Paper 2 date') + dateField('esp', 'ESP start') +
      '</div>' +
      '<p class="small muted" style="margin-bottom:0">Core exams normally sit in the June or November series; your centre will confirm dates.</p>' +
      '</section>';

    /* next up */
    h += '<section class="panel"><h3>Next up</h3>' +
      (weak.length
        ? '<p class="small muted">Your weakest topics, lowest confidence first.</p>' +
          weak.map(function (x) {
            return '<div class="progress-row"><div class="name"><span class="pill p' + x.area.paper + '">P' + x.area.paper + '</span> ' +
              '<b>' + esc(x.topic.id + ' ' + x.topic.title) + '</b><br><span class="small muted">' + esc(x.area.title) + '</span></div>' +
              '<button class="btn btn-sm" data-open="' + x.area.id + '/' + x.topic.id + '">Revise</button></div>';
          }).join('')
        : '<p class="muted">Every topic is marked green. Move on to timed quizzes and past ESP tasks.</p>') +
      '</section>';

    h += '</div>';

    /* progress by area */
    h += '<h2>Progress by content area</h2><section class="panel">';
    [1, 2].forEach(function (p) {
      h += '<div class="sub-h">Paper ' + p + '</div>';
      AREAS.filter(function (a) { return a.paper === p; }).forEach(function (a) {
        var pct = areaProgress(a);
        h += '<div class="progress-row"><div class="name"><b>' + a.num + '. ' + esc(a.title) + '</b> ' +
          '<span class="small muted">· ' + a.topics.length + ' topics</span></div>' + bar(pct) +
          '<button class="btn btn-sm" data-go="p' + p + '">Open</button></div>';
      });
    });
    h += '</section>';

    if (state.papers.length) {
      h += '<h2>Past paper marks</h2><section class="panel">';
      state.papers.forEach(function (p) {
        var s = paperScore(p);
        h += '<div class="progress-row"><div class="name"><b>' + esc(p.title) + '</b> ' +
          '<span class="small muted">· ' + esc(compName(p.comp)) + ' · ' + s.got + '/' + s.avail + ' marks</span></div>' +
          bar(s.pct) + '<button class="btn btn-sm" data-go="papers">Open</button></div>';
      });
      h += '</section>';
    }

    h += '<h2>How the qualification is assessed</h2><section class="panel"><div class="grid two">' +
      D.technique.papers.map(function (p) {
        return '<div><b>' + esc(p.name) + '</b><br><span class="small muted">' + esc(p.detail) + '</span></div>';
      }).join('') + '</div>' +
      '<p class="small muted" style="margin:14px 0 0">The core grade is Paper 1 (30%) + Paper 2 (30%) + Employer Set Project (40%), graded A*–E. The Occupational Specialism is graded Pass / Merit / Distinction. Both combine into the overall T Level grade.</p>' +
      '</section>';

    return h;
  };
  function statCard(num, lbl) {
    return '<div class="panel stat"><div class="num">' + esc(num) + '</div><div class="lbl">' + esc(lbl) + '</div></div>';
  }
  function cdBlock(name, d) {
    var txt = d === null ? '—' : (d > 0 ? d : (d === 0 ? 'today' : 'past'));
    var cls = d !== null && d <= 14 && d >= 0 ? 'style="color:var(--amber)"' : '';
    return '<div><div class="days" ' + cls + '>' + txt + '</div><div class="small muted">' +
      esc(name) + (d > 0 ? ' — days to go' : '') + '</div></div>';
  }
  function dateField(k, label) {
    return '<label class="field">' + esc(label) +
      '<input type="date" data-exam="' + k + '" value="' + (state.exams[k] || '') + '"></label>';
  }

  /* Paper views */
  views.p1 = function () { return paperView(1); };
  views.p2 = function () { return paperView(2); };

  function paperView(p) {
    var areas = AREAS.filter(function (a) { return a.paper === p; });
    var intro = p === 1
      ? 'Paper 1 covers content areas 1–4: problem solving, programming, emerging issues, and legislation. 2 hours 15 minutes, 90 marks, 30% of the core. Sections A and B, both ramping up in difficulty.'
      : 'Paper 2 covers content areas 5–8: business context, data, digital environments, and security. 2 hours 15 minutes, 90 marks, 30% of the core. Sections A and B, both ramping up in difficulty.';

    var h = '<h1>Core Paper ' + p + '</h1><p class="lede">' + intro + '</p>';
    h += '<div class="btn-row" style="margin-bottom:16px">' +
      '<button class="btn btn-sm" id="expandAll">Expand all</button>' +
      '<button class="btn btn-sm" id="collapseAll">Collapse all</button>' +
      '<span class="small muted">Rate each topic: <span style="color:var(--red)">R</span> not secure · ' +
      '<span style="color:var(--amber)">A</span> getting there · <span style="color:var(--green)">G</span> confident</span></div>';

    areas.forEach(function (a) {
      h += '<section class="panel area-card" id="area-' + a.id + '" data-area="' + a.id + '">' +
        '<div class="area-head"><div class="n">' + a.num + '</div>' +
        '<div><h3>' + esc(a.title) + '</h3><div class="small muted">' + esc(a.blurb) + '</div></div>' +
        '<div class="chev">›</div></div>' +
        '<div class="area-body">' + areaProgressLine(a) +
        a.topics.map(topicHTML).join('') + '</div></section>';
    });
    return h;
  }
  function areaProgressLine(a) {
    return '<div class="progress-row" style="margin-bottom:14px"><div class="name small muted">Confidence across this area</div>' + bar(areaProgress(a)) + '</div>';
  }
  function topicHTML(t) {
    var c = confOf(t.id);
    var h = '<div class="topic" id="topic-' + t.id.replace('.', '-') + '" data-topic="' + t.id + '">' +
      '<div class="topic-head"><span class="tid">' + t.id + '</span>' +
      '<span class="ttitle">' + esc(t.title) + '</span>' +
      '<span class="conf" data-conf="' + t.id + '">' +
      [1, 2, 3].map(function (v) {
        return '<button data-v="' + v + '" class="' + (c === v ? 'on' : '') + '" title="' +
          (v === 1 ? 'Not secure' : v === 2 ? 'Getting there' : 'Confident') + '">' +
          (v === 1 ? 'R' : v === 2 ? 'A' : 'G') + '</button>';
      }).join('') + '</span></div>';

    h += '<div class="topic-body">';
    h += '<div class="sub-h">What you must know</div>' + listOf(t.must);

    if (t.terms && t.terms.length) {
      h += '<div class="sub-h">Key terms</div>';
      h += t.terms.map(function (x) {
        return '<div class="term"><b>' + esc(x.t) + '</b><span>' + esc(x.d) + '</span></div>';
      }).join('');
    }
    if (t.exam && t.exam.length) {
      h += '<div class="sub-h">Exam-style questions</div>';
      h += t.exam.map(function (q) {
        return '<div class="qbox"><div class="qq">[' + q.marks + ' marks] ' + esc(q.q) +
          ' <button class="btn btn-sm" data-reveal="1">Model answer</button></div>' +
          '<div class="qa">' + esc(q.a) + '</div></div>';
      }).join('');
    }
    h += '</div></div>';
    return h;
  }

  /* ESP */
  views.esp = function () {
    var e = D.esp;
    var h = '<h1>Employer Set Project</h1>' +
      '<p class="lede">' + esc(e.overview.duration) + ' · ' + esc(e.overview.marks) + '. Five assessed tasks plus an unassessed pre-release familiarisation task.</p>';

    h += '<section class="panel" style="margin-bottom:14px"><h3>Time and marks per task</h3>' +
      '<table class="mtable"><thead><tr><th>Task</th><th>Time</th><th>Marks</th></tr></thead><tbody>' +
      e.overview.split.map(function (r) {
        return '<tr><td><b>' + esc(r.task) + '</b></td><td class="mono" style="white-space:nowrap">' +
          esc(r.time) + '</td><td class="mono">' + esc(r.marks) + '</td></tr>';
      }).join('') + '</tbody></table>' +
      '<p class="small muted" style="margin:12px 0 0">' + esc(e.overview.splitNote) + '</p></section>';

    h += '<div class="grid two"><section class="panel"><h3>Conditions</h3>' + listOf(e.overview.conditions) +
      '<p class="small muted">' + esc(e.overview.note) + '</p></section>';

    h += '<section class="panel"><h3>Where the marks are</h3>' +
      e.overview.aos.map(function (a) {
        return '<div class="ao-row"><span class="code">' + a.code + '</span>' +
          '<span class="small" style="flex:0 0 150px">' + esc(a.name) + '</span>' +
          '<span class="abar"><i style="width:' + (a.pct / 41 * 100) + '%"></i></span>' +
          '<span class="apct">' + a.pct + '%</span></div>';
      }).join('') +
      '<p class="small muted" style="margin-bottom:0">' + esc(e.overview.aoNote) + '</p></section></div>';

    h += '<h2>The tasks</h2>';
    e.tasks.forEach(function (t) {
      h += '<section class="panel task-card">' +
        '<div class="task-head"><span class="code">' + esc(t.code) + '</span><h3 style="margin:0">' + esc(t.title) + '</h3>' +
        (t.assessed === false ? '<span class="pill warn">not assessed</span>' : '<span class="pill ok">assessed</span>') +
        '</div>' +
        '<p class="small muted">' + esc(t.time) + '</p>' +
        '<p><b>You are given:</b> ' + esc(t.given) + '<br><b>You produce:</b> ' + esc(t.produce) + '</p>';

      if (t.steps) h += '<div class="sub-h">How to use it</div>' + listOf(t.steps);
      if (t.sections) {
        t.sections.forEach(function (s) {
          h += '<div class="sub-h">' + esc(s.h) + '</div>' + listOf(s.points);
        });
      }
      if (t.defects) h += '<div class="sub-h">Defects to look for</div>' + listOf(t.defects);
      if (t.strategy) h += '<div class="sub-h">Working strategy</div>' + listOf(t.strategy);
      if (t.language) h += '<div class="sub-h">Language to use</div>' + listOf(t.language);
      if (t.checklist) {
        h += '<div class="sub-h">Checklist</div><ul class="chk">' +
          t.checklist.map(function (c, i) {
            var k = 'esp-' + t.id + '-' + i;
            return '<li class="' + (state.chk[k] ? 'done' : '') + '"><input type="checkbox" data-chk="' + k + '"' +
              (state.chk[k] ? ' checked' : '') + '><span>' + esc(c) + '</span></li>';
          }).join('') + '</ul>';
      }
      if (t.mistakes) h += '<div class="sub-h">What loses marks</div>' + listOf(t.mistakes, 'warn-list');
      h += '</section>';
    });

    h += '<section class="panel"><h3>' + esc(e.timing.title) + '</h3>' + listOf(e.timing.points) + '</section>';
    return h;
  };

  /* Occupational Specialism */
  views.os = function () {
    var o = D.os;
    var h = '<h1>Occupational Specialism</h1>' +
      '<p class="lede">' + esc(o.overview.name) + ' — ' + esc(o.overview.duration) + ' · ' + esc(o.overview.marks) + '.</p>';

    h += '<div class="grid two"><section class="panel"><h3>How it works</h3>' + listOf(o.overview.conditions) +
      '<div class="sub-h">Generative AI</div><p class="small">' + esc(o.overview.aiNote) + '</p></section>';

    h += '<section class="panel"><h3>Performance outcomes</h3>' +
      o.overview.pos.map(function (p) {
        return '<div class="ao-row"><span class="code">' + p.code + '</span>' +
          '<span class="small" style="flex:1">' + esc(p.name) + '</span>' +
          '<span class="abar" style="flex:0 0 70px"><i style="width:' + (p.pct / 39.6 * 100) + '%"></i></span>' +
          '<span class="apct">' + p.pct + '%</span></div>';
      }).join('') +
      '<p class="small muted" style="margin-bottom:0">' + esc(o.overview.dpddNote) + '</p></section></div>';

    h += '<h2>The four tasks</h2>';
    o.tasks.forEach(function (t) {
      h += '<section class="panel task-card"><div class="task-head"><span class="code">' + esc(t.code) + '</span>' +
        '<h3 style="margin:0">' + esc(t.title) + '</h3></div>' +
        '<p><b>You produce:</b> ' + esc(t.produce) + '</p>' + listOf(t.points) +
        '<div class="sub-h">Checklist</div><ul class="chk">' +
        t.checklist.map(function (c, i) {
          var k = 'os-' + t.id + '-' + i;
          return '<li class="' + (state.chk[k] ? 'done' : '') + '"><input type="checkbox" data-chk="' + k + '"' +
            (state.chk[k] ? ' checked' : '') + '><span>' + esc(c) + '</span></li>';
        }).join('') + '</ul></section>';
    });

    h += '<h2>Specialism content areas</h2>';
    o.areas.forEach(function (a) {
      h += '<section class="panel area-card" data-area="' + a.id + '">' +
        '<div class="area-head"><div class="n">' + a.num + '</div><div><h3>' + esc(a.title) + '</h3></div><div class="chev">›</div></div>' +
        '<div class="area-body">' + listOf(a.points) + '</div></section>';
    });
    return h;
  };

  /* Python */
  views.python = function () {
    var p = D.python;
    var h = '<h1>Python &amp; algorithms</h1><p class="lede">' + esc(p.note) + '</p>';

    h += '<h2>Commands you are expected to know</h2><div class="grid two">' +
      p.groups.map(function (g) {
        return '<section class="panel"><h3>' + esc(g.h) + '</h3><p class="mono small" style="margin:0">' +
          g.items.map(esc).join(' · ') + '</p></section>';
      }).join('') + '</div>';

    h += '<h2>Flowchart symbols</h2><section class="panel">' +
      p.flowchart.map(function (f) {
        return '<div class="term"><b>' + esc(f.sym) + '</b><span>' + esc(f.use) + '</span></div>';
      }).join('') + '</section>';

    h += '<h2>Code patterns worth memorising</h2>';
    p.patterns.forEach(function (c) {
      h += '<section class="panel" style="margin-bottom:12px"><h3>' + esc(c.h) + '</h3><pre>' + esc(c.code) + '</pre></section>';
    });

    h += '<h2>Trace and debug practice</h2>';
    p.traces.forEach(function (t, i) {
      h += '<section class="panel qbox" style="margin-bottom:12px;border-left-width:3px">' +
        '<div class="qq">' + esc(t.q) + '</div><pre>' + esc(t.code) + '</pre>' +
        '<button class="btn btn-sm" data-reveal="1">Show answer</button>' +
        '<div class="qa">' + esc(t.a) + '</div></section>';
    });
    return h;
  };

  /* Exam technique */
  views.technique = function () {
    var t = D.technique;
    var h = '<h1>Exam technique</h1><p class="lede">The content gets you the marks you can reach; technique gets you the ones you nearly missed. Everything here comes from the real sample papers, mark schemes and examiner reports.</p>';

    /* paper shape */
    h += '<h2>What the papers actually look like</h2><section class="panel">' +
      '<p class="small muted">' + esc(t.shape.note) + '</p>' +
      t.shape.rows.map(function (r) {
        return '<div class="term"><b>' + esc(r.s) + '</b><span>' + esc(r.d) + '</span></div>';
      }).join('') +
      '<p class="small" style="margin:14px 0 0;color:var(--amber)">' + esc(t.shape.takeaway) + '</p></section>';

    h += '<div class="grid two" style="margin-top:14px">' +
      '<section class="panel"><h3>Timing</h3>' + listOf(t.timing) + '</section>' +
      '<section class="panel"><h3>Assessment objectives</h3>' +
      t.aos.map(function (a) {
        return '<div style="margin-bottom:10px"><b class="mono">' + esc(a.code) + '</b> — <b>' + esc(a.name) + '</b>' +
          '<div class="small muted">' + esc(a.how) + '</div></div>';
      }).join('') + '</section></div>';

    /* where marks are actually lost */
    h += '<h2>Where marks are actually lost</h2><section class="panel">' +
      '<p class="small muted">' + esc(t.examiner.note) + '</p>' +
      '<p><b>' + esc(t.examiner.headline) + '</b></p>' +
      '<table class="mtable"><thead><tr><th>Question</th><th>Cohort mean</th><th>Why</th></tr></thead><tbody>' +
      t.examiner.rows.map(function (r) {
        var num = parseFloat(r.mean);
        var den = parseFloat(r.mean.split('/')[1]);
        var pct = den ? num / den : 0;
        var col = pct < 0.35 ? 'var(--red)' : pct < 0.6 ? 'var(--amber)' : 'var(--green)';
        return '<tr><td>' + esc(r.q) + '</td><td class="mono" style="white-space:nowrap;color:' + col + '">' +
          esc(r.mean) + '</td><td class="small muted">' + esc(r.note) + '</td></tr>';
      }).join('') + '</tbody></table>' +
      '<div class="sub-h">The examiner\'s own advice</div>' + listOf(t.examiner.advice) + '</section>';

    /* levels */
    h += '<h2>How extended answers are marked</h2><section class="panel">' +
      '<p class="small muted">' + esc(t.levels.note) + '</p>' +
      t.levels.rows.map(function (r) {
        return '<div class="term"><b>' + esc(r.l) + '</b><span>' + esc(r.d) + '</span></div>';
      }).join('') +
      '<p class="small mono" style="margin:12px 0 0">' + esc(t.levels.bands) + '</p></section>';

    /* category traps */
    h += '<h2>Category traps</h2><section class="panel">' +
      '<p class="small muted">' + esc(t.traps.note) + '</p>' +
      '<table class="mtable"><thead><tr><th>If asked for…</th><th>Answer with</th><th>Not with</th></tr></thead><tbody>' +
      t.traps.rows.map(function (r) {
        return '<tr><td><b>' + esc(r.q) + '</b></td><td style="color:var(--green)">' + esc(r.right) +
          '</td><td class="small" style="color:var(--red)">' + esc(r.wrong) + '</td></tr>';
      }).join('') + '</tbody></table></section>';

    /* the so what rule */
    h += '<h2>The "so what?" rule</h2><section class="panel">' +
      '<p class="small muted">' + esc(t.explain.note) + '</p>' + listOf(t.explain.steps) +
      t.explain.examples.map(function (e) {
        return '<div style="margin-top:12px"><div class="small" style="color:var(--red)">✗ ' + esc(e.bad) + '</div>' +
          '<div class="small" style="color:var(--green);margin-top:4px">✓ ' + esc(e.good) + '</div></div>';
      }).join('') + '</section>';

    h += '<div class="grid two" style="margin-top:14px">' +
      '<section class="panel"><h3>Contextualisation — the golden rule</h3>' + listOf(t.context) + '</section>' +
      '<section class="panel"><h3>Extended responses</h3>' + listOf(t.extended) + '</section></div>';

    h += '<h2>Command words</h2><section class="panel">' +
      t.commands.map(function (c) {
        return '<div class="term"><b>' + esc(c.w) + '</b><span>' + esc(c.m) + '</span></div>';
      }).join('') + '</section>';

    h += '<h2>Acronyms you must be able to expand</h2><section class="panel">' +
      t.acronyms.map(function (a) {
        return '<div class="term"><b>' + esc(a.a) + '</b><span>' + esc(a.d) + '</span></div>';
      }).join('') + '</section>';

    h += '<div class="grid two" style="margin-top:14px">' +
      '<section class="panel"><h3>Technical accuracy checklist</h3>' + listOf(t.accuracy) + '</section>' +
      '<section class="panel"><h3>Last-minute priorities</h3>' + listOf(t.lastMinute) + '</section></div>';

    h += '<p class="small muted" style="margin-top:18px">' + esc(t.credit) + '</p>';
    return h;
  };

  /* Flashcards */
  var cards = { deck: [], i: 0, flipped: false, filter: 'all' };

  function buildDeck() {
    var out = [];
    AREAS.forEach(function (a) {
      a.topics.forEach(function (t) {
        (t.terms || []).forEach(function (x) {
          out.push({ id: a.id + '|' + x.t, front: x.t, back: x.d, src: 'P' + a.paper + ' · ' + t.id + ' ' + t.title, area: a.id });
        });
      });
    });
    return out;
  }
  var ALL_CARDS = buildDeck();

  function pickDeck() {
    var pool = ALL_CARDS.filter(function (c) { return cards.filter === 'all' || c.area === cards.filter; });
    /* weight towards cards in low Leitner boxes */
    pool.sort(function (a, b) { return (state.box[a.id] || 0) - (state.box[b.id] || 0); });
    var weak = pool.slice(0, Math.ceil(pool.length * 0.6));
    return shuffle(weak.concat(shuffle(pool).slice(0, 8)));
  }

  views.cards = function () {
    if (!cards.deck.length) { cards.deck = pickDeck(); cards.i = 0; cards.flipped = false; }
    var c = cards.deck[cards.i];
    var learned = ALL_CARDS.filter(function (x) { return (state.box[x.id] || 0) >= 3; }).length;

    var h = '<h1>Flashcards</h1><p class="lede">' + ALL_CARDS.length + ' key terms from both papers. Cards you keep missing come round more often; three correct answers retires a card.</p>';

    h += '<div class="btn-row" style="margin-bottom:12px"><label class="field" style="flex-direction:row;align-items:center;gap:8px">Deck' +
      '<select id="cardFilter"><option value="all">All areas (' + ALL_CARDS.length + ')</option>' +
      AREAS.map(function (a) {
        var n = ALL_CARDS.filter(function (x) { return x.area === a.id; }).length;
        return '<option value="' + a.id + '"' + (cards.filter === a.id ? ' selected' : '') + '>' + a.num + '. ' + esc(a.title) + ' (' + n + ')</option>';
      }).join('') + '</select></label>' +
      '<span class="small muted">Retired: ' + learned + ' / ' + ALL_CARDS.length + '</span>' +
      '<button class="btn btn-sm" id="reshuffle">Reshuffle</button></div>';

    if (!c) return h + '<section class="panel"><p>No cards in this deck.</p></section>';

    h += '<section class="panel card-stage"><div class="flashcard" id="flashcard">' +
      '<span class="src">' + esc(c.src) + '</span>' +
      (cards.flipped ? '<div class="back">' + esc(c.back) + '</div>' : '<div class="front">' + esc(c.front) + '</div>') +
      '<span class="hint">' + (cards.flipped ? 'Space or click to flip back' : 'Click, or press Space, to reveal') + '</span>' +
      '</div></section>';

    h += '<div class="btn-row"><button class="btn" data-card="miss">✗ Missed it</button>' +
      '<button class="btn btn-accent" data-card="got">✓ Got it</button>' +
      '<button class="btn" data-card="skip">Skip →</button>' +
      '<span class="small muted">' + (cards.i + 1) + ' / ' + cards.deck.length +
      ' · box ' + (state.box[c.id] || 0) + '</span></div>';
    return h;
  };

  /* Quiz */
  var quiz = { qs: [], i: 0, answered: false, right: 0, wrong: [], areaSel: 'all', count: 10, running: false };

  views.quiz = function () {
    if (!quiz.running) return quizSetup();
    if (quiz.i >= quiz.qs.length) return quizResults();

    var q = quiz.qs[quiz.i];
    var h = '<h1>Quiz</h1>' +
      '<div class="qmeta"><span>Question ' + (quiz.i + 1) + ' of ' + quiz.qs.length + ' · ' + esc(labelFor(q.area)) + ' ' + esc(q.t) + '</span>' +
      '<span>Score ' + quiz.right + '/' + quiz.i + '</span></div>' +
      '<section class="panel"><h3 style="margin-bottom:14px">' + esc(q.q) + '</h3>' +
      q.o.map(function (opt, i) {
        var cls = '';
        if (quiz.answered) {
          if (i === q.ans) cls = ' correct';
          else if (i === quiz.picked) cls = ' wrong';
        }
        return '<button class="opt' + cls + '" data-opt="' + i + '"' + (quiz.answered ? ' disabled' : '') + '>' +
          String.fromCharCode(65 + i) + '. ' + esc(opt) + '</button>';
      }).join('');

    if (quiz.answered) {
      h += '<div class="explain"><b>' + (quiz.picked === q.ans ? 'Correct.' : 'Not quite.') + '</b> ' + esc(q.why) + '</div>' +
        '<div class="btn-row" style="margin-top:14px"><button class="btn btn-accent" id="nextQ">' +
        (quiz.i + 1 >= quiz.qs.length ? 'See results' : 'Next question') + '</button>' +
        '<button class="btn" id="endQ">End quiz</button></div>';
    }
    h += '</section>';
    return h;
  };

  function quizSetup() {
    var acc = state.quiz.asked ? Math.round(state.quiz.right / state.quiz.asked * 100) : 0;
    var h = '<h1>Quiz</h1><p class="lede">' + D.quiz.length + ' multiple-choice questions across the whole qualification. Every answer explains itself, so a wrong answer is worth as much as a right one.</p>';

    h += '<section class="panel"><div class="grid three">' +
      '<label class="field">Topic<select id="qArea"><option value="all">Everything</option>' +
      '<optgroup label="Paper 1">' + AREAS.filter(function (a) { return a.paper === 1; }).map(areaOpt).join('') + '</optgroup>' +
      '<optgroup label="Paper 2">' + AREAS.filter(function (a) { return a.paper === 2; }).map(areaOpt).join('') + '</optgroup>' +
      '<option value="esp">Employer Set Project</option><option value="os">Occupational Specialism</option>' +
      '<option value="weak">My weakest areas</option></select></label>' +
      '<label class="field">Questions<select id="qCount"><option>5</option><option selected>10</option><option>20</option><option>40</option></select></label>' +
      '<div style="display:flex;align-items:flex-end"><button class="btn btn-accent" id="startQuiz">Start quiz</button></div>' +
      '</div></section>';

    if (state.quiz.asked) {
      h += '<h2>Your record</h2><section class="panel">' +
        '<div class="grid three" style="margin-bottom:10px">' +
        statCard(state.quiz.asked, 'Answered') + statCard(acc + '%', 'Accuracy') +
        statCard(state.quiz.right, 'Correct') + '</div>';
      var rows = Object.keys(state.quiz.byArea).map(function (k) {
        var s = state.quiz.byArea[k];
        return { k: k, pct: Math.round(s.right / s.asked * 100), asked: s.asked };
      }).sort(function (a, b) { return a.pct - b.pct; });
      rows.forEach(function (r) {
        h += '<div class="progress-row"><div class="name">' + esc(labelFor(r.k)) +
          ' <span class="small muted">· ' + r.asked + ' answered</span></div>' + bar(r.pct) + '</div>';
      });
      h += '</section>';
    }
    return h;
  }
  function areaOpt(a) { return '<option value="' + a.id + '">' + a.num + '. ' + esc(a.title) + '</option>'; }
  function labelFor(id) {
    if (id === 'esp') return 'Employer Set Project';
    if (id === 'os') return 'Occupational Specialism';
    var a = AREAS.filter(function (x) { return x.id === id; })[0];
    return a ? a.num + '. ' + a.title : id;
  }

  function quizResults() {
    var pct = Math.round(quiz.right / quiz.qs.length * 100);
    var msg = pct >= 80 ? 'Strong — move on to exam-style extended questions.'
      : pct >= 60 ? 'Solid base. Re-read the topics behind the ones you missed.'
      : 'Worth re-reading the notes for these areas before testing again.';

    var h = '<h1>Quiz results</h1>' +
      '<section class="panel" style="text-align:center;padding:26px">' +
      '<div class="num" style="font-size:44px;font-family:var(--mono);font-weight:700">' + quiz.right + ' / ' + quiz.qs.length + '</div>' +
      '<div class="muted">' + pct + '% · ' + esc(msg) + '</div>' +
      '<div class="btn-row" style="justify-content:center;margin-top:16px">' +
      '<button class="btn btn-accent" id="againQ">Another quiz</button>' +
      '<button class="btn" data-go="p1">Back to notes</button></div></section>';

    if (quiz.wrong.length) {
      h += '<h2>Review the ones you missed</h2>';
      quiz.wrong.forEach(function (q) {
        h += '<section class="panel" style="margin-bottom:10px"><b>' + esc(q.q) + '</b>' +
          '<div class="small" style="margin-top:6px;color:var(--green)">Correct: ' + esc(q.o[q.ans]) + '</div>' +
          '<div class="small muted" style="margin-top:4px">' + esc(q.why) + '</div>' +
          '<div class="small muted" style="margin-top:6px">' + esc(labelFor(q.area)) + ' · ' + esc(q.t) + '</div></section>';
      });
    }
    return h;
  }

  function startQuiz() {
    var sel = $('#qArea') ? $('#qArea').value : 'all';
    var n = $('#qCount') ? parseInt($('#qCount').value, 10) : 10;
    var pool;
    if (sel === 'all') pool = D.quiz;
    else if (sel === 'weak') {
      var weakAreas = AREAS.filter(function (a) { return areaProgress(a) < 60; }).map(function (a) { return a.id; });
      pool = D.quiz.filter(function (q) { return weakAreas.indexOf(q.area) !== -1; });
      if (!pool.length) pool = D.quiz;
    } else pool = D.quiz.filter(function (q) { return q.area === sel; });

    quiz.qs = shuffle(pool).slice(0, Math.min(n, pool.length));
    quiz.i = 0; quiz.right = 0; quiz.wrong = []; quiz.answered = false; quiz.running = true;
    render();
  }

  function answer(i) {
    if (quiz.answered) return;
    var q = quiz.qs[quiz.i];
    quiz.answered = true;
    quiz.picked = i;
    var ok = i === q.ans;
    if (ok) quiz.right++; else quiz.wrong.push(q);

    state.quiz.asked++;
    if (ok) state.quiz.right++;
    var s = state.quiz.byArea[q.area] || { asked: 0, right: 0 };
    s.asked++; if (ok) s.right++;
    state.quiz.byArea[q.area] = s;
    save();
    render();
  }

  /* Past papers — your own question bank, stored on this device only.
     Nothing typed here is part of the published site or leaves the browser. */
  var papers = { open: null, practice: false };

  var COMPONENTS = [
    { v: 'p1', n: 'Core Paper 1' },
    { v: 'p2', n: 'Core Paper 2' },
    { v: 'esp', n: 'Employer Set Project' },
    { v: 'os', n: 'Occupational Specialism' }
  ];
  function compName(v) {
    var c = COMPONENTS.filter(function (x) { return x.v === v; })[0];
    return c ? c.n : v;
  }
  function paperById(id) {
    return state.papers.filter(function (p) { return p.id === id; })[0];
  }
  function paperScore(p) {
    var avail = 0, got = 0, marked = 0;
    p.qs.forEach(function (q) {
      avail += Number(q.marks) || 0;
      if (q.got !== '' && q.got !== null && q.got !== undefined) { got += Number(q.got) || 0; marked++; }
    });
    return { avail: avail, got: got, marked: marked, pct: avail ? Math.round(got / avail * 100) : 0 };
  }

  views.papers = function () {
    if (papers.open) return paperDetail(paperById(papers.open));

    var h = '<h1>My past papers</h1>' +
      '<p class="lede">Type in questions from a past paper or mark scheme and build your own practice bank. Everything you enter is saved in this browser only — it is never uploaded, never published with the site, and disappears if you clear site data, so use Export to keep a backup.</p>';

    h += '<section class="panel"><h3>Add a paper</h3>' +
      '<div class="grid three" style="margin-top:10px">' +
      '<label class="field">Title<input type="text" id="pTitle" placeholder="e.g. June 2025 Paper 1"></label>' +
      '<label class="field">Component<select id="pComp">' +
      COMPONENTS.map(function (c) { return '<option value="' + c.v + '">' + c.n + '</option>'; }).join('') +
      '</select></label>' +
      '<label class="field">Series / notes<input type="text" id="pSeries" placeholder="e.g. specimen, 2024 resit"></label>' +
      '</div><div class="btn-row" style="margin-top:12px">' +
      '<button class="btn btn-accent" id="addPaper">Add paper</button>' +
      '<button class="btn btn-sm" id="exportPapers">Export backup</button>' +
      '<label class="btn btn-sm" style="cursor:pointer">Import backup<input type="file" id="importPapers" accept="application/json" hidden></label>' +
      '</div></section>';

    h += '<h2>Your papers</h2>';
    if (!state.papers.length) {
      h += '<section class="panel"><p class="muted" style="margin:0">Nothing yet. Add a paper above, then enter each question with its marks and the mark scheme points, so you can re-attempt it later with the answers hidden.</p></section>';
      return h;
    }

    state.papers.forEach(function (p) {
      var s = paperScore(p);
      h += '<section class="panel task-card"><div class="task-head">' +
        '<h3 style="margin:0">' + esc(p.title) + '</h3>' +
        '<span class="pill ' + (p.comp === 'p1' ? 'p1' : p.comp === 'p2' ? 'p2' : '') + '">' + esc(compName(p.comp)) + '</span>' +
        (p.series ? '<span class="small muted">' + esc(p.series) + '</span>' : '') + '</div>' +
        '<div class="progress-row" style="margin-top:10px"><div class="name small muted">' +
        p.qs.length + ' question' + (p.qs.length === 1 ? '' : 's') + ' · ' +
        (s.marked ? s.got + '/' + s.avail + ' marks recorded' : 'no marks recorded yet') + '</div>' +
        bar(s.pct) + '</div>' +
        '<div class="btn-row"><button class="btn btn-sm" data-paper="' + p.id + '">Open</button>' +
        '<button class="btn btn-sm" data-delpaper="' + p.id + '">Delete</button></div></section>';
    });
    return h;
  };

  function paperDetail(p) {
    if (!p) { papers.open = null; return views.papers(); }
    var s = paperScore(p);

    var h = '<div class="btn-row" style="margin-bottom:12px"><button class="btn btn-sm" id="backPapers">← All papers</button>' +
      '<button class="btn btn-sm" id="togglePractice">' + (papers.practice ? 'Show answers' : 'Practice mode (hide answers)') + '</button></div>';

    h += '<h1>' + esc(p.title) + '</h1>' +
      '<p class="lede">' + esc(compName(p.comp)) + (p.series ? ' · ' + esc(p.series) : '') +
      ' · ' + p.qs.length + ' question' + (p.qs.length === 1 ? '' : 's') +
      ' · ' + s.got + '/' + s.avail + ' marks (' + s.pct + '%)</p>';

    h += '<section class="panel"><h3>Add a question</h3>' +
      '<div class="grid two" style="margin-top:10px">' +
      '<label class="field">Question<textarea id="qText" rows="3" placeholder="Type or paste the question"></textarea></label>' +
      '<label class="field">Mark scheme / model answer<textarea id="qMs" rows="3" placeholder="The points that earn the marks"></textarea></label>' +
      '</div><div class="grid three" style="margin-top:10px">' +
      '<label class="field">Marks available<input type="number" id="qMarks" min="1" max="30" value="4"></label>' +
      '<label class="field">Topic<select id="qArea2"><option value="">— none —</option>' +
      AREAS.map(function (a) { return '<option value="' + a.id + '">' + a.num + '. ' + esc(a.title) + '</option>'; }).join('') +
      '<option value="esp">Employer Set Project</option><option value="os">Occupational Specialism</option></select></label>' +
      '<div style="display:flex;align-items:flex-end"><button class="btn btn-accent" id="addQ">Add question</button></div>' +
      '</div></section>';

    if (!p.qs.length) return h + '<section class="panel" style="margin-top:14px"><p class="muted" style="margin:0">No questions yet.</p></section>';

    h += '<h2>Questions</h2>';
    p.qs.forEach(function (q, i) {
      h += '<section class="panel qbox' + (papers.practice ? '' : ' open') + '" style="margin-bottom:10px;border-left-width:3px">' +
        '<div class="qq">Q' + (i + 1) + ' [' + q.marks + ' marks] ' + esc(q.q) + '</div>' +
        '<div class="btn-row" style="margin-top:8px">' +
        '<button class="btn btn-sm" data-reveal="1">' + (papers.practice ? 'Reveal mark scheme' : 'Hide') + '</button>' +
        '<label class="field" style="flex-direction:row;align-items:center;gap:6px">Marks got' +
        '<input type="number" style="width:70px" min="0" max="' + q.marks + '" value="' + (q.got === undefined || q.got === null ? '' : q.got) +
        '" data-got="' + p.id + '|' + q.id + '"></label>' +
        (q.area ? '<span class="pill">' + esc(labelFor(q.area)) + '</span>' : '') +
        '<button class="btn btn-sm" data-delq="' + p.id + '|' + q.id + '">Delete</button></div>' +
        '<div class="qa">' + esc(q.ms || 'No mark scheme entered.') + '</div></section>';
    });
    return h;
  }

  function exportPapers() {
    var blob = new Blob([JSON.stringify({ papers: state.papers }, null, 2)], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'tlevel-papers-backup.json';
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }

  function importPapers(file) {
    var reader = new FileReader();
    reader.onload = function () {
      try {
        var data = JSON.parse(reader.result);
        var incoming = data.papers || (Array.isArray(data) ? data : null);
        if (!incoming) throw new Error('no papers');
        incoming.forEach(function (p) {
          if (!paperById(p.id)) state.papers.push(p);
        });
        save();
        render();
      } catch (e) {
        alert('That file could not be read as a papers backup.');
      }
    };
    reader.readAsText(file);
  }

  /* ── Search ────────────────────────────────────────────────────── */
  function buildIndex() {
    var idx = [];
    AREAS.forEach(function (a) {
      a.topics.forEach(function (t) {
        idx.push({ text: t.id + ' ' + t.title + ' ' + t.must.join(' '), title: t.id + ' ' + t.title,
          where: 'Paper ' + a.paper + ' · ' + a.num + '. ' + a.title, go: 'p' + a.paper, open: a.id + '/' + t.id });
        (t.terms || []).forEach(function (x) {
          idx.push({ text: x.t + ' ' + x.d, title: x.t, snippet: x.d,
            where: 'Key term · ' + t.id + ' ' + t.title, go: 'p' + a.paper, open: a.id + '/' + t.id });
        });
      });
    });
    D.esp.tasks.forEach(function (t) {
      var body = [t.given, t.produce].concat(t.checklist || [], t.mistakes || [],
        (t.sections || []).reduce(function (acc, s) { return acc.concat(s.points); }, [])).join(' ');
      idx.push({ text: t.code + ' ' + t.title + ' ' + body, title: t.code + ' — ' + t.title, where: 'Employer Set Project', go: 'esp' });
    });
    D.os.tasks.forEach(function (t) {
      idx.push({ text: t.code + ' ' + t.title + ' ' + t.points.join(' '), title: t.code + ' — ' + t.title, where: 'Occupational Specialism', go: 'os' });
    });
    D.os.areas.forEach(function (a) {
      idx.push({ text: a.title + ' ' + a.points.join(' '), title: a.title, where: 'Specialism content area ' + a.num, go: 'os' });
    });
    D.python.patterns.forEach(function (p) {
      idx.push({ text: p.h + ' ' + p.code, title: p.h, where: 'Python & algorithms', go: 'python' });
    });
    D.technique.commands.forEach(function (c) {
      idx.push({ text: c.w + ' ' + c.m, title: c.w, snippet: c.m, where: 'Command words', go: 'technique' });
    });
    return idx;
  }
  var INDEX = buildIndex();

  function searchView(q) {
    var needle = q.toLowerCase();
    var hits = INDEX.filter(function (r) { return r.text.toLowerCase().indexOf(needle) !== -1; }).slice(0, 40);
    var h = '<h1>Search</h1><p class="lede">' + hits.length + ' result' + (hits.length === 1 ? '' : 's') + ' for “' + esc(q) + '”.</p>';
    if (!hits.length) return h + '<section class="panel"><p class="muted">Nothing matched. Try a shorter word — “binary”, “GDPR”, “Gantt”, “hypervisor”.</p></section>';
    h += hits.map(function (r) {
      return '<div class="result" data-go="' + r.go + '"' + (r.open ? ' data-open="' + r.open + '"' : '') + '>' +
        '<b>' + esc(r.title) + '</b>' + (r.snippet ? '<div class="small muted">' + esc(r.snippet) + '</div>' : '') +
        '<div class="where">' + esc(r.where) + '</div></div>';
    }).join('');
    return h;
  }

  /* ── Render ────────────────────────────────────────────────────── */
  var searchTerm = '';

  function render() {
    var v = currentView();
    var html = searchTerm ? searchView(searchTerm) : (views[v] || views.dash)();
    $('#view').innerHTML = html;
    renderNav();
    window.scrollTo(0, 0);
    if (!searchTerm) restoreOpen();
  }

  var pendingOpen = null;
  function restoreOpen() {
    if (!pendingOpen) return;
    var parts = pendingOpen.split('/');
    pendingOpen = null;
    var area = $('[data-area="' + parts[0] + '"]');
    if (area) {
      area.classList.add('open');
      if (parts[1]) {
        var t = $('[data-topic="' + parts[1] + '"]', area);
        if (t) {
          t.classList.add('open');
          setTimeout(function () { t.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 30);
        }
      } else {
        area.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  /* ── Events ────────────────────────────────────────────────────── */
  document.addEventListener('click', function (e) {
    var t = e.target;

    var goBtn = t.closest('[data-go]');
    if (goBtn) {
      var openTarget = goBtn.getAttribute('data-open');
      if (openTarget) pendingOpen = openTarget;
      searchTerm = ''; $('#search').value = '';
      document.body.classList.remove('nav-open');
      go(goBtn.getAttribute('data-go'));
      return;
    }

    var openBtn = t.closest('[data-open]');
    if (openBtn && !goBtn) {
      pendingOpen = openBtn.getAttribute('data-open');
      var areaId = pendingOpen.split('/')[0];
      var owner = AREAS.filter(function (a) { return a.id === areaId; })[0];
      searchTerm = ''; $('#search').value = '';
      if (owner) go('p' + owner.paper); else render();
      return;
    }

    /* confidence buttons */
    var conf = t.closest('.conf button');
    if (conf) {
      e.stopPropagation();
      var wrap = conf.parentElement;
      var id = wrap.getAttribute('data-conf');
      var v = parseInt(conf.getAttribute('data-v'), 10);
      state.conf[id] = state.conf[id] === v ? 0 : v;
      save();
      $$('button', wrap).forEach(function (b) {
        b.classList.toggle('on', parseInt(b.getAttribute('data-v'), 10) === state.conf[id]);
      });
      var card = conf.closest('.area-card');
      if (card) {
        var a = AREAS.filter(function (x) { return x.id === card.getAttribute('data-area'); })[0];
        if (a) {
          var row = $('.area-body > .progress-row', card);
          if (row) row.innerHTML = '<div class="name small muted">Confidence across this area</div>' + bar(areaProgress(a));
        }
      }
      renderNav();
      return;
    }

    if (t.closest('.topic-head')) { t.closest('.topic').classList.toggle('open'); return; }
    if (t.closest('.area-head')) { t.closest('.area-card').classList.toggle('open'); return; }

    if (t.matches('[data-reveal]')) { t.closest('.qbox').classList.toggle('open'); return; }

    if (t.matches('[data-chk]')) {
      var k = t.getAttribute('data-chk');
      state.chk[k] = t.checked;
      t.closest('li').classList.toggle('done', t.checked);
      save();
      return;
    }

    if (t.id === 'expandAll') { $$('.area-card').forEach(function (c) { c.classList.add('open'); }); return; }
    if (t.id === 'collapseAll') { $$('.area-card,.topic').forEach(function (c) { c.classList.remove('open'); }); return; }

    if (t.id === 'menuBtn') { document.body.classList.toggle('nav-open'); return; }
    if (t.closest('#themeBtn')) {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', state.theme);
      save();
      return;
    }
    if (t.closest('#resetBtn')) {
      if (confirm('Clear all confidence ratings, checklists, flashcard progress and quiz stats on this device?')) {
        localStorage.removeItem(KEY);
        state = load();
        document.documentElement.setAttribute('data-theme', state.theme);
        render();
      }
      return;
    }

    /* flashcards */
    if (t.closest('#flashcard')) { cards.flipped = !cards.flipped; render(); return; }
    var cardBtn = t.closest('[data-card]');
    if (cardBtn) {
      var act = cardBtn.getAttribute('data-card');
      var c = cards.deck[cards.i];
      if (c) {
        if (act === 'got') state.box[c.id] = Math.min(5, (state.box[c.id] || 0) + 1);
        if (act === 'miss') state.box[c.id] = 0;
        save();
      }
      cards.i++; cards.flipped = false;
      if (cards.i >= cards.deck.length) { cards.deck = pickDeck(); cards.i = 0; }
      render();
      return;
    }
    if (t.id === 'reshuffle') { cards.deck = pickDeck(); cards.i = 0; cards.flipped = false; render(); return; }

    /* quiz */
    if (t.id === 'startQuiz') { startQuiz(); return; }
    var opt = t.closest('[data-opt]');
    if (opt && quiz.running) { answer(parseInt(opt.getAttribute('data-opt'), 10)); return; }
    if (t.id === 'nextQ') { quiz.i++; quiz.answered = false; quiz.picked = -1; render(); return; }
    if (t.id === 'endQ') { quiz.qs = quiz.qs.slice(0, quiz.i + 1); quiz.i = quiz.qs.length; render(); return; }
    if (t.id === 'againQ') { quiz.running = false; render(); return; }

    /* past papers */
    if (t.id === 'addPaper') {
      var title = $('#pTitle').value.trim();
      if (!title) { $('#pTitle').focus(); return; }
      state.papers.push({
        id: 'p' + Date.now(), title: title,
        comp: $('#pComp').value, series: $('#pSeries').value.trim(), qs: []
      });
      save(); render();
      return;
    }
    var openP = t.closest('[data-paper]');
    if (openP) { papers.open = openP.getAttribute('data-paper'); papers.practice = false; render(); return; }
    var delP = t.closest('[data-delpaper]');
    if (delP) {
      var pid = delP.getAttribute('data-delpaper');
      var pObj = paperById(pid);
      if (confirm('Delete “' + (pObj ? pObj.title : 'this paper') + '” and all its questions?')) {
        state.papers = state.papers.filter(function (x) { return x.id !== pid; });
        save(); render();
      }
      return;
    }
    if (t.id === 'backPapers') { papers.open = null; render(); return; }
    if (t.id === 'togglePractice') { papers.practice = !papers.practice; render(); return; }
    if (t.id === 'addQ') {
      var p = paperById(papers.open);
      var qt = $('#qText').value.trim();
      if (!p || !qt) { if ($('#qText')) $('#qText').focus(); return; }
      p.qs.push({
        id: 'q' + Date.now(), q: qt, ms: $('#qMs').value.trim(),
        marks: parseInt($('#qMarks').value, 10) || 1, area: $('#qArea2').value, got: ''
      });
      save(); render();
      return;
    }
    var delQ = t.closest('[data-delq]');
    if (delQ) {
      var parts2 = delQ.getAttribute('data-delq').split('|');
      var pp = paperById(parts2[0]);
      if (pp) { pp.qs = pp.qs.filter(function (x) { return x.id !== parts2[1]; }); save(); render(); }
      return;
    }
    if (t.id === 'exportPapers') { exportPapers(); return; }
  });

  document.addEventListener('change', function (e) {
    var t = e.target;
    if (t.matches('[data-exam]')) { state.exams[t.getAttribute('data-exam')] = t.value; save(); render(); }
    if (t.id === 'cardFilter') { cards.filter = t.value; cards.deck = pickDeck(); cards.i = 0; cards.flipped = false; render(); }
    if (t.matches('[data-got]')) {
      var ids = t.getAttribute('data-got').split('|');
      var p = paperById(ids[0]);
      if (p) {
        var q = p.qs.filter(function (x) { return x.id === ids[1]; })[0];
        if (q) { q.got = t.value === '' ? '' : Math.max(0, Math.min(Number(q.marks), Number(t.value))); save(); render(); }
      }
    }
    if (t.id === 'importPapers' && t.files && t.files[0]) importPapers(t.files[0]);
  });

  var searchTimer;
  document.addEventListener('input', function (e) {
    if (e.target.id !== 'search') return;
    clearTimeout(searchTimer);
    searchTimer = setTimeout(function () {
      searchTerm = e.target.value.trim().length > 1 ? e.target.value.trim() : '';
      render();
      if (searchTerm) $('#search').focus();
    }, 180);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && document.activeElement.id !== 'search') { e.preventDefault(); $('#search').focus(); return; }
    if (e.key === 'Escape' && document.activeElement.id === 'search') {
      $('#search').value = ''; searchTerm = ''; $('#search').blur(); render(); return;
    }
    if (currentView() === 'cards' && !searchTerm && document.activeElement.id !== 'search') {
      if (e.key === ' ') { e.preventDefault(); cards.flipped = !cards.flipped; render(); }
      if (e.key === 'ArrowRight') { cards.i = Math.min(cards.i + 1, cards.deck.length - 1); cards.flipped = false; render(); }
      if (e.key === 'ArrowLeft') { cards.i = Math.max(0, cards.i - 1); cards.flipped = false; render(); }
    }
  });

  window.addEventListener('hashchange', function () {
    if (currentView() !== 'quiz') quiz.running = false;
    if (currentView() !== 'papers') { papers.open = null; papers.practice = false; }
    render();
  });

  /* ── Boot ──────────────────────────────────────────────────────── */
  document.documentElement.setAttribute('data-theme', state.theme || 'dark');
  if (!location.hash) location.hash = '#dash';
  render();
})();
