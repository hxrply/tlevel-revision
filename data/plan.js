/* Day-by-day revision plan — 13 weeks covering both core papers and the ESP.
   Ordered so content is learned first and technique last, because the examiner
   data says technique is where the marks actually go. Every task links to the
   part of the site that does it. */

window.TLDATA = window.TLDATA || {};

window.TLDATA.plan = (function () {
  'use strict';

  /* t(label, minutes, view, topicToOpen) */
  function t(label, m, go, open) { return { t: label, m: m, go: go, open: open }; }
  function d(title, tasks) { return { title: title, tasks: tasks }; }

  var READ = 'read', P1 = 'p1', P2 = 'p2';

  return {
    intro: 'Thirteen weeks, seven days each. Content areas first, ESP next, technique last — because the examiner reports show technique is where marks are lost, and technique only helps once the content is in. Days are about 35–60 minutes. Day 7 of each week is review, and it is the one you must not skip: it is the spaced repetition that makes the other six stick.',
    weeks: [

      { n: 1, title: 'Content area 1 — Problem solving', aim: 'Computational thinking, algorithms and strategies. Trace tables start here and never stop.', days: [
        d('Computational thinking', [
          t('Read 1.1 — decomposition, pattern recognition, abstraction', 25, P1, 'ca1/1.1'),
          t('Flashcards — content area 1 deck', 10, 'cards')
        ]),
        d('Algorithmic design', [
          t('Read 1.2 — flowchart symbols, the three constructs', 25, P1, 'ca1/1.2'),
          t('Trace practice — work the first three traces', 15, 'python')
        ]),
        d('Problem-solving strategies', [
          t('Read 1.3 — top-down, bottom-up, modularisation, RCA', 20, P1, 'ca1/1.3'),
          t('Quiz — content area 1 only, 10 questions', 10, 'quiz')
        ]),
        d('First written answer', [
          t('Written practice — one Paper 1 question, mark yourself honestly', 25, 'written'),
          t('Flashcards — repeat anything you missed', 10, 'cards')
        ]),
        d('Flowcharts and tracing', [
          t('Python zone — flowchart symbols, learn all seven', 15, 'python'),
          t('Trace practice — remaining traces, use a trace table on paper', 25, 'python')
        ]),
        d('Test the week', [
          t('Quiz — content area 1, 20 questions', 15, 'quiz'),
          t('Re-read whichever 1.x topic you scored worst on', 15, P1, 'ca1/1.1')
        ]),
        d('Review — week 1', [
          t('RAG-rate all three content area 1 topics honestly', 10, P1),
          t('Flashcards — everything still in a low box', 15, 'cards')
        ])
      ]},

      { n: 2, title: 'Content area 2 — Programming foundations', aim: 'Data types through iteration. This is the biggest area on Paper 1 and the foundation of ESP Tasks 2, 3 and 4a.', days: [
        d('Data types, variables and scope', [
          t('Read 2.1 and 2.2 — local vs global is a 12-mark question', 30, P1, 'ca2/2.1'),
          t('Flashcards — programming terms', 10, 'cards')
        ]),
        d('Data structures', [
          t('Read 2.3 — list, array, dictionary and when each wins', 20, P1, 'ca2/2.3'),
          t('Python zone — read the list/dict code patterns', 15, 'python')
        ]),
        d('Operators', [
          t('Read 2.4 — // and % are guaranteed marks', 20, P1, 'ca2/2.4'),
          t('Trace practice — the // and % trace', 15, 'python')
        ]),
        d('Input, output and files', [
          t('Read 2.5 — "w" wipes the file, "a" appends', 25, P1, 'ca2/2.5'),
          t('Python zone — the safe CSV read and append patterns', 15, 'python')
        ]),
        d('Sequence, selection, iteration', [
          t('Read 2.6 — count-controlled vs condition-controlled', 25, P1, 'ca2/2.6'),
          t('Trace practice — the nested loop and infinite loop questions', 15, 'python')
        ]),
        d('Test the week', [
          t('Quiz — content area 2, 20 questions', 15, 'quiz'),
          t('Written practice — one short answer on data types or scope', 20, 'written')
        ]),
        d('Review — week 2', [
          t('RAG-rate 2.1 to 2.6', 10, P1),
          t('Flashcards — mixed, including week 1 terms', 15, 'cards')
        ])
      ]},

      { n: 3, title: 'Content area 2 — Programming depth', aim: 'Functions, validation, robust code, searching, sorting and testing. Testing here is the same testing the ESP marks in Task 2.', days: [
        d('Functions and procedures', [
          t('Read 2.7 — a function returns, a procedure does not', 25, P1, 'ca2/2.7'),
          t('Flashcards', 10, 'cards')
        ]),
        d('Validation', [
          t('Read 2.8 — all six checks, and validation vs verification', 25, P1, 'ca2/2.8'),
          t('Python zone — the validated input pattern, type it out yourself', 15, 'python')
        ]),
        d('Design practice and robust code', [
          t('Read 2.9 and 2.10 — this list is the ESP Task 4a mark scheme', 30, P1, 'ca2/2.9'),
          t('Quiz — content area 2', 10, 'quiz')
        ]),
        d('Searching and sorting', [
          t('Read 2.11 — linear vs binary, three sorts, the three metrics', 30, P1, 'ca2/2.11'),
          t('Python zone — read all four search/sort patterns', 20, 'python')
        ]),
        d('Testing', [
          t('Read 2.12 — twelve test methods and four data types', 30, P1, 'ca2/2.12'),
          t('Flashcards — testing terms until they are automatic', 10, 'cards')
        ]),
        d('Test the week', [
          t('Quiz — content area 2, 20 questions', 20, 'quiz'),
          t('Written practice — a 6-mark question on searching or testing', 20, 'written')
        ]),
        d('Review — content area 2 complete', [
          t('RAG-rate all twelve content area 2 topics', 15, P1),
          t('Spot-the-defect practice — the last three trace questions', 15, 'python')
        ])
      ]},

      { n: 4, title: 'Content areas 3 and 4 — Issues and legislation', aim: 'The cheapest marks on Paper 1 and the ones the cohort most reliably drops. Learn the lists.', days: [
        d('Impact of digital', [
          t('Read 3.1 — organisational culture, society, digital inclusion', 25, P1, 'ca3/3.1'),
          t('Flashcards', 10, 'cards')
        ]),
        d('Emerging technologies', [
          t('Read 3.2 — IoT, AI, blockchain, XR, environmental impact', 25, P1, 'ca3/3.2'),
          t('Quiz — content area 3', 10, 'quiz')
        ]),
        d('Legislation part 1', [
          t('Read 4.1 — health and safety, DPA/GDPR principles, Computer Misuse Act', 35, P1, 'ca4/4.1'),
          t('Write out the CMA offences and GDPR principles from memory', 10, P1)
        ]),
        d('Legislation part 2', [
          t('Re-read 4.1 — nine protected characteristics, four discrimination types, IP', 25, P1, 'ca4/4.1'),
          t('Quiz — content area 4', 10, 'quiz')
        ]),
        d('Guidelines and standards', [
          t('Read 4.2 — BCS, IAP, CIISec, ISO, WCAG, W3C, IETF, PCI SSC, AUPs', 25, P1, 'ca4/4.2'),
          t('Flashcards', 10, 'cards')
        ]),
        d('The free-marks drill', [
          t('Learn the WCAG principles cold — cohort mean on this was 0.12 out of 2', 20, 'technique'),
          t('Quiz — areas 3 and 4, 20 questions', 15, 'quiz')
        ]),
        d('Review — Paper 1 content complete', [
          t('Quiz — All of Paper 1, 40 questions', 25, 'quiz'),
          t('RAG-rate areas 3 and 4; list every red topic', 15, P1)
        ])
      ]},

      { n: 5, title: 'Content area 5 — Business context', aim: 'Organisations, digital value, risk and change management. Change management is the most examined sub-topic in the area.', days: [
        d('Business environment', [
          t('Read 5.1 — sectors, B2B/B2C/B2M, internal vs external stakeholders', 20, P2, 'ca5/5.1'),
          t('Flashcards', 10, 'cards')
        ]),
        d('Digital value', [
          t('Read 5.2 — the seven business areas and how digital serves each', 25, P2, 'ca5/5.2'),
          t('Quiz — content area 5', 10, 'quiz')
        ]),
        d('Risk', [
          t('Read 5.3 — risks and their impacts', 20, P2, 'ca5/5.3'),
          t('Written practice — a short answer on risk impact', 20, 'written')
        ]),
        d('Change management part 1', [
          t('Read 5.4 — internal and external triggers, PESTLE, responses', 30, P2, 'ca5/5.4'),
          t('Flashcards', 10, 'cards')
        ]),
        d('Change management part 2', [
          t('Re-read 5.4 — the four implementation methods, CAB, SMARTER, rollback', 30, P2, 'ca5/5.4'),
          t('Write the four implementation methods with one pro and one con each', 15, P2)
        ]),
        d('Test the week', [
          t('Written practice — a 9-mark on choosing an implementation method', 30, 'written'),
          t('Quiz — content area 5', 15, 'quiz')
        ]),
        d('Review — week 5', [
          t('RAG-rate content area 5', 10, P2),
          t('Flashcards — mixed, reaching back to Paper 1 terms', 15, 'cards')
        ])
      ]},

      { n: 6, title: 'Content area 6 — Data', aim: 'Definitions, formats, big data, quality and models. Heavy on recall, so lean on the flashcards.', days: [
        d('Data, information, knowledge', [
          t('Read 6.1 — the three levels and the sources of data', 20, P2, 'ca6/6.1'),
          t('Flashcards', 10, 'cards')
        ]),
        d('Taxonomy and data types', [
          t('Read 6.2 — quantitative/qualitative, structured/unstructured', 25, P2, 'ca6/6.2'),
          t('Quiz — content area 6', 10, 'quiz')
        ]),
        d('Formats and storage', [
          t('Read 6.3 — JSON, CSV, XML, UTF-8, ASCII, metadata', 25, P2, 'ca6/6.3'),
          t('Flashcards', 10, 'cards')
        ]),
        d('Big data and quality', [
          t('Read 6.4 — the six Vs, QA methods, wrangling, entry errors', 30, P2, 'ca6/6.4'),
          t('Write the six Vs and the five wrangling steps from memory', 10, P2)
        ]),
        d('Visualisation, models and access', [
          t('Read 6.5 — visualisation formats, data models, RBAC/RuBAC/API', 30, P2, 'ca6/6.5'),
          t('Quiz — content area 6', 10, 'quiz')
        ]),
        d('Test the week', [
          t('Quiz — content area 6, 20 questions', 15, 'quiz'),
          t('Written practice — a question on choosing a data format or model', 20, 'written')
        ]),
        d('Review — week 6', [
          t('RAG-rate content area 6', 10, P2),
          t('Flashcards — everything in a low box', 15, 'cards')
        ])
      ]},

      { n: 7, title: 'Content area 7 — Digital environments', aim: 'Hardware, software, networks, virtualisation and cloud. Networks is the densest thing on either paper.', days: [
        d('Hardware', [
          t('Read 7.1 — processors, memory, storage, cooling', 25, P2, 'ca7/7.1'),
          t('Flashcards', 10, 'cards')
        ]),
        d('Software', [
          t('Read 7.2 — OS types, utilities, compilers vs interpreters', 25, P2, 'ca7/7.2'),
          t('Quiz — content area 7', 10, 'quiz')
        ]),
        d('Networks part 1', [
          t('Read 7.3 — network types, connectivity, topologies, models', 30, P2, 'ca7/7.3'),
          t('Flashcards — network terms', 10, 'cards')
        ]),
        d('Networks part 2', [
          t('Re-read 7.3 — OSI seven layers, TCP/IP four layers, packets, protocols', 35, P2, 'ca7/7.3'),
          t('Sketch OSI and TCP/IP side by side from memory. Repeat until correct', 15, P2)
        ]),
        d('Virtual and cloud', [
          t('Read 7.4 — hypervisor types, IaaS/PaaS/SaaS responsibility split', 30, P2, 'ca7/7.4'),
          t('Quiz — content area 7', 10, 'quiz')
        ]),
        d('Resilience and test', [
          t('Read 7.5 — hardening, backups, hot/warm/cold sites', 20, P2, 'ca7/7.5'),
          t('Quiz — content area 7, 20 questions', 15, 'quiz')
        ]),
        d('Review — week 7', [
          t('Sketch OSI and TCP/IP again, cold', 10, P2),
          t('RAG-rate content area 7', 10, P2),
          t('Flashcards', 10, 'cards')
        ])
      ]},

      { n: 8, title: 'Content area 8 — Security', aim: 'Threats, mitigation and the two models. Learn threats as threat → impact → mitigation triples, because that is how they are asked.', days: [
        d('Confidential information', [
          t('Read 8.1 — what is confidential and why it matters', 20, P2, 'ca8/8.1'),
          t('Flashcards', 10, 'cards')
        ]),
        d('Technical threats', [
          t('Read 8.2 — malware, social engineering, injection, MITM', 30, P2, 'ca8/8.2'),
          t('Quiz — content area 8', 10, 'quiz')
        ]),
        d('Human and physical threats', [
          t('Re-read 8.2 — human error, malicious employee, tailgating, shoulder surfing', 25, P2, 'ca8/8.2'),
          t('Flashcards', 10, 'cards')
        ]),
        d('Mitigation', [
          t('Read 8.3 — encryption types, backup types, firewalls, segregation', 30, P2, 'ca8/8.3'),
          t('Write the three backup types with one pro and one con each', 10, P2)
        ]),
        d('CIA and IAAA', [
          t('Read 8.4 — the triad, the four IAAA stages, least privilege', 25, P2, 'ca8/8.4'),
          t('Quiz — content area 8', 10, 'quiz')
        ]),
        d('Test the week', [
          t('Quiz — content area 8, 20 questions', 15, 'quiz'),
          t('Written practice — a 6-mark on threat mitigation', 20, 'written')
        ]),
        d('Review — all content complete', [
          t('Quiz — All of Paper 2, 40 questions', 25, 'quiz'),
          t('RAG-rate content area 8, then look at your dashboard — every red topic is now a target', 15, 'dash')
        ])
      ]},

      { n: 9, title: 'Employer Set Project — Tasks 1 and 2', aim: 'Planning and defect fixing. The Task 1 rationale averages 2.63 out of 9 nationally — that gap is where your ESP grade is won.', days: [
        d('How the ESP works', [
          t('Read the ESP overview — times, marks per task, AO weightings', 20, 'esp'),
          t('Memorise what each task must physically produce', 15, 'esp')
        ]),
        d('Task 1 — the Gantt chart', [
          t('Read Task 1, Gantt chart section', 25, 'esp'),
          t('Sketch a Gantt for a 5-task project with dependencies and contingency', 20, 'esp')
        ]),
        d('Task 1 — resource and cost plan', [
          t('Read Task 1, resource and cost plan section', 20, 'esp'),
          t('Practise: 3 staff at different hourly rates over 4 weeks. Show your working', 25, 'esp')
        ]),
        d('Task 1 — the rationale', [
          t('Read Task 1, rationale section — justify, never describe', 25, 'esp'),
          t('Write a rationale paragraph for your Gantt. Every decision gets a "because"', 25, 'esp')
        ]),
        d('Task 2 — finding defects', [
          t('Read Task 2 and the defects-to-look-for list', 25, 'esp'),
          t('Spot-the-defect practice in the Python zone', 20, 'python')
        ]),
        d('Task 2 — test documentation', [
          t('Read Task 2, documenting the testing process', 25, 'esp'),
          t('Build a six-column test table for a login form, all five data types', 25, 'esp')
        ]),
        d('Review — ESP Tasks 1 and 2', [
          t('Work the Task 1 and Task 2 checklists; tick what you can genuinely do', 20, 'esp'),
          t('Quiz — Employer Set Project', 10, 'quiz')
        ])
      ]},

      { n: 10, title: 'Employer Set Project — Tasks 3, 4a and 4b', aim: 'Design, build and evaluate. Task 4a alone is 34 marks — a third of the project.', days: [
        d('Task 3 — decomposition', [
          t('Read Task 3, decomposition and conventions', 30, 'esp'),
          t('Decompose a stock control system into sub-systems on paper', 20, 'esp')
        ]),
        d('Task 3 — communicating the design', [
          t('Read Task 3, communication section — third party must be able to build it', 25, 'esp'),
          t('Draw a flowchart with correct BCS symbols and labelled branches', 25, 'esp')
        ]),
        d('Task 4a — code organisation', [
          t('Read Task 4a — the ten code-organisation bullets are the mark scheme', 30, 'esp'),
          t('Review your own code habits against that list', 15, 'esp')
        ]),
        d('Task 4a — build practice', [
          t('Build from scratch: menu, load a CSV, validate input, print a summary', 45, 'python')
        ]),
        d('Task 4a — data analysis', [
          t('Python zone — pandas and matplotlib pattern', 20, 'python'),
          t('Produce a labelled bar chart from a CSV with a title, axes and legend', 30, 'python')
        ]),
        d('Task 4b — reflective evaluation', [
          t('Read Task 4b — measure against success criteria, name real weaknesses', 25, 'esp'),
          t('Evaluate the program you built on day 4 using that structure', 25, 'esp')
        ]),
        d('Review — ESP complete', [
          t('Work all five task checklists end to end', 25, 'esp'),
          t('Quiz — Employer Set Project', 10, 'quiz')
        ])
      ]},

      { n: 11, title: 'Exam technique', aim: 'Content is in. This is the week that converts it into marks — the examiner reports say technique, not knowledge, is the gap.', days: [
        d('How answers are marked', [
          t('Read exam technique — paper shape, timing, levels and bands', 30, 'technique'),
          t('Learn what separates Level 1 from Level 3', 15, 'technique')
        ]),
        d('Traps and command words', [
          t('Read the category traps table — right answer, wrong category loses everything', 25, 'technique'),
          t('Learn the command words and what each demands', 20, 'technique')
        ]),
        d('The "so what?" rule', [
          t('Read the so-what rule and both worked examples', 20, 'technique'),
          t('Written practice — three short explain questions, develop every point', 30, 'written')
        ]),
        d('Extended answer — Paper 1', [
          t('Written practice — one 9-mark from areas 1 to 4', 30, 'written'),
          t('Mark it against the band descriptors. Be strict', 15, 'written')
        ]),
        d('Extended answer — Paper 2', [
          t('Written practice — one 12-mark from areas 5 to 8', 30, 'written'),
          t('Check: did you name the organisation? Did you conclude?', 15, 'written')
        ]),
        d('Contextualisation', [
          t('Read the contextualisation section — the L1/L3 differentiator', 20, 'technique'),
          t('Written practice — another extended answer, scenario named in every paragraph', 30, 'written')
        ]),
        d('Review — technique', [
          t('Read where marks are actually lost, and the acronym list', 25, 'technique'),
          t('Flashcards — mixed', 15, 'cards')
        ])
      ]},

      { n: 12, title: 'Full paper practice', aim: 'Under time pressure now. Section A is fast certain marks; Section B is five scenarios worth 60.', days: [
        d('Paper 1 Section A', [
          t('Quiz — All of Paper 1, 40 questions, timed at 45 minutes', 45, 'quiz')
        ]),
        d('Paper 2 Section A', [
          t('Quiz — All of Paper 2, 40 questions, timed at 45 minutes', 45, 'quiz')
        ]),
        d('Paper 1 Section B', [
          t('Written practice — extended answers only, two questions back to back', 40, 'written')
        ]),
        d('Paper 2 Section B', [
          t('Written practice — extended answers only, two questions back to back', 40, 'written')
        ]),
        d('Target the weak spots', [
          t('Quiz — My weakest areas, 20 questions', 20, 'quiz'),
          t('Re-read every topic still rated red', 30, 'dash')
        ]),
        d('Mixed recall', [
          t('Quiz — Everything, 40 questions', 25, 'quiz'),
          t('Flashcards — full deck sweep', 20, 'cards')
        ]),
        d('Review — where you stand', [
          t('Dashboard — check progress per area and quiz accuracy', 15, 'dash'),
          t('Write your own list of the ten things you are still shakiest on', 15, 'dash')
        ])
      ]},

      { n: 13, title: 'Final week', aim: 'No new content. Recall, technique and rest.', days: [
        d('Red topics 1', [ t('Re-read and re-rate your three weakest topics', 40, 'dash') ]),
        d('Red topics 2', [ t('Re-read and re-rate the next three', 40, 'dash') ]),
        d('Red topics 3', [ t('Clear whatever is left rated red', 40, 'dash') ]),
        d('Recall blitz', [
          t('Last-minute priorities list — learn every list on it', 30, 'technique'),
          t('Flashcards — full sweep', 20, 'cards')
        ]),
        d('ESP recall', [
          t('For each ESP task: time, marks, what you must produce. From memory', 25, 'esp'),
          t('Re-read what loses marks on each task', 20, 'esp')
        ]),
        d('Technique refresh', [
          t('Re-read command words, category traps and the band descriptors', 25, 'technique'),
          t('Quiz — Everything, 20 questions, for confidence', 15, 'quiz')
        ]),
        d('Rest', [
          t('Light flashcards only. Then stop — cramming the night before costs marks', 15, 'cards')
        ])
      ]}

    ]
  };
})();
