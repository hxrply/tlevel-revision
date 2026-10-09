"""Occupational Specialism content — T Level in Digital Software Development.

Source of truth for data/os.js (run tools/build_content.py to regenerate).

Built from two sources, kept apart so it is always clear which is which:

  * tools/os_dsd_spec.py — the student's own specialism, from the DSD
    specification (Version 1.0, May 2025): 50 hours 30 minutes supervised,
    144 marks across six performance outcomes, four tasks, Task 1 Activity C
    using generative AI, eight content areas.
  * tools/os_guidance_2025.py — examiner advice from the Summer 2025 report on
    the predecessor specialism, whose four tasks had the same shape, and the
    skills pages (HTML, CSS, JavaScript, SQL, PHP, UML).

Inline formatting understood by the renderer: **bold** and `code`.
"""
from os_dsd_spec import OVERVIEW, TASKS, AREAS
from os_guidance_2025 import OS as G2025

SOURCE_NOTE = {"callout": {"kind": "tip", "title": "Where the advice below comes from",
                           "text": "Your specification sets what this task must contain (above). The advice below comes from "
                                   "the Summer 2025 examiner report on the predecessor specialism, which had the same four "
                                   "tasks — it shows what was rewarded and what lost marks."}}


def parts_from_2025(task_id, keep, rename=None, drop_tables=False):
    """Selected parts from the 2025 guidance for one task, optionally without its mark tables."""
    rename = rename or {}
    page = next(t for t in G2025["tasks"] if t["id"] == task_id)
    out = []
    for part in page["parts"]:
        if part["h"] not in keep:
            continue
        blocks = [b for b in part["blocks"]
                  if not (drop_tables and "table" in b and "Marks" in b["table"]["cols"])]
        # drop sentences that only describe the predecessor's activity structure
        blocks = [b for b in blocks if not ("p" in b and b["p"].startswith("Your proposal must cover"))]
        out.append({"h": rename.get(part["h"], part["h"]), "ic": part.get("ic", ""), "blocks": blocks})
    return out


def dsd_task(spec, page_id, summary, facts, extra_parts):
    parts = [
        {"h": "What you produce", "ic": "◎", "blocks": [{"p": spec["produce"]}]},
        {"h": "What your specification asks for", "ic": "§", "blocks": [{"ul": spec["points"]}]},
    ]
    if extra_parts:
        parts.append({"h": "Examiner advice", "ic": "★", "blocks": [SOURCE_NOTE]})
        parts.extend(extra_parts)
    parts.append({"h": "Checklist", "ic": "☑", "blocks": [{"check": {"key": "os-" + page_id, "items": spec["checklist"]}}]})
    return {"id": page_id, "code": spec["code"], "title": spec["title"], "summary": summary, "facts": facts, "parts": parts}


T = {t["id"]: t for t in TASKS}

ai_activity = {"h": "Activity C — using generative AI", "ic": "✦", "blocks": [
    {"p": OVERVIEW["aiNote"]},
    {"ul": [
        "Use it for **short snippets** that solve one specific piece of functionality you will fit into your own code — never the whole solution.",
        "Record the **prompt** you gave, the **raw output**, your **review** of how far it meets the need, and the **refined** prompt or code that followed.",
        "Your spec suggests a natural-language model such as ChatGPT or Google Gemini; Pearson does not specify one.",
        "Judge the output like a code review: does it handle invalid input, is it secure, does it follow your naming and commenting conventions? Saying where it fell short is the evidence.",
    ]},
    {"code": {"title": "One way to evidence a snippet", "lang": "text", "src": r'''Functionality:  validate a UK postcode entered on the booking form

Prompt 1:  "Write a JavaScript function that checks a UK postcode."
Output:    a single regular expression, no comments, accepts lowercase only.
Review:    Meets the basic need but rejects "CM1 1QH" in capitals, gives no
           message to the user, and has no explanation of the pattern.

Prompt 2:  "Rewrite it to accept upper or lower case and optional space, return
           true/false, and comment each part of the pattern."
Output:    function isValidPostcode(value) { ... }   (commented)
Review:    Now correct for the 8 valid and 6 invalid test values in my test log.
           Renamed to match my camelCase convention and added a trim().

Decision:  Used in validation.js with my own error message handling.''',
              "note": "Invented example. The marks are in the review and refinement, not in getting the AI to answer."}},
]}

OS = {
    "name": "Occupational Specialism — Digital Software Development",
    "paper": "",
    "intro": (
        "One extended project in four tasks: analyse a problem and design a solution, build it in at least two "
        "languages, gather feedback, then evaluate it. Graded Pass, Merit or Distinction, worth half of your whole "
        "T Level. Everything marked as specification below is from your own DSD specification."
    ),
    "facts": [["144", "marks"], ["50h 30m", "supervised"], ["4", "tasks"], ["Pass / Merit / Distinction", ""]],

    "hub": [
        {"h": "Time and marks", "ic": "◷", "blocks": [
            {"p": "The 144 marks are awarded against six **performance outcomes**, not task by task. Your work across all four "
                  "tasks is the evidence for them."},
            {"table": {
                "cols": ["Performance outcome", "Marks", "Share"],
                "num": [1, 2],
                "rows": [[p["code"] + " · " + p["name"], str(p["marks"]), str(p["pct"]) + "%"] for p in OVERVIEW["pos"]],
                "foot": ["Total", "144", "100%"],
            }},
            {"ul": [
                "One synoptic project, done over several sessions up to **50 hours 30 minutes** supervised, in windows set by Pearson. Some tasks include unsupervised activities.",
                "**Internet access is allowed for every task except Task 3b.**",
                "Your output is a portfolio of evidence submitted electronically, marked by Pearson.",
                "You are assessed on applying skills, not answering knowledge questions — but you need the knowledge to make good decisions.",
            ]},
            {"callout": {"kind": "warn", "title": "Corrected in October",
                         "text": "For a few days this section showed the older Digital Production, Design and Development "
                                 "specialism (67 hours, 145 marks), whose papers were in your college files as practice. "
                                 "Your specialism is Digital Software Development: 50 hours 30 minutes and 144 marks, "
                                 "with the generative-AI activity in Task 1."}},
        ]},
        ai_activity,
        {"h": "The two-language rule", "ic": "⚠", "blocks": [
            {"p": "Your specification requires **at least two** of these languages, covering front end and back end: "
                  "**Python 3 (3.10 or later), C#, SQL, JavaScript, PHP.** HTML and CSS are not on the list, so they do not count — "
                  "you will still use them for the interface."},
            {"table": {
                "cols": ["Pairing", "What it looks like"],
                "rows": [
                    ["JavaScript + PHP (+ SQL)", "The most common student stack: HTML/CSS/JS in the browser, PHP on the server, MySQL for the data. Three languages from the list"],
                    ["JavaScript + SQL", "Valid, but SQL cannot be run from the browser, so something on the server still has to run it — in practice PHP or Python"],
                    ["Python + SQL", "A Python web framework such as Flask or Django with a SQL database. Python 3.10+ is the language of your core papers, so you already know it"],
                    ["C# + SQL", "Valid, typically ASP.NET with SQL Server; heavier to set up"],
                ],
            }},
            {"callout": {"kind": "bad", "title": "Build the core feature yourself",
                         "text": "In 2025 a student embedded a third-party calculator in an iframe as their main feature and was capped "
                                 "at band 2: it showed none of their own coding and broke the visual consistency. The Distinction "
                                 "example wrote the same calculator from scratch."}},
        ]},
        next(p for p in G2025["hub"] if p["h"] == "What separates Pass from Distinction") | {"h": "What separated Pass from Distinction in 2025"},
    ],

    "tasks": [
        dsd_task(T["os1"], "t1",
                 "Analyse the client's problem, define requirements and acceptance criteria, design the solution, and use generative AI for code snippets.",
                 [["Task 1", "of 4"], ["includes AI", "Activity C"]],
                 [ai_activity] + parts_from_2025("t1",
                     keep={"Activity A(ii) — the proposal (24 marks)", "Interface design", "Algorithm design", "Data requirements and test strategy"},
                     rename={"Activity A(ii) — the proposal (24 marks)": "Requirements, KPIs, acceptance criteria and risks"},
                     drop_tables=True)),
        dsd_task(T["os2"], "t2",
                 "Build the working software from your Task 1 designs in at least two languages, with testing evidence.",
                 [["Task 2", "of 4"], ["2+ languages", "front and back end"]],
                 parts_from_2025("t2",
                     keep={"What the functionality marks reward", "Code organisation and user experience",
                           "Testing that reaches the top band", "Documenting the iterative process"},
                     rename={"What the functionality marks reward": "What examiners rewarded for functionality"})),
        dsd_task(T["os3a"], "t3a",
                 "Gather feedback on your working solution from real users and from peers.",
                 [["Task 3a", "of 4"]],
                 parts_from_2025("t3a", keep={"Two genuinely different instruments", "Beyond questionnaires"})),
        dsd_task(T["os3b"], "t3b",
                 "Evaluate the feedback and your solution, and plan the changes. No internet for this task.",
                 [["Task 3b", "of 4"], ["no internet", ""]],
                 parts_from_2025("t3b", keep={"Assets and content", "Evaluating outcomes"})),
    ],

    "areas": [
        {"id": "a" + str(a["num"]), "code": "Area " + str(a["num"]), "title": a["title"],
         "summary": a["points"][0][:150].rsplit(" ", 1)[0] + "…",
         "facts": [[str(len(a["points"])), "points to know"]],
         "parts": [{"h": "What your specification says you need to know", "ic": "✓", "blocks": [{"ul": a["points"]}]}]}
        for a in AREAS
    ],

    "skills": G2025["skills"],
}
