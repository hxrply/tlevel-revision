# T Level Digital — Revision

A static revision site for the Pearson T Level Technical Qualification in
**Digital Software Development** (first teaching September 2025). The core
structure is identical in the older **Digital Production, Design and
Development** qualification — same eight content areas, same paper split, same
five Employer Set Project tasks — so it works for both; only the Occupational
Specialism differs slightly.

## What it covers

| Section | Contents |
| --- | --- |
| **Core Paper 1** | Content areas 1–4: problem solving, introduction to programming, emerging issues, legislation and regulatory requirements |
| **Core Paper 2** | Content areas 5–8: business context, data, digital environments, security |
| **Employer Set Project** | Pre-release task plus Tasks 1, 2, 3, 4a and 4b — what you are given, what you must produce, mark-earning checklists and what loses marks |
| **Occupational Specialism** | The four-task project (1, 2, 3a, 3b), performance outcome weightings, and all eight specialism content areas |
| **Quiz** | ~150 multiple-choice questions with explanations, filterable by content area, with accuracy tracked per area |
| **Flashcards** | Every key term from both papers, ordered by a Leitner-style box system so weak cards return more often |
| **Python & algorithms** | The Appendix 2 command list, flowchart symbols, code patterns worth memorising, and trace/debug practice |
| **Exam technique** | Timing, assessment objectives, command words, extended-response structure |
| **My past papers** | Your own question bank — see below |

Each topic can be rated red / amber / green; the dashboard tracks overall
progress, shows your weakest topics first, and counts down to exam dates.

## My past papers

Past papers and mark schemes are Pearson copyright, so none are bundled with
this site. Instead, **My past papers** lets you type questions and mark scheme
points in yourself and re-attempt them later with the answers hidden
(practice mode), recording the marks you scored.

Everything you enter is stored in `localStorage` in your browser only. It is
never uploaded, never committed to this repository, and never published with
the site — which also means clearing your browser data deletes it, so use
**Export backup** to save a JSON file and **Import backup** to restore it or
move it to another device.

## Running it

Open `index.html` directly, or serve the folder:

```bash
python serve.py
```

That picks a free port from 8130 upwards and opens a browser. No build step,
no dependencies, no network calls — it works fully offline.

## Files

```
index.html        app shell
style.css         design system, light and dark themes
app.js            routing, progress, quiz, flashcards, papers, search
data/core-p1.js   content areas 1-4  (notes, key terms, exam questions)
data/core-p2.js   content areas 5-8
data/esp.js       Employer Set Project task guides
data/os.js        Occupational Specialism guide and content areas
data/quiz.js      multiple-choice question bank
data/extras.js    Python reference and exam technique
serve.py          local server
```

The revision notes are written from scratch against the published
specification's content areas; the specification itself is Pearson / Institute
for Apprenticeships and Technical Education copyright and is not reproduced
here. Always check the current specification and your centre's timetable for
the definitive assessment details.
