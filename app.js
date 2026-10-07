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
    var base = {
      conf: {}, chk: {}, box: {}, quiz: { asked: 0, right: 0, byArea: {} },
      exams: {}, theme: 'light', themeV: 2, papers: [],
      written: { ans: {}, marks: {}, history: [] },
      plan: { done: {}, start: '' },
      catchup: { done: {}, ans: {}, sent: {} }
    };
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return base;
      var saved = JSON.parse(raw);
      for (var k in base) if (!(k in saved)) saved[k] = base[k];
      if (!saved.quiz.byArea) saved.quiz.byArea = {};
      if (!saved.written) saved.written = base.written;
      if (!saved.plan) saved.plan = base.plan;
      if (!saved.plan.done) saved.plan.done = {};
      if (!saved.catchup) saved.catchup = { done: {} };
      if (!saved.catchup.done) saved.catchup.done = {};
      if (!saved.catchup.ans) saved.catchup.ans = {};
      if (!saved.catchup.sent) saved.catchup.sent = {};
      /* The redesign made the beige theme the default. Anyone still on the
         old dark default is moved to it once; choosing dark again sticks. */
      if (saved.themeV !== 2) { saved.theme = 'light'; saved.themeV = 2; }
      ['ans', 'marks', 'history'].forEach(function (k) {
        if (!saved.written[k]) saved.written[k] = base.written[k];
      });
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
  function areaOf(topicId) {
    var found = '';
    AREAS.forEach(function (a) {
      a.topics.forEach(function (t) { if (t.id === topicId) found = a.id; });
    });
    return found;
  }
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

  /* ── Content rendering ─────────────────────────────────────────── */

  /* Authored content may use **bold** and `code`. Escaping happens first,
     so nothing in the content can ever inject markup. */
  function fmt(s) {
    return esc(s)
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
  }

  /* The part of the hash after the view, e.g. "ca2" in #p1/ca2. */
  function subPath() { return (location.hash || '').slice(1).split('/')[1] || ''; }

  function crumbs(items) {
    return '<nav class="crumbs" aria-label="Breadcrumb">' + items.map(function (it, i) {
      var label = it[1] ? '<button data-go="' + it[1] + '">' + esc(it[0]) + '</button>' : '<span>' + esc(it[0]) + '</span>';
      return (i ? '<span class="sep" aria-hidden="true">›</span>' : '') + label;
    }).join('') + '</nav>';
  }

  function factsHTML(facts) {
    if (!facts || !facts.length) return '';
    return '<div class="facts">' + facts.map(function (f) {
      return '<span class="fact"><b>' + esc(f[0]) + '</b>' + (f[1] ? ' ' + esc(f[1]) : '') + '</span>';
    }).join('') + '</div>';
  }

  function pageHead(title, lede, facts) {
    return '<header class="page-head"><h1>' + esc(title) + '</h1>' +
      (lede ? '<p class="lede">' + fmt(lede) + '</p>' : '') + factsHTML(facts) + '</header>';
  }

  /* Code shown on the current page, kept so the copy buttons copy the
     original text rather than whatever the browser rendered. Reset per render. */
  var codeStore = [];
  function codeFig(c) {
    var i = codeStore.push(c.src) - 1;
    return '<figure class="codefig"><figcaption><span>' + esc(c.title || '') +
      (c.lang ? '<span class="lang">' + esc(c.lang) + '</span>' : '') + '</span>' +
      '<button class="copy" data-copy="' + i + '" type="button">Copy</button></figcaption>' +
      '<pre><code>' + esc(c.src) + '</code></pre></figure>' +
      (c.note ? '<p class="note">' + fmt(c.note) + '</p>' : '');
  }

  function tableHTML(t) {
    var num = t.num || [];
    function cells(row, tag) {
      return row.map(function (v, i) {
        return '<' + tag + (tag === 'td' && num.indexOf(i) !== -1 ? ' class="num"' : '') + '>' + fmt(v) + '</' + tag + '>';
      }).join('');
    }
    return '<table class="mtable"><thead><tr>' + t.cols.map(function (c) { return '<th>' + esc(c) + '</th>'; }).join('') +
      '</tr></thead><tbody>' + t.rows.map(function (r) { return '<tr>' + cells(r, 'td') + '</tr>'; }).join('') + '</tbody>' +
      (t.foot ? '<tfoot><tr>' + cells(t.foot, 'td') + '</tr></tfoot>' : '') + '</table>';
  }

  function blockHTML(b) {
    if (b.p) return '<p>' + fmt(b.p) + '</p>';
    if (b.ul) return '<ul class="clean">' + b.ul.map(function (x) { return '<li>' + fmt(x) + '</li>'; }).join('') + '</ul>';
    if (b.ol) return '<ol class="clean">' + b.ol.map(function (x) { return '<li>' + fmt(x) + '</li>'; }).join('') + '</ol>';
    if (b.table) return tableHTML(b.table);
    if (b.code) return codeFig(b.code);
    if (b.kw) {
      return '<div class="kw-grid">' + b.kw.map(function (k) {
        return '<div class="kw"><b>' + esc(k.t) + '</b><span>' + fmt(k.d) + '</span></div>';
      }).join('') + '</div>';
    }
    if (b.callout) {
      var c = b.callout;
      return '<div class="callout ' + esc(c.kind || '') + '">' +
        (c.title ? '<b>' + esc(c.title) + '</b><br>' : '') + (c.text ? fmt(c.text) : '') +
        (c.list ? '<ul>' + c.list.map(function (x) { return '<li>' + fmt(x) + '</li>'; }).join('') + '</ul>' : '') + '</div>';
    }
    if (b.check) {
      return '<ul class="chk">' + b.check.items.map(function (item, i) {
        var k = b.check.key + '-' + i;
        return '<li class="' + (state.chk[k] ? 'done' : '') + '">' +
          '<input type="checkbox" id="chk-' + k + '" data-chk="' + k + '"' + (state.chk[k] ? ' checked' : '') + '>' +
          '<label for="chk-' + k + '"><span>' + fmt(item) + '</span></label></li>';
      }).join('') + '</ul>';
    }
    return '';
  }

  /* A document page: every part in one card, separated by clean dividers,
     with a row of chips to jump between parts. */
  function docBody(parts) {
    var idx = '<nav class="topic-index" aria-label="On this page">' + parts.map(function (p, i) {
      return '<button class="chip" data-jump-part="' + i + '" title="' + esc(p.h) + '"><span class="ctext">' + esc(p.h) + '</span></button>';
    }).join('') + '</nav>';
    return idx + '<article class="topic-card doc">' + parts.map(function (p, i) {
      return '<section class="part" id="part-' + i + '"><h2 class="doc-h">' +
        (p.ic ? '<span class="ic" aria-hidden="true">' + esc(p.ic) + '</span>' : '') + esc(p.h) + '</h2>' +
        p.blocks.map(blockHTML).join('') + '</section>';
    }).join('') + '</article>';
  }

  function hubCard(route, page) {
    return '<button class="hub-card" data-go="' + route + '/' + page.id + '">' +
      '<span class="hub-top"><span class="hub-num">' + esc(page.code) + '</span></span>' +
      '<h3>' + esc(page.title) + '</h3><p>' + fmt(page.summary) + '</p>' +
      '<span class="hub-meta">' + (page.facts || []).slice(0, 2).map(function (f) {
        return '<span class="pill">' + esc(f[0]) + (f[1] ? ' ' + esc(f[1]) : '') + '</span>';
      }).join('') + '</span></button>';
  }

  function pager(route, pages, current) {
    var i = -1;
    pages.forEach(function (p, n) { if (p.id === current) i = n; });
    var prev = pages[i - 1], next = pages[i + 1];
    return '<div class="pager">' +
      (prev ? '<button class="btn" data-go="' + route + '/' + prev.id + '">‹ ' + esc(prev.code) + ' · ' + esc(prev.title) + '</button>' : '<span></span>') +
      (next ? '<button class="btn" data-go="' + route + '/' + next.id + '">' + esc(next.code) + ' · ' + esc(next.title) + ' ›</button>' : '<span></span>') +
      '</div>';
  }

  /* Turns an old-style "area/topic" link (from the plan, dashboard and
     search) into the area page route, remembering which topic to scroll to. */
  function routeForOpen(open, fallback) {
    var bits = String(open).split('/');
    var area = AREAS.filter(function (a) { return a.id === bits[0]; })[0];
    if (!area) { pendingOpen = null; return fallback || 'dash'; }
    pendingOpen = bits[1] || null;
    return 'p' + area.paper + '/' + area.id;
  }

  function scrollToEl(el, block) {
    if (!el) return;
    var still = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: still ? 'auto' : 'smooth', block: block || 'start' });
  }

  function copyText(text, btn) {
    function done(ok) {
      if (!btn) return;
      var was = btn.textContent;
      btn.textContent = ok ? 'Copied' : 'Select and copy';
      setTimeout(function () { btn.textContent = was; }, 1400);
    }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
      return;
    }
    /* Older browsers and file:// pages: fall back to a hidden textarea. */
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (err) {}
    ta.remove();
    done(ok);
  }

  /* ── Navigation ────────────────────────────────────────────────── */
  var NAV = [
    { g: 'Overview' },
    { id: 'dash', ico: '◈', label: 'Dashboard' },
    { id: 'plan', ico: '✓', label: 'Revision plan' },
    { id: 'catchup', ico: '↻', label: 'Catch-up' },
    { id: 'notes', ico: '✎', label: 'Tutor notes' },
    { g: 'Core exams' },
    { id: 'p1', ico: '①', label: 'Core Paper 1' },
    { id: 'p2', ico: '②', label: 'Core Paper 2' },
    { g: 'Projects' },
    { id: 'esp', ico: '▤', label: 'Employer Set Project' },
    { id: 'os', ico: '◆', label: 'Occupational Specialism' },
    { g: 'Practice' },
    { id: 'quiz', ico: '?', label: 'Quiz' },
    { id: 'written', ico: '✍', label: 'Written practice' },
    { id: 'cards', ico: '⧉', label: 'Flashcards' },
    { id: 'papers', ico: '⎘', label: 'My past papers' },
    { id: 'python', ico: '{}', label: 'Python & algorithms' },
    { id: 'technique', ico: '★', label: 'Exam technique' }
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

    var acc = state.quiz.asked ? Math.round(state.quiz.right / state.quiz.asked * 100) : 0;

    var h = '<h1>Revision dashboard</h1>' +
      '<p class="lede">Pearson T Level in Digital Production, Design and Development: eight content areas across Core Papers 1 and 2, the five Employer Set Project tasks and the Occupational Specialism. Rate each topic red, amber or green as you revise and this page tracks what is left.</p>';

    h += '<div class="grid four" style="margin-bottom:18px">' +
      statCard(overallProgress() + '%', 'Syllabus confident') +
      statCard(allTopics().filter(function (x) { return confOf(x.topic.id) === 3; }).length + '/' + allTopics().length, 'Topics green') +
      statCard(state.quiz.asked ? acc + '%' : '—', 'Quiz accuracy') +
      statCard(D.quiz.length, 'Questions available') +
      '</div>';

    h += '<div class="grid two">';

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

    /* catch-up */
    var cuWaiting = cuPending().length, cuMarked = 0, cuTotal = 0;
    CATCH.days.forEach(function (d) { d.qs.forEach(function (q) { cuTotal++; if (markedQ(q.n)) cuMarked++; }); });
    h += '<section class="panel"><h3>Catch-up</h3>' +
      '<p class="small muted">Days 17 to 28 condensed, with an answer box under every question.</p>' +
      '<div class="progress-row"><div class="name"><b>' + cuMarked + ' of ' + cuTotal + '</b> questions marked</div>' +
      bar(Math.round(cuMarked / cuTotal * 100)) + '</div>' +
      (cuWaiting ? '<div class="callout" style="margin:10px 0"><b>' + cuWaiting + ' answer' + (cuWaiting === 1 ? '' : 's') +
        ' waiting to be marked</b><br>Open catch-up and press Send for marking.</div>' : '') +
      '<button class="btn btn-accent btn-sm" data-go="catchup">Open catch-up</button></section>';

    h += '</div>';

    /* progress by area */
    h += '<h2>Progress by content area</h2><section class="panel">';
    [1, 2].forEach(function (p) {
      h += '<div class="sub-h">Paper ' + p + '</div>';
      AREAS.filter(function (a) { return a.paper === p; }).forEach(function (a) {
        var pct = areaProgress(a);
        h += '<div class="progress-row"><div class="name"><b>' + a.num + '. ' + esc(a.title) + '</b> ' +
          '<span class="small muted">· ' + a.topics.length + ' topics</span></div>' + bar(pct) +
          '<button class="btn btn-sm" data-go="p' + p + '/' + a.id + '">Open</button></div>';
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


  /* ── Revision plan ─────────────────────────────────────────────── */
  var PLAN = D.plan;

  function planFlatDays() {
    var out = [];
    PLAN.weeks.forEach(function (w) {
      w.days.forEach(function (day, di) { out.push({ w: w, day: day, di: di }); });
    });
    return out;
  }
  var PLAN_DAYS = planFlatDays();

  function taskKey(wn, di, ti) { return 'w' + wn + 'd' + di + 't' + ti; }
  function dayDone(wn, di, day) {
    return day.tasks.every(function (_, ti) { return state.plan.done[taskKey(wn, di, ti)]; });
  }
  function planTotals() {
    var total = 0, done = 0;
    PLAN.weeks.forEach(function (w) {
      w.days.forEach(function (day, di) {
        day.tasks.forEach(function (_, ti) {
          total++;
          if (state.plan.done[taskKey(w.n, di, ti)]) done++;
        });
      });
    });
    return { total: total, done: done, pct: total ? Math.round(done / total * 100) : 0 };
  }
  /* Which numbered day of the plan today is, from the start date. */
  function planDayIndex() {
    if (!state.plan.start) return null;
    var start = new Date(state.plan.start + 'T00:00:00');
    if (isNaN(start)) return null;
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    var n = Math.floor((today - start) / 86400000);
    if (n < 0) return -1;
    return n;
  }
  function dateForDay(i) {
    if (!state.plan.start) return '';
    var dt = new Date(state.plan.start + 'T00:00:00');
    if (isNaN(dt)) return '';
    dt.setDate(dt.getDate() + i);
    return dt.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
  }

  /* Repaint just the parts of the plan a single tick affects. */
  function updatePlanCounters(box) {
    var label = box.closest('.plantask');
    if (label) label.classList.toggle('done', box.checked);

    var dayEl = box.closest('.planday');
    if (dayEl) {
      var boxes = $$('[data-plan]', dayEl);
      var all = boxes.length && boxes.every(function (b) { return b.checked; });
      dayEl.classList.toggle('done', all);
      var badge = $('.pill.ok', dayEl.querySelector('.planday-head'));
      if (all && !badge) {
        var span = document.createElement('span');
        span.className = 'pill ok';
        span.textContent = 'done';
        dayEl.querySelector('.planday-head b').insertAdjacentElement('afterend', span);
      } else if (!all && badge) badge.remove();
    }

    var weekEl = box.closest('.area-card');
    if (weekEl) {
      var wb = $$('[data-plan]', weekEl);
      var wd = wb.filter(function (b) { return b.checked; }).length;
      var pctEl = $('.area-head .pct', weekEl);
      if (pctEl) pctEl.textContent = (wb.length ? Math.round(wd / wb.length * 100) : 0) + '%';
    }

    var tot = planTotals();
    var nums = $$('.stat .num');
    if (nums[0]) nums[0].textContent = tot.pct + '%';
    if (nums[1]) nums[1].textContent = tot.done + '/' + tot.total;
  }

  views.plan = function () {
    var tot = planTotals();
    var cur = planDayIndex();
    var flatIdx = 0;

    var h = '<h1>Revision plan</h1><p class="lede">' + esc(PLAN.intro) + '</p>';
    if (PLAN.legend) h += '<p class="small muted" style="margin:-14px 0 18px"><span class="rtag">recap</span> ' + esc(PLAN.legend) + '</p>';

    h += '<div class="grid four" style="margin-bottom:16px">' +
      statCard(tot.pct + '%', 'Plan complete') +
      statCard(tot.done + '/' + tot.total, 'Tasks ticked') +
      statCard(PLAN_DAYS.length, 'Days to go') +
      statCard(cur === null ? '—' : (cur < 0 ? 'soon' : (cur + 1 > PLAN_DAYS.length ? 'done' : 'Day ' + (cur + 1))), 'You are on') +
      '</div>';

    h += '<section class="panel"><div class="btn-row">' +
      '<label class="field" style="flex-direction:row;align-items:center;gap:8px">Start date' +
      '<input type="date" id="planStart" value="' + (state.plan.start || '') + '"></label>' +
      (state.plan.start ? '' : '<button class="btn btn-sm" id="planToday">Start today</button>') +
      '<span class="small muted">Set a start date and each day gets a calendar date, with today highlighted. Behind or ahead? Just carry on from the next unticked day — the order matters more than the dates.</span>' +
      '</div></section>';

    PLAN.weeks.forEach(function (w) {
      var wStart = flatIdx;
      var wTasks = 0, wDone = 0;
      w.days.forEach(function (day, di) {
        day.tasks.forEach(function (_, ti) {
          wTasks++;
          if (state.plan.done[taskKey(w.n, di, ti)]) wDone++;
        });
      });
      var wPct = wTasks ? Math.round(wDone / wTasks * 100) : 0;
      var isCurrent = cur !== null && cur >= wStart && cur < wStart + w.days.length;

      h += '<section class="panel area-card' + (isCurrent || wPct < 100 && cur === null && w.n === 1 ? ' open' : '') +
        '" data-area="week' + w.n + '">' +
        '<div class="area-head"><div class="n">' + w.n + '</div>' +
        '<div style="flex:1"><h3>' + esc(w.title) + '</h3>' +
        '<div class="small muted">' + esc(w.aim) + '</div></div>' +
        '<div class="pct" style="width:auto;margin-right:10px">' + wPct + '%</div>' +
        '<div class="chev">›</div></div>' +
        '<div class="area-body">';

      w.days.forEach(function (day, di) {
        var mine = flatIdx;
        flatIdx++;
        var complete = dayDone(w.n, di, day);
        var isToday = cur === mine;
        var mins = day.tasks.reduce(function (a, x) { return a + (x.m || 0); }, 0);

        h += '<div class="planday' + (complete ? ' done' : '') + (isToday ? ' today' : '') + '">' +
          '<div class="planday-head">' +
          '<span class="dnum">Day ' + (mine + 1) + '</span>' +
          '<b>' + esc(day.title) + '</b>' +
          (isToday ? '<span class="pill warn">today</span>' : '') +
          (complete ? '<span class="pill ok">done</span>' : '') +
          '<span class="small muted" style="margin-left:auto">' + mins + ' min' +
          (state.plan.start ? ' · ' + esc(dateForDay(mine)) : '') + '</span></div>';

        day.tasks.forEach(function (task, ti) {
          var k = taskKey(w.n, di, ti);
          var on = !!state.plan.done[k];
          h += '<label class="plantask' + (on ? ' done' : '') + (task.r ? ' recap' : '') + '">' +
            '<input type="checkbox" data-plan="' + k + '"' + (on ? ' checked' : '') + '>' +
            '<span class="txt">' + (task.r ? '<span class="rtag">recap</span>' : '') + esc(task.t) + '</span>' +
            '<span class="mins">' + task.m + 'm</span>' +
            (task.go ? '<button class="btn btn-sm" data-go="' + task.go + '"' +
              (task.open ? ' data-open="' + task.open + '"' : '') + '>Open</button>' : '') +
            '</label>';
        });

        h += '</div>';
      });

      h += '</div></section>';
    });

    return h;
  };


  /* ── Tutor notes ───────────────────────────────────────────────── */
  function notesToText() {
    var out = ['T LEVEL DSD - TUTOR NOTES', '=========================', '',
      NOTES.intro, '', 'Attempt a question before reading its answer.', ''];
    NOTES.sessions.forEach(function (ses) {
      out.push('');
      out.push('DAY ' + ses.day + ' - ' + ses.topic.toUpperCase());
      out.push(new Array(ses.topic.length + 10).join('-'));
      out.push(ses.date + ' | scored ' + ses.score);
      ses.questions.forEach(function (q) {
        out.push('');
        out.push('Q' + q.n + '. [' + q.cmd + ', ' + q.marks + ' marks] ' +
          (q.got ? 'you scored ' + q.got : 'not attempted'));
        out.push('');
        out.push('  ' + q.q);
        if (q.code) {
          out.push('');
          q.code.split(String.fromCharCode(10)).forEach(function (line) { out.push('      ' + line); });
        }
        out.push('');
        out.push('  HOW TO ANSWER: ' + q.how);
        out.push('');
        out.push('  MODEL ANSWER: ' + q.answer);
        if (q.cost) {
          out.push('');
          out.push('  WHAT IT COST YOU: ' + q.cost);
        }
        out.push('  ' + new Array(60).join('-'));
      });
    });
    return out.join(String.fromCharCode(10));
  }

  var NOTES = D.tutorNotes;

  /* Catch-up — condensed recovery for missed plan days */
  var CATCH = D.catchup;

  function catchupToText() {
    var L = String.fromCharCode(10);
    var out = ['T LEVEL DIGITAL — CATCH-UP', '', CATCH.intro, '', CATCH.howto, ''];
    CATCH.days.forEach(function (d) {
      out.push('');
      out.push('==================================================');
      out.push('DAY ' + d.day + ' — ' + d.title + '  (' + d.plan + ', area ' + d.area + ', ~' + d.mins + ' min)');
      out.push('==================================================');
      out.push('');
      out.push('WHY IT MATTERS: ' + d.why);
      d.core.forEach(function (c) {
        out.push('');
        out.push('-- ' + c.h + ' --');
        c.b.forEach(function (b) { out.push('  * ' + b); });
      });
      out.push('');
      out.push('-- TRAPS --');
      d.traps.forEach(function (t) { out.push('  ! ' + t); });
      out.push('');
      out.push('-- CHECKPOINT (from memory, no notes) --');
      out.push('  ' + d.check);
      out.push('');
      out.push('-- QUESTIONS --');
      d.qs.forEach(function (q) {
        out.push('');
        out.push('Q' + q.n + ' (' + q.marks + ' marks) ' + q.cmd);
        out.push(q.q);
      });
      out.push('');
      out.push('-- MODEL ANSWERS AND FEEDBACK --');
      d.qs.forEach(function (q) {
        var mk = markedQ(q.n);
        out.push('');
        out.push('Q' + q.n + ': ' + (mk ? mk.q.answer : q.a));
        if (mk && mk.q.got) out.push('  YOU SCORED: ' + mk.q.got);
        if (mk && mk.q.cost) out.push('  FEEDBACK: ' + mk.q.cost);
      });
    });
    return out.join(L);
  }

  /* A catch-up question and a tutor-notes question are the same question seen
     from two sides: the catch-up card is the material, the notes entry is the
     marking record. Match on the question number so a mark only ever lives in
     one place and the two can never drift apart. */
  function markedQ(n) {
    var notes = D.tutorNotes;
    for (var i = 0; i < notes.sessions.length; i++) {
      var qs = notes.sessions[i].questions;
      for (var j = 0; j < qs.length; j++) {
        if (qs[j].n === n) return { q: qs[j], day: notes.sessions[i].day };
      }
    }
    return null;
  }

  /* ── Catch-up answers ─────────────────────────────────────────────
     Answers are typed under each question and kept on this device. The
     site has no server, so nobody else can read them: "Send for marking"
     bundles every answered-but-unmarked question into one message to paste
     into the chat. Once a question is marked in the tutor notes, the score
     and feedback appear here automatically, matched on question number. */
  function cuAns(n) { return state.catchup.ans[n] || ''; }
  function hasAns(n) { return !!cuAns(n).trim(); }
  function cuFind(n) {
    var hit = null;
    CATCH.days.forEach(function (d) { d.qs.forEach(function (q) { if (String(q.n) === String(n)) hit = { d: d, q: q }; }); });
    return hit;
  }
  function cuPending() {
    var out = [];
    CATCH.days.forEach(function (d) {
      d.qs.forEach(function (q) { if (!markedQ(q.n) && hasAns(q.n)) out.push({ d: d, q: q }); });
    });
    return out;
  }
  function cuStatus(q) {
    var mk = markedQ(q.n);
    if (mk && mk.q.got) {
      return '<span class="pill ' + (parseInt(mk.q.got, 10) / q.marks >= 0.6 ? 'ok' : 'warn') + '">you scored ' + esc(mk.q.got) + '</span>';
    }
    if (mk) return '<span class="pill warn">marked · not attempted</span>';
    if (hasAns(q.n)) {
      return state.catchup.sent[q.n] ? '<span class="pill p1">sent · waiting to be marked</span>'
                                     : '<span class="pill p1">answered · ready to send</span>';
    }
    return '<span class="pill">not answered yet</span>';
  }
  function cuDayCount(d) {
    var n = 0;
    d.qs.forEach(function (q) { if (hasAns(q.n) || markedQ(q.n)) n++; });
    return 'answered ' + n + '/' + d.qs.length;
  }

  function cuSendText(pending) {
    var L = String.fromCharCode(10);
    var when = new Date().toLocaleString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
    var out = ['MARK THESE - catch-up answers',
      'Sent ' + when + ' · ' + pending.length + ' answer' + (pending.length === 1 ? '' : 's') +
      ' · Q' + pending[0].q.n + (pending.length > 1 ? '-Q' + pending[pending.length - 1].q.n : ''), ''];
    var lastDay = null;
    pending.forEach(function (x) {
      if (x.d.day !== lastDay) {
        out.push('== Day ' + x.d.day + ' · ' + x.d.title + ' ==', '');
        lastDay = x.d.day;
      }
      out.push('Q' + x.q.n + ' [' + x.q.marks + ' marks, ' + x.q.cmd + '] ' + x.q.q);
      cuAns(x.q.n).trim().split(/\r?\n/).forEach(function (line) { out.push('> ' + line); });
      out.push('');
    });
    return out.join(L);
  }

  function updateSendbar() {
    var bar = $('#cuBar');
    if (!bar) return;
    var n = cuPending().length;
    bar.hidden = n === 0;
    var c = $('#cuCount');
    if (c) c.textContent = n + ' answer' + (n === 1 ? '' : 's');
  }
  function refreshCuQuestion(n) {
    var hit = cuFind(n);
    if (!hit) return;
    var st = $('[data-custatus="' + n + '"]');
    if (st) st.innerHTML = cuStatus(hit.q);
    var dc = $('[data-cuday="' + hit.d.day + '"]');
    if (dc) dc.textContent = cuDayCount(hit.d);
  }

  views.catchup = function () {
    var totalQ = 0, answered = 0, markedQs = 0, doneDays = 0, totalMins = 0;
    CATCH.days.forEach(function (d) {
      totalMins += d.mins;
      if (state.catchup.done['d' + d.day]) doneDays++;
      d.qs.forEach(function (q) {
        totalQ++;
        if (markedQ(q.n)) markedQs++;
        else if (hasAns(q.n)) answered++;
      });
    });

    var h = crumbs([['Home', 'dash'], ['Catch-up', null]]) +
      pageHead('Catch-up', CATCH.intro, [
        [doneDays + '/' + CATCH.days.length, 'days done'], [answered + '', 'waiting to be marked'],
        [markedQs + '/' + totalQ, 'marked'], ['about ' + Math.round(totalMins / 60) + 'h', 'in total']
      ]);

    h += '<article class="topic-card doc"><section class="part"><h2 class="doc-h"><span class="ic" aria-hidden="true">✎</span>How marking works</h2>' +
      '<ol class="clean">' +
      '<li>Read the day, do the checkpoint from memory, then <b>type your answer in the box under each question</b>. It saves on this device as you type.</li>' +
      '<li>When you want them marked, press <b>Send for marking</b> at the bottom. It copies every answered question that has not been marked yet into one message — on a phone it opens the share menu instead.</li>' +
      '<li>Paste it into your chat with Claude and say <b>mark these</b>.</li>' +
      '<li>Once they are marked, your score and the feedback appear under each question here, next to your answer.</li>' +
      '</ol>' +
      '<div class="callout warn"><b>Answers stay on the device you typed them on</b><br>' +
      'If you answer on your phone at college, send them from your phone. Clearing your browser data deletes unsent answers.</div>' +
      '</section><section class="part"><h2 class="doc-h"><span class="ic" aria-hidden="true">↓</span>Working without signal</h2>' +
      '<p>' + esc(CATCH.howto) + '</p>' +
      '<div class="btn-row"><button class="btn btn-sm" id="exportCatchup">Download as text file</button>' +
      '<span class="small muted">Every day, question and model answer as plain text.</span></div></section></article>';

    h += '<div class="section-label">Days</div>';

    CATCH.days.forEach(function (d, di) {
      var done = !!state.catchup.done['d' + d.day];
      var dayGot = 0, dayPoss = 0, dayMarked = 0;
      d.qs.forEach(function (q) {
        var mk = markedQ(q.n);
        if (mk && mk.q.got) { dayMarked++; dayGot += parseInt(mk.q.got, 10) || 0; dayPoss += mk.q.marks; }
      });
      var firstOpen = !done && dayMarked < d.qs.length &&
        CATCH.days.slice(0, di).every(function (x) { return state.catchup.done['d' + x.day] || x.qs.every(function (q) { return markedQ(q.n); }); });

      h += '<section class="panel area-card' + (firstOpen ? ' open' : '') + '" data-area="cu' + d.day + '">' +
        '<div class="area-head"><div class="n">' + d.day + '</div>' +
        '<div style="flex:1"><h3>' + esc(d.title) + (done ? ' <span class="pill ok">done</span>' : '') + '</h3>' +
        '<div class="small muted">' + esc(d.plan) + ' · content area ' + esc(d.area) + ' · about ' + d.mins + ' min · ' +
        '<span data-cuday="' + d.day + '">' + cuDayCount(d) + '</span>' +
        (dayMarked ? ' · scored ' + dayGot + '/' + dayPoss : '') + '</div></div>' +
        '<div class="chev">›</div></div><div class="area-body">';

      h += '<div class="cu-sec"><p><b>Why this one matters.</b> ' + esc(d.why) + '</p></div>';
      d.core.forEach(function (c) {
        h += '<div class="cu-sec"><h4>' + esc(c.h) + '</h4><ul class="clean">' +
          c.b.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ul></div>';
      });
      h += '<div class="cu-sec"><div class="callout bad"><b>Traps</b><ul>' +
        d.traps.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul></div>' +
        '<div class="callout"><b>Checkpoint — close the page and write this from memory</b><br>' + esc(d.check) + '</div></div>';

      h += '<div class="cu-sec"><h4>Questions</h4>';
      d.qs.forEach(function (q) {
        var mk = markedQ(q.n);
        var mine = cuAns(q.n);
        h += '<div class="tnote" data-cuq="' + q.n + '">' +
          '<div class="tnote-head"><span class="qn">Q' + q.n + '</span>' +
          '<span class="pill">' + esc(q.cmd) + '</span><span class="small muted">' + q.marks + ' marks</span>' +
          '<span style="margin-left:auto" data-custatus="' + q.n + '">' + cuStatus(q) + '</span></div>' +
          '<div class="qq">' + esc(q.q) + '</div>';

        if (mk) {
          if (mk.q.how) h += '<div class="tnote-how"><b>How to answer</b><br>' + esc(mk.q.how) + '</div>';
          if (mine.trim()) h += '<div class="cu-mine"><b>Your answer</b><div>' + esc(mine) + '</div></div>';
          h += '<div class="qbox bare open">' +
            '<div class="btn-row"><button class="btn btn-sm" data-reveal="1">Model answer and feedback</button></div>' +
            '<div class="qa"><b>Model answer</b><p>' + esc(mk.q.answer) + '</p>' +
            (mk.q.cost ? '<div class="tnote-cost"><b>Feedback — what it cost you</b><br>' + esc(mk.q.cost) + '</div>' : '') +
            '</div></div>';
        } else {
          h += '<div class="cu-answer"><label class="small muted" for="cu-ans-' + q.n + '"><b>Your answer</b></label>' +
            '<textarea id="cu-ans-' + q.n + '" data-cuans="' + q.n + '" rows="' + (q.marks >= 6 ? 7 : 4) + '" ' +
            'placeholder="Type your answer here — aim for about ' + (q.marks <= 2 ? 'one line' : q.marks <= 4 ? q.marks + ' sentences' : 'a structured paragraph per point') + '.">' +
            esc(mine) + '</textarea>' +
            '<div class="saved" data-cusaved="' + q.n + '">' + (mine.trim() ? 'Saved on this device' : '') + '</div></div>' +
            '<div class="qbox bare">' +
            '<div class="btn-row"><button class="btn btn-sm" data-reveal="1">Show the model answer</button>' +
            '<span class="small muted">Answer first — reading it before you write teaches you nothing.</span></div>' +
            '<div class="qa"><b>Model answer</b><p>' + esc(q.a) + '</p></div></div>';
        }
        h += '</div>';
      });
      h += '</div>';

      h += '<div class="cu-sec"><label class="chk-day"><input type="checkbox" data-cudone="d' + d.day + '"' +
        (done ? ' checked' : '') + '> Mark day ' + d.day + ' as done</label></div>';
      h += '</div></section>';
    });

    var pend = cuPending().length;
    h += '<div class="sendbar" id="cuBar"' + (pend ? '' : ' hidden') + '>' +
      '<span class="grow"><b id="cuCount">' + pend + ' answer' + (pend === 1 ? '' : 's') + '</b> ready to be marked</span>' +
      '<button class="btn btn-accent btn-sm" id="cuSend" type="button">Send for marking</button></div>';
    return h;
  };

  views.notes = function () {
    var qTotal = 0, attempted = 0;
    NOTES.sessions.forEach(function (ses) {
      ses.questions.forEach(function (q) { qTotal++; if (q.got) attempted++; });
    });

    var h = '<h1>Tutor notes</h1><p class="lede">' + esc(NOTES.intro) + '</p>';

    h += '<div class="grid four" style="margin-bottom:16px">' +
      statCard(qTotal, 'Questions set') +
      statCard(attempted, 'Attempted') +
      statCard(qTotal - attempted, 'Still to do') +
      statCard(NOTES.sessions.length, 'Sessions') +
      '</div>';

    h += '<section class="panel" style="margin-bottom:16px"><div class="btn-row">' +
      '<button class="btn btn-sm" id="exportNotes">Download as text file</button>' +
      '<span class="small muted">Generated from this page, so the file and the site can never drift apart. ' +
      'Plain text — print it, or read it on a phone with no signal.</span></div></section>';

    NOTES.sessions.forEach(function (ses, si) {
      h += '<section class="panel area-card' + (si === NOTES.sessions.length - 1 ? ' open' : '') +
        '" data-area="ses' + si + '">' +
        '<div class="area-head"><div class="n">' + ses.day + '</div>' +
        '<div style="flex:1"><h3>' + esc(ses.topic) + '</h3>' +
        '<div class="small muted">Day ' + ses.day + ' · ' + esc(ses.date) + ' · scored ' + esc(ses.score) + '</div></div>' +
        '<div class="chev">›</div></div><div class="area-body">';

      ses.questions.forEach(function (q) {
        h += '<div class="tnote qbox">' +
          '<div class="tnote-head"><span class="qn">Q' + q.n + '</span>' +
          '<span class="pill">' + esc(q.cmd) + '</span>' +
          '<span class="small muted">' + q.marks + ' marks</span>' +
          (q.got ? '<span class="pill ' + (parseInt(q.got, 10) / q.marks >= 0.6 ? 'ok' : 'warn') +
            '" style="margin-left:auto">you scored ' + esc(q.got) + '</span>'
                 : '<span class="pill" style="margin-left:auto">not attempted</span>') +
          '</div>' +
          '<div class="qq">' + esc(q.q) + '</div>' +
          (q.code ? '<pre>' + esc(q.code) + '</pre>' : '') +
          '<div class="tnote-how"><b>How to answer</b><br>' + esc(q.how) + '</div>' +
          '<div class="btn-row"><button class="btn btn-sm" data-reveal="1">Model answer</button></div>' +
          '<div class="qa">' +
          '<b>Model answer</b><p>' + esc(q.answer) + '</p>' +
          (q.cost ? '<div class="tnote-cost"><b>What it cost you</b><br>' + esc(q.cost) + '</div>' : '') +
          '</div></div>';
      });

      h += '</div></section>';
    });

    return h;
  };

  /* Paper views */
  views.p1 = function () { return paperView(1); };
  views.p2 = function () { return paperView(2); };

  var PAPER_INFO = {
    1: { title: 'Core Paper 1', code: '19536',
         lede: 'Content areas 1 to 4: problem solving, programming, emerging issues and the impact of digital, and legislation. ' +
               'Section A is short-answer questions; Section B is five longer scenario questions that build in difficulty.' },
    2: { title: 'Core Paper 2', code: '19537',
         lede: 'Content areas 5 to 8: business context, data, digital environments, and security. ' +
               'Section A is short-answer questions; Section B is five longer scenario questions that build in difficulty.' }
  };

  function paperView(p) {
    var areas = AREAS.filter(function (a) { return a.paper === p; });
    var area = areas.filter(function (a) { return a.id === subPath(); })[0];
    return area ? areaPage(p, area, areas) : paperHub(p, areas);
  }

  function termCount(a) {
    return a.topics.reduce(function (n, t) { return n + (t.terms ? t.terms.length : 0); }, 0);
  }

  function paperHub(p, areas) {
    var info = PAPER_INFO[p];
    var topics = areas.reduce(function (n, a) { return n + a.topics.length; }, 0);
    var words = areas.reduce(function (n, a) { return n + termCount(a); }, 0);

    var h = crumbs([['Home', 'dash'], [info.title, null]]) +
      pageHead(info.title + ' · ' + info.code, info.lede, [
        ['2h 15m', 'exam'], ['90', 'marks'], ['30%', 'of the core grade'],
        [topics + '', 'topics'], [words + '', 'key words']
      ]);

    h += '<div class="section-label">Content areas</div><div class="hub-grid">';
    areas.forEach(function (a) {
      var pct = areaProgress(a);
      h += '<button class="hub-card" data-go="p' + p + '/' + a.id + '">' +
        '<span class="hub-top"><span class="hub-num">' + a.num + '</span><h3>' + esc(a.title) + '</h3></span>' +
        '<p>' + esc(a.blurb) + '</p>' +
        '<span class="hub-meta"><span class="pill">' + a.topics.length + ' topics</span>' +
        '<span class="pill">' + termCount(a) + ' key words</span>' + bar(pct) + '</span></button>';
    });
    h += '</div>';

    h += '<div class="callout" style="margin-top:22px"><b>Rate as you go</b><br>' +
      'Each topic has <b>R</b> · <b>A</b> · <b>G</b> buttons — red not secure, amber getting there, green confident. ' +
      'The bars above, the dashboard and your weak-topic list all come from those ratings.</div>';
    return h;
  }

  function areaPage(p, a, areas) {
    var info = PAPER_INFO[p];
    var h = crumbs([['Home', 'dash'], [info.title, 'p' + p], [a.num + '. ' + a.title, null]]) +
      '<header class="page-head"><h1>' + a.num + '. ' + esc(a.title) + '</h1>' +
      '<p class="lede">' + esc(a.blurb) + '</p>' +
      '<div class="facts"><span class="fact"><b>' + a.topics.length + '</b> topics</span>' +
      '<span class="fact"><b>' + termCount(a) + '</b> key words</span>' +
      '<span class="fact"><b data-area-conf="' + a.id + '">' + areaProgress(a) + '%</b> confident</span></div></header>';

    h += '<nav class="topic-index" aria-label="Topics in this area">' + a.topics.map(function (t) {
      return '<button class="chip" data-jump="' + t.id + '" title="' + esc(t.title) + '"><span class="dot c' + confOf(t.id) + '"></span>' +
        '<span class="cid">' + t.id + '</span><span class="ctext">' + esc(t.title) + '</span></button>';
    }).join('') + '</nav>';

    h += a.topics.map(topicCard).join('');

    var i = areas.indexOf(a), prev = areas[i - 1], next = areas[i + 1];
    var other = p === 1 ? 2 : 1;
    h += '<div class="pager">' +
      (prev ? '<button class="btn" data-go="p' + p + '/' + prev.id + '">‹ ' + prev.num + '. ' + esc(prev.title) + '</button>'
            : '<button class="btn" data-go="p' + p + '">‹ ' + info.title + '</button>') +
      (next ? '<button class="btn" data-go="p' + p + '/' + next.id + '">' + next.num + '. ' + esc(next.title) + ' ›</button>'
            : '<button class="btn" data-go="p' + other + '">' + PAPER_INFO[other].title + ' ›</button>') +
      '</div>';
    return h;
  }

  function confButtons(id) {
    var c = confOf(id);
    return '<span class="conf" data-conf="' + id + '" role="group" aria-label="How confident are you?">' +
      [1, 2, 3].map(function (v) {
        var name = v === 1 ? 'Not secure' : v === 2 ? 'Getting there' : 'Confident';
        return '<button data-v="' + v + '" class="' + (c === v ? 'on' : '') + '" title="' + name + '" aria-label="' + name + '"' +
          ' aria-pressed="' + (c === v) + '">' + (v === 1 ? 'R' : v === 2 ? 'A' : 'G') + '</button>';
      }).join('') + '</span>';
  }

  function topicCard(t) {
    var h = '<article class="topic-card" id="topic-' + t.id.replace('.', '-') + '" data-topic="' + t.id + '">' +
      '<header class="topic-card-head"><span class="tid">' + t.id + '</span><h2>' + esc(t.title) + '</h2>' +
      confButtons(t.id) + '</header>';

    h += '<section class="part"><h3 class="part-h"><span class="ic" aria-hidden="true">✓</span>What you must know</h3>' +
      '<ul class="clean">' + t.must.map(function (m) { return '<li>' + fmt(m) + '</li>'; }).join('') + '</ul></section>';

    if (t.terms && t.terms.length) {
      h += '<section class="part"><h3 class="part-h"><span class="ic" aria-hidden="true">◆</span>Key words</h3>' +
        blockHTML({ kw: t.terms }) + '</section>';
    }
    if (t.exam && t.exam.length) {
      h += '<section class="part"><h3 class="part-h"><span class="ic" aria-hidden="true">✎</span>Exam-style questions</h3>' +
        t.exam.map(function (q, i) {
          var qid = areaOf(t.id) + '|' + t.id + '|' + i;
          return '<div class="qbox"><div class="qq"><span class="pill p1">' + q.marks + ' marks</span> ' + esc(q.q) + '</div>' +
            markingPanelHTML(qid, { hideQuestion: true }) + '</div>';
        }).join('') + '</section>';
    }
    return h + '</article>';
  }

  /* ESP — a hub of task cards, then one page per task. */
  views.esp = function () {
    var E = D.esp;
    var page = E.pages.filter(function (p) { return p.id === subPath(); })[0];
    if (page) {
      return crumbs([['Home', 'dash'], ['Employer Set Project', 'esp'], [page.code, null]]) +
        pageHead(page.code + ' — ' + page.title, page.summary, page.facts) +
        docBody(page.parts) + pager('esp', E.pages, page.id);
    }
    return crumbs([['Home', 'dash'], ['Employer Set Project', null]]) +
      pageHead(E.name + ' · ' + E.paper, E.intro, E.facts) +
      '<div class="section-label">The tasks</div><div class="hub-grid">' +
      E.pages.map(function (p) { return hubCard('esp', p); }).join('') + '</div>' +
      '<div class="section-label">Overview</div>' + docBody(E.hub);
  };

  /* Occupational Specialism — the four tasks, then the skills to build it. */
  views.os = function () {
    var O = D.os, id = subPath();
    var task = O.tasks.filter(function (p) { return p.id === id; })[0];
    var skill = O.skills.filter(function (p) { return p.id === id; })[0];
    var page = task || skill;
    if (page) {
      var group = task ? O.tasks : O.skills;
      return crumbs([['Home', 'dash'], ['Occupational Specialism', 'os'], [page.code, null]]) +
        pageHead(page.code + ' — ' + page.title, page.summary, page.facts) +
        docBody(page.parts) + pager('os', group, page.id);
    }
    return crumbs([['Home', 'dash'], ['Occupational Specialism', null]]) +
      pageHead(O.name + ' · ' + O.paper, O.intro, O.facts) +
      '<div class="section-label">The four tasks</div><div class="hub-grid">' +
      O.tasks.map(function (p) { return hubCard('os', p); }).join('') + '</div>' +
      '<div class="section-label">Skills you need to build it</div><div class="hub-grid">' +
      O.skills.map(function (p) { return hubCard('os', p); }).join('') + '</div>' +
      '<div class="section-label">Overview</div>' + docBody(O.hub);
  };

  /* The HTML / CSS / JS / SQL section now lives inside the Occupational
     Specialism. Old bookmarks land on its first skill page. */
  views.webdev = function () { setTimeout(function () { location.replace('#os/html'); }, 0); return ''; };

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
      h += '<div class="explain"><b>' + (quiz.picked === q.ans ? 'Correct.' : 'Not quite.') + '</b> ' + esc(q.why) + '</div>';
      if (quiz.picked !== q.ans) h += tutorPanelHTML(q);
      h += '<div class="btn-row" style="margin-top:14px"><button class="btn btn-accent" id="nextQ">' +
        (quiz.i + 1 >= quiz.qs.length ? 'See results' : 'Next question') + '</button>' +
        '<button class="btn" id="endQ">End quiz</button></div>';
    }
    h += '</section>';
    return h;
  };

  /* ── Tutor: understand a question you got wrong ─────────────────── */
  var tutor = { open: false, history: [], busy: false, err: '', keyForm: false };

  function tutorCtx(q) {
    return { q: q.q, options: q.o, picked: quiz.picked, answer: q.ans, why: q.why, topic: labelFor(q.area) + ' · ' + q.t };
  }
  function resetTutor() {
    tutor = { open: false, history: [], busy: false, err: '', keyForm: false };
  }
  /* Light formatting for the reply — bold and paragraphs, nothing more. */
  function fmtReply(text) {
    return esc(text)
      .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
      .split(/\n\s*\n/).map(function (p) { return '<p>' + p.replace(/\n/g, '<br>') + '</p>'; }).join('');
  }

  function tutorPanelHTML(q) {
    var h = '<div class="tutor">';

    if (!tutor.open) {
      return h + '<div class="btn-row">' +
        '<button class="btn btn-sm" id="askTutor">Help me understand this</button>' +
        '<button class="btn btn-sm" id="copyTutor">Copy for my 5pm tutor</button>' +
        '</div></div>';
    }

    h += '<div class="tutor-head"><b>Tutor</b><button class="btn btn-sm" id="closeTutor">Close</button></div>';

    if (tutor.keyForm || !TLTUTOR.hasKey()) {
      h += '<p class="small muted">In-page chat needs your own Anthropic API key. It is saved in this browser only — never in the site, never uploaded — and is sent only to Anthropic. Each reply costs you a small amount. On a shared or unlocked device, use the copy button instead.</p>' +
        '<div class="btn-row"><input type="password" id="keyInput" placeholder="sk-ant-…" style="flex:1;min-width:200px" value="">' +
        '<button class="btn btn-accent btn-sm" id="saveKey">Save key</button></div>' +
        (TLTUTOR.hasKey() ? '<p class="small muted" style="margin-top:8px">Saved: <span class="mono">' + esc(TLTUTOR.maskKey()) + '</span> · <button class="btn btn-sm" id="forgetKey">Forget it</button></p>' : '') +
        '<p class="small muted" style="margin-bottom:0"><a href="https://console.anthropic.com/settings/keys" target="_blank" rel="noopener">Get a key</a> · model: ' + esc(TLTUTOR.model) + '</p>';
      return h + '</div>';
    }

    tutor.history.forEach(function (m) {
      h += '<div class="tmsg ' + m.role + '">' +
        (m.role === 'user' ? esc(m.content) : fmtReply(m.content)) + '</div>';
    });

    if (tutor.busy) h += '<div class="tmsg assistant busy">Thinking…</div>';
    if (tutor.err) h += '<div class="tmsg err">' + esc(tutor.err) + '</div>';

    h += '<div class="btn-row" style="margin-top:10px">' +
      '<input type="text" id="tutorInput" placeholder="Ask a follow-up…" style="flex:1;min-width:200px">' +
      '<button class="btn btn-accent btn-sm" id="tutorSend"' + (tutor.busy ? ' disabled' : '') + '>Send</button>' +
      '<button class="btn btn-sm" id="tutorKeyBtn">Key</button></div>';

    return h + '</div>';
  }

  function tutorSend(q, text) {
    tutor.history.push({ role: 'user', content: text });
    tutor.busy = true; tutor.err = '';
    render();
    TLTUTOR.ask(tutorCtx(q), tutor.history, function (reply) {
      tutor.history.push({ role: 'assistant', content: reply });
      tutor.busy = false;
      render();
    }, function (msg) {
      tutor.busy = false; tutor.err = msg;
      render();
    });
  }

  function quizSetup() {
    var acc = state.quiz.asked ? Math.round(state.quiz.right / state.quiz.asked * 100) : 0;
    var h = '<h1>Quiz</h1><p class="lede">' + D.quiz.length + ' multiple-choice questions across the whole qualification. Every answer explains itself, so a wrong answer is worth as much as a right one.</p>';

    h += '<section class="panel"><div class="grid three">' +
      '<label class="field">Topic<select id="qArea">' +
      '<optgroup label="Papers only">' +
      '<option value="paper1">All of Paper 1 (areas 1–4)</option>' +
      '<option value="paper2">All of Paper 2 (areas 5–8)</option>' +
      '<option value="weak">My weakest areas</option>' +
      '</optgroup>' +
      '<optgroup label="Paper 1 — single area">' + AREAS.filter(function (a) { return a.paper === 1; }).map(areaOpt).join('') + '</optgroup>' +
      '<optgroup label="Paper 2 — single area">' + AREAS.filter(function (a) { return a.paper === 2; }).map(areaOpt).join('') + '</optgroup>' +
      '<optgroup label="Projects">' +
      '<option value="esp">Employer Set Project</option><option value="os">Occupational Specialism</option>' +
      '</optgroup>' +
      '<option value="all">Everything (includes ESP and OS)</option>' +
      '</select></label>' +
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

  /* The question bank was authored with the correct option written first.
     Options are shuffled per attempt and the answer index remapped, so the
     position of the correct answer is random every time. */
  function shuffleOptions(q) {
    var order = shuffle(q.o.map(function (_, i) { return i; }));
    return {
      area: q.area, t: q.t, q: q.q, why: q.why,
      o: order.map(function (i) { return q.o[i]; }),
      ans: order.indexOf(q.ans)
    };
  }

  function startQuiz() {
    var sel = $('#qArea') ? $('#qArea').value : 'all';
    var n = $('#qCount') ? parseInt($('#qCount').value, 10) : 10;
    var pool;
    if (sel === 'all') pool = D.quiz;
    else if (sel === 'paper1' || sel === 'paper2') {
      var wantPaper = sel === 'paper1' ? 1 : 2;
      var ids = AREAS.filter(function (a) { return a.paper === wantPaper; })
        .map(function (a) { return a.id; });
      pool = D.quiz.filter(function (q) { return ids.indexOf(q.area) !== -1; });
    }
    else if (sel === 'weak') {
      var weakAreas = AREAS.filter(function (a) { return areaProgress(a) < 60; }).map(function (a) { return a.id; });
      pool = D.quiz.filter(function (q) { return weakAreas.indexOf(q.area) !== -1; });
      if (!pool.length) pool = D.quiz;
    } else pool = D.quiz.filter(function (q) { return q.area === sel; });

    quiz.qs = shuffle(pool).slice(0, Math.min(n, pool.length)).map(shuffleOptions);
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

  /* ── Written answers and self-marking ──────────────────────────── */
  var ALL_EXAMS = (function () {
    var out = [];
    AREAS.forEach(function (a) {
      a.topics.forEach(function (t) {
        (t.exam || []).forEach(function (e, i) {
          out.push({ id: a.id + '|' + t.id + '|' + i, exam: e, area: a, topic: t });
        });
      });
    });
    return out;
  })();
  function examById(id) {
    return ALL_EXAMS.filter(function (x) { return x.id === id; })[0];
  }

  var marked = {};    /* transient: qid -> analysis result */
  var selfMark = {};  /* transient: qid -> { pointIndex: true } */

  function runMarking(qid, text) {
    var rec = examById(qid);
    if (!rec) return;
    var pts = TLMARK.derivePoints(rec.exam.a);
    marked[qid] = {
      analysis: TLMARK.analyse(text, rec.exam),
      matches: TLMARK.matchPoints(text, pts),
      points: pts
    };
    /* pre-tick the points the engine thinks you hit, for you to correct */
    var pre = {};
    marked[qid].matches.forEach(function (m, i) { if (m.hit === 'likely') pre[i] = true; });
    selfMark[qid] = pre;
  }

  function suggestedMark(qid) {
    var m = marked[qid];
    if (!m) return 0;
    var total = 0;
    m.points.forEach(function (p, i) { if (selfMark[qid] && selfMark[qid][i]) total += (p.marks || 1); });
    var rec = examById(qid);
    return Math.min(total, rec ? rec.exam.marks : total);
  }

  function markingPanelHTML(qid, opts) {
    opts = opts || {};
    var rec = examById(qid);
    if (!rec) return '';
    var e = rec.exam;
    var saved = state.written.ans[qid] || '';
    var prev = state.written.marks[qid];
    var res = marked[qid];

    var h = '<div class="answer-box" data-abox="' + qid + '">';

    if (!opts.hideQuestion) {
      h += '<div class="qq" style="margin-bottom:10px">[' + e.marks + ' marks] ' + esc(e.q) + '</div>';
    }

    h += '<textarea data-ans="' + qid + '" rows="' + (e.marks >= 6 ? 10 : 5) +
      '" placeholder="Write your answer here, as you would in the exam…">' + esc(saved) + '</textarea>';

    h += '<div class="btn-row" style="margin-top:8px">' +
      '<button class="btn btn-accent btn-sm" data-mark="' + qid + '">Mark my answer</button>' +
      '<button class="btn btn-sm" data-reveal="1">Model answer</button>' +
      '<button class="btn btn-sm" data-copyq="' + qid + '">Copy for tutor</button>' +
      (prev ? '<span class="pill ok">last: ' + prev.mark + '/' + prev.of + '</span>' : '') +
      '<span class="small muted">' + (TLMARK.isLevelsBased(e) ? 'levels-marked · aim for ~' + (e.marks * 28) + ' words' : e.marks + ' marking points') + '</span>' +
      '</div>';

    if (res) {
      h += '<div class="mark-result">';

      /* structural checks */
      h += '<div class="sub-h">Structural check</div>';
      res.analysis.checks.forEach(function (c) {
        h += '<div class="chk-line ' + (c.ok ? 'ok' : 'bad') + '"><span class="ic">' + (c.ok ? '✓' : '✗') +
          '</span><div><b>' + esc(c.k) + '</b> — ' + esc(c.msg) + '</div></div>';
      });

      if (res.analysis.estimate) {
        var est = res.analysis.estimate;
        h += '<div class="level-est l' + est.level + '">Structure suggests <b>Level ' + est.level +
          '</b> — typically ' + est.band + ' marks. This is a structural estimate, not a mark: only the content decides it.</div>';
      }

      /* marking points */
      h += '<div class="sub-h">Marking points — tick the ones you actually made</div>' +
        '<p class="small muted" style="margin:0 0 8px">Pre-ticked where your wording looks like the mark scheme. The site cannot read meaning, so correct it honestly — deciding this yourself is how you learn the mark scheme.</p>';

      res.matches.forEach(function (m, i) {
        var on = selfMark[qid] && selfMark[qid][i];
        h += '<label class="mpoint ' + m.hit + '"><input type="checkbox" data-mp="' + qid + '|' + i + '"' +
          (on ? ' checked' : '') + '>' +
          '<span class="tag">' + (m.hit === 'likely' ? 'likely hit' : m.hit === 'partial' ? 'partial' : 'not seen') + '</span>' +
          '<span class="txt">' + esc(m.point.text) + (m.point.marks > 1 ? ' <b>(' + m.point.marks + ')</b>' : '') + '</span></label>';
      });

      /* your mark */
      h += '<div class="mark-row"><b>Your mark:</b> ' +
        '<input type="number" min="0" max="' + e.marks + '" value="' + suggestedMark(qid) + '" data-yourmark="' + qid + '"> / ' + e.marks +
        ' <button class="btn btn-sm btn-accent" data-savemark="' + qid + '">Save mark</button></div>';

      /* tips */
      h += '<div class="sub-h">How to improve this answer</div>' + listOf(TLMARK.tips(res.analysis, res.matches));
      h += '</div>';
    }

    h += '<div class="qa model-ans"><b>Model answer</b><br>' + esc(e.a) + '</div>';
    h += '</div>';
    return h;
  }

  /* Written practice — rolls questions at you */
  var written = { current: null, scope: 'all' };

  function pickQuestion() {
    var pool = ALL_EXAMS.filter(function (x) {
      if (written.scope === 'p1') return x.area.paper === 1;
      if (written.scope === 'p2') return x.area.paper === 2;
      if (written.scope === 'long') return x.exam.marks >= 6;
      if (written.scope === 'short') return x.exam.marks < 6;
      if (written.scope === 'weak') return confOf(x.topic.id) < 3;
      return true;
    });
    if (!pool.length) pool = ALL_EXAMS;
    /* prefer questions not attempted recently */
    var fresh = pool.filter(function (x) { return !state.written.marks[x.id]; });
    var from = fresh.length ? fresh : pool;
    return from[Math.floor(Math.random() * from.length)].id;
  }

  views.written = function () {
    var hist = state.written.history;
    var totalGot = 0, totalOf = 0;
    hist.forEach(function (r) { totalGot += r.mark; totalOf += r.of; });
    var pct = totalOf ? Math.round(totalGot / totalOf * 100) : 0;

    var h = '<h1>Written practice</h1>' +
      '<p class="lede">Rolls exam-style questions at you, one at a time. Write your answer, then the site checks it against the model answer\'s marking points and against the structural criteria the levels-based mark schemes actually reward — then you award the mark yourself.</p>';

    h += '<div class="grid four" style="margin-bottom:16px">' +
      statCard(hist.length, 'Answers marked') +
      statCard(totalOf ? pct + '%' : '—', 'Average score') +
      statCard(totalGot + '/' + totalOf, 'Marks earned') +
      statCard(ALL_EXAMS.length, 'Questions available') +
      '</div>';

    h += '<section class="panel"><div class="btn-row">' +
      '<label class="field" style="flex-direction:row;align-items:center;gap:8px">Scope' +
      '<select id="wScope">' +
      [['all', 'Everything'], ['p1', 'Paper 1 only'], ['p2', 'Paper 2 only'],
       ['long', 'Extended answers (6+ marks)'], ['short', 'Short answers'], ['weak', 'My weak topics']]
        .map(function (o) {
          return '<option value="' + o[0] + '"' + (written.scope === o[0] ? ' selected' : '') + '>' + o[1] + '</option>';
        }).join('') + '</select></label>' +
      '<button class="btn btn-accent" id="rollQ">' + (written.current ? 'Roll another question' : 'Roll a question') + '</button>' +
      '</div></section>';

    if (written.current) {
      var rec = examById(written.current);
      if (rec) {
        var mins = Math.round(rec.exam.marks * 1.5);
        h += '<section class="panel" style="margin-top:14px">' +
          '<div class="task-head"><span class="pill p' + rec.area.paper + '">Paper ' + rec.area.paper + '</span>' +
          '<span class="small muted">' + esc(rec.area.num + '. ' + rec.area.title + ' · ' + rec.topic.id + ' ' + rec.topic.title) + '</span>' +
          '<span class="pill">' + rec.exam.marks + ' marks · ~' + mins + ' min</span></div>' +
          markingPanelHTML(written.current) + '</section>';
      }
    }

    if (hist.length) {
      h += '<h2>Your record</h2><section class="panel">';
      var byArea = {};
      hist.forEach(function (r) {
        var s = byArea[r.area] || { got: 0, of: 0, n: 0 };
        s.got += r.mark; s.of += r.of; s.n++;
        byArea[r.area] = s;
      });
      Object.keys(byArea).sort(function (a, b) {
        return (byArea[a].got / byArea[a].of) - (byArea[b].got / byArea[b].of);
      }).forEach(function (k) {
        var s = byArea[k];
        h += '<div class="progress-row"><div class="name">' + esc(labelFor(k)) +
          ' <span class="small muted">· ' + s.n + ' answered</span></div>' +
          bar(Math.round(s.got / s.of * 100)) + '</div>';
      });

      h += '<div class="sub-h">Recent attempts</div><table class="mtable"><tbody>' +
        hist.slice(-12).reverse().map(function (r) {
          var p = Math.round(r.mark / r.of * 100);
          var col = p < 50 ? 'var(--red)' : p < 75 ? 'var(--amber)' : 'var(--green)';
          return '<tr><td class="small">' + esc(r.q) + '</td>' +
            '<td class="mono" style="white-space:nowrap;color:' + col + '">' + r.mark + '/' + r.of + '</td>' +
            '<td class="small muted" style="white-space:nowrap">' + esc(r.date) + '</td></tr>';
        }).join('') + '</tbody></table></section>';
    }

    return h;
  };

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
    function pageText(page) {
      var bits = [page.code, page.title, page.summary];
      page.parts.forEach(function (part) {
        bits.push(part.h);
        part.blocks.forEach(function (b) {
          if (b.p) bits.push(b.p);
          if (b.ul) bits.push(b.ul.join(' '));
          if (b.ol) bits.push(b.ol.join(' '));
          if (b.table) bits.push(b.table.rows.map(function (r) { return r.join(' '); }).join(' '));
          if (b.code) bits.push(b.code.title + ' ' + (b.code.note || '') + ' ' + b.code.src);
          if (b.callout) bits.push((b.callout.title || '') + ' ' + (b.callout.text || '') + ' ' + (b.callout.list || []).join(' '));
          if (b.check) bits.push(b.check.items.join(' '));
        });
      });
      return bits.join(' ').replace(/\*\*|`/g, '');
    }
    D.esp.pages.forEach(function (pg) {
      idx.push({ text: pageText(pg), title: pg.code + ' — ' + pg.title, snippet: pg.summary,
        where: 'Employer Set Project', go: 'esp/' + pg.id });
    });
    D.os.tasks.concat(D.os.skills).forEach(function (pg) {
      idx.push({ text: pageText(pg), title: pg.code + ' — ' + pg.title, snippet: pg.summary,
        where: 'Occupational Specialism', go: 'os/' + pg.id });
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
    codeStore = [];
    var v = currentView();
    var html = searchTerm ? searchView(searchTerm) : (views[v] || views.dash)();
    $('#view').innerHTML = html;
    renderNav();
    window.scrollTo(0, 0);
    if (!searchTerm) restoreOpen();
  }

  var pendingOpen = null;
  /* After navigating to an area page from the plan, dashboard or search,
     scroll to the topic that was asked for. */
  function restoreOpen() {
    if (!pendingOpen) return;
    var id = pendingOpen;
    pendingOpen = null;
    var el = $('[data-topic="' + id + '"]');
    if (el) setTimeout(function () { scrollToEl(el); }, 30);
  }

  /* ── Events ────────────────────────────────────────────────────── */
  document.addEventListener('click', function (e) {
    var t = e.target;

    var goBtn = t.closest('[data-go]');
    if (goBtn) {
      /* The plan's Open buttons sit inside a <label>, whose default action
         would also tick the checkbox. */
      if (goBtn.closest('.plantask')) e.preventDefault();
      var dest = goBtn.getAttribute('data-go');
      var openTarget = goBtn.getAttribute('data-open');
      if (openTarget) dest = routeForOpen(openTarget, dest);
      searchTerm = ''; $('#search').value = '';
      document.body.classList.remove('nav-open');
      if ('#' + dest === location.hash) render(); else go(dest);
      return;
    }

    var openBtn = t.closest('[data-open]');
    if (openBtn) {
      var dest2 = routeForOpen(openBtn.getAttribute('data-open'), null);
      searchTerm = ''; $('#search').value = '';
      if ('#' + dest2 === location.hash) render(); else go(dest2);
      return;
    }

    /* jump chips: topics on an area page, parts on a document page */
    var jump = t.closest('[data-jump]');
    if (jump) {
      var target = $('[data-topic="' + jump.getAttribute('data-jump') + '"]');
      scrollToEl(target);
      return;
    }
    var jumpPart = t.closest('[data-jump-part]');
    if (jumpPart) {
      var sec = $('#part-' + jumpPart.getAttribute('data-jump-part'));
      scrollToEl(sec);
      return;
    }

    /* copy buttons on code samples */
    var copyBtn = t.closest('[data-copy]');
    if (copyBtn) {
      copyText(codeStore[+copyBtn.getAttribute('data-copy')] || '', copyBtn);
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
      var dot = $('.chip[data-jump="' + id + '"] .dot');
      if (dot) dot.className = 'dot c' + state.conf[id];
      var ac = $('[data-area-conf="' + areaOf(id) + '"]');
      var owning = AREAS.filter(function (x) { return x.id === areaOf(id); })[0];
      if (ac && owning) ac.textContent = areaProgress(owning) + '%';
      $$('button', wrap).forEach(function (b) { b.setAttribute('aria-pressed', b.classList.contains('on')); });
      renderNav();
      return;
    }

    if (t.closest('.topic-head')) { t.closest('.topic').classList.toggle('open'); return; }
    if (t.closest('.area-head')) { t.closest('.area-card').classList.toggle('open'); return; }

    if (t.matches('[data-reveal]')) {
      var host = t.closest('.qbox') || t.closest('.answer-box');
      if (host) host.classList.toggle('open');
      return;
    }

    if (t.matches('[data-chk]')) {
      var k = t.getAttribute('data-chk');
      state.chk[k] = t.checked;
      t.closest('li').classList.toggle('done', t.checked);
      save();
      return;
    }

    if (t.id === 'expandAll') { $$('.area-card').forEach(function (c) { c.classList.add('open'); }); return; }
    if (t.id === 'collapseAll') { $$('.area-card,.topic').forEach(function (c) { c.classList.remove('open'); }); return; }

    if (t.id === 'toTop') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    if (t.id === 'menuBtn') { document.body.classList.toggle('nav-open'); return; }
    /* tapping the dimmed overlay closes the drawer */
    if (document.body.classList.contains('nav-open') && !t.closest('.sidebar')) {
      document.body.classList.remove('nav-open');
      return;
    }
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
    /* tutor */
    if (t.id === 'askTutor') {
      tutor.open = true;
      if (!TLTUTOR.hasKey()) { tutor.keyForm = true; render(); return; }
      tutorSend(quiz.qs[quiz.i], 'Why is my answer wrong, and why is the correct one right?');
      return;
    }
    if (t.id === 'closeTutor') { resetTutor(); render(); return; }
    if (t.id === 'tutorKeyBtn') { tutor.keyForm = true; render(); return; }
    if (t.id === 'forgetKey') { TLTUTOR.setKey(''); tutor.keyForm = true; render(); return; }
    if (t.id === 'saveKey') {
      var kin = $('#keyInput');
      var val = kin ? kin.value.trim() : '';
      if (!val) { if (kin) kin.focus(); return; }
      TLTUTOR.setKey(val);
      tutor.keyForm = false;
      if (!tutor.history.length) {
        tutorSend(quiz.qs[quiz.i], 'Why is my answer wrong, and why is the correct one right?');
      } else render();
      return;
    }
    if (t.id === 'tutorSend') {
      var tin = $('#tutorInput');
      var msg = tin ? tin.value.trim() : '';
      if (!msg || tutor.busy) return;
      tutorSend(quiz.qs[quiz.i], msg);
      return;
    }
    if (t.id === 'copyTutor') {
      var qq = quiz.qs[quiz.i];
      if (navigator.clipboard) {
        navigator.clipboard.writeText(TLTUTOR.clipboardText(tutorCtx(qq))).then(function () {
          t.textContent = 'Copied ✓';
          setTimeout(function () { t.textContent = 'Copy for my 5pm tutor'; }, 1600);
        });
      }
      return;
    }

    if (t.id === 'nextQ') { quiz.i++; quiz.answered = false; quiz.picked = -1; resetTutor(); render(); return; }
    if (t.id === 'endQ') { quiz.qs = quiz.qs.slice(0, quiz.i + 1); quiz.i = quiz.qs.length; render(); return; }
    if (t.id === 'againQ') { quiz.running = false; resetTutor(); render(); return; }

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
    if (t.id === 'cuSend') {
      var pending = cuPending();
      if (!pending.length) return;
      var text = cuSendText(pending);
      var markSent = function () {
        pending.forEach(function (x) { state.catchup.sent[x.q.n] = Date.now(); refreshCuQuestion(x.q.n); });
        save();
      };
      var mobile = /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);
      if (mobile && navigator.share) {
        navigator.share({ title: 'Catch-up answers for marking', text: text })
          .then(markSent, function () { /* share sheet closed: nothing sent */ });
      } else {
        copyText(text, t);
        markSent();
        var g = $('#cuBar .grow');
        if (g) g.innerHTML = '<b>Copied.</b> Paste it into your chat with Claude and say <b>mark these</b>.';
      }
      return;
    }
    if (t.id === 'exportCatchup') {
      var cblob = new Blob([catchupToText()], { type: 'text/plain' });
      var ca = document.createElement('a');
      ca.href = URL.createObjectURL(cblob);
      ca.download = 'tlevel-catchup.txt';
      document.body.appendChild(ca);
      ca.click();
      setTimeout(function () { URL.revokeObjectURL(ca.href); ca.remove(); }, 500);
      return;
    }
    if (t.id === 'exportNotes') {
      var blob = new Blob([notesToText()], { type: 'text/plain' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'tlevel-tutor-notes.txt';
      document.body.appendChild(a);
      a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
      return;
    }

    /* written answers */
    var markBtn = t.closest('[data-mark]');
    if (markBtn) {
      var mid = markBtn.getAttribute('data-mark');
      var ta = $('textarea[data-ans="' + mid + '"]');
      var txt = ta ? ta.value : '';
      if (!txt.trim()) { if (ta) ta.focus(); return; }
      state.written.ans[mid] = txt;
      save();
      runMarking(mid, txt);
      render();
      var box = $('[data-abox="' + mid + '"]');
      if (box) setTimeout(function () { box.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 40);
      return;
    }
    var saveBtn = t.closest('[data-savemark]');
    if (saveBtn) {
      var sid = saveBtn.getAttribute('data-savemark');
      var rec = examById(sid);
      var inp = $('input[data-yourmark="' + sid + '"]');
      if (!rec || !inp) return;
      var got = Math.max(0, Math.min(rec.exam.marks, parseInt(inp.value, 10) || 0));
      state.written.marks[sid] = { mark: got, of: rec.exam.marks, date: new Date().toISOString().slice(0, 10) };
      state.written.history.push({
        qid: sid, q: rec.exam.q.slice(0, 90), mark: got, of: rec.exam.marks,
        area: rec.area.id, date: new Date().toISOString().slice(0, 10)
      });
      save();
      render();
      return;
    }
    var copyBtn = t.closest('[data-copyq]');
    if (copyBtn) {
      var cid = copyBtn.getAttribute('data-copyq');
      var crec = examById(cid);
      var cta = $('textarea[data-ans="' + cid + '"]');
      if (!crec) return;
      var payload = 'Mark this against the T Level DSD mark scheme. State the Level and what would move it up.\n\n' +
        'QUESTION [' + crec.exam.marks + ' marks]: ' + crec.exam.q + '\n\n' +
        'MY ANSWER:\n' + (cta ? cta.value : '');
      if (navigator.clipboard) {
        navigator.clipboard.writeText(payload).then(function () {
          copyBtn.textContent = 'Copied ✓';
          setTimeout(function () { copyBtn.textContent = 'Copy for tutor'; }, 1600);
        });
      }
      return;
    }
    if (t.id === 'rollQ') { written.current = pickQuestion(); render(); return; }
    if (t.id === 'planToday') {
      state.plan.start = new Date().toISOString().slice(0, 10);
      save(); render(); return;
    }
  });

  document.addEventListener('change', function (e) {
    var t = e.target;
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
    if (t.id === 'wScope') { written.scope = t.value; render(); }
    if (t.matches('[data-plan]')) {
      state.plan.done[t.getAttribute('data-plan')] = t.checked;
      save();
      updatePlanCounters(t);
    }
    if (t.matches('[data-cudone]')) {
      state.catchup.done[t.getAttribute('data-cudone')] = t.checked;
      save();
      render();
    }
    if (t.id === 'planStart') { state.plan.start = t.value; save(); render(); }
    /* ticking a marking point updates the suggested mark live, without a redraw */
    if (t.matches('[data-mp]')) {
      var parts3 = t.getAttribute('data-mp').split('|');
      var mqid = parts3[0] + '|' + parts3[1] + '|' + parts3[2];
      var pi = parseInt(parts3[3], 10);
      selfMark[mqid] = selfMark[mqid] || {};
      selfMark[mqid][pi] = t.checked;
      var box = $('input[data-yourmark="' + mqid + '"]');
      if (box) box.value = suggestedMark(mqid);
    }
  });

  var cuTimers = {};
  document.addEventListener('input', function (e) {
    if (!e.target.matches || !e.target.matches('textarea[data-cuans]')) return;
    var n = e.target.getAttribute('data-cuans');
    var val = e.target.value;
    var note = $('[data-cusaved="' + n + '"]');
    if (note) note.textContent = 'Saving…';
    clearTimeout(cuTimers[n]);
    cuTimers[n] = setTimeout(function () {
      state.catchup.ans[n] = val;
      delete state.catchup.sent[n];        /* edited since sending: send again */
      save();
      if (note) note.textContent = val.trim() ? 'Saved on this device' : '';
      refreshCuQuestion(n);
      updateSendbar();
    }, 300);
  });

  var ansTimer;
  document.addEventListener('input', function (e) {
    if (e.target.matches && e.target.matches('textarea[data-ans]')) {
      var aid = e.target.getAttribute('data-ans');
      var val = e.target.value;
      clearTimeout(ansTimer);
      ansTimer = setTimeout(function () { state.written.ans[aid] = val; save(); }, 400);
    }
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

  /* The back-to-top button appears once a page has been scrolled a long way. */
  var toTopShown = false;
  window.addEventListener('scroll', function () {
    var show = window.scrollY > 900;
    if (show !== toTopShown) { toTopShown = show; var b = $('#toTop'); if (b) b.hidden = !show; }
  }, { passive: true });

  /* ── Boot ──────────────────────────────────────────────────────── */
  document.documentElement.setAttribute('data-theme', state.theme || 'light');
  if (!location.hash) location.hash = '#dash';
  render();
})();
