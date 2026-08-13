/* Employer Set Project — 14 hours 30 minutes, 100 marks, 40% of the core grade.
   Five assessed tasks plus an unassessed pre-release familiarisation task.
   Content: what you are given, what you must produce, how marks are earned,
   what loses marks, and a suggested time split. */

window.TLDATA = window.TLDATA || {};

window.TLDATA.esp = {
  overview: {
    duration: '14 hours 30 minutes total, across multiple supervised sessions',
    marks: '100 marks — 40% of the core component',
    conditions: [
      'All assessed tasks are sat under supervised conditions, in separate timed sessions.',
      'No internet access during the assessed tasks.',
      'No AI tools, and no other tool designed to prepare a response.',
      'You may make notes during the pre-release research, but you are NOT allowed to take them into the supervised sessions.',
      'You must work independently throughout each supervised session.',
      'Output is a portfolio of evidence submitted electronically.',
      'Set and marked by Pearson; the brief is validated by an employer panel.'
    ],
    split: [
      { task: 'Pre-release', time: '4 hours (recommended maximum)', marks: 'not assessed' },
      { task: 'Task 1 — Planning a project', time: '3 hours', marks: '18 marks' },
      { task: 'Task 2 — Identifying and fixing defects', time: '3 hours', marks: '21 marks' },
      { task: 'Task 3 — Designing a solution', time: '2 hours 30 minutes', marks: '21 marks (18 task + 3 quality of communication)' },
      { task: 'Task 4a — Developing a solution', time: '4 hours', marks: '34 marks' },
      { task: 'Task 4b — Reflective evaluation', time: '2 hours', marks: '9 marks' }
    ],
    splitNote: 'Times and marks are taken from the published DSD sample assessment booklets — the supervised times total exactly 14 hours 30 minutes. Task 4a alone is worth roughly a third of the whole project, and Tasks 4a and 2 together are over half of it. Your live series may differ slightly, so always check the front of each booklet.',
    note: 'The order of tasks and the detail within them can change each series — the number of tasks and the overall focus stay the same. Always work from the live brief in front of you, not from a remembered past paper.',
    aos: [
      { code: 'AO1', name: 'Planning', pct: 12, what: 'Plan an approach to developing solutions to solve problems in response to a brief.' },
      { code: 'AO2', name: 'Application', pct: 41, what: 'Apply knowledge and skills to develop software, create an artefact, fix defects and mitigate risks to security.' },
      { code: 'AO3', name: 'Selecting techniques and resources', pct: 9, what: 'Select relevant tools, techniques and resources to respond to a brief and work in a collaborative environment.' },
      { code: 'AO4', name: 'English, maths and digital skills', pct: 3, what: 'Communicate technical information to technical and non-technical audiences; use maths to realise the outcome; use digital skills appropriately.' },
      { code: 'AO5a', name: 'Project outcome', pct: 26, what: 'Realise a project outcome by producing software and artefacts in response to a brief.' },
      { code: 'AO5b', name: 'Review', pct: 9, what: 'Review how well digital solutions meet a brief using reflective evaluation.' }
    ],
    aoNote: 'AO2 + AO5a = 67% of the ESP. Working, well-organised code that meets the brief is where most of the marks are — do not spend so long on planning documents that Task 4a is rushed.'
  },

  tasks: [
    {
      id: 'pre', code: 'Pre-release', title: 'Familiarisation with the industry context',
      time: '4 hours recommended · not assessed · notes may NOT be taken into the supervised sessions',
      assessed: false,
      given: 'A pre-release booklet describing the business, its sector and the context of the project, issued before the assessed tasks begin.',
      produce: 'Nothing that is marked — but your research feeds every assessed task, and it is the only stage with internet access.',
      steps: [
        'Read the brief and identify: who the client is, what sector they operate in, who the end users are, and what problem they have.',
        'Research the sector: what digital systems are typically used, common problems and risks, relevant regulations (e.g. data protection, PCI DSS for payments, accessibility for public sector).',
        'Note the vocabulary of that sector — using the right terms in Task 1 and 4b reads as informed and earns the "consideration of audience" credit.',
        'Work with others: discuss findings, share research, take part in and lead discussions. This is explicitly encouraged.',
        'Build yourself a one-page context sheet and then commit it to memory: client, users, sector risks, likely constraints, relevant legislation.'
      ],
      mistakes: [
        'Treating it as optional. It is the only time you have internet access — you cannot research later.',
        'Researching the technology but not the business. Marks in Task 1 and 4b come from decisions justified in terms of cost, risk and user need.',
        'Relying on your notes. The booklet is explicit that notes may not be taken into the supervised sessions, so anything you have not memorised is lost.',
        'Spending far more than the recommended four hours on it while doing no Task 4a coding practice.'
      ]
    },

    {
      id: 't1', code: 'Task 1', title: 'Planning a project',
      time: '3 hours · 18 marks',
      assessed: true,
      given: 'A scenario with requirements, a deadline, a team of named people with skills and hourly rates, and a Pearson-provided project plan spreadsheet to complete.',
      produce: 'A project plan using the given template, containing (a) a Gantt chart, (b) a resource and cost plan, and (c) a written rationale.',
      sections: [
        {
          h: 'Gantt chart',
          points: [
            'Assess the strengths and skills of the people you are given and assign tasks to the person who fits — say why in the rationale.',
            'Make scheduling decisions against the stated deadline: the chart must actually finish before it.',
            'Prioritise tasks based on the requirements — what must happen before what (dependencies).',
            'Assign resources to tasks correctly and appropriately.',
            'Use a recognised software development lifecycle to organise the tasks (e.g. Agile sprints, or waterfall phases: requirements → design → build → test → deploy → maintain). Name the lifecycle you are using.',
            'Show dependencies, milestones and any overlap where tasks can run in parallel — parallel work is how you fit the deadline.',
            'Include testing and contingency time. A plan with no testing phase and no slack loses marks.'
          ]
        },
        {
          h: 'Resource and cost plan',
          points: [
            'Identify and calculate costs: materials, physical resources, and personnel.',
            'Personnel cost = hourly/daily rate × time allocated. Show your working — this is where the maths (AO4b) marks live.',
            'Allocate resources to the resource list and attribute costs correctly, so the total project cost is accurate.',
            'Check your arithmetic twice. A wrong total undermines the affordability judgement that follows.',
            'Determine affordability and viability: does it fit the budget, and what is the impact on the company over time (return on investment, ongoing licence/maintenance costs)?'
          ]
        },
        {
          h: 'Rationale',
          points: [
            'Consider which factors are most relevant when planning this project.',
            'Justify the notable decisions — especially the ones with the biggest impact on the outcome.',
            'Cover: order and timing of tasks; allocation of team members; potential benefits and risks; impact of decisions on timings and costs.',
            'Justify, do not describe. "I put testing after development" is description. "Testing follows integration because defects found in an integrated build are cheaper to fix than after release, and the two-day buffer absorbs a failed regression run without breaching the deadline" is justification.'
          ]
        }
      ],
      checklist: [
        'Every requirement in the brief appears somewhere in the plan.',
        'A named software development lifecycle is used and stated.',
        'Every team member is used, and matched to tasks by their stated skills.',
        'The end date is before the client deadline, with contingency.',
        'Costs are itemised (materials, physical resources, personnel) and totalled correctly.',
        'A viability/affordability statement is present.',
        'Every significant decision has a "because…" attached to it.'
      ],
      mistakes: [
        'A Gantt chart with no dependencies — everything starting on day one.',
        'Forgetting to cost personnel time, or costing it at the wrong rate.',
        'Not using the provided template, or leaving template sections blank.',
        'Writing a rationale that restates the chart instead of justifying it.',
        'No testing, review or contingency time in the schedule.'
      ]
    },

    {
      id: 't2', code: 'Task 2', title: 'Identifying and fixing defects in existing code',
      time: '3 hours · 21 marks',
      assessed: true,
      given: 'A non-working Python file containing defects, the requirements it should meet, and a test log template to complete.',
      produce: 'Annotated testing evidence and a corrected, working program.',
      sections: [
        {
          h: 'Use testing to identify defects',
          points: [
            'Assess the given code against the requirements first — read the requirements and list what the program must do before you touch the code.',
            'Run the code and test it systematically; do not just read it and guess.',
            'Perform the remedial action needed and justify each decision you make when fixing a defect.'
          ]
        },
        {
          h: 'Documenting the testing process (this is marked in its own right)',
          points: [
            'Identify the tests to be carried out.',
            'Describe the purpose of each identified test.',
            'Identify the test data used — valid, valid extreme, invalid, invalid extreme, erroneous.',
            'Describe the expected results.',
            'Describe the actual results.',
            'Compare actual against expected.',
            'Describe any further action required.',
            'Refine the system as required, then re-test (regression) to prove the fix worked and broke nothing else.',
            'Annotate with screenshots: show the failing output, the fix, and the passing output.'
          ]
        },
        {
          h: 'The solution',
          points: [
            'Correct errors, and add or remove code so the program is functional and meets the given requirements.',
            'Follow programming conventions when fixing: precise logic and structures so the program produces consistently correct outcomes.',
            'Keep the original author\'s naming and style unless it is itself the defect — consistency is marked.',
            'Comment the fix briefly, saying what was wrong and what you changed.'
          ]
        }
      ],
      defects: [
        'Syntax: missing colon, unclosed bracket/quote, wrong indentation.',
        'Off-by-one: range(1, len(list)) missing the first item; <= where < was needed.',
        'Wrong operator: = instead of ==; and instead of or; + on a string where int() was needed.',
        'Type errors: input() not cast to int before arithmetic; comparing a string to a number.',
        'Boundary logic: a range check that rejects the boundary value it should accept.',
        'Loops: condition never becomes False; counter incremented in the wrong place; loop body outside the loop through indentation.',
        'Selection: elif chain where an earlier branch swallows a later case; missing else so nothing happens for unhandled input.',
        'Files: opened in "w" instead of "a" so data is lost; file not closed; newline not stripped so comparisons fail.',
        'Division by zero, or no handling when the list is empty.',
        'Validation missing entirely, so the program crashes on erroneous input.'
      ],
      checklist: [
        'Test table has all six columns: test, purpose, data, expected, actual, action.',
        'Test data includes valid, valid extreme, invalid, invalid extreme and erroneous.',
        'Every requirement from the brief has at least one test.',
        'Each fix is justified — what was wrong, what you changed, why that fix.',
        'Re-tests recorded after fixes (regression evidence).',
        'Final program runs and meets every stated requirement.'
      ],
      mistakes: [
        'Fixing code silently with no testing documentation — the documentation carries its own marks.',
        'Only using valid test data, so the boundary and erroneous defects are never found.',
        'Rewriting the whole program from scratch instead of fixing it.',
        'Fixing the symptom (wrapping in try/except) instead of the actual defect.',
        'Not re-running earlier tests after making changes.'
      ]
    },

    {
      id: 't3', code: 'Task 3', title: 'Designing a solution',
      time: '2 hours 30 minutes · 21 marks (18 task + 3 quality of communication)',
      assessed: true,
      given: 'A problem to solve with stated requirements, plus a data file (CSV) the solution will work with.',
      produce: 'Design documentation: decomposition of the problem plus algorithms expressed as flowcharts and/or code, with supporting explanation.',
      sections: [
        {
          h: 'Decomposition of the problem',
          points: [
            'Break the problem into smaller parts suitable for computational solutions, and justify the decisions you make.',
            'Make effective use of detailed abstraction and refinement — strip out what is irrelevant, then refine each part further.',
            'Use elements of reusable components — identify anything that appears more than once and design it as one module.',
            'Show ALL the sub-systems that make up the main solution, not just the interesting ones.',
            'Use appropriate tools for communicating algorithms: flowcharts and code.'
          ]
        },
        {
          h: 'Application of logical thinking',
          points: [
            'Describe the parts of the solution using algorithms.',
            'Define the steps clearly, and define each step uniquely — each depends on the input and on the result of preceding steps.',
            'Use key constructs: sequence, selection and iteration. Show them explicitly.'
          ]
        },
        {
          h: 'Use of conventions',
          points: [
            'Correct flowchart symbols: oval terminator, rectangle process, double-barred rectangle sub-process, diamond decision, parallelogram input/output, circle connector, arrows for flow.',
            'Label every decision branch Yes/No (or True/False).',
            'Correct keywords if expressing algorithms in code.',
            'Select and use consistent naming conventions throughout — pick snake_case or camelCase and never mix them.'
          ]
        },
        {
          h: 'Communication of the design',
          points: [
            'The design must be detailed enough that (a) it communicates the intended solution, (b) the client can make informed decisions from it, and (c) a third party could build the solution from it. That third-party test is the standard to aim for.',
            'Combine written and diagrammatic presentation.',
            'Use technical vocabulary appropriately, with consideration of the audience.',
            'Explain the structures and processes in the design — do not leave a diagram to speak for itself.'
          ]
        }
      ],
      checklist: [
        'A top-level decomposition diagram showing every sub-system.',
        'A flowchart or algorithm for each significant sub-system, not just one for the whole thing.',
        'Sequence, selection and iteration all visible somewhere and identified.',
        'Data items named consistently, matching what you will use in Task 4a.',
        'Validation designed in, not bolted on later.',
        'Written explanation next to each diagram saying what it does and why it is designed that way.',
        'A reader who has never seen the brief could build it.'
      ],
      mistakes: [
        'One giant flowchart instead of a decomposed set of modules.',
        'Wrong symbols — using a rectangle for a decision, or omitting terminators.',
        'Unlabelled decision branches.',
        'Designing only the happy path with no error handling or validation.',
        'Names in the design that do not match the code produced in Task 4a.',
        'Diagrams with no explanatory text — the communication marks are for the writing as much as the drawing.'
      ]
    },

    {
      id: 't4a', code: 'Task 4a', title: 'Developing a solution',
      time: '4 hours · 34 marks — the single biggest task in the project',
      assessed: true,
      given: 'The requirements from the brief, a CSV data file, and normally a starter Python file to build on.',
      produce: 'Working, well-organised code that meets the requirements of the brief.',
      sections: [
        {
          h: 'The solution',
          points: [
            'Develop a solution that meets the requirements of the brief — refine the system as required.',
            'Demonstrate an appropriate level of technical skill and understanding of programming techniques and problem solving.',
            'Use pre-written and user-written modules with an appropriate interface between them.',
            'A partially working solution that covers the main requirements beats an ambitious broken one. Get something running early, then extend it.'
          ]
        },
        {
          h: 'Code organisation (learn this list — it is the mark scheme)',
          points: [
            'Avoid pages of nested ifs and for-loops with copy-pasted procedural code — use functions.',
            'Clear, meaningful indentation.',
            'Precise use of logic, functions, classes or objects, with proper structure.',
            'Comments wherever they help explain the logic.',
            'Good use of local variables and minimal use of global variables.',
            'Use of constants for fixed values.',
            'A well-designed interface.',
            'Consistent style throughout.',
            'Defensive programming and handling data securely.',
            'Good exception handling.'
          ]
        },
        {
          h: 'User experience',
          points: [
            'Consistency of the product — same layout, wording and behaviour throughout.',
            'Simplify user input — menus and numbered choices rather than free typing where possible.',
            'Meaningful output messages: explain what to input, output results meaningfully, and give specific error messages.',
            'Visualise data where it helps — e.g. matplotlib graphs showing trends and patterns.'
          ]
        },
        {
          h: 'Testing in this task',
          points: [
            'Formal test documentation is NOT required in Task 4a.',
            'You should still test as you go — it shows through a working product that meets the requirements.',
            'Test after every feature you add, so a defect is always in the last thing you wrote.'
          ]
        }
      ],
      strategy: [
        'Read the requirements and write them as a checklist first. Tick them off as you implement them.',
        'Build the skeleton: menu / main flow with stubs for each function, and confirm it runs.',
        'Implement the highest-value requirement first (usually loading and processing the data file).',
        'Save a working copy before every risky change. If a change breaks it, revert rather than debug against the clock.',
        'Add validation and exception handling as you write each input, not at the end.',
        'Leave 20 minutes at the end to run through the requirements checklist against the finished program.'
      ],
      checklist: [
        'Every requirement in the brief attempted.',
        'Code split into functions with meaningful names; no copy-pasted blocks.',
        'Constants used for fixed values (rates, limits, filenames).',
        'Input validated; try/except around file access and numeric conversion.',
        'Specific, helpful error messages — no raw crashes.',
        'Comments explaining the non-obvious logic.',
        'Consistent naming convention and indentation throughout.',
        'Output is clearly labelled and readable; any charts have titles, axis labels and a legend.',
        'The program still runs from a clean start after your final edit.'
      ],
      mistakes: [
        'Running out of time because Tasks 1–3 were over-polished.',
        'One enormous main() with everything in it — this directly loses the code-organisation marks.',
        'Hard-coded values scattered through the code instead of constants.',
        'No error handling, so the program dies on a missing file or a letter typed at a number prompt.',
        'Charts with no axis labels or title.',
        'Leaving the program in a broken state at the end because a last-minute change was not tested.'
      ]
    },

    {
      id: 't4b', code: 'Task 4b', title: 'Reflective evaluation',
      time: '2 hours · 9 marks',
      assessed: true,
      given: 'Your own Task 4a solution and the original brief.',
      produce: 'A written reflective evaluation of the solution you produced.',
      sections: [
        {
          h: 'What must be in it',
          points: [
            'Apply reflection and evaluation techniques — this is judgement, not description.',
            'Provide evidence that the product meets the brief requirements.',
            'Include measures against the success criteria — take each criterion in turn and state whether it is met, partly met or not met, with evidence.',
            'Provide evidence that the product meets user needs, drawn from your testing.',
            'Discuss how it could be improved if the problem was revisited and given detailed consideration.'
          ]
        },
        {
          h: 'How to structure it',
          points: [
            '1. Restate the requirements/success criteria as a list.',
            '2. For each: met / partly met / not met, with specific evidence — "the program calculates the monthly average correctly, shown by the output of 4.2 for the March data".',
            '3. Strengths: what works well and why that matters to this client and these users.',
            '4. Weaknesses: be honest and specific. Naming a real limitation earns more than claiming everything is perfect.',
            '5. Improvements: what you would do differently with more time, and what benefit it would bring.',
            '6. Overall judgement: does the solution meet the brief, and to what extent?'
          ]
        }
      ],
      language: [
        'Use evaluative language: "this meets the requirement because…", "this is a limitation because…", "the impact on the user is…", "on balance…".',
        'Refer to specific examples from your own work — the spec requires evaluation "supported by specific examples".',
        'Link back to the client and users from the brief, not to yourself: "the store manager can now see…" rather than "I found this hard".',
        'Reflect on process as well as product: what you would plan differently, where time was lost, what you learned.'
      ],
      checklist: [
        'Every success criterion addressed individually.',
        'Specific evidence (values, outputs, test results) rather than general claims.',
        'At least two genuine, specific weaknesses identified.',
        'Improvements are concrete and justified by benefit, not just "add more features".',
        'Written for the client — technical but readable, correct spelling and grammar (AO4a English marks).',
        'A clear overall judgement at the end.'
      ],
      mistakes: [
        'Describing what you did instead of judging how well it worked.',
        'Claiming everything was successful with no evidence and no weaknesses.',
        'Vague improvements — "make it better", "add a GUI" with no reason.',
        'Writing a diary of the session rather than an evaluation of the product.',
        'Running out of time — this task is 9% of the ESP on its own (AO5b), so protect the time for it.'
      ]
    }
  ],

  timing: {
    title: 'Suggested time discipline',
    points: [
      'The whole ESP is 14h30. Treat each task\'s session length as fixed — you cannot borrow time from a later session for an earlier task.',
      'In every session, spend the first 5 minutes reading the task and listing what must be produced, and the last 10 minutes checking you produced all of it.',
      'AO2 and AO5a (application and project outcome) are 67% of the marks. If you are behind, protect Task 4a.',
      'Never leave a task blank because you ran out of time on the previous one — partial marks are always available.'
    ]
  }
};
