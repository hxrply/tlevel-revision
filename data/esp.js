/* GENERATED FILE — do not edit by hand.
   Source: tools/esp_content.py. Regenerate with: python tools/build_content.py
   Employer Set Project, paper 19538. */

window.TLDATA = window.TLDATA || {};

window.TLDATA.esp = {
 "name": "Employer Set Project",
 "paper": "19538",
 "intro": "Five assessed tasks sat in separate supervised sessions, all built around one business scenario you first meet in the pre-release. 100 marks and 40% of your core grade. Every number on these pages is checked against the real 19538 papers, mark scheme and examiner report for your qualification.",
 "facts": [
  [
   "100",
   "marks"
  ],
  [
   "14h 30m",
   "supervised"
  ],
  [
   "40%",
   "of the core grade"
  ],
  [
   "69",
   "marks for an A (Summer 2025)"
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
       "Time",
       "Marks",
       "How the marks split"
      ],
      "num": [
       2
      ],
      "rows": [
       [
        "Pre-release",
        "about 6 hours",
        "0",
        "Not assessed — team research"
       ],
       [
        "Task 1 · Planning a project",
        "3 hours",
        "19",
        "Gantt chart 6 · resource and cost plan 4 · rationale 9"
       ],
       [
        "Task 2 · Fixing defects",
        "3 hours",
        "21",
        "Use of testing 8 · testing process 4 · the solution 9"
       ],
       [
        "Task 3 · Designing a solution",
        "3 hours",
        "17",
        "Decomposition 8 · logic and conventions 6 · communication 3"
       ],
       [
        "Task 4a · Developing the solution",
        "4 hours",
        "34",
        "Functionality 6 · logic 3 · robustness 3 · security 6 · code organisation 8 · user experience 8"
       ],
       [
        "Task 4b · Reflective evaluation",
        "1 hour 30",
        "9",
        "Programming outcomes 6 · future developments 3"
       ]
      ],
      "foot": [
       "Total",
       "14 hours 30",
       "100",
       ""
      ]
     }
    },
    {
     "callout": {
      "kind": "warn",
      "title": "If you used this site before October",
      "text": "The old version of this page listed Task 1 as 18 marks, Task 3 as 2 hours 30 and 21 marks, Task 4b as 2 hours, and a 4-hour pre-release. Those figures came from the newer Digital Software Development papers, not yours. The table above is from your actual 19538 papers."
     }
    }
   ]
  },
  {
   "h": "Where an A comes from",
   "ic": "★",
   "blocks": [
    {
     "p": "The A boundary in Summer 2025 was **69 out of 100**. You do not need full marks anywhere — you need to sit solidly in the upper band of most strands. This is one realistic way to reach about 73, with the biggest gains marked:"
    },
    {
     "table": {
      "cols": [
       "Task",
       "Realistic target",
       "Out of",
       "Why this target"
      ],
      "num": [
       1,
       2
      ],
      "rows": [
       [
        "Task 1",
        "14",
        "19",
        "The rationale averaged **2.63 out of 9** nationally. Reaching 6 is the cheapest 3 marks in the whole project"
       ],
       [
        "Task 2",
        "16",
        "21",
        "Boundary test data and re-testing every fix are what separate band 2 from band 3"
       ],
       [
        "Task 3",
        "12",
        "17",
        "Decompose through named functions, validate every input, count text rather than summing it"
       ],
       [
        "Task 4a",
        "25",
        "34",
        "Biggest task. Code organisation and user experience are 16 marks between them and are habits, not cleverness"
       ],
       [
        "Task 4b",
        "6",
        "9",
        "Judge against the brief, do not narrate. Most students score low here"
       ]
      ],
      "foot": [
       "Total",
       "73",
       "100",
       "Comfortably over 69"
      ]
     }
    }
   ]
  },
  {
   "h": "What the examiner said the whole cohort should fix",
   "ic": "!",
   "blocks": [
    {
     "ul": [
      "Plan in **short sprints** and think about how modules depend on each other — especially where **integration testing** fits.",
      "Use the **staff profiles**: experience and skills should drive who does what, and the risks that creates.",
      "Make the Task 1 rationale **explain and justify**, not describe what the Gantt chart already shows.",
      "Test **boundaries** properly in Task 2, including decimal values either side of a limit.",
      "Understand what **secure coding** means for Task 4a — it is not a login screen.",
      "Make the Task 4b evaluation about the **quality of what you built**, not the story of building it."
     ]
    }
   ]
  },
  {
   "h": "Rules for the supervised sessions",
   "ic": "§",
   "blocks": [
    {
     "ul": [
      "Every assessed task is sat under supervised conditions in its own session.",
      "**You cannot take pre-release notes into the supervised sessions.** Whatever you learn in the pre-release has to be in your head or your fingers.",
      "Work is kept securely between sessions. Save files with the exact naming convention printed in each booklet — submission-format problems rose this series.",
      "Hand in clean source files that run in any Python IDE. One student's Task 2 code would not run because their editor had inserted extra characters."
     ]
    }
   ]
  }
 ],
 "pages": [
  {
   "id": "pre",
   "code": "Pre-release",
   "title": "Familiarisation and research",
   "summary": "Meet the scenario, explore any data or code, rehearse the libraries. Not marked, but it sets up every task.",
   "facts": [
    [
     "about 6h",
     "suggested"
    ],
    [
     "0",
     "marks"
    ],
    [
     "teams of up to 6",
     ""
    ]
   ],
   "parts": [
    {
     "h": "What happens",
     "ic": "◎",
     "blocks": [
      {
       "p": "You get the business scenario before the assessed tasks. You can work in a team of up to six, and you may investigate both in and outside supervised sessions. Your centre schedules at least six hours."
      },
      {
       "callout": {
        "kind": "bad",
        "title": "The rule that changes how you use it",
        "text": "You will not be allowed to take your notes into the supervised assessment sessions. So the pre-release is for **rehearsal**, not for writing things down."
       }
      }
     ]
    },
    {
     "h": "How to spend the six hours",
     "ic": "✓",
     "blocks": [
      {
       "ol": [
        "Read the whole scenario twice. Write down, in your own words, who the business is, who the users are and what problem the system solves.",
        "If there is a data file, open it. For every column write: what it means, its data type (text, number, date), and whether values repeat. Text columns that repeat are the ones you will **count**, not sum.",
        "Spot the shape of the data. Long format has one row per event. Wide format has one column per date. They need different pandas code — see Task 4a.",
        "Rehearse the code from memory: read a CSV, validated menu, `value_counts()`, `groupby()`, a labelled bar chart. Do it until you can type it without looking.",
        "Research the industry for Task 1 and Task 4b: what systems businesses like this use, typical risks, relevant legislation."
       ]
      }
     ]
    },
    {
     "h": "Mistakes",
     "ic": "✕",
     "blocks": [
      {
       "ul": [
        "Writing long notes you are not allowed to use.",
        "Reading the data headings without understanding what the values mean — the examiner singled this out in Task 3.",
        "Never practising the pandas code until the four-hour Task 4a session."
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "t1",
   "code": "Task 1",
   "title": "Planning a project",
   "summary": "Gantt chart, resource and cost plan, and a written rationale for a software project.",
   "facts": [
    [
     "3 hours",
     ""
    ],
    [
     "19",
     "marks"
    ],
    [
     "rationale mean 2.63/9",
     "nationally"
    ]
   ],
   "parts": [
    {
     "h": "What you get and what you hand in",
     "ic": "◎",
     "blocks": [
      {
       "p": "**You get:** a project brief, a list of tasks with estimated work hours, staff profiles (skills, experience, pay), fixed and optional costs such as server choices, and the company's revenue, outgoings and forecast."
      },
      {
       "p": "**You hand in:** a Gantt chart, a resource and cost plan (usually a spreadsheet), and a rationale explaining your decisions."
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
         "What the top band needs"
        ],
        "num": [
         1
        ],
        "rows": [
         [
          "Gantt chart",
          "6",
          "Tasks in a thoroughly logical, efficient order using a suitable SDLC model, with accurate timescales and people assigned effectively throughout"
         ],
         [
          "Resource and cost plan",
          "4",
          "Every resource present and every cost accurate, giving an accurate total"
         ],
         [
          "Rationale",
          "9",
          "Thorough, perceptive reasoning about cost, risk and benefit; order and timing; selection and allocation of staff; dependencies and prerequisites"
         ]
        ],
        "foot": [
         "Total",
         "19",
         ""
        ]
       }
      }
     ]
    },
    {
     "h": "Gantt chart — how to reach the top band",
     "ic": "▦",
     "blocks": [
      {
       "ul": [
        "**Name your SDLC model** (agile, RAD, iterative) and make the chart look like it. A pure waterfall plan usually cannot meet the deadline.",
        "**Break big modules into chunks**: develop part, unit test part, develop next part. One long bar for a large module reads as unplanned.",
        "**Infrastructure first.** Server and network set-up must finish before anything is deployed onto them.",
        "**Dependencies.** Build the thing other modules rely on — often the database — before the modules that use it.",
        "**Write the test plan before testing starts.**",
        "**Unit test each module as it finishes.** Schedule integration testing only once **at least two** modules have passed unit testing, and stagger it through the project instead of piling it at the end.",
        "**Run work in parallel**: while one person tests module A, another starts module B.",
        "**User training goes near the end**, when the system is close to finished.",
        "**Add contingency**, more of it where inexperienced staff are working.",
        "**State whether you meet the deadline.**"
       ]
      },
      {
       "callout": {
        "kind": "bad",
        "title": "Staffing errors the examiner named",
        "list": [
         "A hardware and networking technician given software development or testing tasks.",
         "The least experienced junior developer given a critical, high-risk module alone, with no pairing or oversight.",
         "The most experienced person under-used while the senior developer carries everything."
        ]
       }
      }
     ]
    },
    {
     "h": "Resource and cost plan — getting the maths right",
     "ic": "£",
     "blocks": [
      {
       "callout": {
        "kind": "bad",
        "title": "The most common error",
        "text": "Working out wages as **total project hours × each person's rate**. Wages are **the hours that person actually works × their rate**, worked out per person and then added up."
       }
      },
      {
       "code": {
        "title": "Wages, worked out per person",
        "lang": "spreadsheet",
        "src": "     A               B            C                 D\n 1   Staff           Rate (£/h)   Hours on project  Cost\n 2   Senior dev      38.00        168               =B2*C2      -> £6,384.00\n 3   Junior dev A    21.00        232               =B3*C3      -> £4,872.00\n 4   Junior dev B    21.00        196               =B4*C4      -> £4,116.00\n 5   Cloud engineer  55.00        120               =B5*C5      -> £6,600.00\n 6   Hardware tech   26.00         40               =B6*C6      -> £1,040.00\n 7   Total wages                                    =SUM(D2:D6) -> £23,012.00",
        "note": "If a senior supervises a junior on a task, both are working — cost both people's hours."
       }
      },
      {
       "ul": [
        "Include the **fixed costs** (base fee, hardware, infrastructure upgrade) and the **server option** you chose.",
        "Include **ongoing costs** that continue after launch, such as an IT technician, hosting or a cloud subscription. Missing these was a named weakness.",
        "Forecast **three years**: current revenue and outgoings, the one-off project cost, the predicted rise in revenue, the ongoing costs, and the net position each year.",
        "Show your formulas so the marker can follow them."
       ]
      },
      {
       "code": {
        "title": "Three-year forecast layout",
        "lang": "spreadsheet",
        "src": "                       Year 1        Year 2        Year 3\n Revenue (forecast)    =C2*1.06      =D2*1.04      =E2*1.03\n Current outgoings     420,000       420,000       420,000\n One-off project cost  310,000       0             0\n Ongoing system costs  38,000        38,000        38,000\n Net position          =B2-B3-B4-B5  =C2-C3-C4-C5  =D2-D3-D4-D5\n\n Payback: the year the running total of \"Net position\" turns positive.",
        "note": "Invented numbers. The point is the structure: one-off costs in year 1 only, ongoing costs every year."
       }
      }
     ]
    },
    {
     "h": "Rationale — the 9 marks most students miss",
     "ic": "✎",
     "blocks": [
      {
       "p": "Nationally this averaged **2.63 out of 9**, the weakest part of the whole ESP. The reason is almost always the same: students describe what is on the Gantt chart. The marker can already see the chart. They want to know **why**, and what it cost or risked."
      },
      {
       "p": "Cover all four strands by name, and for every notable decision write four things:"
      },
      {
       "ol": [
        "**The decision** — what you did.",
        "**The reason** — tied to evidence in the scenario, such as a named person's skills or a dependency.",
        "**The trade-off** — what it costs or risks.",
        "**The mitigation** — what you did about that risk."
       ]
      },
      {
       "code": {
        "title": "Sentence frames",
        "lang": "text",
        "src": "ORDER AND DEPENDENCIES\nI scheduled the database before the booking and CRM modules because both read and\nwrite to it. If the database slips, both modules stall, so I put 3 days of\ncontingency on it and started the front-end screens in parallel, which do not\nneed live data.\n\nSELECTION AND ALLOCATION\nI paired the junior developer with the senior on the payments module rather than\ngiving it to them alone. It costs about £1,900 more in senior hours, but payments\nis business-critical and the junior has no experience with it. The pairing also\ntrains them for the later modules they will own.\n\nCOST, RISK AND BENEFIT\nI chose the cloud server over the physical one. It costs £4,000 less in year 1 and\nremoves the need to hire technician time for hardware, although it adds a monthly\ncost that continues every year. Because the booking system is business-critical,\nthe provider's built-in redundancy reduces the risk of downtime.\n\nFEASIBILITY\nThe project makes a loss of about £___ in year 1, but the forecast revenue increase\nmeans it is back in profit by year 2, so it is worth doing provided the external\ncontractor's availability is secured in writing.",
        "note": "Invented figures. Replace them with the scenario's numbers — the structure is what earns the marks."
       }
      }
     ]
    },
    {
     "h": "Checklist before you hand in",
     "ic": "☑",
     "blocks": [
      {
       "check": {
        "key": "esp-t1",
        "items": [
         "SDLC model named, and the chart reflects it",
         "Server and infrastructure set up before any deployment",
         "Large modules split into develop and unit-test chunks",
         "Integration testing only after at least two modules are unit tested",
         "Test plan written before testing; training near the end",
         "Contingency added, more for junior staff",
         "Hardware technician on hardware tasks only",
         "Wages calculated per person from their own hours",
         "Ongoing costs and three-year forecast included",
         "Rationale explains why and the trade-offs — not a description",
         "Deadline met or not, stated clearly"
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
   "title": "Identifying and fixing defects",
   "summary": "Test a broken Python program systematically, log every test, fix it and re-test.",
   "facts": [
    [
     "3 hours",
     ""
    ],
    [
     "21",
     "marks"
    ],
    [
     "test log + working code",
     ""
    ]
   ],
   "parts": [
    {
     "h": "What you get and what you hand in",
     "ic": "◎",
     "blocks": [
      {
       "p": "**You get:** a Python program that does not work properly, the requirements it should meet, and a test log template."
      },
      {
       "p": "**You hand in:** your completed test log and the corrected code as a clean source file."
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
         "What the top band needs"
        ],
        "num": [
         1
        ],
        "rows": [
         [
          "Use of testing to identify defects",
          "8",
          "Tests that show detailed understanding of the requirements, a comprehensive range of normal, erroneous and extreme data, and the errors comprehensively found"
         ],
         [
          "Understanding of the testing process",
          "4",
          "A log that shows clearly how each problem was found and how it was fixed"
         ],
         [
          "The solution",
          "9",
          "Fully working code with precise logic that gives correct results every time"
         ]
        ],
        "foot": [
         "Total",
         "21",
         ""
        ]
       }
      },
      {
       "callout": {
        "kind": "tip",
        "title": "What actually separates band 2 from band 3",
        "text": "Not how many bugs you find. It is the **quality of your tests and test data**, and how clearly the log shows your process."
       }
      }
     ]
    },
    {
     "h": "Work systematically, not by eye",
     "ic": "⚙",
     "blocks": [
      {
       "p": "The examiner's main criticism: many fixes came from spotting problems visually, then 'testing' by trial and error. A test log that reads like that cannot reach the top band even if the code ends up right."
      },
      {
       "ol": [
        "Read the requirements and turn each one into tests **before** touching the code.",
        "Run the program with normal data. Note what breaks.",
        "Read any traceback from the bottom up: the last line is the error type, the line number tells you where.",
        "Test every condition **at its boundaries**, including decimals.",
        "Test the parts that look correct too — especially calculations with different combinations of inputs.",
        "Fix one thing at a time. **Re-test it, and log the re-test.**",
        "Re-run earlier tests after each fix to make sure nothing else broke."
       ]
      }
     ]
    },
    {
     "h": "Boundaries with decimals — the named weakness",
     "ic": "↔",
     "blocks": [
      {
       "p": "If the requirement says parcels **up to and including 5 kg** go in the cheapest band, testing 5 and 6 is not enough. A real weight can be 5.1 kg. Test both sides of the boundary at the precision the data allows."
      },
      {
       "code": {
        "title": "A boundary bug and its fix",
        "lang": "python",
        "src": "# Requirement: up to and including 5 kg costs £3.50; over 5 kg up to 10 kg costs £5.20\n\n# BUGGY — 5.0 kg wrongly falls into the dearer band\nif weight < 5:\n    price = 3.50\nelif weight < 10:\n    price = 5.20\n\n# FIXED — the boundary value belongs to the lower band\nif weight <= 5:\n    price = 3.50\nelif weight <= 10:\n    price = 5.20\nelse:\n    price = 8.90\n\n# Boundary test data to log:  4.9   5.0   5.1   9.9   10.0   10.1",
        "note": "The examiner's example: a 5.0 kg parcel should be the cheapest price, but 5.1 kg should move up a band."
       }
      }
     ]
    },
    {
     "h": "Defects you are likely to meet",
     "ic": "✕",
     "blocks": [
      {
       "code": {
        "title": "Input is text until you convert it",
        "lang": "python",
        "src": "# BUGGY — input() always returns a string, so this compares text with a number\nweight = input(\"Weight in kg: \")\nif weight > 5:          # TypeError\n\n# FIXED\nweight = float(input(\"Weight in kg: \"))"
       }
      },
      {
       "code": {
        "title": "Off-by-one in a range check",
        "lang": "python",
        "src": "# There are 13 regions, numbered 1 to 13\n\n# BUGGY — rejects region 13\nif choice < 1 or choice > 12:\n    print(\"Invalid region\")\n\n# FIXED — use the real size of the data, not a typed number\nif choice < 1 or choice > len(regions):\n    print(\"Invalid region\")"
       }
      },
      {
       "code": {
        "title": "or where it should be and",
        "lang": "python",
        "src": "# BUGGY — always True: any answer is \"not y\" OR \"not n\"\nif answer != \"y\" or answer != \"n\":\n    print(\"Please type y or n\")\n\n# FIXED\nif answer not in (\"y\", \"n\"):\n    print(\"Please type y or n\")"
       }
      },
      {
       "code": {
        "title": "Operator precedence",
        "lang": "python",
        "src": "# BUGGY — the surcharge is only applied to the last part\ntotal = base_price + surcharge * quantity\n\n# FIXED\ntotal = (base_price + surcharge) * quantity"
       }
      },
      {
       "code": {
        "title": "A validation loop that never asks again",
        "lang": "python",
        "src": "# BUGGY — on bad input it prints a message and then carries on with the bad value\nweight = input(\"Weight: \")\ntry:\n    weight = float(weight)\nexcept ValueError:\n    print(\"Please enter a number\")\n\n# FIXED — keep asking until the value is valid\ndef get_weight():\n    while True:\n        raw = input(\"Weight in kg: \")\n        try:\n            weight = float(raw)\n        except ValueError:\n            print(\"Please enter a number, for example 2.5\")\n            continue\n        if weight <= 0:\n            print(\"Weight must be more than 0\")\n            continue\n        return weight"
       }
      },
      {
       "code": {
        "title": "Edge case: nothing to add up",
        "lang": "python",
        "src": "# BUGGY — crashes with ZeroDivisionError if no parcels were entered\naverage = sum(weights) / len(weights)\n\n# FIXED\nif weights:\n    average = sum(weights) / len(weights)\nelse:\n    average = 0\n    print(\"No parcels entered\")",
        "note": "Fixing small issues outside the main brief that you found by testing — like this, or an unused import — earns credit."
       }
      }
     ]
    },
    {
     "h": "What a good test log looks like",
     "ic": "▤",
     "blocks": [
      {
       "table": {
        "cols": [
         "No.",
         "Purpose",
         "Test data",
         "Type",
         "Expected",
         "Actual",
         "Result",
         "Action"
        ],
        "rows": [
         [
          "1",
          "Lightest band at its upper limit",
          "5.0",
          "Boundary",
          "£3.50",
          "£5.20",
          "Fail",
          "Line 41 used < 5; changed to <= 5. Re-test as 1.1"
         ],
         [
          "1.1",
          "Re-test of 1",
          "5.0",
          "Boundary",
          "£3.50",
          "£3.50",
          "Pass",
          "—"
         ],
         [
          "2",
          "Just over the limit",
          "5.1",
          "Boundary",
          "£5.20",
          "£5.20",
          "Pass",
          "—"
         ],
         [
          "3",
          "Text instead of a number",
          "five",
          "Erroneous",
          "Message, asks again",
          "ValueError crash",
          "Fail",
          "Wrapped input in a validation loop. Re-test as 3.1"
         ],
         [
          "3.1",
          "Re-test of 3",
          "five",
          "Erroneous",
          "Message, asks again",
          "Message, asks again",
          "Pass",
          "—"
         ],
         [
          "4",
          "Negative weight",
          "-2",
          "Erroneous",
          "Message, asks again",
          "Accepted",
          "Fail",
          "Added weight <= 0 check. Re-test as 4.1"
         ],
         [
          "5",
          "Two regions with a surcharge",
          "regions 12 and 3",
          "Normal",
          "Surcharge once",
          "Surcharge twice",
          "Fail",
          "Surcharge applied inside loop; moved outside. Re-test as 5.1"
         ]
        ]
       }
      },
      {
       "callout": {
        "kind": "tip",
        "title": "Use the right word",
        "text": "**Extreme** (boundary) data is valid data at the very edge of what is allowed. Invalid data outside the range is **erroneous**. One high-scoring log still lost precision by calling invalid data extreme."
       }
      }
     ]
    },
    {
     "h": "Checklist before you hand in",
     "ic": "☑",
     "blocks": [
      {
       "check": {
        "key": "esp-t2",
        "items": [
         "Every requirement has at least one test",
         "Normal, boundary (both sides, with decimals) and erroneous data all used",
         "Calculations tested with several combinations, not one",
         "Every failed test has a cause and a fix written down",
         "Every fix has its own re-test row",
         "Earlier tests re-run after the fixes",
         "Code runs cleanly from a fresh file in any Python IDE"
        ]
       }
      }
     ]
    }
   ]
  },
  {
   "id": "t3",
   "code": "Task 3",
   "title": "Designing a solution",
   "summary": "Algorithm designs in pseudocode or flowcharts for a program that analyses a CSV file.",
   "facts": [
    [
     "3 hours",
     ""
    ],
    [
     "17",
     "marks"
    ],
    [
     "pseudocode or flowcharts",
     ""
    ]
   ],
   "parts": [
    {
     "h": "What you get and what you hand in",
     "ic": "◎",
     "blocks": [
      {
       "p": "**You get:** the requirements for a program and a sample data file, usually a CSV."
      },
      {
       "p": "**You hand in:** algorithm designs — pseudocode, flowcharts or both — that a developer could use to build the solution."
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
         "What the top band needs"
        ],
        "num": [
         1
        ],
        "rows": [
         [
          "Decomposition of the problem",
          "8",
          "A thorough, detailed breakdown that fully covers the inputs, processes and outputs"
         ],
         [
          "Application of logical thinking and conventions",
          "6",
          "Precise logic, efficient structure and sequence, and accepted conventions used consistently"
         ],
         [
          "Communication of the design",
          "3",
          "Technical language that suits the audience"
         ]
        ],
        "foot": [
         "Total",
         "17",
         ""
        ]
       }
      }
     ]
    },
    {
     "h": "Understand the data before designing",
     "ic": "◉",
     "blocks": [
      {
       "p": "Weaker answers just read columns in by their headings without thinking about what the values mean. Before you design anything, write a line for each column:"
      },
      {
       "code": {
        "title": "A column-by-column note",
        "lang": "text",
        "src": "Booking ID     integer, unique           -> identifies a row, never counted or summed\nClass          text, repeats             -> COUNT occurrences per class\nSite           text, repeats             -> group by site, let the user pick one\nDate           date as text, dd/mm/yyyy  -> convert to a date to find trends by month\nAttended       Yes / No                  -> proportion attended per class\nCost           decimal                   -> SUM or AVERAGE"
       }
      },
      {
       "callout": {
        "kind": "bad",
        "title": "Classic logic error",
        "text": "A text column such as issue type or class name has to be **counted**. Designing a sum over it shows the marker you have not understood the data."
       }
      }
     ]
    },
    {
     "h": "Show decomposition through structure",
     "ic": "⊞",
     "blocks": [
      {
       "p": "A separate decomposition diagram is not required, and the examiner recommends spending the time on the algorithms instead. Show the breakdown by splitting the solution into **named functions**, each broken down further:"
      },
      {
       "code": {
        "title": "Decomposition shown as a set of functions",
        "lang": "text",
        "src": "Main\n ├─ LoadBookings (FileName)          returns a list of records, handles a missing file\n ├─ GetMenuChoice ()                 validated 1 to 4\n ├─ ShowClassTotals (Records)\n │    ├─ GetUniqueValues (Records, \"Class\")\n │    └─ CountMatches (Records, \"Class\", Value)      reused below\n ├─ ShowSiteSummary (Records)\n │    ├─ GetSiteChoice (Records)     validated against the real list of sites\n │    └─ CountMatches (Records, \"Site\", Value)\n └─ ShowAttendanceRate (Records)",
        "note": "Reusable components score. Do not write near-identical algorithms for each type — write one that takes the type as a parameter."
       }
      }
     ]
    },
    {
     "h": "Pseudocode — your spec's exact conventions",
     "ic": "≡",
     "blocks": [
      {
       "p": "Use these keywords consistently. Mixing in Python syntax costs convention marks."
      },
      {
       "table": {
        "cols": [
         "Purpose",
         "Write it like this"
        ],
        "rows": [
         [
          "Assign",
          "`SET Total TO 0`"
         ],
         [
          "Output",
          "`SEND \"Hello\" TO DISPLAY`"
         ],
         [
          "Input with a type",
          "`RECEIVE Age FROM (INTEGER) KEYBOARD`"
         ],
         [
          "Selection",
          "`IF … THEN … ELSE … END IF`"
         ],
         [
          "Pre-conditioned loop",
          "`WHILE … DO … END WHILE`"
         ],
         [
          "Post-conditioned loop",
          "`REPEAT … UNTIL …`"
         ],
         [
          "Count-controlled loop",
          "`FOR Index FROM 1 TO 10 DO … END FOR`"
         ],
         [
          "Loop over a list",
          "`FOR EACH Item FROM List DO … END FOREACH`"
         ],
         [
          "File",
          "`READ File Record`  ·  `WRITE File Record`"
         ],
         [
          "Procedure",
          "`PROCEDURE Name (Params) BEGIN PROCEDURE … END PROCEDURE`"
         ],
         [
          "Function",
          "`FUNCTION Name (Params) BEGIN FUNCTION … RETURN x END FUNCTION`"
         ],
         [
          "Constant",
          "`CONST REAL VatRate` then `SET VatRate TO 0.2` once"
         ],
         [
          "Operators",
          "`MOD` `DIV` `^` · comparison `=` `<>` `<` `<=` · logic `AND` `OR` `NOT`"
         ],
         [
          "Join / append",
          "`&` — for example `SEND \"Total: \" & Total TO DISPLAY`"
         ],
         [
          "Comment",
          "`# explains a step`"
         ],
         [
          "Length",
          "`LENGTH (List)` — indexes start at 0"
         ]
        ]
       }
      },
      {
       "code": {
        "title": "Validated menu",
        "lang": "pseudocode",
        "src": "# Returns a whole number from 1 to 4 chosen by the user\nFUNCTION GetMenuChoice ()\nBEGIN FUNCTION\n    SET Valid TO FALSE\n    WHILE Valid = FALSE DO\n        SEND \"1 Bookings per class   2 Site summary\" TO DISPLAY\n        SEND \"3 Attendance rate      4 Exit\" TO DISPLAY\n        RECEIVE Choice FROM (STRING) KEYBOARD\n        IF Choice is a whole number THEN\n            SET Choice TO (INTEGER) Choice\n            IF Choice >= 1 AND Choice <= 4 THEN\n                SET Valid TO TRUE\n            ELSE\n                SEND \"Please choose a number from 1 to 4\" TO DISPLAY\n            END IF\n        ELSE\n            SEND \"That was not a number - please try again\" TO DISPLAY\n        END IF\n    END WHILE\n    RETURN Choice\nEND FUNCTION"
       }
      },
      {
       "code": {
        "title": "Load the file, coping with no data",
        "lang": "pseudocode",
        "src": "FUNCTION LoadBookings (FileName)\nBEGIN FUNCTION\n    SET Records TO []\n    READ FileName Header            # first record is the header row\n    WHILE NOT end of FileName DO\n        READ FileName Record\n        SET Records TO Records & [Record]\n    END WHILE\n    RETURN Records\nEND FUNCTION"
       }
      },
      {
       "code": {
        "title": "One reusable counting function",
        "lang": "pseudocode",
        "src": "# Counts how many records have Value in the named Column\nFUNCTION CountMatches (Records, Column, Value)\nBEGIN FUNCTION\n    SET Count TO 0\n    FOR EACH Record FROM Records DO\n        IF Record [Column] = Value THEN\n            SET Count TO Count + 1\n        END IF\n    END FOREACH\n    RETURN Count\nEND FUNCTION"
       }
      },
      {
       "code": {
        "title": "Main — every route ends, and no data is handled",
        "lang": "pseudocode",
        "src": "PROCEDURE Main ()\nBEGIN PROCEDURE\n    SET Records TO LoadBookings (\"bookings.csv\")\n    IF LENGTH (Records) = 0 THEN\n        SEND \"No bookings were found in the file\" TO DISPLAY\n    ELSE\n        SET Choice TO 0\n        WHILE Choice <> 4 DO\n            SET Choice TO GetMenuChoice ()\n            IF Choice = 1 THEN\n                ShowClassTotals (Records)\n            ELSE\n                IF Choice = 2 THEN\n                    ShowSiteSummary (Records)\n                ELSE\n                    IF Choice = 3 THEN\n                        ShowAttendanceRate (Records)\n                    END IF\n                END IF\n            END IF\n        END WHILE\n        SEND \"Goodbye\" TO DISPLAY\n    END IF\nEND PROCEDURE"
       }
      }
     ]
    },
    {
     "h": "Flowchart symbols",
     "ic": "◇",
     "blocks": [
      {
       "table": {
        "cols": [
         "Symbol",
         "Means"
        ],
        "rows": [
         [
          "Rounded rectangle (terminator)",
          "Start and end of the algorithm"
         ],
         [
          "Rectangle",
          "A process — a calculation or assignment"
         ],
         [
          "Rectangle with double vertical sides",
          "A sub-process — calls another algorithm"
         ],
         [
          "Diamond",
          "A decision — one way in, a Yes and a No way out"
         ],
         [
          "Parallelogram",
          "Input or output"
         ],
         [
          "Small circle (connector)",
          "Joins to another part of the chart when an unbroken arrow is impractical"
         ],
         [
          "Arrow",
          "Direction of flow"
         ]
        ]
       }
      },
      {
       "callout": {
        "kind": "tip",
        "title": "Flowcharts and decomposition",
        "text": "Use the **sub-process** symbol to call a separate flowchart for each function. That is how a flowchart shows decomposition and reuse."
       }
      }
     ]
    },
    {
     "h": "Checklist before you hand in",
     "ic": "☑",
     "blocks": [
      {
       "check": {
        "key": "esp-t3",
        "items": [
         "Every column understood: meaning, type, count or sum",
         "Solution split into named functions, each broken down further",
         "Reused functions take parameters instead of being duplicated",
         "Every input validated, menus chosen by number",
         "Every loop can end",
         "What happens with no data or no results is designed",
         "Data is actually loaded from the file, not just imported libraries",
         "One set of conventions used consistently, no Python syntax"
        ]
       }
      }
     ]
    }
   ]
  },
  {
   "id": "t4a",
   "code": "Task 4a",
   "title": "Developing the solution",
   "summary": "Build the program in Python with pandas and matplotlib, integrating the code you are given.",
   "facts": [
    [
     "4 hours",
     ""
    ],
    [
     "34",
     "marks"
    ],
    [
     "biggest task",
     ""
    ]
   ],
   "parts": [
    {
     "h": "What you get and what you hand in",
     "ic": "◎",
     "blocks": [
      {
       "p": "**You get:** a requirements brief, a data file and some existing Python code that already does part of the job."
      },
      {
       "p": "**You hand in:** working Python source that uses the given code and adds the required functionality."
      },
      {
       "p": "Libraries you are expected to use: **pandas** to load, filter, group, count, total and average the data, and **matplotlib** to draw graphs with titles, axis labels and legends."
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
         "What the top band needs"
        ],
        "num": [
         1
        ],
        "rows": [
         [
          "Functionality",
          "6",
          "Functional, efficient code throughout"
         ],
         [
          "Logic and programming structures",
          "3",
          "Precise logic that gives consistently correct results"
         ],
         [
          "Robustness",
          "3",
          "Handles common and most unexpected user errors"
         ],
         [
          "Security",
          "6",
          "Thoroughly mitigates the relevant vulnerabilities through secure coding practice"
         ],
         [
          "Code organisation",
          "8",
          "Easily maintainable by someone else: consistent naming, logical organisation, informative comments"
         ],
         [
          "User experience",
          "8",
          "Consistently effective input handling, guidance and error messages, and outputs"
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
       "callout": {
        "kind": "tip",
        "title": "Where the easy marks are",
        "text": "Code organisation and user experience are **16 marks** between them, and both are habits: good names, comments, functions, clear prompts, labelled output. You can bank most of them even if your analysis is simple."
       }
      }
     ]
    },
    {
     "h": "Security — what it means here",
     "ic": "🔒",
     "blocks": [
      {
       "callout": {
        "kind": "bad",
        "title": "Do not build a login",
        "text": "The examiner repeated it again: **a login function earns no security marks** and eats the time you need for the marks that are available."
       }
      },
      {
       "p": "Security in this task means protecting the data inside your program:"
      },
      {
       "ul": [
        "**No global variables.** Pass data into functions as parameters and return results.",
        "**Create data frames inside the functions that need them**, rather than one global frame anything can change.",
        "**Handle errors** so the program never crashes and never prints internal details — a traceback, a file path or raw data — to the user.",
        "**Validate every input** for type, range and presence before using it."
       ]
      }
     ]
    },
    {
     "h": "A program skeleton that scores",
     "ic": "▣",
     "blocks": [
      {
       "code": {
        "title": "bookings_report.py",
        "lang": "python",
        "src": "\"\"\"Tidewell Leisure bookings report.\n\nReads bookings.csv and lets a manager see bookings per class, a summary for one\nsite, and attendance rates, as tables or graphs.\n\"\"\"\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\nDATA_FILE = \"bookings.csv\"          # constants in capitals, defined once\nMENU = {\n    1: \"Bookings per class\",\n    2: \"Summary for one site\",\n    3: \"Attendance rate per class\",\n    4: \"Exit\",\n}\n\n\ndef load_bookings(path):\n    \"\"\"Return the bookings as a data frame, or None if the file cannot be read.\"\"\"\n    try:\n        bookings = pd.read_csv(path)\n    except (FileNotFoundError, pd.errors.ParserError):\n        # Do not show the raw error: it can reveal file paths and data.\n        print(\"Sorry, the bookings file could not be opened.\")\n        return None\n    bookings[\"Date\"] = pd.to_datetime(bookings[\"Date\"], dayfirst=True)\n    return bookings\n\n\ndef get_whole_number(prompt, lowest, highest):\n    \"\"\"Keep asking until the user types a whole number in range.\"\"\"\n    while True:\n        raw = input(prompt).strip()\n        if not raw.isdigit():\n            print(f\"Please type a whole number from {lowest} to {highest}.\")\n            continue\n        number = int(raw)\n        if lowest <= number <= highest:\n            return number\n        print(f\"{number} is not an option. Choose {lowest} to {highest}.\")\n\n\ndef show_menu():\n    print()\n    print(\"=== Tidewell Leisure bookings ===\")\n    for number, label in MENU.items():\n        print(f\"  {number}. {label}\")\n    return get_whole_number(\"Choose an option: \", 1, len(MENU))\n\n\ndef main():\n    bookings = load_bookings(DATA_FILE)\n    if bookings is None:\n        return\n    choice = 0\n    while choice != 4:\n        choice = show_menu()\n        if choice == 1:\n            report_class_totals(bookings)\n        elif choice == 2:\n            report_site(bookings)\n        elif choice == 3:\n            report_attendance(bookings)\n    print(\"Goodbye.\")\n\n\nif __name__ == \"__main__\":\n    main()",
        "note": "Everything lives in functions. Data goes in as a parameter and comes back as a return value — that is the security strand and the organisation strand at once."
       }
      }
     ]
    },
    {
     "h": "pandas you will actually need",
     "ic": "∑",
     "blocks": [
      {
       "code": {
        "title": "Count a text column — value_counts",
        "lang": "python",
        "src": "def report_class_totals(bookings):\n    \"\"\"Bookings per class, busiest first, as a table and a graph.\"\"\"\n    totals = bookings[\"Class\"].value_counts()      # counts text, never sum() it\n    print(\"\\nBookings per class\")\n    print(totals.to_string())\n    print(f\"\\nMost popular: {totals.index[0]} with {totals.iloc[0]} bookings\")\n    draw_bar(totals, \"Bookings per class\", \"Class\", \"Number of bookings\")"
       }
      },
      {
       "code": {
        "title": "Let the user pick, then filter",
        "lang": "python",
        "src": "def choose_from(options, what):\n    \"\"\"Show a numbered list built from the real data and return the chosen value.\"\"\"\n    options = sorted(options)\n    for number, option in enumerate(options, start=1):\n        print(f\"  {number}. {option}\")\n    picked = get_whole_number(f\"Choose a {what}: \", 1, len(options))\n    return options[picked - 1]\n\n\ndef report_site(bookings):\n    site = choose_from(bookings[\"Site\"].unique(), \"site\")\n    at_site = bookings[bookings[\"Site\"] == site]            # filter rows\n    if at_site.empty:\n        print(f\"There are no bookings for {site}.\")\n        return\n    print(f\"\\n{site}: {len(at_site)} bookings\")\n    print(at_site[\"Class\"].value_counts().to_string())",
        "note": "Building the menu from the data means a new site in the file appears automatically and the user can never pick one that does not exist."
       }
      },
      {
       "code": {
        "title": "Group and average — groupby",
        "lang": "python",
        "src": "# Average cost per site, highest first, to 2 decimal places\naverage_cost = (bookings.groupby(\"Site\")[\"Cost\"]\n                        .mean()\n                        .round(2)\n                        .sort_values(ascending=False))\n\n# Several measures at once\nsummary = bookings.groupby(\"Class\").agg(\n    bookings=(\"Booking ID\", \"count\"),\n    revenue=(\"Cost\", \"sum\"),\n    average_cost=(\"Cost\", \"mean\"),\n).round(2)"
       }
      },
      {
       "code": {
        "title": "Percentages from a Yes / No column",
        "lang": "python",
        "src": "def report_attendance(bookings):\n    attended = bookings[\"Attended\"] == \"Yes\"           # True / False per row\n    rate = (attended.groupby(bookings[\"Class\"]).mean() * 100).round(1)\n    rate = rate.sort_values()\n    print(\"\\nAttendance rate per class (%)\")\n    print(rate.to_string())\n    print(f\"\\nLowest: {rate.index[0]} at {rate.iloc[0]}%\")"
       }
      },
      {
       "code": {
        "title": "Trends over time with dates",
        "lang": "python",
        "src": "bookings[\"Date\"] = pd.to_datetime(bookings[\"Date\"], dayfirst=True)\nbookings[\"Month\"] = bookings[\"Date\"].dt.to_period(\"M\")\n\nper_month = bookings.groupby(\"Month\").size()        # bookings each month\nchange = per_month.pct_change().mul(100).round(1)   # % change month to month"
       }
      },
      {
       "code": {
        "title": "Wide data: one column per date",
        "lang": "python",
        "src": "# Some papers give one row per item and one column per date:\n#   Item, Service, 03/03/2023, 04/03/2023, ...\nsales = pd.read_csv(\"sales.csv\")\n\n# Total across all the date columns for each row\ndate_columns = sales.columns[2:]\nsales[\"Total sold\"] = sales[date_columns].sum(axis=1)\n\n# Or reshape to long format, one row per item per date, which makes groupby easy\nlong = sales.melt(id_vars=[\"Item\", \"Service\"],\n                  value_vars=date_columns,\n                  var_name=\"Date\", value_name=\"Sold\")\nlong[\"Date\"] = pd.to_datetime(long[\"Date\"], dayfirst=True)",
        "note": "Check the shape of the file in the pre-release. The code above is the difference between ten minutes and an hour on the day."
       }
      }
     ]
    },
    {
     "h": "Graphs that earn user-experience marks",
     "ic": "▁▃▅",
     "blocks": [
      {
       "code": {
        "title": "One reusable chart function",
        "lang": "python",
        "src": "def draw_bar(series, title, x_label, y_label):\n    \"\"\"Bar chart with a title, labelled axes and readable category names.\"\"\"\n    ax = series.plot(kind=\"bar\", color=\"#B4245F\", figsize=(9, 5))\n    ax.set_title(title)\n    ax.set_xlabel(x_label)\n    ax.set_ylabel(y_label)\n    plt.xticks(rotation=30, ha=\"right\")\n    plt.tight_layout()\n    plt.show()"
       }
      },
      {
       "ul": [
        "Always a **title** and **both axis labels**. Unlabelled graphs were named as a low-band feature.",
        "**Sort** the data first so the pattern is obvious.",
        "Pick the graph for the data: bar for comparing categories, line for change over time, pie only for a few parts of one whole.",
        "Print a sentence with each table or graph that tells the user what it shows — a number on its own is not meaningful output."
       ]
      }
     ]
    },
    {
     "h": "Using the code you are given",
     "ic": "⇄",
     "blocks": [
      {
       "p": "You must build on the supplied code. Three acceptable ways:"
      },
      {
       "code": {
        "title": "Import it, keep it in the same folder",
        "lang": "python",
        "src": "# given_support.py is the file supplied with the task, in the same folder\nfrom given_support import main_menu, issue_menu\n\nchoice = main_menu()"
       }
      },
      {
       "ul": [
        "Import it as a module, as above.",
        "Paste it into your own file as functions you then call.",
        "Add your new functions to the given file."
       ]
      },
      {
       "callout": {
        "kind": "tip",
        "title": "Improve what you are given",
        "text": "Supplied menus often only check that the input is a number. The top-scoring example extended them to check the **range** too. That is a robustness mark."
       }
      }
     ]
    },
    {
     "h": "Checklist before you hand in",
     "ic": "☑",
     "blocks": [
      {
       "check": {
        "key": "esp-t4a",
        "items": [
         "Given code integrated and used",
         "Every requirement in the brief has a menu option that produces output",
         "Text columns counted, number columns summed or averaged",
         "No global variables — data passed in and returned",
         "Every input validated for type and range, with a helpful message",
         "Missing or unreadable file handled without a crash",
         "No raw tracebacks shown to the user",
         "Constants in capitals, functions with clear names and a docstring",
         "Outputs sorted, labelled and explained in a sentence",
         "Graphs have a title and both axis labels",
         "No login screen",
         "Runs from a fresh file in any Python IDE"
        ]
       }
      }
     ]
    }
   ]
  },
  {
   "id": "t4b",
   "code": "Task 4b",
   "title": "Reflective evaluation",
   "summary": "Judge how well your Task 4a program meets the brief and the users, then justify what to build next.",
   "facts": [
    [
     "1h 30m",
     ""
    ],
    [
     "9",
     "marks"
    ]
   ],
   "parts": [
    {
     "h": "Mark breakdown",
     "ic": "▤",
     "blocks": [
      {
       "table": {
        "cols": [
         "Strand",
         "Marks",
         "What the top band needs"
        ],
        "num": [
         1
        ],
        "rows": [
         [
          "Programming outcomes",
          "6",
          "Judgements that are comprehensively supported, showing detailed understanding of how well the program met the brief and the users' needs"
         ],
         [
          "Future developments",
          "3",
          "A convincing, well-supported case for what should be developed next"
         ]
        ],
        "foot": [
         "Total",
         "9",
         ""
        ]
       }
      }
     ]
    },
    {
     "h": "Evaluate, do not describe",
     "ic": "⚖",
     "blocks": [
      {
       "p": "Most answers in the cohort were a narrative of what was built. An evaluation makes a **value judgement against criteria** — the requirements in the brief and the needs of the users."
      },
      {
       "p": "For each requirement, write four things:"
      },
      {
       "ol": [
        "**The requirement** — quote or paraphrase it.",
        "**How well it is met** — fully, partly, not at all.",
        "**Evidence** — the specific function, output or graph that proves it.",
        "**Why you built it that way** — and how you interpreted the brief."
       ]
      },
      {
       "p": "Good things to discuss: how you counted or grouped text data; why you chose a count, a total or an average; why a particular graph or table suits that output; how you extracted subsets of the data; how you passed data between functions instead of using globals; which input errors you handle and why."
      }
     ]
    },
    {
     "h": "Future developments that score",
     "ic": "→",
     "blocks": [
      {
       "ul": [
        "**Specific and relevant to the scenario.** 'Also analyse the number of items per booking to see whether larger bookings are more likely to be cancelled' beats 'add more features'.",
        "**Justified.** Say what the user could then decide or do that they cannot now.",
        "Include improvements to parts that **already work** as well as things you did not finish.",
        "**Never personal.** Better time management or trying harder is not a development of the program."
       ]
      }
     ]
    },
    {
     "h": "Sentence frames",
     "ic": "✎",
     "blocks": [
      {
       "code": {
        "title": "Judging a requirement",
        "lang": "text",
        "src": "The brief asked for the attendance rate of each class. My report_attendance()\nfunction meets this fully: it converts the Attended column to True and False and\naverages it per class, which gives a percentage rather than a raw count, so a\nmanager can compare a large class with a small one fairly. I sorted the output\nlowest first because the manager's concern is which classes are under-attended.\n\nA limitation is that it covers all dates together, so it cannot show whether a\nclass is improving or getting worse."
       }
      },
      {
       "code": {
        "title": "Justifying an output choice",
        "lang": "text",
        "src": "I showed bookings per class as a bar chart rather than a table because there are\nnine classes and the manager needs to see at a glance which are busiest. Exact\nnumbers are still printed above the chart for anyone who needs them."
       }
      },
      {
       "code": {
        "title": "A future development",
        "lang": "text",
        "src": "A worthwhile next step would be to break attendance down by month. The brief says\nthe company wants to spot trends, and at the moment the report can only show an\noverall rate. Grouping by month with to_period() would let the manager see whether\na timetable change last spring actually improved attendance."
       }
      }
     ]
    },
    {
     "h": "Checklist before you hand in",
     "ic": "☑",
     "blocks": [
      {
       "check": {
        "key": "esp-t4b",
        "items": [
         "Every requirement in the brief judged: fully, partly or not met",
         "Each judgement backed by a named function or output",
         "Reasons given for the way it was built",
         "User needs discussed, not just the brief",
         "At least two future developments, each specific and justified",
         "Nothing about time management or effort"
        ]
       }
      }
     ]
    }
   ]
  }
 ]
};
