/* Tutor notes — every question set in the day-by-day tutoring sessions, with a
   model answer, how to approach that question type, and what it actually cost
   when it was attempted. Written up as the session happened, so the "what cost
   you" notes are specific rather than generic. */

window.TLDATA = window.TLDATA || {};

window.TLDATA.tutorNotes = {
  intro: 'Every question from the tutoring sessions, with the model answer and the marking points. Attempt a question before revealing the answer — reading a worked answer feels productive and teaches you almost nothing. The "what cost you" notes are the most valuable part: they are your own recurring mistakes, in your own answers.',

  sessions: [

    {
      day: 1, date: '23 Aug', topic: 'Content area 1 — Computational thinking and algorithms',
      score: '7/11',
      questions: [

        { n: 1, marks: 4, cmd: 'Explain',
          q: 'Explain how abstraction would be used when designing a car park barrier control system.',
          how: 'Abstraction has three strands: identify what is needed, filter out what is not, and hide the internal workings. Write two lists on your paper first — needed and not needed — before writing any prose. That fifteen seconds stops you putting an essential item in the wrong pile.',
          answer: 'Abstraction removes detail that is not needed for the solution (1). For the barrier system the developer keeps only the relevant data — the number plate, whether the space count is below capacity, and whether payment is valid (1) — and filters out irrelevant detail such as the colour or model of the car (1). How the plate is actually recognised is hidden behind a function, so the rest of the system only needs the result (1).',
          got: '2/4',
          cost: 'You listed the number plate and the space count as unnecessary detail — they are two of the most necessary items in the system, so the "filters out irrelevant detail" mark could not be awarded. Nothing was written about hiding internal workings, which is the third strand.' },

        { n: 2, marks: 4, cmd: 'Decompose',
          q: 'Decompose the car park barrier control system into sub-systems. List them.',
          how: 'Name each sub-system as a noun phrase, then describe it. The examiner is scanning for the name — if it is buried inside a sentence about what happens, they may not find it. Sweep the whole problem before you start writing; a missed sub-system is a straight lost mark.',
          answer: 'Plate recognition — captures and reads the registration at entry and exit. Space counting — decrements the available count on entry, increments on exit, signals when full. Payment — calculates the fee from the duration and processes the transaction. Barrier control — raises and lowers the barrier and detects that the vehicle has cleared before closing.',
          got: '3/4',
          cost: 'Barrier control was never listed as a sub-system — it was only mentioned as something that happens because of payment. You also described purposes rather than naming systems, which risks the examiner not finding the name.' },

        { n: 3, marks: 4, cmd: 'Explain',
          q: 'Explain one benefit and one drawback of decomposition when a team of four developers is building a stock control system.',
          how: 'Two marks per side means point plus consequence, twice. The consequence has to land on the project or the system — delivery speed, defect rate, integration — not on how the developers feel.',
          answer: 'Benefit: each developer takes a discrete module and works on it concurrently, so four people make progress simultaneously and the project finishes faster (2). Modules can also be tested individually, so a defect is found in one small component rather than hunted through an assembled system. Drawback: the interfaces between modules must be agreed precisely or the modules will not integrate when combined (2). Decomposition also takes analysis time before any code is written, and poorly chosen boundaries create duplicated work.',
          got: '2/4',
          cost: 'The benefit had the right point but the development restated it — "easier to complete as everything is organised" is not a consequence. The drawback was that developers would become mentally drained, which is a human-resources answer to a technical question. The real drawback is interface mismatch.' },

        { n: 4, marks: 3, cmd: 'Trace',
          q: 'Trace this and state what prints.',
          code: 'spaces = 5\ncars = 0\nfor i in range(7):\n    if spaces > 0:\n        spaces = spaces - 1\n        cars = cars + 1\nprint(cars, spaces)',
          how: 'Read the print line first so you know which variables matter. Draw the table before executing. range(7) gives i = 0 to 6 — seven passes — and every pass must be shown, including the ones where the condition is false and nothing changes.',
          answer: 'Passes 1 to 5 each decrement spaces and increment cars: spaces 5→0, cars 0→5. Passes 6 and 7 still run, but spaces > 0 is false so nothing changes. Output: 5 0',
          got: '2/3',
          cost: 'The values were right and you clearly used a table. But you never wrote the output — the question asked what prints, and "5 0" never appeared. You also showed six passes when there are seven.' }
      ]
    },

    {
      day: 2, date: '23 Aug', topic: 'Content area 1.3 — Problem-solving strategies',
      score: '3/14',
      questions: [

        { n: 5, marks: 2, cmd: 'State',
          q: 'State the six steps of the high-level problem-solving strategy, in order.',
          how: 'Pure recall — no reasoning gets you there. Learn it as a causal chain: you cannot gather until you have defined, cannot analyse until you have gathered, cannot plan until you have analysed, cannot implement without a plan, cannot review without implementing. Any other order is nonsense, which makes the right order hard to forget.',
          answer: 'Define the problem → Gather information → Analyse the information → Make a plan of action → Implement a solution → Review the solution.',
          got: '0/2',
          cost: 'Answered "analyse, delegate, work, review, publish, fix" — two real words in the wrong places and four invented ones.' },

        { n: 6, marks: 4, cmd: 'Justify',
          q: 'A team of four is building a hospital appointment system. Much of the code — login, date validation, notifications — already exists from a previous project. Justify which approach they should use.',
          how: 'Check the category first: only three answers are legal — top-down, bottom-up, modularisation. Then find the phrase in the question doing the deciding. Structure: name it, why it fits this scenario, why the alternative is worse.',
          answer: 'Bottom-up (1). Login, date validation and notifications already exist as tested components, so the team builds upward from proven code rather than writing it fresh (1), which cuts development time and defect rate because that code has already been exercised by real use (1). Top-down suits a system being built from nothing whose requirements are known, and would tend to generate new code rather than reuse what already exists (1). With four developers they would also modularise, so each takes a component with agreed interfaces.',
          got: '1/4',
          cost: 'You answered "pattern recognition" — a real term, but from content area 1.1, not from the three approaches. The reasoning about reuse being pre-tested was right and earned the mark; it was attached to the wrong word.' },

        { n: 7, marks: 6, cmd: 'Explain',
          q: 'The car park barrier fails to open for around 5% of vehicles that have paid. It has been happening for three weeks. Explain how root cause analysis would be used, and what actions could follow.',
          how: 'Two commands means two sections — budget roughly 4 marks for the how and 2 for the actions, then make sure both exist on the page. Name the technique in your first sentence. Walk it concretely through the scenario rather than describing what RCA is in general.',
          answer: 'Using five whys: the barrier did not open — why? The system did not register payment against the vehicle — why? The plate read did not match the payment record — why? The plate was misread — why? The reader cannot resolve the narrower plates fitted to motorbikes (3). This reaches the underlying cause rather than the symptom, so fixing it stops all future occurrences instead of clearing one jam at a time (1). The incident is then logged with the cause and fix recorded so the pattern can be tracked (1), and because recalibrating the reader is outside the helpdesk’s permissions it is escalated to the vendor (1).',
          got: '1/6',
          cost: 'Root cause analysis never appeared in the answer — what you described was systematic debugging. No named technique, and none of the three actions. The mark was for the motorbike plate idea, which is a genuinely plausible root cause.' },

        { n: 8, marks: 3, cmd: 'Trace',
          q: 'Trace this and state what prints.',
          code: 'codes = ["AB12", "CD34", "EF56", "GH78"]\nfound = -1\ni = 0\nwhile i < len(codes) and found == -1:\n    if codes[i] == "EF56":\n        found = i\n    i = i + 1\nprint(found, i)',
          how: 'With a compound condition, check both halves on every pass. Track the variables as values, not as descriptions of what is happening. This is a linear search — the same algorithm that appears in content area 2.11.',
          answer: 'Pass 1: i=0, "AB12" no match, i becomes 1. Pass 2: i=1, "CD34" no match, i becomes 2. Pass 3: i=2, "EF56" matches so found=2, i becomes 3. The loop then exits because found == -1 is false — not because the list ran out. Output: 2 3',
          got: '1/3',
          cost: 'The sequence of items examined was right and the stopping point was right. But no values were tracked for i or found, and the output was never stated. An ambiguous answer gets read at speed by someone who has never met you — never make the examiner infer.' }
      ]
    },

    {
      day: 2, date: '23 Aug', topic: 'Reinforcement set — strategies and root cause analysis',
      score: '5/13 so far',
      questions: [

        { n: 9, marks: 3, cmd: 'State',
          q: 'State the three approaches to solving problems.',
          how: 'One word each. "State" never wants an explanation, and writing more wastes time you need later in the paper.',
          answer: 'Top-down, bottom-up, modularisation.',
          got: '3/3',
          cost: 'Correct first time, after one night of recite-and-check. This is the proof that the method works — the same twenty minutes applied to the other lists will do the same thing.' },

        { n: 10, marks: 3, cmd: 'State',
          q: 'State the three approaches to root cause analysis.',
          how: 'Recall. Make sure you can expand both acronyms if the question asks.',
          answer: 'Five whys; FMEA (failure mode and effects analysis); ETA (event tree analysis).',
          got: '1/3',
          cost: 'Five whys was right. Decomposition and abstraction are from content area 1.1 — the third time a 1.1 term has been reached for when the answer lay in a different list.' },

        { n: 11, marks: 3, cmd: 'Describe',
          q: 'Describe the actions that can be taken following root cause analysis.',
          how: 'Three actions, one mark each — but "describe" means do not just name them. One short clause each on what it means in practice.',
          answer: 'Log it — record the cause and the fix so the pattern can be tracked over time. Close it — if the issue is genuinely resolved. Escalate it — to an appropriate manager, specialist or external third party when it is beyond your permissions or expertise.',
          got: '0/3',
          cost: 'Answered "delegation of tasks". Three words would have earned three marks — this is the cheapest mark-per-minute content in the specification.' },

        { n: 12, marks: 4, cmd: 'Justify',
          q: 'A small business is building a booking system from scratch. The requirements have been fully documented and agreed with the client. Justify the most appropriate approach to developing it.',
          how: 'Two details in the question decide it, and they both point the same way. Find them before you choose. Then name, justify, and rule out the alternative.',
          answer: 'Top-down (1). The requirements are fully documented and agreed, so the whole system is understood up front and can be broken into sub-systems by stepwise refinement (1), which means the design follows the agreed specification rather than being discovered as it is built (1). Bottom-up is less suitable because its main advantage is reusing existing tested components, and this system is being built from scratch so there is nothing to reuse (1).',
          got: '1/4',
          cost: 'No approach was ever named — you described building a base layer upward, which is bottom-up, and it is the wrong choice here. The second half drifted into team roles and testing, which is not what the question asked. The mark was for engaging with the requirements document.' },

        { n: 13, marks: 4, cmd: 'Explain',
          q: 'Explain two benefits of modularisation for a team of six developers.',
          how: 'Two marks per benefit means point plus consequence, twice. The consequence must be about the project or system.',
          answer: 'Each developer can be given a self-contained module with a defined interface, so six people develop concurrently rather than queuing on the same code (2). Modules can be tested in isolation, so a defect is located within one small component instead of being hunted through the whole assembled system, which makes debugging faster and cheaper (2). Modules can also be reused in later projects, and maintenance changes are contained to one module rather than rippling through the codebase.',
          got: null, cost: null },

        { n: 14, marks: 4, cmd: 'Explain',
          q: 'A supermarket self-checkout freezes roughly once an hour. Staff restart it each time and it works again. Explain why root cause analysis should be used instead of continuing to restart it.',
          how: 'Build the answer around the word symptom. Restarting treats the symptom; RCA finds the underlying cause. Name a technique, say what it gets you, and finish with the consequence of not doing it.',
          answer: 'Restarting the machine treats the symptom — it clears the freeze but does nothing about why it happens, so it recurs every hour indefinitely (1). Root cause analysis, for example five whys, works back from the freeze to the underlying cause, such as a memory leak in the payment service that exhausts available memory after roughly an hour of transactions (2). Fixing the underlying cause removes every future occurrence rather than each individual one, which saves the staff time spent restarting, reduces customer queues and abandoned baskets, and stops the fault escalating into a longer outage (1).',
          got: null, cost: null },

        { n: 15, marks: 4, cmd: 'Compare',
          q: 'Compare top-down and bottom-up design.',
          how: 'Compare means both things in the same sentences, linked with words like "whereas" and "in contrast". Two separate paragraphs, one per approach, is the classic way to lose half the marks on a compare question.',
          answer: 'Top-down starts from the complete system and breaks it into sub-systems by stepwise refinement, whereas bottom-up builds and tests small components first and combines them upward (1). Top-down therefore suits projects whose requirements are known in advance, in contrast to bottom-up, which suits projects reusing existing modules or where the whole problem is not yet understood (1). Because top-down designs from the specification downward it produces a coherent overall structure, whereas bottom-up can produce a system that works but lacks one (1). Conversely bottom-up surfaces low-level problems early because components are built and tested first, while top-down can leave them undiscovered until late in the project (1).',
          got: null, cost: null },

        { n: 16, marks: 3, cmd: 'Trace',
          q: 'Trace this and state what prints.',
          code: 'stock = 12\norders = [5, 4, 6, 2]\nshipped = 0\nfor order in orders:\n    if order <= stock:\n        stock = stock - order\n        shipped = shipped + 1\nprint(shipped, stock)',
          how: 'Four rows — one per item in the list, including the one that does nothing. The trap: one order cannot be filled. Ask yourself whether that stops the loop or just skips that pass.',
          answer: 'order=5: 5 <= 12 so stock becomes 7, shipped 1. order=4: 4 <= 7 so stock becomes 3, shipped 2. order=6: 6 <= 3 is false, so nothing happens — but the loop continues, because a for loop runs once per item regardless. order=2: 2 <= 3 so stock becomes 1, shipped 3. Output: 3 1',
          got: null, cost: null },

        { n: 17, marks: 6, cmd: 'Evaluate',
          q: 'Evaluate the use of modularisation on a project with eight developers and a tight deadline.',
          how: 'This one is levels-based, so it is marked holistically: three developed points in favour, two or three against, then a conclusion that actually decides. Name the scenario specifics — eight developers, tight deadline — in your points or you are capped at Level 1.',
          answer: 'In favour: with eight developers, modularisation is what makes concurrent work possible at all — without it the team queues on the same files and eight people deliver little more than two. Modules can be tested in isolation, so defects are found early rather than during a late integration phase the deadline cannot absorb. Existing modules can be reused, which directly buys time. Against: defining the module boundaries and interfaces takes analysis time before any code is written, which is painful when the deadline is tight. If those interfaces are specified poorly the modules will not integrate, and integration failure late in a compressed schedule is exactly the risk that sinks the delivery date. Managing eight parallel workstreams also adds coordination overhead. Overall, modularisation is still the right choice, because the alternative does not scale to eight developers at all — but the interface definitions must be agreed and frozen at the very start, since it is interface drift rather than the approach itself that would cost the deadline.',
          got: null, cost: null }
      ]
    },

    {
      day: 9, date: '30 Aug', topic: 'Content area 2.11 - Searching and sorting',
      score: '6/17',
      questions: [

        { n: 18, marks: 3, cmd: 'State',
          q: 'State the three metrics used to compare algorithms.',
          how: 'Pure recall. Three separate measurable things - not one umbrella word.',
          answer: 'Use of memory space; execution time; number of comparisons.',
          got: '1/3',
          cost: 'Time was correct. Efficiency is the umbrella term covering all three, so it cannot itself be one of them, and workload is not a metric in the specification.' },

        { n: 19, marks: 6, cmd: 'Justify',
          q: 'A system holds 2 million product codes. They are searched constantly throughout the day but only updated once, overnight. Justify the most suitable search algorithm.',
          how: 'Four moves, and the fourth is what makes it a six-marker: name it, say why it fits using numbers, name its drawback yourself, then show why this scenario cancels that drawback out. Examiners build the scenario so the drawback does not apply - spotting that is the test.',
          answer: 'Binary search (1). Halving the remaining data at every comparison means 2 million records are searched in about 21 comparisons, whereas a linear search would average one million (2), and with searches running constantly all day that difference dominates performance (1). Binary search requires the data to be sorted, which is normally its main drawback (1), but here the data is only updated overnight, so it can be sorted in the nightly batch and stays sorted all day - the sort cost is paid once rather than per search (1).',
          got: '0/6',
          cost: 'Left blank. This exact scenario was covered in the lesson immediately above the question, which points to reading rather than encoding. Use the close-it-and-write-from-memory checkpoint after each section.' },

        { n: 20, marks: 4, cmd: 'Trace',
          q: 'Show each pass of a bubble sort on the list [5, 2, 8, 1].',
          how: 'One block per pass, not one line per swap. A pass is a full sweep through the list. Examiner guidance is explicit that every individual pass must be shown to earn all the marks.',
          answer: 'Pass 1: compare 5 and 2, swap, giving 2 5 8 1; compare 5 and 8, no swap; compare 8 and 1, swap, giving 2 5 1 8. Pass 2: compare 2 and 5, no swap; compare 5 and 1, swap, giving 2 1 5 8. Pass 3: compare 2 and 1, swap, giving 1 2 5 8. Sorted list: 1 2 5 8.',
          got: '3/4',
          cost: 'Every swap was correct and in the right order, and the final list was right. The marks are organised by pass and the answer was organised by individual swap, so the pass structure was not visible.' },

        { n: 21, marks: 4, cmd: 'Explain',
          q: 'Explain one benefit and one drawback of merge sort compared with bubble sort.',
          how: 'Two marks each side. The drawback of merge sort is about memory, which is why memory space is one of the three comparison metrics.',
          answer: 'Benefit: merge sort splits the data and merges sorted halves, so the number of comparisons grows far more slowly as the list grows, and on a large dataset it finishes in a fraction of the time bubble sort takes (2). Drawback: it creates temporary sub-lists while merging, so it uses considerably more memory, and it is harder to implement and debug than bubble sort, which needs only a nested loop and a swap (2).',
          got: '2/4',
          cost: 'The benefit was fine but the drawback contradicted it - merge sort was described as fast because it divides, then slow because it divides. Divide and conquer is the reason it is quick. The real drawback is memory use.' }
      ]
    },

    {
      day: 10, date: '30 Aug', topic: 'Content area 2.12 - Testing',
      score: '5/14 attempted',
      questions: [

        { n: 22, marks: 4, cmd: 'Give',
          q: 'A field accepts an integer between 18 and 65. Give one example each of valid, boundary, invalid and erroneous test data, and say what should happen to each.',
          how: 'Label each example with its type. If the order slips, or the examiner reads quickly, the labels prove you know which is which.',
          answer: 'Valid: 20 - inside the range, should be accepted. Boundary: 65 - the exact upper limit, should be accepted. Invalid: 70 - correct data type but outside the range, should be rejected with a message. Erroneous: the word seventy - wrong data type entirely, should be rejected without crashing.',
          got: '4/4',
          cost: 'All four correct with the correct outcomes, including 65 as the boundary. The only improvement is labelling each example with its type.' },

        { n: 23, marks: 4, cmd: 'Explain',
          q: 'Explain why regression testing is carried out, and the risk of omitting it.',
          how: 'Two developed points. The name is misleading - regression testing is not about going back to an old version.',
          answer: 'Regression testing re-runs tests that have already passed, after a change has been made, to confirm existing functionality still works (1). It is carried out because a fix or a new feature can have unintended side effects: shared functions, changed data structures or altered validation can break behaviour elsewhere that was previously working (1). Without it, only the new change is tested, so a defect introduced in an untouched area reaches the client (1), costing far more to fix in live use than during development and damaging client confidence (1).',
          got: '0/4',
          cost: 'Described rollback - reverting to the old system when the new one fails. That is change management from content area 5.4, a different topic. Memory hook: you are not going back, you are checking the software has not slipped back.' },

        { n: 24, marks: 3, cmd: 'Explain',
          q: 'Explain the difference between closed box and open box testing.',
          how: 'Both are software testing terms. The same idea exists in security as black box and white box penetration testing, but this question comes from content area 2.12 and wants the software testing framing.',
          answer: 'In closed box testing the tester sees only the inputs and the outputs and has no access to the source code, so the software is tested against the requirements (1). In open box testing the tester can see the code and designs tests to exercise specific internal paths and logic (1). Closed box therefore checks what the software does, while open box checks how it does it (1).',
          got: '1/3',
          cost: 'The without-knowledge versus with-knowledge distinction was right, but it was framed as hacking into an organisation. That is penetration testing from content area 8. Right idea, wrong topic.' },

        { n: 25, marks: 3, cmd: 'State',
          q: 'State the six things a test plan should record.',
          how: 'Straight recall of six items. This is the structure ESP Task 2 marks your test documentation against.',
          answer: 'The test to be carried out; the purpose of the test; the test data used; the expected result; the actual result; any further action required.',
          got: '0/3',
          cost: 'Answered the following question by mistake, giving usernames instead of the six columns. A retrieval checkpoint sat directly above these six items in the lesson and would have caught it.' },

        { n: 26, marks: 6, cmd: 'Write',
          q: 'A login form accepts a username of 5 to 12 characters. Write three rows of a test table, using a different type of test data in each row.',
          how: 'Six columns per row: test, purpose, test data, expected result, actual result, further action. This is the exact skill ESP Task 2 marks, and the documentation carries marks separately from whether the code works.',
          answer: 'Row 1, valid - Test: username length. Purpose: check a username of acceptable length is accepted. Test data: JackHH, 6 characters. Expected: accepted, account created. Row 2, boundary - Test: username length at the lower limit. Purpose: check the shortest permitted username is accepted. Test data: Jacks, 5 characters. Expected: accepted, account created. Row 3, erroneous - Test: username below the minimum length. Purpose: check a too-short username is rejected. Test data: Jack, 4 characters. Expected: rejected, with a message stating the username must be 5 to 12 characters. The actual result and further action columns are completed when the test is run.',
          got: null, cost: null }
      ]
    },

    {
      day: 11, date: '5 Sep', topic: 'Content area 3 - Emerging issues and impact',
      score: '9/15 attempted',
      questions: [

        { n: 27, marks: 2, cmd: 'State',
          q: 'State two things a public sector organisation must do to comply with the website and mobile applications accessibility regulations.',
          how: 'Learn these two as a pair. The second one is the half of the mark scheme nobody remembers.',
          answer: 'Meet the accessibility standard, WCAG 2.1 level AA (1). Publish an accessibility statement on the site setting out how compliant it is and which parts are not (1).',
          got: '1/2',
          cost: 'Described accessibility features - colour blind modes, zoom, text size - rather than the two compliance duties. The features come from WCAG, so the answer was one step away, but the accessibility statement was missing entirely.' },

        { n: 28, marks: 3, cmd: 'Explain',
          q: 'A company introduces staff monitoring software after moving to hybrid working. Explain one benefit and one drawback for the organisation.',
          how: 'The question says for the organisation. How staff feel is the mechanism; the cost to the business is the mark. Land every point on turnover, cost, output or legal risk.',
          answer: 'Benefit: monitoring gives visibility of activity and output across a hybrid workforce, so managers can spot under-performance or workload imbalance that would have been visible in an office (1), and redistribute work before deadlines slip (1). Drawback: staff may see it as surveillance and a breach of privacy, damaging trust and morale, which raises staff turnover and recruitment cost (1). The monitoring data is also personal data, so it must be justified and documented under the UK GDPR or the organisation risks enforcement action.',
          got: '2/3',
          cost: 'The drawback was properly developed - privacy concern leading to an uncomfortable working environment. The benefit stopped at the point with no consequence attached, so it scored one mark instead of two.' },

        { n: 29, marks: 4, cmd: 'Explain',
          q: 'Explain two ways bias can enter an AI system used to shortlist job applicants, and the consequence of each.',
          how: 'Bias questions want the data, not the algorithm. Ask where the training data came from and who is under-represented in it.',
          answer: 'Historic training data: the model is trained on past CVs and who was hired, so it learns the pattern of previous hiring decisions including the biases in them (1). If most successful applicants were a narrow age group, the system systematically down-ranks older applicants, which is unlawful age discrimination under the Equality Act 2010 and means qualified candidates are missed (1). Proxy variables: grades act as a stand-in for ability, but attainment correlates with school quality and household income, so screening on grades indirectly disadvantages applicants from lower-income backgrounds even though income never appears in the data (1). That is indirect discrimination and is harder to detect, because the protected characteristic is never in the dataset (1).',
          got: '3/4',
          cost: 'The historic training data point was strong and well exemplified. The second point described the AI being unable to judge communication skills, which is a limitation of the measure rather than bias. One sentence about grades correlating with background would have converted it.' },

        { n: 30, marks: 6, cmd: 'Discuss',
          q: 'A manufacturer is considering fitting IoT sensors to its production line machinery. Discuss the benefits and drawbacks.',
          how: 'Six marks means 2-2-J: two developed benefits, two developed drawbacks, one judgement sentence. The judgement has a fixed skeleton - On balance X, because Y, provided that Z. On machinery the headline benefit is predictive maintenance.',
          answer: 'Benefit 1: sensors report vibration, temperature and cycle count in real time, so a component degrading is detected before it fails (1), letting the manufacturer schedule maintenance in a planned shutdown rather than losing days of production to an unplanned breakdown mid-run (1). Benefit 2: live throughput data identifies which machine is the bottleneck (1), so the line can be rebalanced to raise output without buying more machinery (1). Drawback 1: significant upfront cost for sensors, installation and network, plus downtime during fitting (1), with a long payback period if the machinery is near end of life (1). Drawback 2: every connected sensor widens the attack surface, and IoT firmware often goes unpatched (1), so a compromise on the production network could halt manufacturing entirely (1). Judgement: on balance the investment is justified, because avoided unplanned downtime typically outweighs the hardware cost within the first major failure prevented, provided the sensors sit on a segregated network with a firmware update policy.',
          got: '3/6',
          cost: 'Level 2. Two benefits were named but neither was developed, so each scored one mark rather than two. Predictive maintenance, the headline benefit on machinery, was missed. The judgement was circular - worth it if it is worth it - with no because and no provided that, so it scored nothing.' }
      ]
    }

  ]
};
