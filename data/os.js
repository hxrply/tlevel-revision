/* GENERATED FILE — do not edit by hand.
   Source: tools/os_content.py. Regenerate with: python tools/build_content.py
   Occupational Specialism, paper 19540. */

window.TLDATA = window.TLDATA || {};

window.TLDATA.os = {
 "name": "Occupational Specialism",
 "paper": "19540",
 "intro": "One extended project in four tasks: propose and design a solution for a client, build a working prototype in at least two languages, gather feedback on it, then evaluate it. Graded Pass, Merit or Distinction. The skills pages below teach the front end and back end you need to build it.",
 "facts": [
  [
   "145",
   "marks"
  ],
  [
   "67 hours",
   "supervised"
  ],
  [
   "4",
   "tasks"
  ],
  [
   "Pass / Merit / Distinction",
   ""
  ]
 ],
 "hub": [
  {
   "h": "Time and marks",
   "ic": "◷",
   "blocks": [
    {
     "table": {
      "cols": [
       "Task",
       "Supervised time",
       "Marks",
       "How the marks split"
      ],
      "num": [
       2
      ],
      "rows": [
       [
        "Task 1 · Proposal and design",
        "20 hours over 3 weeks",
        "58",
        "Proposal 24 (decomposition 9 · wider issues 9 · business context 6) · Design 34 (interface 6 · algorithms 10 · data 6 · test strategy 6 · communication 6)"
       ],
       [
        "Task 2 · Developing the solution",
        "30 hours over 4 weeks",
        "48",
        "Functionality 8 · code organisation 8 · user experience 8 · legal and standards 6 · test data 6 · testing to drive iteration 6 · iterative documentation 6"
       ],
       [
        "Task 3a · Gathering feedback",
        "15 hours",
        "24",
        "Feedback materials 12 · feedback tools 6 · communication 6"
       ],
       [
        "Task 3b · Evaluating",
        "one 2-hour session",
        "15",
        "Assets and content 6 · evaluation of outcomes 9"
       ]
      ],
      "foot": [
       "Total",
       "67 hours",
       "145",
       ""
      ]
     }
    },
    {
     "callout": {
      "kind": "warn",
      "title": "If you used this site before October",
      "text": "The old version of this page described the newer Digital Software Development specialism — 50 hours 30, 144 marks and a generative-AI activity. None of that applies to your 19540 papers. Everything on these pages now comes from your real task booklets and mark scheme."
     }
    }
   ]
  },
  {
   "h": "The two-language rule",
   "ic": "⚠",
   "blocks": [
    {
     "p": "Task 2 must be built in **at least two programming languages** covering front end and back end. **HTML and CSS do not count** — they are markup and styling, not programming languages. The top functionality band also requires the code in both languages to work consistently."
    },
    {
     "table": {
      "cols": [
       "Pairing",
       "What it looks like"
      ],
      "rows": [
       [
        "JavaScript + PHP (+ SQL)",
        "The most common student stack. HTML/CSS/JS in the browser, PHP on the server, MySQL for the data. Three languages, comfortably over the bar"
       ],
       [
        "JavaScript + SQL",
        "Valid, but SQL cannot be called from the browser. Something on the server still has to run it, which in practice means PHP"
       ],
       [
        "Python + SQL",
        "Valid. A Python web framework such as Flask or Django with a SQL database"
       ]
      ]
     }
    },
    {
     "callout": {
      "kind": "bad",
      "title": "Build the core feature yourself",
      "text": "One student embedded a third-party calculator in an iframe as their main feature. It was capped at band 2 because it showed none of their own coding, broke the visual consistency and left that logic undocumented. The Distinction example wrote the same calculator in JavaScript from scratch."
     }
    }
   ]
  },
  {
   "h": "What separates Pass from Distinction",
   "ic": "★",
   "blocks": [
    {
     "table": {
      "cols": [
       "",
       "Pass-level work did this",
       "Distinction-level work did this"
      ],
      "rows": [
       [
        "Decomposition",
        "One high-level diagram of the main pages",
        "Hierarchical breakdowns of complex subsystems, such as how registration or booking works inside"
       ],
       [
        "Requirements and KPIs",
        "Generic: bounce rate, page load time",
        "Measurable and tied to the client: under 2 seconds on 4G; KPIs linked to the business goals"
       ],
       [
        "Risks and law",
        "Lists GDPR; generic fixes like two-factor login",
        "Explains exactly how the solution complies and how each mitigation works for this client"
       ],
       [
        "Interface",
        "Cluttered, several fonts and colours",
        "Annotated wireframes first, then a consistent, professional high-fidelity design"
       ],
       [
        "Algorithms",
        "The happy path only",
        "Validation, error loops and different routes for different users"
       ],
       [
        "Testing",
        "Normal data and empty fields; bugs listed but not fixed",
        "Normal, erroneous and boundary data; each bug fixed and re-tested as a new log entry"
       ],
       [
        "Feedback",
        "Two similar questionnaires",
        "Distinct technical and non-technical instruments, plus observation and code review"
       ],
       [
        "Evaluation",
        "States a requirement was met",
        "Shows how well, with screenshots and quotes, and links every improvement to specific feedback"
       ]
      ]
     }
    }
   ]
  }
 ],
 "tasks": [
  {
   "id": "t1",
   "code": "Task 1",
   "title": "Proposal and design",
   "summary": "Research the industry, write a proposal for the client, then design the interface, data, algorithms and tests.",
   "facts": [
    [
     "20 hours",
     "over 3 weeks"
    ],
    [
     "58",
     "marks"
    ],
    [
     "monitored internet",
     "in sessions"
    ]
   ],
   "parts": [
    {
     "h": "Rules for this task",
     "ic": "§",
     "blocks": [
      {
       "ul": [
        "You only produce the proposal and designs **in supervised sessions**, and cannot access them outside.",
        "Outside sessions you **may research** and make notes of **facts and figures**.",
        "Notes you take in must not interpret or analyse the research for the scenario. Your tutor checks them and they are submitted as an appendix.",
        "You have **monitored internet access** during the sessions. A test strategy template is provided."
       ]
      }
     ]
    },
    {
     "h": "Activity A(i) — research",
     "ic": "⌕",
     "blocks": [
      {
       "p": "Research how digital solutions meet the needs of users in the client's industry. Cover:"
      },
      {
       "ul": [
        "How **hardware and software** are used in that industry.",
        "**Emerging technologies** in the sector.",
        "How digital solutions meet **different user needs**.",
        "The **industry guidelines and regulations** you must follow."
       ]
      },
      {
       "callout": {
        "kind": "tip",
        "title": "Keep it as facts and figures",
        "text": "Write what is true and where it came from — statistics, regulations, named products — with the source and date. Save the interpretation for the proposal itself, written in the session."
       }
      }
     ]
    },
    {
     "h": "Activity A(ii) — the proposal (24 marks)",
     "ic": "✎",
     "blocks": [
      {
       "table": {
        "cols": [
         "Strand",
         "Marks",
         "Distinction needs"
        ],
        "num": [
         1
        ],
        "rows": [
         [
          "Decomposing the problem",
          "9",
          "Every problem identified and decomposed; a solution that meets the full needs, mitigates the risks and addresses the regulations"
         ],
         [
          "Appreciation of wider issues",
          "9",
          "Comprehensive reasoning that fully justifies how needs are met, risks mitigated and regulations addressed"
         ],
         [
          "Appreciation of the business context",
          "6",
          "Comprehensive, perceptive definitions of functional and non-functional requirements, KPIs and user acceptance criteria"
         ]
        ],
        "foot": [
         "Total",
         "24",
         ""
        ]
       }
      },
      {
       "p": "Your proposal must cover: the business context; functional and non-functional requirements; decomposition of the problems; KPIs and user acceptance criteria; a description of the solution; and justification of how it meets the client's and users' needs, how risks are mitigated, and how regulations and law are addressed."
      },
      {
       "code": {
        "title": "Requirements that score versus requirements that do not",
        "lang": "text",
        "src": "FUNCTIONAL  (what the system does)\n  weak:   Users can book.\n  strong: FR3  A registered member can book an available class slot, see the\n               remaining capacity before confirming, and receive an on-screen\n               and email confirmation with a booking reference.\n\nNON-FUNCTIONAL  (how well it does it)\n  weak:   The site should be fast and secure.\n  strong: NFR2 Every page loads in under 2 seconds on a 4G connection.\n          NFR5 Passwords are stored only as salted hashes; no plain text anywhere.\n          NFR7 All pages meet WCAG 2.2 level AA.\n\nKPI  (a business measure tied to the client's goal)\n  weak:   Bounce rate.\n  strong: KPI1 Increase online bookings from 30% to 60% of all bookings\n               within six months of launch.\n\nUSER ACCEPTANCE CRITERION  (testable yes or no)\n  UAC4  Given a member is logged in and a class has space,\n        when they choose Book and confirm,\n        then the booking appears in My Bookings and capacity drops by one."
       }
      },
      {
       "callout": {
        "kind": "bad",
        "title": "Generic risks cost marks",
        "text": "'Use two-factor authentication' for data privacy, with no link to this client, kept one proposal at Pass. Name the actual data you hold, the actual risk, and how your specific design reduces it."
       }
      },
      {
       "code": {
        "title": "A risk table row done properly",
        "lang": "text",
        "src": "Risk:        Members' health information (injuries entered when booking\n             a personal trainer) is exposed.\nLikelihood:  Medium   Impact: High — special category data under UK GDPR\nMitigation:  Store only a yes/no flag and a free-text note visible to staff\n             with the trainer role; encrypt the column; record consent at\n             the point of entry; delete it 12 months after the last booking.\nRegulation:  UK GDPR Article 9 (special category data), data minimisation."
       }
      }
     ]
    },
    {
     "h": "Activity B — the design (34 marks)",
     "ic": "▣",
     "blocks": [
      {
       "table": {
        "cols": [
         "Strand",
         "Marks",
         "Distinction needs"
        ],
        "num": [
         1
        ],
        "rows": [
         [
          "Effectiveness of the interface design",
          "6",
          "Sophisticated layout and white space, clear visual hierarchy, common conventions"
         ],
         [
          "Algorithms — decomposition",
          "4",
          "Highly effective decomposition covering inputs, processes and outputs"
         ],
         [
          "Algorithms — logic and conventions",
          "6",
          "Precise, efficient logic and consistent conventions"
         ],
         [
          "Data requirements",
          "6",
          "Variables, structures and types fully appropriate; consistent naming; error handling for every input that needs it"
         ],
         [
          "Test strategy",
          "6",
          "How components interrelate, the order to test them, and the types of test"
         ],
         [
          "Quality of communication",
          "6",
          "Consistently appropriate techniques, formats and technical language for the audience"
         ]
        ],
        "foot": [
         "Total",
         "34",
         ""
        ]
       }
      },
      {
       "p": "The design must include visual/interface designs, data requirements, a selection of algorithm designs (up to **five complex problems**) and a test strategy — detailed enough for a third-party developer to build from, and clear enough for the client to decide."
      }
     ]
    },
    {
     "h": "Interface design",
     "ic": "▭",
     "blocks": [
      {
       "ol": [
        "Start with **annotated wireframes** — layout, navigation and why each element is where it is.",
        "Then a **high-fidelity** version with a fixed colour palette and type scale."
       ]
      },
      {
       "ul": [
        "Keep **objects and options visible** so users do not have to remember things between screens.",
        "Show **feedback** for every action — what happened and what happens next.",
        "Cut **irrelevant content and images**; every extra element competes for attention.",
        "Be **consistent**: one font family, a small palette, the same component looking the same everywhere.",
        "Mind **line spacing** — too tight is hard to follow, too loose loses the reader.",
        "Show **help and documentation** where users might get stuck."
       ]
      },
      {
       "callout": {
        "kind": "tip",
        "title": "See the UML and design page",
        "text": "It has worked examples of a data dictionary, ERD, use case and activity diagrams, and a test strategy table."
       }
      }
     ]
    },
    {
     "h": "Algorithm design",
     "ic": "≡",
     "blocks": [
      {
       "p": "Choose the key processes: collecting and processing data; data passing between front end and back end; the key calculations; filtering and visualising data."
      },
      {
       "ul": [
        "Design **every route**, not just the happy path — validation, error loops, and different flows for different users such as member and admin.",
        "Show what is input, what is output, and what happens when there is **no result**.",
        "Show the link to the **API, CSV file or database**.",
        "Use sensible names, keywords and indentation, and **no programming syntax**.",
        "Use the correct flowchart symbols if you draw flowcharts."
       ]
      },
      {
       "code": {
        "title": "A booking algorithm that handles the unhappy paths",
        "lang": "pseudocode",
        "src": "FUNCTION BookClass (MemberID, ClassID)\nBEGIN FUNCTION\n    IF MemberID is not logged in THEN\n        SEND \"Please log in to book\" TO DISPLAY\n        RETURN FALSE\n    END IF\n    SET Slot TO the record for ClassID FROM the Classes table\n    IF Slot does not exist THEN\n        SEND \"That class could not be found\" TO DISPLAY\n        RETURN FALSE\n    END IF\n    IF Slot.Booked >= Slot.Capacity THEN\n        SEND \"Sorry, that class is full\" TO DISPLAY\n        SEND the next three classes of the same type TO DISPLAY\n        RETURN FALSE\n    END IF\n    IF MemberID already has a booking for ClassID THEN\n        SEND \"You are already booked on this class\" TO DISPLAY\n        RETURN FALSE\n    END IF\n    WRITE Bookings (MemberID, ClassID, today's date)\n    SET Slot.Booked TO Slot.Booked + 1\n    SEND \"Booked - your reference is \" & the new BookingID TO DISPLAY\n    RETURN TRUE\nEND FUNCTION"
       }
      }
     ]
    },
    {
     "h": "Data requirements and test strategy",
     "ic": "▤",
     "blocks": [
      {
       "ul": [
        "A **data dictionary** for every table: field, type, size, constraints (key, unique, not null, range) and description.",
        "An **ERD** with the relationships and their cardinality, and the keys that implement them.",
        "One **naming convention**, used everywhere.",
        "The **error handling** for every input — what is rejected and the message shown."
       ]
      },
      {
       "p": "The test strategy does not list every test. It shows, for a selection of components, **the order** you will test them (unit, then integration, then system, then acceptance), **the types of test** for each, and **the categories of data** — normal, boundary, erroneous and absent."
      }
     ]
    },
    {
     "h": "Checklist",
     "ic": "☑",
     "blocks": [
      {
       "check": {
        "key": "os-t1",
        "items": [
         "Research notes are facts and figures with sources and dates",
         "Complex subsystems decomposed, not just the top-level pages",
         "Functional and non-functional requirements numbered and specific",
         "Non-functional requirements measurable",
         "KPIs tied to the client's own goals",
         "User acceptance criteria testable yes or no",
         "Risks and mitigations specific to this client",
         "Each regulation explained — how the solution complies",
         "Annotated wireframes and a consistent high-fidelity design",
         "Up to five algorithms, each including validation and error routes",
         "Data dictionary and ERD with types, constraints and relationships",
         "Test strategy shows order, types and data categories",
         "Readable by both the client and a developer"
        ]
       }
      }
     ]
    }
   ]
  },
  {
   "id": "t2",
   "code": "Task 2",
   "title": "Developing the solution",
   "summary": "Build a working prototype in at least two languages, with an assets log, test log and development log.",
   "facts": [
    [
     "30 hours",
     "over 4 weeks"
    ],
    [
     "48",
     "marks"
    ],
    [
     "2+ languages",
     "front and back end"
    ]
   ],
   "parts": [
    {
     "h": "Rules for this task",
     "ic": "§",
     "blocks": [
      {
       "ul": [
        "**Monitored internet access** and a copy of your Task 1 proposal and designs — which you cannot change.",
        "A test log template is provided.",
        "Your tutor may tell you whether the design is appropriate and whether the solution will work, but **not how to improve it**.",
        "Submit key versions of the prototype and its **source code in its original file format**, not as PDFs."
       ]
      }
     ]
    },
    {
     "h": "Mark breakdown",
     "ic": "▤",
     "blocks": [
      {
       "table": {
        "cols": [
         "Strand",
         "Marks",
         "Distinction needs"
        ],
        "num": [
         1
        ],
        "rows": [
         [
          "Functionality",
          "8",
          "Consistently efficient, working code in at least two languages, with precise logic throughout"
         ],
         [
          "Code organisation",
          "8",
          "Easily maintainable by someone else: consistent naming, logical organisation, informative comments"
         ],
         [
          "User experience",
          "8",
          "Excellent input handling, guidance and error messages, and outputs; fully robust"
         ],
         [
          "Legal, regulatory and standards",
          "6",
          "Accessibility, compatibility, legal and ethical considerations, and controls for confidentiality, integrity and availability"
         ],
         [
          "Suitability of test data",
          "6",
          "Detailed testing of inputs, calculations, validation and processes using normal, erroneous and extreme data"
         ],
         [
          "Testing to inform iteration",
          "6",
          "Clear evidence that testing drove fixes, with re-tests"
         ],
         [
          "Quality of the iterative process",
          "6",
          "Detailed records of notable changes, perceptive reasons for them, and effective versioning"
         ]
        ],
        "foot": [
         "Total",
         "48",
         ""
        ]
       }
      }
     ]
    },
    {
     "h": "What the functionality marks reward",
     "ic": "⚙",
     "blocks": [
      {
       "ul": [
        "**Server-side scripting** using request and response objects.",
        "**Web APIs** and parsing **JSON or XML**.",
        "A **database** with both **DDL** (creating tables) and **DML** (inserting, selecting, updating, deleting).",
        "A data model that links **more than one table**.",
        "Functions, procedures and classes — not long linear scripts.",
        "If you use recursion, a condition that stops it."
       ]
      }
     ]
    },
    {
     "h": "Code organisation and user experience",
     "ic": "▣",
     "blocks": [
      {
       "ul": [
        "Avoid pages of **nested ifs** and **copy-pasted** blocks — that is named as a reason for lower marks.",
        "Small pieces of logic, functions or classes with one job each.",
        "**Local variables**, very few globals, and **constants** for fixed values.",
        "Meaningful, consistent names — the Distinction example used names like `annualEnergyEmissions` and `KWH_TO_CO2E`.",
        "Comments that explain **why**, not what.",
        "Defensive programming and good exception handling."
       ]
      },
      {
       "p": "User experience is judged on six qualities:"
      },
      {
       "table": {
        "cols": [
         "Quality",
         "Ask yourself"
        ],
        "rows": [
         [
          "Useful",
          "Does it meet the user's need, and are the outputs accurate?"
         ],
         [
          "Usable",
          "Is it easy and intuitive?"
         ],
         [
          "Desirable",
          "Is it pleasing to look at and consistent with the brand?"
         ],
         [
          "Findable",
          "Can users find each feature and piece of information?"
         ],
         [
          "Accessible",
          "What accessibility features are there, and do they work?"
         ],
         [
          "Credible",
          "Is the information trustworthy?"
         ]
        ]
       }
      }
     ]
    },
    {
     "h": "Testing that reaches the top band",
     "ic": "✓",
     "blocks": [
      {
       "p": "Test **inputs, calculations, validation and processes** with every category of data:"
      },
      {
       "table": {
        "cols": [
         "Category",
         "Example for a registration form"
        ],
        "rows": [
         [
          "Normal",
          "A typical name, a valid email, a 12-character password"
         ],
         [
          "Boundary (extreme)",
          "Password exactly at the minimum and maximum length, and one either side"
         ],
         [
          "Erroneous",
          "Email without an @, letters in a phone number"
         ],
         [
          "Absent",
          "Every required field left blank"
         ],
         [
          "Extreme values",
          "An extremely long name; zero, negative and huge numbers in a calculator"
         ]
        ]
       }
      },
      {
       "callout": {
        "kind": "ok",
        "title": "The pattern the Distinction log showed",
        "text": "Test 4 fails. The cause is diagnosed and fixed. **Test 4.1** re-tests it and passes, and earlier tests are re-run to prove nothing else broke. A log that only lists known bugs, with no fix and re-test, stays at band 1."
       }
      }
     ]
    },
    {
     "h": "Documenting the iterative process",
     "ic": "↻",
     "blocks": [
      {
       "p": "Work in cycles and record each one: requirements → design → implement and test → review. At the end of each cycle, record whether this version is **kept** as the base for the next or **discarded**."
      },
      {
       "code": {
        "title": "A development log entry",
        "lang": "text",
        "src": "Iteration 3  ·  v0.3  ·  commit 8f2c1a4  ·  14 Mar\n\nGoal:        Booking confirmation with live capacity.\nBuilt:       book.php endpoint (prepared statements), bookClass() in booking.js,\n             capacity shown on each class card.\nTests:       T11-T16. T13 failed: two members booking the last place at the same\n             moment could both succeed.\nChange:      Wrapped the capacity check and insert in one transaction with a\n             row lock. Re-tested as T13.1 - pass. Re-ran T11-T16 - all pass.\nWhy:         Overbooking would break UAC4 and the client's main complaint about\n             the current phone system.\nDecision:    KEEP as the base for iteration 4.",
        "note": "A perceptive rationale explains why the original choice was made and why the change is better — not just that something was fixed."
       }
      },
      {
       "p": "Keep an **assets log** too: every source used, what the content is and its purpose, and the date you retrieved it."
      },
      {
       "table": {
        "cols": [
         "Asset",
         "Source",
         "Licence",
         "Purpose",
         "Retrieved"
        ],
        "rows": [
         [
          "Hero image, spin class",
          "unsplash.com/photos/…",
          "Unsplash Licence — free, no attribution required",
          "Home page banner",
          "12 Mar"
         ],
         [
          "Icons",
          "fonts.google.com/icons",
          "Apache 2.0",
          "Navigation and buttons",
          "12 Mar"
         ],
         [
          "Date-picker snippet",
          "stackoverflow.com/a/…",
          "CC BY-SA 4.0 — adapted, attributed in a comment",
          "Booking form",
          "15 Mar"
         ]
        ]
       }
      }
     ]
    },
    {
     "h": "Checklist",
     "ic": "☑",
     "blocks": [
      {
       "check": {
        "key": "os-t2",
        "items": [
         "Two programming languages genuinely used (HTML/CSS do not count)",
         "Core features coded by you, no iframes or embedded widgets",
         "Database built with DDL and used with DML, more than one table",
         "Prepared statements for every query; passwords hashed",
         "Validation on the server, not only in the browser",
         "Functions or classes, constants, few globals, informative comments",
         "Accessibility checked against WCAG; works on phone and desktop",
         "Assets log with sources, licences, purpose and dates",
         "Test log with normal, boundary, erroneous and absent data",
         "Every failed test has a fix and a re-test entry",
         "Development log per iteration with keep or discard decision",
         "Key versions saved; source submitted in original format"
        ]
       }
      }
     ]
    }
   ]
  },
  {
   "id": "t3a",
   "code": "Task 3a",
   "title": "Gathering feedback",
   "summary": "Demonstrate the prototype to technical and non-technical audiences and collect feedback you can analyse.",
   "facts": [
    [
     "15 hours",
     "supervised"
    ],
    [
     "24",
     "marks"
    ]
   ],
   "parts": [
    {
     "h": "What you produce",
     "ic": "◎",
     "blocks": [
      {
       "ul": [
        "Demonstration materials suitable for a **technical** audience, such as programmers, and a **non-technical** one, such as the client and users.",
        "A **plan** for how you will gather feedback.",
        "The feedback itself, **recorded in a form you can analyse**."
       ]
      },
      {
       "table": {
        "cols": [
         "Strand",
         "Marks",
         "Distinction needs"
        ],
        "num": [
         1
        ],
        "rows": [
         [
          "Effectiveness of the materials",
          "12",
          "Materials that would gather high-quality feedback on every aspect of the prototype"
         ],
         [
          "Use of feedback tools",
          "6",
          "Tools that consistently give evidence for the next iteration"
         ],
         [
          "Effectiveness of communication",
          "6",
          "Consistently right for both audiences, in technique, format and language"
         ]
        ],
        "foot": [
         "Total",
         "24",
         ""
        ]
       }
      }
     ]
    },
    {
     "h": "Two genuinely different instruments",
     "ic": "⇆",
     "blocks": [
      {
       "p": "The Pass example used two questionnaires that overlapped heavily. The Distinction example made them completely different:"
      },
      {
       "table": {
        "cols": [
         "Non-technical — client and users",
         "Technical — programmers"
        ],
        "rows": [
         [
          "Overall look, colour scheme and readability",
          "Maintainability: could you extend this code?"
         ],
         [
          "How easy was it to create an account and book?",
          "Adherence to a coding standard such as PEP 8 or a JS style guide"
         ],
         [
          "Could you find what you needed?",
          "Security: is any business logic or validation only on the client side?"
         ],
         [
          "Accessibility: text size, contrast, keyboard use",
          "Efficiency: repeated code that breaks DRY (Don't Repeat Yourself)"
         ],
         [
          "Plain English, no jargon",
          "Precise technical language"
         ]
        ]
       }
      },
      {
       "callout": {
        "kind": "tip",
        "title": "Make people explain",
        "text": "Pair every rating scale with a **required** open question — 'Explain your score'. Ratings tell you what; reasons tell you what to change."
       }
      }
     ]
    },
    {
     "h": "Beyond questionnaires",
     "ic": "◉",
     "blocks": [
      {
       "ul": [
        "**User observation** — set tasks such as 'book a class for Friday' and record where people hesitate or fail.",
        "**Paired code review** with a programmer, recorded.",
        "**Screen-recorded demonstration** sent before testing, so testers understand the full scope. Free tools such as OBS work.",
        "Testers across a **range of ages and abilities**, real target users, and programming professionals."
       ]
      },
      {
       "p": "Finish with a development plan where **every** proposed change links to a specific piece of feedback and gives a technical reason the fix is right — not just 'the PHP is broken', but why refactoring the database connection solves what testers reported."
      }
     ]
    }
   ]
  },
  {
   "id": "t3b",
   "code": "Task 3b",
   "title": "Evaluating the solution",
   "summary": "A two-hour, no-internet evaluation of your assets, sources and how well the prototype met its requirements.",
   "facts": [
    [
     "2 hours",
     "single session"
    ],
    [
     "15",
     "marks"
    ],
    [
     "no internet",
     ""
    ]
   ],
   "parts": [
    {
     "h": "Rules and marks",
     "ic": "§",
     "blocks": [
      {
       "ul": [
        "One two-hour supervised session, **no internet**.",
        "You may use your design, your prototype and the feedback from Task 3a."
       ]
      },
      {
       "table": {
        "cols": [
         "Strand",
         "Marks",
         "Distinction needs"
        ],
        "num": [
         1
        ],
        "rows": [
         [
          "Effectiveness of assets and content",
          "6",
          "A comprehensive review of appropriateness, validity and reliability of sources, and legal and ethical implications, corroborated across sources"
         ],
         [
          "Evaluation of project outcomes",
          "9",
          "A thorough evaluation against requirements, KPIs and acceptance criteria, with a perceptive, evidence-backed plan for the next iteration"
         ]
        ],
        "foot": [
         "Total",
         "15",
         ""
        ]
       }
      },
      {
       "callout": {
        "kind": "tip",
        "title": "Prepare your evidence first",
        "text": "With no internet and two hours, organise your feedback charts, quotes and screenshots in Task 3a so you can drop them straight in."
       }
      }
     ]
    },
    {
     "h": "Assets and content",
     "ic": "▣",
     "blocks": [
      {
       "ul": [
        "Why each asset was **chosen**, and why alternatives were **rejected**.",
        "Name the **specific licence** — a Creative Commons variant, the Unsplash licence — rather than just saying 'copyright-free'.",
        "**Corroborate** information: say how you checked AI-generated text or a calculation formula against other reliable sources.",
        "**GDPR in depth**: what personal data the solution holds, the privacy policy, and how a user can have their data deleted.",
        "**Ethics**: acknowledged AI use, and code adapted from forums with attribution rather than copied."
       ]
      }
     ]
    },
    {
     "h": "Evaluating outcomes",
     "ic": "⚖",
     "blocks": [
      {
       "ul": [
        "Go through **every** functional and non-functional requirement, KPI and acceptance criterion.",
        "Say **how well** each is met and show it — screenshot, chart or user quote.",
        "Link **every** future improvement to a specific piece of Task 3a feedback."
       ]
      },
      {
       "code": {
        "title": "From Pass to Distinction in one sentence",
        "lang": "text",
        "src": "PASS\nAdd more accessibility features.\n\nDISTINCTION\nTwo of the six users in observation zoomed the page to read the class\ntimetable, and one asked for \"a way to make it read out\". Future iterations\nshould add a high-contrast mode and support for the browser's text-to-speech,\nwhich would also move NFR7 (WCAG AA) from partly to fully met."
       }
      }
     ]
    }
   ]
  }
 ],
 "skills": [
  {
   "id": "html",
   "code": "HTML",
   "title": "Structure and meaning",
   "summary": "Semantic pages, accessible forms, tables and media — the base every other language sits on.",
   "facts": [
    [
     "Not a programming language",
     "for the two-language rule"
    ],
    [
     "Marked via",
     "UX and accessibility"
    ]
   ],
   "parts": [
    {
     "h": "Why it matters for the specialism",
     "ic": "◎",
     "blocks": [
      {
       "p": "HTML does not count towards the two programming languages, but it is assessed indirectly: user experience, accessibility and compatibility are all scored in Task 2, and semantic markup is what makes a screen reader work."
      }
     ]
    },
    {
     "h": "The skeleton",
     "ic": "▭",
     "blocks": [
      {
       "code": {
        "title": "index.html",
        "lang": "html",
        "src": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Tidewell Leisure — Book a class</title>\n  <link rel=\"stylesheet\" href=\"css/style.css\">\n</head>\n<body>\n  <!-- page content -->\n  <script src=\"js/app.js\" defer></script>\n</body>\n</html>"
       }
      },
      {
       "ul": [
        "`lang` tells assistive technology which language to pronounce.",
        "The `viewport` tag is what makes the page work on a phone at all.",
        "`defer` runs the script after the page is built, so your JavaScript can find the elements."
       ]
      }
     ]
    },
    {
     "h": "Semantic elements",
     "ic": "⊞",
     "blocks": [
      {
       "code": {
        "title": "Landmarks a screen reader can jump between",
        "lang": "html",
        "src": "<header>\n  <h1>Tidewell Leisure</h1>\n  <nav aria-label=\"Main\">\n    <a href=\"index.html\" aria-current=\"page\">Home</a>\n    <a href=\"classes.html\">Classes</a>\n    <a href=\"account.html\">My bookings</a>\n  </nav>\n</header>\n\n<main>\n  <section aria-labelledby=\"todayHeading\">\n    <h2 id=\"todayHeading\">Today's classes</h2>\n    <article class=\"class-card\">\n      <h3>Spin</h3>\n      <p>18:00 · 45 minutes · <span class=\"spaces\">4 spaces left</span></p>\n    </article>\n  </section>\n</main>\n\n<footer>\n  <p><a href=\"privacy.html\">Privacy policy</a></p>\n</footer>"
       }
      },
      {
       "callout": {
        "kind": "bad",
        "title": "Accessibility failure",
        "text": "Headings must not skip levels. An `h1` followed by an `h3` breaks screen-reader navigation and fails WCAG."
       }
      }
     ]
    },
    {
     "h": "Accessible forms",
     "ic": "✎",
     "blocks": [
      {
       "code": {
        "title": "Every input labelled, browser validation switched on",
        "lang": "html",
        "src": "<form id=\"registerForm\" action=\"api/register.php\" method=\"post\" novalidate>\n  <label for=\"fullName\">Full name</label>\n  <input id=\"fullName\" name=\"fullName\" type=\"text\"\n         required minlength=\"2\" maxlength=\"60\" autocomplete=\"name\">\n\n  <label for=\"email\">Email</label>\n  <input id=\"email\" name=\"email\" type=\"email\" required autocomplete=\"email\">\n\n  <label for=\"password\">Password</label>\n  <input id=\"password\" name=\"password\" type=\"password\"\n         required minlength=\"10\" aria-describedby=\"passwordHelp\">\n  <p id=\"passwordHelp\" class=\"hint\">At least 10 characters.</p>\n\n  <p id=\"formError\" class=\"error\" role=\"alert\" hidden></p>\n  <button type=\"submit\">Create account</button>\n</form>",
        "note": "`novalidate` lets your JavaScript show friendly messages instead of the browser's; the attributes still document the rules. `role=\"alert\"` makes error messages announced."
       }
      },
      {
       "callout": {
        "kind": "bad",
        "title": "The most common student accessibility failure",
        "text": "An input without a `label` whose `for` matches its `id`. A screen reader announces an unlabelled box, and clicking the text does not focus the field."
       }
      }
     ]
    },
    {
     "h": "Images, media and tables",
     "ic": "▣",
     "blocks": [
      {
       "code": {
        "title": "Alt text describes purpose; decorative images are skipped",
        "lang": "html",
        "src": "<img src=\"img/spin.jpg\" alt=\"Spin class with eight riders and an instructor\">\n<img src=\"img/divider.svg\" alt=\"\">            <!-- decorative: empty alt -->\n\n<video controls>\n  <source src=\"media/tour.mp4\" type=\"video/mp4\">\n  <track kind=\"captions\" src=\"media/tour.vtt\" srclang=\"en\" label=\"English\">\n</video>\n\n<table>\n  <caption>Timetable, Monday</caption>\n  <thead>\n    <tr><th scope=\"col\">Time</th><th scope=\"col\">Class</th><th scope=\"col\">Spaces</th></tr>\n  </thead>\n  <tbody>\n    <tr><th scope=\"row\">18:00</th><td>Spin</td><td>4</td></tr>\n  </tbody>\n</table>",
        "note": "Tables are for tabular data only. Use CSS grid or flexbox for layout."
       }
      }
     ]
    }
   ]
  },
  {
   "id": "css",
   "code": "CSS",
   "title": "Layout, hierarchy and contrast",
   "summary": "Design tokens, grid and flexbox, responsive layout, and the visual hierarchy the interface marks reward.",
   "facts": [
    [
     "Marked via",
     "interface design and UX"
    ]
   ],
   "parts": [
    {
     "h": "Why it matters",
     "ic": "◎",
     "blocks": [
      {
       "p": "The interface strands reward layout and white space, visual hierarchy, consistency and common conventions. The Pass example was marked down for clutter and inconsistent fonts and colours. Every one of those is a CSS decision."
      }
     ]
    },
    {
     "h": "Design tokens — consistency by construction",
     "ic": "◐",
     "blocks": [
      {
       "code": {
        "title": "Define the palette and spacing once",
        "lang": "css",
        "src": ":root {\n  --brand: #0b5fa5;\n  --brand-dark: #08467a;\n  --text: #1a1a1a;\n  --muted: #5b6470;\n  --surface: #ffffff;\n  --bg: #f5f7fa;\n  --radius: 12px;\n  --space: 16px;\n  --font: \"Inter\", system-ui, sans-serif;\n}\n\nbody { font-family: var(--font); color: var(--text); background: var(--bg);\n       line-height: 1.6; }\n.card { background: var(--surface); border-radius: var(--radius);\n        padding: var(--space); }\n.btn-primary { background: var(--brand); color: #fff; }",
        "note": "One font family and a small palette defined once is the easiest way to evidence consistency."
       }
      },
      {
       "callout": {
        "kind": "bad",
        "title": "Contrast",
        "text": "WCAG AA needs **4.5:1** for normal text and **3:1** for large text. Light grey on white is the classic failure. Check every colour pair with a contrast checker and note the ratio in your documentation."
       }
      }
     ]
    },
    {
     "h": "Flexbox and grid",
     "ic": "▦",
     "blocks": [
      {
       "code": {
        "title": "Flexbox for a row, grid for a layout",
        "lang": "css",
        "src": "/* one dimension: a nav bar */\n.nav { display: flex; align-items: center; justify-content: space-between; gap: 12px; }\n\n/* two dimensions: cards that wrap with no media query at all */\n.class-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: var(--space);\n}\n\n/* a page layout */\n.layout { display: grid; grid-template-columns: 240px 1fr; gap: 24px; }"
       }
      }
     ]
    },
    {
     "h": "Responsive, mobile first",
     "ic": "▯",
     "blocks": [
      {
       "code": {
        "title": "Design for the phone, then add room",
        "lang": "css",
        "src": ".layout { display: block; }                 /* phone: one column */\n\n@media (min-width: 768px) {\n  .layout { display: grid; grid-template-columns: 240px 1fr; }\n}\n\nimg { max-width: 100%; height: auto; }\nbody { font-size: clamp(15px, 1vw + 13px, 18px); }"
       }
      }
     ]
    },
    {
     "h": "Focus and hover — keyboard users",
     "ic": "⌨",
     "blocks": [
      {
       "code": {
        "title": "Never remove focus without replacing it",
        "lang": "css",
        "src": "a:hover, button:hover { background: var(--brand-dark); }\n\n/* visible focus ring for keyboard users */\n:focus-visible { outline: 3px solid #f59e0b; outline-offset: 2px; }\n\n/* NEVER do this on its own: */\n/* button:focus { outline: none; } */"
       }
      }
     ]
    }
   ]
  },
  {
   "id": "js",
   "code": "JavaScript",
   "title": "Behaviour, validation and APIs",
   "summary": "The front-end programming language: DOM, events, validation, calculations and fetching JSON from your server.",
   "facts": [
    [
     "Counts as",
     "a programming language"
    ],
    [
     "Marked via",
     "functionality, organisation, UX"
    ]
   ],
   "parts": [
    {
     "h": "Variables, functions and constants",
     "ic": "ƒ",
     "blocks": [
      {
       "code": {
        "title": "const by default, functions that return values",
        "lang": "javascript",
        "src": "const MAX_PER_BOOKING = 4;          // constants in capitals\nlet spacesLeft = 12;\n\nfunction canBook(requested, available) {\n  return requested >= 1 && requested <= Math.min(MAX_PER_BOOKING, available);\n}\n\nconst pricePerPerson = (base, members) => members > 2 ? base * 0.9 : base;",
        "note": "Use `===`, never `==`. `\"2\" == 2` is true, which hides real bugs."
       }
      }
     ]
    },
    {
     "h": "Arrays: filter, map, reduce",
     "ic": "∑",
     "blocks": [
      {
       "code": {
        "title": "Replace most loops",
        "lang": "javascript",
        "src": "const bookings = [\n  { member: \"Ana\", cls: \"Spin\", people: 2 },\n  { member: \"Ben\", cls: \"Yoga\", people: 1 },\n  { member: \"Cal\", cls: \"Spin\", people: 3 },\n];\n\nconst spin = bookings.filter(b => b.cls === \"Spin\");          // keep matches\nconst names = bookings.map(b => b.member);                    // transform each\nconst people = bookings.reduce((sum, b) => sum + b.people, 0); // one total"
       }
      }
     ]
    },
    {
     "h": "The DOM and events",
     "ic": "⚡",
     "blocks": [
      {
       "code": {
        "title": "Validate on submit, show friendly errors",
        "lang": "javascript",
        "src": "const form = document.getElementById(\"registerForm\");\nconst errorBox = document.getElementById(\"formError\");\n\nfunction showError(message, field) {\n  errorBox.textContent = message;       // textContent, never innerHTML, for user text\n  errorBox.hidden = false;\n  field.focus();\n}\n\nform.addEventListener(\"submit\", (event) => {\n  event.preventDefault();               // stop the page reloading\n\n  const name = form.fullName.value.trim();\n  const email = form.email.value.trim();\n  const password = form.password.value;\n\n  if (name.length < 2) return showError(\"Please enter your full name.\", form.fullName);\n  if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {\n    return showError(\"Please enter a valid email, like name@example.com.\", form.email);\n  }\n  if (password.length < 10) {\n    return showError(\"Your password needs at least 10 characters.\", form.password);\n  }\n  errorBox.hidden = true;\n  register({ name, email, password });\n});",
        "note": "`innerHTML` executes markup, which is how cross-site scripting gets in. Use `textContent` for anything a user typed."
       }
      }
     ]
    },
    {
     "h": "A calculator you built yourself",
     "ic": "÷",
     "blocks": [
      {
       "p": "This is exactly what separated the Distinction example from the Pass one: the core calculation written, validated and named clearly in JavaScript, rather than embedded from someone else's site."
      },
      {
       "code": {
        "title": "Named constants, validation, clear output",
        "lang": "javascript",
        "src": "// Calories burned estimate: MET value x body weight (kg) x hours\nconst MET = { walking: 3.5, cycling: 7.5, running: 9.8 };\nconst MIN_WEIGHT_KG = 30;\nconst MAX_WEIGHT_KG = 250;\n\nfunction caloriesBurned(activity, weightKg, minutes) {\n  if (!(activity in MET)) throw new Error(\"Unknown activity\");\n  if (!Number.isFinite(weightKg) || weightKg < MIN_WEIGHT_KG || weightKg > MAX_WEIGHT_KG) {\n    throw new RangeError(`Weight must be between ${MIN_WEIGHT_KG} and ${MAX_WEIGHT_KG} kg`);\n  }\n  if (!Number.isFinite(minutes) || minutes <= 0) {\n    throw new RangeError(\"Minutes must be more than 0\");\n  }\n  return Math.round(MET[activity] * weightKg * (minutes / 60));\n}\n\ndocument.getElementById(\"calcForm\").addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  const out = document.getElementById(\"result\");\n  try {\n    const kcal = caloriesBurned(\n      e.target.activity.value,\n      Number(e.target.weight.value),\n      Number(e.target.minutes.value)\n    );\n    out.textContent = `About ${kcal} calories.`;\n  } catch (err) {\n    out.textContent = err.message;      // a friendly message, never a stack trace\n  }\n});",
        "note": "Test data for this: weights of 29, 30, 250 and 251; 0 and negative minutes; text in a number field; an unknown activity."
       }
      }
     ]
    },
    {
     "h": "Talking to your server: fetch and JSON",
     "ic": "⇄",
     "blocks": [
      {
       "code": {
        "title": "Request, check, parse, display",
        "lang": "javascript",
        "src": "async function loadClasses(day) {\n  const list = document.getElementById(\"classList\");\n  try {\n    const res = await fetch(`api/classes.php?day=${encodeURIComponent(day)}`);\n    if (!res.ok) throw new Error(`Server returned ${res.status}`);\n    const classes = await res.json();\n    if (classes.length === 0) {\n      list.textContent = \"No classes on this day.\";\n      return;\n    }\n    list.replaceChildren(...classes.map(renderClassCard));\n  } catch (err) {\n    console.error(err);\n    list.textContent = \"Classes could not be loaded. Please try again.\";\n  }\n}\n\nasync function bookClass(classId) {\n  const res = await fetch(\"api/book.php\", {\n    method: \"POST\",\n    headers: { \"Content-Type\": \"application/json\" },\n    body: JSON.stringify({ classId }),\n  });\n  return res.json();      // { ok: true, reference: \"TW-1042\" } or { ok: false, error: \"...\" }\n}",
        "note": "`fetch` does not throw on a 404 or 500 — only if no request could be made. Checking `res.ok` yourself is exactly the robustness that gets credited."
       }
      },
      {
       "callout": {
        "kind": "bad",
        "title": "Never trust the browser",
        "text": "Anything in JavaScript can be read and changed by the user. Validate again on the server, and keep business rules such as prices and capacity there. The Distinction evaluation moved calculator logic to the back end for exactly this reason."
       }
      }
     ]
    }
   ]
  },
  {
   "id": "sql",
   "code": "SQL",
   "title": "The database",
   "summary": "DDL to build the tables, DML to use them, joins across tables, and prepared statements against injection.",
   "facts": [
    [
     "Counts as",
     "a programming language"
    ],
    [
     "Mark scheme names",
     "DDL and DML"
    ]
   ],
   "parts": [
    {
     "h": "DDL — defining the structure",
     "ic": "▤",
     "blocks": [
      {
       "p": "**DDL** (data definition language) creates and changes structure: `CREATE`, `ALTER`, `DROP`. The mark scheme names it explicitly."
      },
      {
       "code": {
        "title": "Two linked tables with constraints",
        "lang": "sql",
        "src": "CREATE TABLE members (\n  member_id     INT AUTO_INCREMENT PRIMARY KEY,\n  full_name     VARCHAR(60)  NOT NULL,\n  email         VARCHAR(120) NOT NULL UNIQUE,\n  password_hash VARCHAR(255) NOT NULL,\n  joined_on     DATE         NOT NULL,\n  is_admin      BOOLEAN      NOT NULL DEFAULT FALSE\n);\n\nCREATE TABLE classes (\n  class_id   INT AUTO_INCREMENT PRIMARY KEY,\n  class_type VARCHAR(30) NOT NULL,\n  starts_at  DATETIME    NOT NULL,\n  capacity   INT         NOT NULL CHECK (capacity BETWEEN 1 AND 40)\n);\n\nCREATE TABLE bookings (\n  booking_id INT AUTO_INCREMENT PRIMARY KEY,\n  member_id  INT NOT NULL,\n  class_id   INT NOT NULL,\n  booked_at  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,\n  UNIQUE (member_id, class_id),                       -- no double booking\n  FOREIGN KEY (member_id) REFERENCES members(member_id),\n  FOREIGN KEY (class_id)  REFERENCES classes(class_id)\n);",
        "note": "`bookings` resolves the many-to-many relationship between members and classes. That is the 'more than one table' data model the mark scheme rewards."
       }
      },
      {
       "callout": {
        "kind": "bad",
        "title": "Dates as text",
        "text": "Store dates as `DATE` or `DATETIME`, never `VARCHAR`. Text dates sort alphabetically, cannot be compared, and block every date function."
       }
      }
     ]
    },
    {
     "h": "DML — using the data",
     "ic": "✎",
     "blocks": [
      {
       "p": "**DML** (data manipulation language) works with the rows: `SELECT`, `INSERT`, `UPDATE`, `DELETE`."
      },
      {
       "code": {
        "title": "The four operations",
        "lang": "sql",
        "src": "INSERT INTO classes (class_type, starts_at, capacity)\nVALUES ('Spin', '2026-11-20 18:00:00', 16);\n\nSELECT class_type, starts_at, capacity\nFROM classes\nWHERE starts_at >= NOW()\nORDER BY starts_at\nLIMIT 20;\n\nUPDATE members SET full_name = 'Ana Silva' WHERE member_id = 7;\n\nDELETE FROM bookings WHERE booking_id = 1042;",
        "note": "Write the `WHERE` clause first on `UPDATE` and `DELETE`. Without it, every row in the table changes."
       }
      }
     ]
    },
    {
     "h": "Joins and aggregates",
     "ic": "⋈",
     "blocks": [
      {
       "code": {
        "title": "Across tables, then summarised",
        "lang": "sql",
        "src": "-- Each upcoming class with how many places are left\nSELECT c.class_id, c.class_type, c.starts_at,\n       c.capacity - COUNT(b.booking_id) AS places_left\nFROM classes c\nLEFT JOIN bookings b ON b.class_id = c.class_id\nWHERE c.starts_at >= NOW()\nGROUP BY c.class_id, c.class_type, c.starts_at, c.capacity\nORDER BY c.starts_at;\n\n-- Members who have never booked\nSELECT m.full_name, m.email\nFROM members m\nLEFT JOIN bookings b ON b.member_id = m.member_id\nWHERE b.booking_id IS NULL;\n\n-- Busiest class types, only those with more than 20 bookings\nSELECT c.class_type, COUNT(*) AS total\nFROM bookings b\nJOIN classes c ON c.class_id = b.class_id\nGROUP BY c.class_type\nHAVING COUNT(*) > 20\nORDER BY total DESC;",
        "note": "`LEFT JOIN` keeps classes with no bookings — an `INNER JOIN` would hide them. `WHERE` filters rows before grouping; `HAVING` filters the groups after."
       }
      }
     ]
    },
    {
     "h": "Normalisation, briefly",
     "ic": "⊟",
     "blocks": [
      {
       "ul": [
        "**1NF** — one value per field, no repeating groups (no `class1`, `class2`, `class3` columns).",
        "**2NF** — every non-key field depends on the whole key.",
        "**3NF** — no non-key field depends on another non-key field. A class's instructor phone number belongs in an instructors table, not repeated on every class row."
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "php",
   "code": "PHP",
   "title": "The server side",
   "summary": "The glue between your JavaScript front end and your MySQL database: requests, responses, sessions and security.",
   "facts": [
    [
     "Counts as",
     "a programming language"
    ],
    [
     "Why here",
     "SQL needs a server to run it"
    ]
   ],
   "parts": [
    {
     "h": "Why PHP is on this list",
     "ic": "◎",
     "blocks": [
      {
       "p": "You asked for HTML, CSS, JavaScript, SQL and UML. PHP is added because browser JavaScript **cannot talk to a database directly** — something on the server has to receive the request, run the SQL and send back a response. The mark scheme rewards exactly that: server-side scripting with request and response objects. PHP with MySQL (for example through XAMPP) is the simplest way to do it, and makes your solution three languages."
      }
     ]
    },
    {
     "h": "Connect once, safely",
     "ic": "⚿",
     "blocks": [
      {
       "code": {
        "title": "api/db.php",
        "lang": "php",
        "src": "<?php\n// Credentials live in one config file outside the web root, never in every script.\nfunction db(): PDO {\n    static $pdo = null;                     // one connection per request\n    if ($pdo === null) {\n        $config = require __DIR__ . '/../config.php';\n        $pdo = new PDO(\n            \"mysql:host={$config['host']};dbname={$config['db']};charset=utf8mb4\",\n            $config['user'],\n            $config['pass'],\n            [\n                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,\n                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,\n            ]\n        );\n    }\n    return $pdo;\n}"
       }
      }
     ]
    },
    {
     "h": "A JSON endpoint with prepared statements",
     "ic": "⇄",
     "blocks": [
      {
       "code": {
        "title": "api/classes.php — GET returns JSON",
        "lang": "php",
        "src": "<?php\nrequire __DIR__ . '/db.php';\nheader('Content-Type: application/json');\n\n$day = $_GET['day'] ?? '';\nif (!preg_match('/^\\d{4}-\\d{2}-\\d{2}$/', $day)) {          // validate on the server\n    http_response_code(400);\n    echo json_encode(['error' => 'Please choose a valid date.']);\n    exit;\n}\n\ntry {\n    $stmt = db()->prepare(\n        'SELECT class_id, class_type, starts_at, capacity\n         FROM classes\n         WHERE DATE(starts_at) = ?\n         ORDER BY starts_at'\n    );\n    $stmt->execute([$day]);                                  // value sent separately\n    echo json_encode($stmt->fetchAll());\n} catch (PDOException $e) {\n    error_log($e->getMessage());                             // details to the log\n    http_response_code(500);\n    echo json_encode(['error' => 'Classes could not be loaded.']);   // not to the user\n}",
        "note": "A prepared statement sends the query structure and the values separately, so user input can never change what the query does. That sentence is the SQL injection mitigation."
       }
      },
      {
       "callout": {
        "kind": "bad",
        "title": "Never build SQL from strings",
        "text": "`\"SELECT * FROM members WHERE email = '$email'\"` lets a user rewrite your query. Every query with user input goes through `prepare` and `execute`."
       }
      }
     ]
    },
    {
     "h": "Registration and login done properly",
     "ic": "🔒",
     "blocks": [
      {
       "code": {
        "title": "Hash on register, verify on login, session afterwards",
        "lang": "php",
        "src": "<?php\n// register.php\n$hash = password_hash($_POST['password'], PASSWORD_DEFAULT);     // salted, slow hash\n$stmt = db()->prepare('INSERT INTO members (full_name, email, password_hash, joined_on)\n                       VALUES (?, ?, ?, CURDATE())');\n$stmt->execute([trim($_POST['fullName']), strtolower(trim($_POST['email'])), $hash]);\n\n// login.php\nsession_start();\n$stmt = db()->prepare('SELECT member_id, password_hash, is_admin FROM members WHERE email = ?');\n$stmt->execute([strtolower(trim($_POST['email']))]);\n$member = $stmt->fetch();\n\nif ($member && password_verify($_POST['password'], $member['password_hash'])) {\n    session_regenerate_id(true);                 // stops session fixation\n    $_SESSION['member_id'] = $member['member_id'];\n    $_SESSION['is_admin']  = (bool) $member['is_admin'];\n    echo json_encode(['ok' => true]);\n} else {\n    echo json_encode(['ok' => false, 'error' => 'Email or password is incorrect.']);\n}",
        "note": "The same message whether the email or the password was wrong, so attackers cannot discover which emails are registered."
       }
      },
      {
       "code": {
        "title": "Escaping output — stopping cross-site scripting",
        "lang": "php",
        "src": "<p>Welcome back, <?= htmlspecialchars($member['full_name'], ENT_QUOTES, 'UTF-8') ?></p>"
       }
      }
     ]
    },
    {
     "h": "Security checklist for Task 2",
     "ic": "☑",
     "blocks": [
      {
       "check": {
        "key": "os-php",
        "items": [
         "Every query uses prepare and execute",
         "Passwords stored with password_hash, checked with password_verify",
         "Server validates every input again, whatever the browser did",
         "Output escaped with htmlspecialchars",
         "Database credentials in one config file, not in the code you submit publicly",
         "Errors logged, friendly messages shown, no stack traces",
         "Admin pages check the session role on the server"
        ]
       }
      }
     ]
    }
   ]
  },
  {
   "id": "uml",
   "code": "UML & design",
   "title": "Diagrams and design documents",
   "summary": "Use case, class, sequence and activity diagrams, ERDs, data dictionaries, DFDs and the test strategy.",
   "facts": [
    [
     "Marked via",
     "Task 1 Activity B"
    ],
    [
     "Mark scheme asks for",
     "static and dynamic models"
    ]
   ],
   "parts": [
    {
     "h": "Which diagram for which job",
     "ic": "◎",
     "blocks": [
      {
       "p": "The mark scheme accepts data dictionaries, entity relationship diagrams, data flow diagrams, and **static and dynamic model diagrams** — which is UML. Static diagrams show structure; dynamic diagrams show behaviour."
      },
      {
       "table": {
        "cols": [
         "Diagram",
         "Type",
         "Shows",
         "Use it for"
        ],
        "rows": [
         [
          "Use case",
          "Dynamic",
          "Who uses the system and what they can do",
          "The proposal: scope and users"
         ],
         [
          "Activity",
          "Dynamic",
          "The steps and decisions in a process",
          "An algorithm, as an alternative to a flowchart"
         ],
         [
          "Sequence",
          "Dynamic",
          "Messages between objects over time",
          "Front end ↔ server ↔ database for one action"
         ],
         [
          "Class",
          "Static",
          "Classes, attributes, methods, relationships",
          "Object-oriented code structure"
         ],
         [
          "ERD",
          "Static",
          "Entities, attributes and relationships",
          "The database"
         ],
         [
          "Data flow diagram",
          "Dynamic",
          "How data moves between processes and stores",
          "The whole system at a glance"
         ]
        ]
       }
      }
     ]
    },
    {
     "h": "Use case diagram",
     "ic": "☺",
     "blocks": [
      {
       "code": {
        "title": "Actors on the outside, use cases inside the system boundary",
        "lang": "diagram",
        "src": "          +-------------- Tidewell booking system ---------------+\n          |                                                      |\n Member --+--( Register )                                        |\n   o      |--( Log in )<----------<<include>>----( Book a class )|\n  /|\\ ----+--( View timetable )                                  |\n  / \\     |--( Cancel booking )                                  |\n          |                                                      |\n Admin ---+--( Add class )                                       |\n   o      |--( View attendance report )                          |\n  /|\\     |--( Log in )                                          |\n          +------------------------------------------------------+",
        "note": "<<include>> means one use case always uses another — booking always requires logging in."
       }
      }
     ]
    },
    {
     "h": "Class diagram",
     "ic": "▭",
     "blocks": [
      {
       "code": {
        "title": "Name, attributes, methods; + public, - private",
        "lang": "diagram",
        "src": "+-------------------------+        +-------------------------+\n|         Member          |        |        GymClass         |\n+-------------------------+        +-------------------------+\n| - memberId : int        |        | - classId : int         |\n| - fullName : string     |        | - classType : string    |\n| - email : string        |        | - startsAt : DateTime   |\n| - passwordHash : string |        | - capacity : int        |\n+-------------------------+        +-------------------------+\n| + register() : bool     |        | + placesLeft() : int    |\n| + login(pw) : bool      |        | + isFull() : bool       |\n| + book(c) : Booking     | 1    * |                         |\n+-------------------------+--------+-------------------------+\n            | 1                                 | 1\n            |            +-----------------+    |\n            +----------* |     Booking     | *--+\n                         +-----------------+\n                         | - bookingId:int |\n                         | - bookedAt:Date |\n                         +-----------------+\n                         | + cancel():bool |\n                         +-----------------+"
       }
      }
     ]
    },
    {
     "h": "Sequence diagram",
     "ic": "↧",
     "blocks": [
      {
       "code": {
        "title": "One booking, front to back",
        "lang": "diagram",
        "src": "Member        Browser (JS)        book.php           MySQL\n  |  click Book    |                   |                  |\n  |--------------->|                   |                  |\n  |                | POST {classId}    |                  |\n  |                |------------------>|                  |\n  |                |                   | check session    |\n  |                |                   | SELECT capacity  |\n  |                |                   |----------------->|\n  |                |                   |<-----------------|\n  |                |                   | INSERT booking   |\n  |                |                   |----------------->|\n  |                |                   |<-----------------|\n  |                | {ok, reference}   |                  |\n  |                |<------------------|                  |\n  | \"Booked: TW-1042\"                  |                  |\n  |<---------------|                   |                  |",
        "note": "This is the 'data passing between front end and back end' the algorithm strand asks you to design."
       }
      }
     ]
    },
    {
     "h": "Activity diagram",
     "ic": "◇",
     "blocks": [
      {
       "code": {
        "title": "Decisions as diamonds, every branch ends",
        "lang": "diagram",
        "src": "( start )\n    |\n[ Member chooses a class ]\n    |\n< Logged in? > --no--> [ Show login ] --> ( end )\n    | yes\n< Class full? > --yes--> [ Suggest next 3 classes ] --> ( end )\n    | no\n< Already booked? > --yes--> [ Show \"already booked\" ] --> ( end )\n    | no\n[ Save booking ]\n    |\n[ Show reference ]\n    |\n( end )"
       }
      }
     ]
    },
    {
     "h": "ERD and data dictionary",
     "ic": "⋈",
     "blocks": [
      {
       "code": {
        "title": "Crow's foot: one member, many bookings",
        "lang": "diagram",
        "src": "MEMBERS ||----o< BOOKINGS >o----|| CLASSES\n\n ||   exactly one\n o<   zero or many\n |<   one or many"
       }
      },
      {
       "table": {
        "cols": [
         "Table",
         "Field",
         "Type",
         "Size",
         "Constraints",
         "Description"
        ],
        "rows": [
         [
          "members",
          "member_id",
          "INT",
          "—",
          "PK, auto increment",
          "Unique member number"
         ],
         [
          "members",
          "email",
          "VARCHAR",
          "120",
          "NOT NULL, UNIQUE, must contain @",
          "Login and contact"
         ],
         [
          "members",
          "password_hash",
          "VARCHAR",
          "255",
          "NOT NULL",
          "Salted hash only"
         ],
         [
          "classes",
          "capacity",
          "INT",
          "—",
          "NOT NULL, 1 to 40",
          "Maximum places"
         ],
         [
          "bookings",
          "member_id",
          "INT",
          "—",
          "FK → members, NOT NULL",
          "Who booked"
         ],
         [
          "bookings",
          "class_id",
          "INT",
          "—",
          "FK → classes, NOT NULL; unique with member_id",
          "Which class"
         ]
        ]
       }
      }
     ]
    },
    {
     "h": "Data flow diagram",
     "ic": "→",
     "blocks": [
      {
       "code": {
        "title": "Level 0: external entities, processes, data stores",
        "lang": "diagram",
        "src": "[ Member ] --booking request--> ( 1 Process booking ) --booking--> =[ D1 Bookings ]=\n                                       |   ^\n                          capacity     |   |  class details\n                                       v   |\n                                   =[ D2 Classes ]=\n\n( 1 Process booking ) --confirmation email--> [ Member ]\n[ Admin ] --new class--> ( 2 Manage timetable ) --class--> =[ D2 Classes ]=",
        "note": "Every data flow is labelled with the data it carries. Data never flows directly between two stores or two external entities."
       }
      }
     ]
    },
    {
     "h": "Test strategy table",
     "ic": "✓",
     "blocks": [
      {
       "table": {
        "cols": [
         "Order",
         "Component",
         "Test types",
         "Data categories",
         "Traces to"
        ],
        "rows": [
         [
          "1",
          "Registration validation (JS and PHP)",
          "Unit, white box",
          "Normal, boundary (password 9/10/11 chars), erroneous, absent",
          "FR1, NFR5"
         ],
         [
          "2",
          "Login and session",
          "Unit, black box",
          "Normal, wrong password, unknown email, absent",
          "FR2"
         ],
         [
          "3",
          "Booking endpoint and database",
          "Integration",
          "Last place, full class, double booking",
          "FR3, UAC4"
         ],
         [
          "4",
          "Whole booking journey",
          "System",
          "Normal user paths on phone and desktop",
          "UAC1–UAC6"
         ],
         [
          "5",
          "Accessibility and load time",
          "Non-functional",
          "Keyboard only, screen reader, 4G throttle",
          "NFR2, NFR7"
         ],
         [
          "6",
          "Client sign-off",
          "User acceptance",
          "Real members performing set tasks",
          "All UACs"
         ]
        ]
       }
      }
     ]
    }
   ]
  }
 ]
};
