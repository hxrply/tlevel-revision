/* Day-by-day revision plan — 6 weeks to the resits, covering both core papers
   and the ESP.

   Two things drive the design:

   1. Six weeks is not enough time to learn everything twice, so nothing is
      taught twice. Instead every day carries a RECAP task that revisits
      something learned 1 day, 3 days, 1 week or 2 weeks ago. Spacing is what
      stops week 1 falling out of your head by week 5 — it is not padding, and
      skipping the recaps is the fastest way to arrive in November having
      forgotten content area 1.
   2. Content comes first and technique last, because the examiner reports
      show technique is where marks are lost — but technique only converts
      marks you can already reach. */

window.TLDATA = window.TLDATA || {};

window.TLDATA.plan = (function () {
  'use strict';

  /* t(label, minutes, view, topicToOpen) — a normal task
     r(label, minutes, view, topicToOpen) — a spaced recap */
  function t(label, m, go, open) { return { t: label, m: m, go: go, open: open }; }
  function r(label, m, go, open) { return { t: label, m: m, go: go, open: open, r: 1 }; }
  function d(title, tasks) { return { title: title, tasks: tasks }; }

  var P1 = 'p1', P2 = 'p2';

  return {
    intro: 'Six weeks, 42 days, roughly an hour a day. Weeks 1–2 cover Paper 1, weeks 3–4 cover Paper 2, week 5 is the Employer Set Project and week 6 is technique and timed practice. Every day includes a recap of something you learned 1, 3, 7 or 14 days ago — that spacing is what stops week 1 falling out of your head by week 5. Day 7 of each week is a full review. If a day has to give, cut the new material, never the recap.',
    legend: 'Tasks marked RECAP revisit earlier material on a spaced schedule. They are the highest-value minutes in the plan.',
    weeks: [

      { n: 1, title: 'Paper 1 — Problem solving and programming', aim: 'Content areas 1 and most of 2. The biggest block on Paper 1 and the foundation of ESP Tasks 2, 3 and 4a.', days: [
        d('Computational thinking and algorithms', [
          t('Read 1.1 — decomposition, pattern recognition, abstraction', 25, P1, 'ca1/1.1'),
          t('Read 1.2 — flowchart symbols and the three constructs', 25, P1, 'ca1/1.2'),
          t('Flashcards — content area 1 deck', 10, 'cards')
        ]),
        d('Problem-solving strategies', [
          t('Read 1.3 — top-down, bottom-up, modularisation, root cause analysis', 20, P1, 'ca1/1.3'),
          t('Trace practice — first three traces, on paper with a trace table', 20, 'python'),
          r('RECAP yesterday — 1.1 and 1.2, then quiz content area 1', 15, 'quiz')
        ]),
        d('Data types, variables and scope', [
          t('Read 2.1 and 2.2 — local vs global is a 12-mark question', 30, P1, 'ca2/2.1'),
          t('Flashcards — programming terms', 10, 'cards'),
          r('RECAP — write the four computational thinking components and the six problem-solving steps from memory', 15, P1, 'ca1/1.1')
        ]),
        d('Data structures and operators', [
          t('Read 2.3 — list, array, dictionary and when each wins', 20, P1, 'ca2/2.3'),
          t('Read 2.4 — // and % are guaranteed marks', 20, P1, 'ca2/2.4'),
          r('RECAP — flashcards on 2.1 and 2.2, then the // and % trace', 15, 'python')
        ]),
        d('Input, output, files and iteration', [
          t('Read 2.5 — "w" wipes the file, "a" appends', 25, P1, 'ca2/2.5'),
          t('Read 2.6 — count-controlled vs condition-controlled loops', 25, P1, 'ca2/2.6'),
          r('RECAP — quiz content area 2, 10 questions on structures and operators', 12, 'quiz')
        ]),
        d('Functions and validation', [
          t('Read 2.7 — a function returns, a procedure does not', 20, P1, 'ca2/2.7'),
          t('Read 2.8 — all six validation checks, and validation vs verification', 25, P1, 'ca2/2.8'),
          r('RECAP — the nested loop and infinite loop traces', 15, 'python')
        ]),
        d('Review — week 1', [
          t('Quiz — content areas 1 and 2, 20 questions', 15, 'quiz'),
          t('RAG-rate every topic covered this week, honestly', 10, P1),
          r('RECAP — full flashcard sweep of everything from this week', 20, 'cards')
        ])
      ]},

      { n: 2, title: 'Paper 1 — Programming depth, issues and legislation', aim: 'Finish content area 2, then areas 3 and 4. Area 4 is pure recall and the cheapest marks on the paper.', days: [
        d('Design practice and robust code', [
          t('Read 2.9 and 2.10 — this list is also the ESP Task 4a mark scheme', 30, P1, 'ca2/2.9'),
          t('Python zone — the validated input pattern, type it out yourself', 15, 'python'),
          r('RECAP week 1 — quiz content area 1, 10 questions', 12, 'quiz')
        ]),
        d('Searching and sorting', [
          t('Read 2.11 — linear vs binary, three sorts, the three metrics', 30, P1, 'ca2/2.11'),
          t('Python zone — read all four search and sort patterns', 20, 'python'),
          r('RECAP — flashcards on functions and validation', 12, 'cards')
        ]),
        d('Testing', [
          t('Read 2.12 — twelve test methods and four test data types', 30, P1, 'ca2/2.12'),
          t('Flashcards — testing terms until they are automatic', 12, 'cards'),
          r('RECAP yesterday — write out binary search from memory, no notes', 15, 'python')
        ]),
        d('Emerging issues', [
          t('Read 3.1 — organisational culture, society, digital inclusion', 25, P1, 'ca3/3.1'),
          t('Read 3.2 — IoT, AI, blockchain, XR, environmental impact', 25, P1, 'ca3/3.2'),
          r('RECAP — quiz content area 2, 20 questions', 15, 'quiz')
        ]),
        d('Legislation', [
          t('Read 4.1 — health and safety, DPA/GDPR, Computer Misuse Act, equality, IP', 35, P1, 'ca4/4.1'),
          t('Write the CMA offences and the GDPR principles out from memory', 12, P1),
          r('RECAP — flashcards on content area 3', 12, 'cards')
        ]),
        d('Guidelines and the free marks', [
          t('Read 4.2 — BCS, IAP, CIISec, ISO, WCAG, W3C, IETF, PCI SSC, AUPs', 25, P1, 'ca4/4.2'),
          t('Learn the WCAG principles cold — cohort mean on this was 0.12 out of 2', 20, 'technique'),
          r('RECAP yesterday — nine protected characteristics and four discrimination types, from memory', 12, P1, 'ca4/4.1')
        ]),
        d('Review — Paper 1 content complete', [
          t('Quiz — All of Paper 1, 40 questions', 30, 'quiz'),
          t('RAG-rate areas 2, 3 and 4; write down every red topic', 12, P1),
          r('RECAP week 1 — flashcards, full sweep of areas 1 and 2', 20, 'cards')
        ])
      ]},

      { n: 3, title: 'Paper 2 — Business context and data', aim: 'Content areas 5 and 6. Change management is the most examined sub-topic in area 5.', days: [
        d('Business environment and digital value', [
          t('Read 5.1 — sectors, B2B/B2C/B2M, internal vs external stakeholders', 20, P2, 'ca5/5.1'),
          t('Read 5.2 — the seven business areas and how digital serves each', 25, P2, 'ca5/5.2'),
          r('RECAP week 2 — the legislation lists: CMA, GDPR, protected characteristics', 15, P1, 'ca4/4.1')
        ]),
        d('Risk and triggers for change', [
          t('Read 5.3 — risks and their impacts', 20, P2, 'ca5/5.3'),
          t('Read 5.4 part 1 — internal and external triggers, PESTLE, responses', 30, P2, 'ca5/5.4'),
          r('RECAP yesterday — quiz content area 5, 10 questions', 12, 'quiz')
        ]),
        d('Change management', [
          t('Read 5.4 part 2 — the four implementation methods, CAB, SMARTER, rollback', 30, P2, 'ca5/5.4'),
          t('Write the four implementation methods with one pro and one con each', 15, P2),
          r('RECAP week 1 — trace practice and content area 1 strategies', 18, 'python')
        ]),
        d('Data, information and taxonomy', [
          t('Read 6.1 — the three levels and the sources of data', 20, P2, 'ca6/6.1'),
          t('Read 6.2 — quantitative/qualitative, structured/unstructured, data types', 25, P2, 'ca6/6.2'),
          r('RECAP yesterday — the four implementation methods, from memory', 12, P2, 'ca5/5.4')
        ]),
        d('Formats, big data and quality', [
          t('Read 6.3 — JSON, CSV, XML, UTF-8, ASCII, metadata', 25, P2, 'ca6/6.3'),
          t('Read 6.4 — the six Vs, QA methods, wrangling, entry errors', 30, P2, 'ca6/6.4'),
          r('RECAP — flashcards on 6.1 and 6.2', 12, 'cards')
        ]),
        d('Visualisation, models and access', [
          t('Read 6.5 — visualisation formats, data models, RBAC/RuBAC/API', 30, P2, 'ca6/6.5'),
          t('Quiz — content area 6', 12, 'quiz'),
          r('RECAP week 2 — content area 2 testing: twelve methods, four data types', 18, P1, 'ca2/2.12')
        ]),
        d('Review — week 3', [
          t('Quiz — content areas 5 and 6, 20 questions', 15, 'quiz'),
          t('RAG-rate areas 5 and 6', 10, P2),
          r('RECAP — flashcards, full sweep including Paper 1 terms', 20, 'cards')
        ])
      ]},

      { n: 4, title: 'Paper 2 — Digital environments and security', aim: 'Content areas 7 and 8. Networks is the densest topic on either paper.', days: [
        d('Hardware and software', [
          t('Read 7.1 — processors, memory, storage, cooling', 25, P2, 'ca7/7.1'),
          t('Read 7.2 — OS types, utilities, compilers vs interpreters', 25, P2, 'ca7/7.2'),
          r('RECAP week 3 — flashcards on areas 5 and 6', 15, 'cards')
        ]),
        d('Networks — types and topologies', [
          t('Read 7.3 part 1 — network types, connectivity, topologies, models', 30, P2, 'ca7/7.3'),
          t('Flashcards — network terms', 12, 'cards'),
          r('RECAP — the six Vs and the five wrangling steps, from memory', 12, P2, 'ca6/6.4')
        ]),
        d('Networks — layers and protocols', [
          t('Read 7.3 part 2 — OSI seven layers, TCP/IP four layers, packets, protocols', 35, P2, 'ca7/7.3'),
          t('Sketch OSI and TCP/IP side by side from memory. Repeat until correct', 15, P2),
          r('RECAP yesterday — quiz content area 7, 10 questions', 12, 'quiz')
        ]),
        d('Virtual, cloud and resilience', [
          t('Read 7.4 — hypervisor types, IaaS/PaaS/SaaS responsibility split', 28, P2, 'ca7/7.4'),
          t('Read 7.5 — hardening, backups, hot/warm/cold sites', 20, P2, 'ca7/7.5'),
          r('RECAP — sketch OSI and TCP/IP again, cold, no notes', 12, P2, 'ca7/7.3')
        ]),
        d('Security threats', [
          t('Read 8.1 — what is confidential and why it matters', 18, P2, 'ca8/8.1'),
          t('Read 8.2 — malware, social engineering, injection, human and physical threats', 32, P2, 'ca8/8.2'),
          r('RECAP week 3 — the four implementation methods and change management', 15, P2, 'ca5/5.4')
        ]),
        d('Mitigation, CIA and IAAA', [
          t('Read 8.3 — encryption, backup types, firewalls, segregation', 28, P2, 'ca8/8.3'),
          t('Read 8.4 — the CIA triad, the four IAAA stages, least privilege', 22, P2, 'ca8/8.4'),
          r('RECAP yesterday — quiz content area 8, 10 questions', 12, 'quiz')
        ]),
        d('Review — Paper 2 content complete', [
          t('Quiz — All of Paper 2, 40 questions', 30, 'quiz'),
          t('RAG-rate areas 7 and 8. Every red topic across both papers is now a target', 12, 'dash'),
          r('RECAP — flashcards, full sweep of all eight content areas', 20, 'cards')
        ])
      ]},

      { n: 5, title: 'Employer Set Project', aim: 'All five tasks. The Task 1 rationale averages 2.63 out of 9 nationally and Task 4a is worth 34 marks — that is where the ESP grade is won.', days: [
        d('How the ESP works, and Task 1 planning', [
          t('Read the ESP overview — times, marks per task, AO weightings', 20, 'esp'),
          t('Read Task 1 and sketch a Gantt for a 5-task project with dependencies', 35, 'esp'),
          r('RECAP week 4 — OSI layers and the main security threats', 15, P2, 'ca7/7.3')
        ]),
        d('Task 1 — costs and the rationale', [
          t('Practise a cost plan: 3 staff, different hourly rates, 4 weeks. Show your working', 25, 'esp'),
          t('Write a rationale for your Gantt — every decision gets a "because"', 30, 'esp'),
          r('RECAP week 2 — quiz All of Paper 1, 20 questions', 15, 'quiz')
        ]),
        d('Task 2 — defects and test documentation', [
          t('Read Task 2 and the defects-to-look-for list', 22, 'esp'),
          t('Build a six-column test table for a login form, all five data types', 28, 'esp'),
          r('RECAP — spot-the-defect practice in the Python zone', 15, 'python')
        ]),
        d('Task 3 — designing a solution', [
          t('Read Task 3 — decomposition, conventions, communicating the design', 28, 'esp'),
          t('Decompose a stock control system, then draw one flowchart with correct BCS symbols', 30, 'esp'),
          r('RECAP week 4 — quiz All of Paper 2, 20 questions', 15, 'quiz')
        ]),
        d('Task 4a — building the solution', [
          t('Read Task 4a — the ten code-organisation bullets are the mark scheme', 25, 'esp'),
          t('Build from scratch: menu, load a CSV, validate input, print a summary', 40, 'python'),
          r('RECAP — the Task 1 and Task 2 checklists, tick what you can genuinely do', 15, 'esp')
        ]),
        d('Task 4a data analysis and Task 4b evaluation', [
          t('Produce a labelled bar chart from a CSV — title, axes, legend', 25, 'python'),
          t('Read Task 4b, then evaluate the program you built yesterday using that structure', 30, 'esp'),
          r('RECAP week 1 — trace practice and content area 2 validation', 15, P1, 'ca2/2.8')
        ]),
        d('Review — ESP complete', [
          t('Work all five task checklists end to end', 25, 'esp'),
          t('From memory: each task’s time, marks and what it must physically produce', 15, 'esp'),
          r('RECAP — quiz Employer Set Project, then flashcards', 20, 'quiz')
        ])
      ]},

      { n: 6, title: 'Technique, timed practice and final recall', aim: 'No new content. This is the week that converts what you know into marks.', days: [
        d('How answers are marked', [
          t('Read exam technique — paper shape, timing, levels and bands', 30, 'technique'),
          t('Learn the command words and what each one demands', 20, 'technique'),
          r('RECAP week 5 — ESP task times and marks, from memory', 12, 'esp')
        ]),
        d('Traps and developed answers', [
          t('Read the category traps table — right answer, wrong category scores zero', 25, 'technique'),
          t('Read the "so what?" rule, then write three explain answers developing every point', 30, 'written'),
          r('RECAP — quiz My weakest areas, 20 questions', 15, 'quiz')
        ]),
        d('Extended answers', [
          t('Written practice — one 9-mark from Paper 1, marked against the bands', 32, 'written'),
          t('Written practice — one 12-mark from Paper 2. Name the organisation. Conclude', 32, 'written'),
          r('RECAP week 2 — quiz All of Paper 1, 20 questions', 15, 'quiz')
        ]),
        d('Timed Section A', [
          t('Quiz — All of Paper 1, 40 questions, timed at 45 minutes', 45, 'quiz'),
          t('Quiz — All of Paper 2, 40 questions, timed at 45 minutes', 45, 'quiz')
        ]),
        d('Recall blitz', [
          t('Last-minute priorities — learn every list on it: OSI, six Vs, protected characteristics, WCAG, validation checks, test data types', 35, 'technique'),
          t('Clear whatever is still rated red on your dashboard', 25, 'dash'),
          r('RECAP — flashcards, full deck sweep', 20, 'cards')
        ]),
        d('Final pass', [
          t('Re-read command words, category traps and the band descriptors', 25, 'technique'),
          t('Re-read what loses marks on each ESP task', 20, 'esp'),
          r('RECAP — quiz Everything, 40 questions, for confidence', 25, 'quiz')
        ]),
        d('Rest', [
          t('Light flashcards only. Then stop — cramming the night before costs marks', 15, 'cards')
        ])
      ]}

    ]
  };
})();
