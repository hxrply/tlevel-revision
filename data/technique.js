/* Exam technique — built from the published DSD sample assessment papers and
   mark schemes, Pearson's lead examiner report, and my own condensed version
   of the Chelmsford College core paper revision guides. No exam material is
   reproduced; structure, mark allocations and performance statistics are
   facts, and the strategy advice is rewritten in my own words. */

window.TLDATA = window.TLDATA || {};

window.TLDATA.technique = {
  papers: [
    { name: 'Core Paper 1', detail: '2 hours 15 minutes · 90 marks · 30% of the core · Content areas 1–4 · Section A 30 marks, Section B 60 marks' },
    { name: 'Core Paper 2', detail: '2 hours 15 minutes · 90 marks · 30% of the core · Content areas 5–8 · Section A 30 marks, Section B 60 marks' },
    { name: 'Employer Set Project', detail: '14 hours 30 minutes · 100 marks · 40% of the core · Tasks 1 (3h), 2 (3h), 3 (2.5h), 4a (4h), 4b (2h)' },
    { name: 'Occupational Specialism', detail: '50 hours 30 minutes · 144 marks · Pass / Merit / Distinction · Tasks 1, 2, 3a, 3b' }
  ],

  shape: {
    note: 'Taken from the published DSD sample assessment papers. Both papers have the same shape: a short-answer Section A worth 30 marks, then a Section B of five long scenario questions worth 60 marks between them.',
    rows: [
      { s: 'Paper 1 · Section A', d: '11 questions, 30 marks. Mostly 1–4 marks each, finishing with a 6-mark question. Recall and short application — name the operator that returns a remainder, name a flowchart symbol, give an approach to root cause analysis.' },
      { s: 'Paper 1 · Section B', d: '5 questions worth 8, 11, 14, 15 and 12 marks. Each is a scenario with several parts, mixing code reading, completing missing code, predicting output, and an extended open response.' },
      { s: 'Paper 2 · Section A', d: '10 questions, 30 marks. Mostly 2 marks each, with two 4-mark questions and one 6-mark.' },
      { s: 'Paper 2 · Section B', d: '5 questions worth 8, 11, 13, 16 and 12 marks. Same multi-part scenario structure.' }
    ],
    takeaway: 'Section B is two thirds of the paper across only five questions, so one scenario you cannot engage with costs 8–16 marks. Section A is where the fast, certain marks are — never leave any of it blank.'
  },

  timing: [
    '90 marks in 135 minutes = 1.5 minutes per mark. Section A (30 marks) should take about 45 minutes, leaving 90 minutes for Section B.',
    'A 12-mark extended response deserves around 18 minutes. If you have written three lines, you have not written enough.',
    'Each section ramps up in difficulty, so do not stall on the last question of Section A and lose the easier openings of Section B.',
    'Leave 10 minutes at the end to check every extended answer actually ends with a conclusion.'
  ],

  aos: [
    { code: 'AO1a / AO1b', name: 'Knowledge and understanding', how: 'Recall and explain. Short factual answers — state, identify, describe, explain. Roughly a third of each paper.' },
    { code: 'AO2', name: 'Apply to situations and contexts', how: 'Use what you know inside the given scenario. The largest AO in both papers, and in 12-mark questions it carries twice the weight of analysis or evaluation — the scenario is literally worth more than the theory.' },
    { code: 'AO3a', name: 'Analyse', how: 'Break the situation into component parts and examine how they relate, including causes and effects.' },
    { code: 'AO3b', name: 'Evaluate', how: 'Weigh both sides and reach a conclusion supported by the points you actually made. An evaluation with no conclusion cannot reach the top level.' }
  ],

  levels: {
    note: 'Extended open response questions (6, 9 and 12 marks) are marked holistically against a levels-based mark scheme, not point by point. All traits carry equal weighting and you are placed in a level as a whole.',
    rows: [
      { l: 'Level 1', d: 'Basic analysis — the situation is broken down only superficially. Knowledge is basic and only partially relevant to the context. Any judgement is superficial or unsupported.' },
      { l: 'Level 2', d: 'Good analysis with aspects broken into component parts. Knowledge is applied and relevant to the context. A judgement is reached but only partially supported.' },
      { l: 'Level 3', d: 'Thorough analysis of the component parts. Knowledge is comprehensive and wholly relevant to the context. Competing points are drawn together into a conclusion which is well supported.' }
    ],
    bands: '6-mark: L1 1–2 · L2 3–4 · L3 5–6    |    9-mark: L1 1–3 · L2 4–6 · L3 7–9    |    12-mark: L1 1–4 · L2 5–8 · L3 9–12'
  },

  commands: [
    { w: 'State / Give / Identify', m: 'One short fact, no explanation needed. Do not waste time expanding.' },
    { w: 'Describe', m: 'Say what something is and give its features — a fuller account, but no reasons required.' },
    { w: 'Explain', m: 'Give a point and develop it with a reason or consequence. Use "…which means…" or "…because…" to force the second half out of yourself.' },
    { w: 'Analyse', m: 'Break it into parts and examine how they relate. Show the chain: this causes that, which leads to this impact.' },
    { w: 'Discuss', m: 'Consider more than one side, exploring the arguments in each direction.' },
    { w: 'Evaluate / Assess', m: 'Weigh strengths against weaknesses and give a justified overall judgement. Always finish with "Overall…".' },
    { w: 'Justify', m: 'Give reasons supporting your choice, and say why the alternatives are less suitable.' },
    { w: 'Compare', m: 'Cover both things in the same sentences using linking words — "whereas", "in contrast" — not two separate paragraphs.' }
  ],

  traps: {
    note: 'The most common way to lose easy marks is a technically correct answer from the wrong category. Read what kind of thing is being asked for before you write.',
    rows: [
      { q: 'Components that require testing', right: 'Software, hardware, data, interfaces, the resulting service', wrong: 'Unit testing, integration testing — those are types of test, not components' },
      { q: 'Human threats', right: 'Malicious employee, human error, poor cyber hygiene, disguised criminal', wrong: 'Social engineering, phishing — those are attack methods, not the source of the threat' },
      { q: 'Business information tools', right: 'CRM, payroll system, business intelligence software, stock control', wrong: '"AI", "the cloud", "the internet" — generic technologies are usually rejected here' },
      { q: 'Input vs output device', right: 'Input = sensor, keyboard, scanner · Output = screen, speaker, actuator', wrong: 'Giving an output device when the question said input loses every mark, however good the answer' },
      { q: 'Unforeseen triggers for change', right: 'Hardware failure, zero-day vulnerability, natural disaster, new legislation', wrong: 'Rebranding, restructuring, new management — those are planned internal triggers' },
      { q: 'Data types', right: 'Integer for whole numbers, real/float for decimals and currency', wrong: '"Number" — too vague to earn the mark' }
    ]
  },

  explain: {
    note: 'For 2, 3 and 4-mark questions, identifying a point is only the first mark. Every point needs a justified expansion — keep asking yourself "so what?" until you run out of consequence.',
    steps: [
      'Identify the point.',
      'Justify how it works technically.',
      'Expand to the ultimate consequence for the business or the user.'
    ],
    examples: [
      { bad: 'RAID 1 mirrors the data.', good: 'Data is mirrored across multiple drives (1), so a read request can be served by whichever drive is free first (1), which reduces waiting time for the user (1).' },
      { bad: 'Data structures save space.', good: 'A data structure stores related details in a single structure (1), which makes programs shorter (1) because iteration can process every record instead of repeating code for each one (1).' }
    ]
  },

  context: [
    'Contextualisation is the single biggest difference between a Level 1 and a Level 3 answer. Responses that stay theoretical and never mention the actual college, hospital, retailer or vehicle in the question are usually capped at Level 1.',
    'Before writing, decompose the prompt: list what the question is asking for, then make sure every point ties back to the organisation or system in the stem.',
    'Applying knowledge means naming the specific effect. Evaluating IoT in vehicles is not "privacy is a concern" — it is "tracking the vehicle\'s movements reveals where the driver has been, which they never agreed to share with the insurer".',
    'In 12-mark questions AO2 is worth double the analysis and evaluation marks, so relating your answer to the scenario is the highest-value thing you can do.'
  ],

  extended: [
    'Structure a 9 or 12-mark answer: three developed points one way, two or three the other way, then a conclusion that answers the actual question.',
    'Balance is required. Skewing the whole answer towards advantages, or towards disadvantages, caps you at Level 1 or 2 however good the content is.',
    'Never end without a conclusion. "I think this is good" is not a conclusion — draw the competing points together into a recommendation based on the evidence you gave.',
    'Use technical vocabulary. "The database" is worth less than "the relational database, normalised so customer details are not duplicated".',
    'Three developed points beat eight bullet points. Do not list.'
  ],

  accuracy: [
    'Flowcharts: standard symbols only — parallelogram for input/output, diamond for decisions, oval terminators — and include input validation whenever the scenario implies it.',
    'Sorting diagrams: show every individual pass. A correct final answer with missing passes does not earn the marks for those passes.',
    'Legislation: link the specific legal requirement (data accuracy under GDPR, unauthorised access under the CMA) to the consequence for the organisation in the scenario.',
    'Acronyms: expand them and use the meaning. An answer about WCAG that never mentions accessibility is a generic answer.',
    'Networking: get the layer counts right — OSI has 7, TCP/IP has 4 — and do not confuse the TCP/IP "internet" layer with the OSI "network" layer.',
    'Cloud models: an IaaS vs SaaS evaluation must relate to that organisation\'s staff skill level and the software it actually needs to run.',
    'Resilience: a hot vs cold site evaluation must weigh the ongoing cost of a mirrored hot site against the business cost of downtime.'
  ],

  acronyms: [
    { a: 'AO', d: 'Assessment Objective — the skill being tested. AO1 recall, AO2 application to context, AO3 analysis and evaluation.' },
    { a: 'EOR', d: 'Extended Open Response — the 6, 9 or 12-mark essay-style questions, marked holistically by level.' },
    { a: 'MOR', d: 'Medium Open Response — shorter written answers, typically 3–6 marks.' },
    { a: 'LBMS', d: 'Levels-Based Mark Scheme — the grid used for extended responses placing you in Level 1, 2 or 3.' },
    { a: 'WCAG', d: 'Web Content Accessibility Guidelines — international standards for accessible web content, e.g. captions and narration for video.' },
    { a: 'RCA', d: 'Root Cause Analysis — finding the underlying cause of a fault rather than the symptom.' },
    { a: 'CMA', d: 'Computer Misuse Act — unauthorised access, unauthorised access with intent, unauthorised modification.' },
    { a: 'GDPR', d: 'General Data Protection Regulation — the framework governing collection and processing of personal data.' },
    { a: 'BCS', d: 'British Computer Society — the UK professional body for IT; its Code of Conduct sets professional standards.' },
    { a: 'IoT', d: 'Internet of Things — networked physical objects with sensors that exchange data.' },
    { a: 'OSI', d: 'Open Systems Interconnection — the 7-layer conceptual networking model.' },
    { a: 'TCP/IP', d: 'Transmission Control Protocol / Internet Protocol — the 4-layer protocol suite used on the internet.' },
    { a: 'DDoS', d: 'Distributed Denial of Service — flooding a target from many compromised systems so it becomes unavailable.' },
    { a: 'DHCP', d: 'Dynamic Host Configuration Protocol — automatically assigns IP addresses to devices.' },
    { a: 'RAID', d: 'Redundant Array of Independent Disks — data stored across multiple disks for resilience or speed; RAID 1 mirrors.' },
    { a: 'MFA', d: 'Multi-Factor Authentication — authentication using two or more independent factors.' },
    { a: 'CRM', d: 'Customer Relationship Management — a business tool managing customer interactions and data.' },
    { a: 'IaaS / PaaS / SaaS', d: 'Cloud delivery models — infrastructure, platform, or complete software delivered as a service.' }
  ],

  examiner: {
    note: 'From Pearson\'s published lead examiner report for the Summer 2023 core Paper 1 — 1,280 students. That was the DPDD 100-mark paper rather than the current DSD 90-mark format, but where students lose marks has not changed.',
    headline: 'Mean mark: 40 out of 100. Lowest 2, highest 89.',
    rows: [
      { q: 'State two WCAG guidelines', mean: '0.12 / 2', note: 'The worst-answered question on the paper. Almost nobody had learned them.' },
      { q: 'State two observational techniques', mean: '0.39 / 2', note: 'Two free marks, missed by most of the cohort.' },
      { q: 'Advantages of using data structures', mean: '0.63 / 4', note: 'Students said data is grouped together but never why that helps.' },
      { q: 'Describe the use of IoT', mean: '0.65 / 2', note: 'Naming a device is not describing a use.' },
      { q: 'Style conventions and maintainable code', mean: '0.85 / 3', note: 'Answers said "makes code readable" without linking back to the conventions.' },
      { q: 'Importance of robust and reliable code', mean: '1.03 / 4', note: 'Explanations were started but never fully developed.' },
      { q: 'Describe a suitable validation check', mean: '1.18 / 3', note: 'Most named the check and how it works, but not how it rejects invalid data.' },
      { q: 'Describe methods of testing', mean: '1.45 / 4', note: 'Tests described but not named, or named but not described.' },
      { q: 'EOR — evaluate decomposition (9)', mean: '3.20 / 9', note: 'Typical Level 1: superficial breakdown, no evaluation attempted.' },
      { q: 'EOR — local vs global variables (12)', mean: '3.60 / 12', note: 'The biggest question on the paper; under a third of its marks were earned.' },
      { q: 'EOR — environmental impacts (6)', mean: '1.99 / 6', note: 'Basic knowledge, little analysis.' },
      { q: 'EOR — impact of data protection law (9)', mean: '3.06 / 9', note: 'Level 1 answers had no evaluation at all.' },
      { q: 'Draw a flowchart', mean: '4.84 / 6', note: 'Best-answered question on the paper — flowcharts are reliably winnable marks.' },
      { q: 'Use abstraction to identify data items', mean: '2.90 / 4', note: 'Scored well when choices were justified rather than just listed.' },
      { q: 'Complete a trace table', mean: '2.63 / 4', note: 'Mechanical and drillable — worth practising until it is automatic.' }
    ],
    advice: [
      'Learn the small recall lists nobody bothers with — WCAG guidelines, observational techniques. They are the cheapest marks on the paper.',
      'Fully develop every 3-mark "explain". The examiner\'s repeated complaint is answers that stop one step early.',
      'Decompose the question requirements before you start writing.',
      'Use the scenario context in every extended response.',
      'Form conclusions that are supported by the points you actually made.'
    ]
  },

  lastMinute: [
    'Learn the pure-recall lists: nine protected characteristics, six Vs, seven OSI layers, four TCP/IP layers, four implementation methods, CIA and IAAA, five validation checks plus check digit, four test data types, and the WCAG principles.',
    'Learn one worked example each for: linear vs binary search, the four implementation methods, the three cloud models, the three backup types.',
    'Drill trace tables and flowcharts — they are the highest-scoring question types on Paper 1 and they are mechanical.',
    'Be able to sketch OSI and TCP/IP side by side from memory, with the right number of layers.',
    'For the ESP, memorise what each task must produce and how long you get: Task 1 planning (3h, 18), Task 2 defects (3h, 21), Task 3 design (2.5h, 21), Task 4a build (4h, 34), Task 4b evaluation (2h, 9).',
    'Remember you cannot take pre-release notes into the supervised ESP sessions — anything you have not memorised is gone.'
  ],

  credit: 'Question-level performance figures come from Pearson\'s published lead examiner report. Paper structure and mark allocations come from the published DSD sample assessment papers. The pitfalls, category traps and higher-band strategies are condensed in my own words from the Chelmsford College core paper revision guides (Paul Knighton) and the published mark schemes — no exam question or mark scheme content is reproduced.'
};
