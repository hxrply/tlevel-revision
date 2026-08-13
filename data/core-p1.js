/* Core Paper 1 — content areas 1-4.
   Written as revision material (my own wording), structured to mirror the
   Pearson T Level spec's content areas so nothing in the syllabus is missed.
   Each topic: must = the facts you get marks for, terms = flashcard fodder,
   exam = exam-style questions with model answers. */

window.TLDATA = window.TLDATA || {};

window.TLDATA.paper1 = [

/* ───────────────────────── Content area 1 ───────────────────────── */
{
  id: 'ca1', num: 1, paper: 1, title: 'Problem solving',
  blurb: 'Computational thinking, algorithms and problem-solving strategies. Heavily tested with "read this algorithm / find the error / what is the output" questions.',
  topics: [
    {
      id: '1.1', title: 'Computational thinking',
      must: [
        'Computational thinking = approaching a problem so that a computer (or a person following clear steps) can solve it. It is a way of thinking, not a programming language.',
        'Four components: decomposition, pattern recognition, abstraction, algorithmic design.',
        'Decomposition = break a large problem into smaller, manageable sub-problems. Tasks: identify the main features, characterise each feature, break the problem down, break the solution down.',
        'Represent decomposition with: block diagrams, information flow diagrams, flowcharts, code, written descriptions.',
        'Pattern recognition = spot trends and similarities within and between problems, find common features with existing solutions, make predictions/assumptions from patterns. Lets you reuse code instead of rewriting it.',
        'Abstraction = identify the information you need, filter out unnecessary detail, hide the internal workings. Ask: what inputs, what outputs, what varies, what stays constant, what key actions, what repeats.',
        'Algorithmic design = express the solution as an ordered, unambiguous set of steps.',
        'Benefits: problems become manageable, work can be split across a team, reusable components, fewer errors, easier maintenance.',
        'Drawbacks: takes time up front, over-abstraction can hide detail that mattered, decomposing badly creates sub-problems that do not fit back together.',
        'When to use it: any problem that is too big to solve in one go, that repeats, or that must be handed to a computer or another developer.'
      ],
      terms: [
        { t: 'Computational thinking', d: 'Formulating a problem and its solution so that it can be carried out by a computer or a human following defined steps.' },
        { t: 'Decomposition', d: 'Breaking a problem or solution into smaller, more manageable parts.' },
        { t: 'Pattern recognition', d: 'Identifying trends, similarities and repeated features within or between problems so existing solutions can be reused.' },
        { t: 'Abstraction', d: 'Removing unnecessary detail and hiding internal workings so only the relevant information remains.' },
        { t: 'Algorithmic design', d: 'Producing a precise, ordered sequence of steps that solves the problem.' },
        { t: 'Block diagram', d: 'A high-level diagram showing the main sub-systems of a solution as blocks and the links between them.' }
      ],
      exam: [
        { marks: 4, q: 'Explain how abstraction would be used when designing a car park barrier control system.',
          a: 'Abstraction removes detail that is not needed for the solution (1). For the barrier system the developer keeps only the relevant data — the number plate, whether the space count is below capacity, and whether payment is valid (1) — and filters out irrelevant detail such as the colour or model of the car (1). The internal workings, e.g. exactly how the plate is recognised, are hidden behind a function so the rest of the system only needs the result (1).' },
        { marks: 6, q: 'Evaluate the use of decomposition when a team of four developers is building a stock control system.',
          a: 'Decomposition splits the system into sub-systems such as stock intake, stock level checks, reordering and reporting. Benefits: each developer can be given a discrete module so work happens in parallel and delivery is faster; modules can be tested individually so defects are found earlier and are easier to locate; modules such as reporting can be reused in other systems; it makes the problem easier to understand and estimate. Drawbacks: it takes analysis time before any code is written; the interfaces between modules must be agreed carefully or the modules will not integrate; poorly chosen boundaries create duplicated work. Overall, for a four-person team decomposition is essential because without it developers cannot work on the same system concurrently without conflicting.' }
      ]
    },
    {
      id: '1.2', title: 'Algorithmic design',
      must: [
        'Algorithm = a finite, ordered set of unambiguous steps that solves a problem or performs a task. Characteristics: finite, precise/unambiguous, has inputs and outputs, each step is defined and depends on the previous ones.',
        'Three ways to express an algorithm: flowcharts, written descriptions (with hierarchical numbering to show sequence), and code (Python 3.10+ in this qualification).',
        'Flowchart symbols: terminator (oval, start/end), process (rectangle), sub-process (rectangle with double side bars), decision (diamond), input/output (parallelogram), connector (circle), arrow (flow), plus labels on decision branches (Yes/No).',
        'Flowcharts — benefit: visual, easy for non-technical readers, logic errors are easy to spot. Drawback: get very large for complex programs, hard to edit, cannot show fine detail.',
        'Written descriptions — benefit: no diagramming software needed, easy for anyone to read. Drawback: natural language is ambiguous, long-winded, poor at showing loops.',
        'Code — benefit: precise, testable, can be run straight away. Drawback: requires programming knowledge, language-specific, client cannot review it.',
        'Three control constructs: sequence (steps in order), selection (if / elif / else / match-case), iteration (count-controlled for, condition-controlled while).',
        'Exam skills you must be able to do: state what an algorithm does, trace it to find the output for a given input, identify errors, correct errors, convert between flowchart / written description / code.',
        'Tracing technique: draw a trace table with one column per variable plus an output column, and fill in a row per iteration. Do not do it in your head.'
      ],
      terms: [
        { t: 'Algorithm', d: 'A finite sequence of precise, unambiguous steps that solves a problem or completes a task.' },
        { t: 'Sequence', d: 'Statements executed one after another in the order they are written.' },
        { t: 'Selection', d: 'Choosing between different paths of execution based on a condition (if/elif/else, match-case).' },
        { t: 'Iteration', d: 'Repeating a block of statements, either a set number of times (count-controlled) or while a condition holds (condition-controlled).' },
        { t: 'Trace table', d: 'A table with a column per variable, used to record how values change as an algorithm executes so the output can be determined.' },
        { t: 'Terminator', d: 'The oval flowchart symbol denoting the start or end of an algorithm.' }
      ],
      exam: [
        { marks: 3, q: 'Give three reasons why a flowchart may be a better way of communicating a design to a non-technical client than code.',
          a: 'The client does not need programming knowledge to read it (1). The symbols and arrows show the flow of control visually so decision points are obvious (1). It is language-independent, so the design can still be implemented in any language and is not tied to one implementation (1).' },
        { marks: 4, q: 'A count-controlled loop and a condition-controlled loop are both used in a program. Explain when each should be chosen.',
          a: 'A count-controlled (for) loop is chosen when the number of repetitions is known before the loop starts, e.g. processing every item in a list of 30 orders (2). A condition-controlled (while) loop is chosen when the number of repetitions is not known in advance and depends on a condition being met, e.g. repeatedly asking the user for input until a valid PIN is entered (2).' }
      ]
    },
    {
      id: '1.3', title: 'Problem-solving strategies',
      must: [
        'Top-down: start with the whole system and break it into smaller sub-systems (stepwise refinement). Good when the overall requirements are known. Drawback: little reuse, low-level problems only appear late.',
        'Bottom-up: build and test small components first, then combine them into the full system. Good when reusing existing modules or when the whole problem is not yet understood. Drawback: the finished system can lack a coherent structure.',
        'Modularisation: split the solution into self-contained modules with defined interfaces. Benefits: parallel development, reuse, easier testing/debugging and maintenance. Drawbacks: interface design overhead, more files to manage, potential performance cost from calls between modules.',
        'Root cause analysis (RCA) = finding the underlying cause of a fault rather than repeatedly patching the symptom. Used after an incident or recurring defect.',
        'Five whys: ask "why?" repeatedly (about five times) until the underlying cause is reached. Cheap and quick; relies on the knowledge of the people in the room.',
        'FMEA (failure mode and effects analysis): list every way a component could fail, the effect of each failure, and score likelihood/severity/detectability to prioritise. Proactive and thorough; time consuming.',
        'ETA (event tree analysis): start from an initiating event and map forwards through the possible success/failure branches to see all outcomes.',
        'Actions after RCA: log it, close it if resolved, or escalate to an appropriate manager, specialist or external third party.',
        'High-level problem-solving strategy (learn the six steps in order): define the problem → gather information → analyse the information → make a plan of action → implement a solution → review the solution.',
        'Choosing a strategy: known, well-defined requirements → top-down; reusing components → bottom-up; team project → modularisation; recurring fault → RCA.'
      ],
      terms: [
        { t: 'Top-down design', d: 'Starting from the complete system and repeatedly breaking it into smaller sub-systems (stepwise refinement).' },
        { t: 'Bottom-up design', d: 'Building and testing small components first and combining them into a larger system.' },
        { t: 'Modularisation', d: 'Dividing a solution into independent modules with defined interfaces that can be developed and tested separately.' },
        { t: 'Root cause analysis', d: 'A structured process for identifying the underlying cause of a problem so it can be permanently fixed.' },
        { t: 'Five whys', d: 'An RCA technique of repeatedly asking "why?" until the fundamental cause of a fault is found.' },
        { t: 'FMEA', d: 'Failure mode and effects analysis — systematically listing possible failures, their effects and their priority.' },
        { t: 'Escalate', d: 'Passing an unresolved issue to a manager, specialist or third party with the authority or expertise to deal with it.' }
      ],
      exam: [
        { marks: 6, q: 'A helpdesk receives the same "cannot save file" error from users three times a week. Explain how root cause analysis would be used and what actions could follow.',
          a: 'RCA is used because repeatedly fixing the symptom (clearing the error for each user) does not stop it recurring (1). Using five whys the team asks why the save failed — the drive is full; why is it full — logs are not rotated; why are logs not rotated — the scheduled task was disabled during an update (2). This identifies the underlying cause rather than the symptom (1). Afterwards the incident is logged with the cause and fix recorded so the pattern can be tracked (1); once the scheduled task is restored and verified the issue is closed, or if the fix requires server changes outside the helpdesk\'s permissions it is escalated to the infrastructure specialist (1).' }
      ]
    }
  ]
},

/* ───────────────────────── Content area 2 ───────────────────────── */
{
  id: 'ca2', num: 2, paper: 1, title: 'Introduction to programming',
  blurb: 'The biggest single chunk of Paper 1 and the foundation of ESP Tasks 2, 3 and 4a. Language is Python 3.10+ — you must be able to read, write, trace and debug code on paper.',
  topics: [
    {
      id: '2.1', title: 'Standard data types',
      must: [
        'Integer — whole numbers, positive or negative, no decimal part. Use for counts, ages, quantities, IDs. e.g. 42',
        'Float (real) — numbers with a fractional part. Use for money, measurements, averages. e.g. 3.75',
        'String — a sequence of characters in quotes. Use for names, addresses, postcodes, phone numbers (leading zeros must be preserved). e.g. "SW1A 1AA"',
        'Boolean — True or False only. Use for flags and the result of comparisons. e.g. is_valid = True',
        'Choosing the right type matters for memory use, for whether arithmetic is possible, and for validation. Phone numbers and postcodes are strings, not integers.',
        'Type conversion functions: int(), float(), str(), bool(). input() always returns a string, so numeric input must be converted before arithmetic.'
      ],
      terms: [
        { t: 'Integer', d: 'A whole number data type with no fractional part.' },
        { t: 'Float', d: 'A data type storing real numbers with a fractional part.' },
        { t: 'String', d: 'A data type storing a sequence of characters.' },
        { t: 'Boolean', d: 'A data type with only two possible values, True and False.' },
        { t: 'Type conversion (casting)', d: 'Converting a value from one data type to another, e.g. int("7") returns the integer 7.' }
      ],
      exam: [
        { marks: 4, q: 'A membership system stores: member number, membership fee, mobile number and whether the member has paid. State an appropriate data type for each and justify one of your choices.',
          a: 'Member number — integer (or string if it contains letters) (1). Membership fee — float, because it includes pence (1). Mobile number — string (1). Has paid — Boolean (1). The mobile number is stored as a string because it begins with a leading zero which an integer would discard, and no arithmetic is ever performed on it.' }
      ]
    },
    {
      id: '2.2', title: 'Variables, constants and scope',
      must: [
        'Variable = a named location in memory whose value can change while the program runs.',
        'Constant = a named value that should not change during execution (Python convention: UPPER_CASE, e.g. VAT_RATE = 0.2). Benefits: change the value in one place, self-documenting, prevents accidental edits.',
        'Declare with a meaningful name: total_price = 0, MAX_USERS = 50.',
        'Scope = the region of a program in which a variable can be accessed.',
        'Local variable — declared inside a function; only exists inside that function; freed when the function ends. Benefits: no name clashes, less memory used, functions stay independent and reusable.',
        'Global variable — declared outside all functions; accessible anywhere. Drawbacks: any part of the program can change it (hard to debug), stays in memory for the whole run, makes functions harder to reuse. Use sparingly — the ESP mark scheme explicitly rewards "good use of local variables and minimal use of global variables".',
        'input() returns a string. age = int(input("Age: ")) converts it. Wrapping conversion in try/except stops a crash on non-numeric input.'
      ],
      terms: [
        { t: 'Variable', d: 'A named memory location whose stored value can change during execution.' },
        { t: 'Constant', d: 'A named value that stays the same throughout program execution.' },
        { t: 'Scope', d: 'The part of a program in which a particular variable can be accessed.' },
        { t: 'Local variable', d: 'A variable declared inside a function that only exists while that function runs.' },
        { t: 'Global variable', d: 'A variable declared outside any function that can be accessed anywhere in the program.' }
      ],
      exam: [
        { marks: 4, q: 'Explain two benefits of using a constant rather than writing the value 0.20 wherever VAT is calculated.',
          a: 'If the VAT rate changes it only has to be edited in one place, which saves time and removes the risk of missing an occurrence (2). The name VAT_RATE makes the code self-documenting so a maintainer can see what the number represents, improving readability and reducing errors (2).' },
        { marks: 4, q: 'Explain why using global variables throughout a large program is considered poor practice.',
          a: 'Any function can change a global variable, so when a value is wrong the developer must check the whole program to find what modified it, making debugging slow (2). Functions that depend on globals cannot be reused in another program without also copying those variables, and globals occupy memory for the entire run, so local variables are preferred (2).' }
      ]
    },
    {
      id: '2.3', title: 'Data structures',
      must: [
        'List — ordered, indexed from 0, mutable, can hold mixed types, grows and shrinks. scores = [12, 8, 30]',
        'Array — ordered collection of items of the same data type, usually a fixed size; more memory-efficient than a list and faster for numeric work.',
        'Dictionary — stores key:value pairs, accessed by key rather than position. Fast lookup when you know the key. member = {"name": "Ada", "paid": True}',
        'Choosing: list for an ordered collection you will iterate over; array when all items are the same type and size is fixed; dictionary when items must be looked up by a unique identifier.',
        'List operations you must know: append(), insert(), remove(), pop(), sort(), index(), count(), len(), in / not in.',
        'Access an item with an index: scores[0]. Loop over items with: for score in scores:  or by index with: for i in range(len(scores)):',
        'Off-by-one errors are the classic list bug — the last index is len(list) - 1.'
      ],
      terms: [
        { t: 'List', d: 'An ordered, mutable collection of items accessed by index, which may hold different data types.' },
        { t: 'Array', d: 'An ordered collection of items of the same data type, typically of fixed size.' },
        { t: 'Dictionary', d: 'A collection of key:value pairs where values are retrieved using their unique key.' },
        { t: 'Index', d: 'The position of an item within a list or array, counting from 0.' },
        { t: 'Mutable', d: 'Able to be changed after creation.' }
      ],
      exam: [
        { marks: 4, q: 'A program stores each student\'s ID and their exam mark. Explain why a dictionary is more suitable than two separate lists.',
          a: 'A dictionary keeps the ID and mark together as a key:value pair, so a mark can be retrieved directly with its student ID rather than searching for the ID in one list and using the matching index in another (2). This is faster to write and to execute, and removes the risk that the two lists get out of step when an entry is inserted or deleted, which would associate marks with the wrong students (2).' }
      ]
    },
    {
      id: '2.4', title: 'Operators',
      must: [
        'Arithmetic: + add, - subtract, * multiply, / divide (always gives a float), ** exponentiation, // integer (floor) division, % modulus (remainder).',
        '% is used to test divisibility (n % 2 == 0 means even) and to wrap values round. // is used when only the whole number of times something fits matters, e.g. 17 // 5 = 3 boxes.',
        'Relational: == equivalence, != not equal, < less than, > greater than, <= less than or equal, >= greater than or equal. These evaluate to True or False.',
        'Classic error: using = (assignment) where == (comparison) is needed.',
        'Boolean: and (both must be True), or (at least one True), not (inverts).',
        'Order of operations (BIDMAS): brackets, indices/exponentiation, then * / // %, then + -. Comparisons are evaluated after arithmetic; not, then and, then or.',
        'Use brackets to make intent explicit even when not strictly required — the ESP rewards precise, readable logic.'
      ],
      terms: [
        { t: 'Modulus (%)', d: 'An arithmetic operator returning the remainder after integer division.' },
        { t: 'Integer division (//)', d: 'Division that discards the fractional part and returns a whole number.' },
        { t: 'Relational operator', d: 'An operator that compares two values and returns a Boolean, e.g. >=.' },
        { t: 'Boolean operator', d: 'and, or or not — used to combine or invert Boolean expressions.' }
      ],
      exam: [
        { marks: 3, q: 'State the value of each expression: 17 // 5, 17 % 5, 2 ** 3',
          a: '17 // 5 = 3 (1). 17 % 5 = 2 (1). 2 ** 3 = 8 (1).' },
        { marks: 2, q: 'Write a condition that is True only when a number stored in n is even and greater than 100.',
          a: 'if n % 2 == 0 and n > 100:  — the modulus test gives the remainder 0 for even numbers (1) and and requires both conditions to be True (1).' }
      ]
    },
    {
      id: '2.5', title: 'Input and output (including text files)',
      must: [
        'Input sources: keyboard (input()), text file, sensors. Output destinations: screen (print()), text file.',
        'input() always returns a string — cast it if you need a number.',
        'Text file steps: open the file, read or write, close the file. Failing to close can mean data is not written to disk and the file stays locked.',
        'Modes: "r" read, "w" write (overwrites the whole file), "a" append (adds to the end). Choosing "w" instead of "a" destroys existing data — a favourite exam trap.',
        'Reading: read() the whole file as one string, readline() one line, readlines() a list of lines. Strip the newline with line.strip() and separate CSV fields with line.split(",").',
        'Using with open("data.txt", "r") as f: closes the file automatically, which is more robust.',
        'Always handle the case where the file does not exist (try/except FileNotFoundError) — this is "robust code" marks.'
      ],
      terms: [
        { t: 'Text file', d: 'A file storing readable characters, used to persist data between runs of a program.' },
        { t: 'Append mode', d: 'Opening a file so new data is added to the end without overwriting existing content.' },
        { t: 'strip()', d: 'A string method removing leading and trailing whitespace, including the newline character read from a file.' },
        { t: 'split()', d: 'A string method that breaks a string into a list using a separator, e.g. a comma.' }
      ],
      exam: [
        { marks: 4, q: 'Describe the steps a program must perform to add a new record to an existing text file of members.',
          a: 'Open the file in append mode so existing records are preserved (1). Build the record as a string with the fields separated by a delimiter such as a comma and a newline at the end (1). Write the line to the file (1). Close the file so the data is flushed to disk and the file is released (1).' }
      ]
    },
    {
      id: '2.6', title: 'Actions: sequence, selection, iteration',
      must: [
        'Sequence — statements run top to bottom in order. Order matters: you cannot use a value before it has been calculated.',
        'Selection — if, elif (else if), else, and match/case. Use elif rather than a chain of separate ifs when only one branch should run: it is clearer and stops unnecessary tests being evaluated.',
        'match/case (Python 3.10+) is a cleaner alternative to a long if/elif chain when comparing one variable against many fixed values, e.g. a menu choice.',
        'Iteration — count-controlled for loop (known number of repetitions, e.g. for i in range(10):) and condition-controlled while loop (repeat while a condition is True).',
        'Loop benefits: avoid repeated code, shorter and easier to maintain, work with any list length. Drawbacks: an incorrect condition causes an infinite loop; nested loops can be slow; badly written loops are hard to read.',
        'A while loop must contain something that can change the condition, or it never ends.',
        'Nested loops: an inner loop completes fully for every single pass of the outer loop — for a 3×4 nest the inner body runs 12 times.',
        'Trace questions: build a trace table, one row per iteration, and write the output column as it happens.'
      ],
      terms: [
        { t: 'Count-controlled loop', d: 'A loop that repeats a known, fixed number of times (for).' },
        { t: 'Condition-controlled loop', d: 'A loop that repeats while a condition remains True (while).' },
        { t: 'Infinite loop', d: 'A loop whose condition never becomes False, so the program never continues.' },
        { t: 'match/case', d: 'A selection structure comparing one value against several defined patterns, available from Python 3.10.' }
      ],
      exam: [
        { marks: 4, q: 'A program must keep asking for a password until the correct one is entered. Explain why a while loop is used rather than a for loop, and what must be inside it.',
          a: 'The number of attempts is not known before the program runs, so a condition-controlled while loop is used — it repeats until the condition (password incorrect) becomes False (2). Inside the loop the program must ask for input again and update the variable being tested, otherwise the condition never changes and the loop becomes infinite (2).' }
      ]
    },
    {
      id: '2.7', title: 'Functions and procedures',
      must: [
        'Function — a named, reusable block of code that may take parameters and must return a result.',
        'Procedure — a named, reusable block that may take parameters and does not return a result (in Python both are written with def; a procedure simply has no return).',
        'Parameter = the variable in the definition; argument = the actual value passed in when it is called.',
        'Sources of code: user-written; pre-written built into the language (print, len, round); pre-written in the language\'s standard libraries (math, random, datetime); pre-written third-party libraries (pandas, matplotlib).',
        'Benefits of pre-written code: faster development, already tested and debugged by many users, written by specialists, well documented, maintained and updated.',
        'Drawbacks of pre-written code: may contain more functionality than needed (bloat), you rely on a third party for updates and security, licensing restrictions/cost, may not exactly fit the requirement, introduces a dependency and a possible supply-chain security risk.',
        'Benefits of writing your own functions: no repeated code, one place to fix a bug, easier to test each piece, code is readable, work can be shared out in a team.',
        'Return a value rather than printing inside the function when the caller needs to use the result.'
      ],
      terms: [
        { t: 'Function', d: 'A named reusable block of code that may take parameters and returns a result.' },
        { t: 'Procedure', d: 'A named reusable block of code that may take parameters but returns no result.' },
        { t: 'Parameter', d: 'A named variable in a function definition that receives a value when the function is called.' },
        { t: 'Argument', d: 'The actual value passed into a function when it is called.' },
        { t: 'Library', d: 'A collection of pre-written functions that can be imported and reused in a program.' }
      ],
      exam: [
        { marks: 6, q: 'A developer must decide between writing their own date-formatting code and importing a standard library. Evaluate this decision.',
          a: 'Using the library is faster to implement, freeing time for the parts of the brief that are unique to the client. The library has been tested by a very large number of users so it is likely to contain fewer defects than newly written code, and it handles edge cases such as leap years and time zones that are easy to get wrong. Against this, the library may add functionality that is never used, the developer becomes dependent on the maintainer for security patches, and the licence must permit commercial use. Writing custom code gives complete control and no dependency, but takes development time and must be fully tested. For a standard, well-solved problem such as date formatting the library is the better choice; bespoke code is justified only where the requirement is unusual or the licence is unacceptable.' }
      ]
    },
    {
      id: '2.8', title: 'Validation',
      must: [
        'Validation = automated checks that data entered is sensible and in the expected form. It cannot prove the data is correct — only verification can do that.',
        'Presence check — a value has actually been entered (field not blank).',
        'Length check — the data has an acceptable number of characters, e.g. a password of at least 8.',
        'Range check — a number falls between defined limits, e.g. 1–31 for a day.',
        'Type check — the data is the right data type, e.g. the age entered is an integer.',
        'Format check — the data matches a required pattern, e.g. a postcode or an email containing @ and a domain.',
        'Check digit — an extra digit calculated from the others and appended, used to detect transcription/transposition errors in barcodes, ISBNs and account numbers.',
        'Validation should be applied at the point of entry and should output a specific, meaningful error message and re-prompt rather than crashing.',
        'Validation also matters for security: unvalidated input allows SQL injection and buffer overflow attacks.'
      ],
      terms: [
        { t: 'Validation', d: 'Automated checking that entered data is reasonable and in the expected form.' },
        { t: 'Presence check', d: 'A validation check that a required field has not been left empty.' },
        { t: 'Range check', d: 'A validation check that a numeric value lies between defined minimum and maximum limits.' },
        { t: 'Format check', d: 'A validation check that data matches a required pattern or template.' },
        { t: 'Check digit', d: 'A digit calculated from the other digits and added to a code so entry errors can be detected.' },
        { t: 'Verification', d: 'Checking that data entered matches the original source, e.g. by double entry or visual comparison.' }
      ],
      exam: [
        { marks: 4, q: 'A booking form collects an email address and the number of tickets (1–6). Identify a suitable validation check for each and explain what it prevents.',
          a: 'Email address — a format check that the entry contains an @ symbol and a domain (1); this prevents an unusable address being stored so confirmation emails do not fail (1). Number of tickets — a range check that the value is between 1 and 6 inclusive (1); this prevents a zero, negative or oversized booking being accepted, which would corrupt the seat count (1).' },
        { marks: 3, q: 'Explain the difference between validation and verification.',
          a: 'Validation checks that data is sensible and of the right form, for example that a date is in range (1). Verification checks that the data actually matches the original source, for example by asking the user to enter their email twice or comparing against a paper form (1). Validation cannot detect a correctly formatted but wrong value, such as a valid date that is not the customer\'s real date of birth — only verification can (1).' }
      ]
    },
    {
      id: '2.9', title: 'Design considerations and programming practices',
      must: [
        'Actions must be in a logical order — a value must be input and validated before it is used in a calculation.',
        'Order of operations must be controlled with brackets so calculations are accurate and errors avoided.',
        'Choose data structures for efficiency of execution time and of memory: a dictionary lookup by key is far faster than searching a long list; an array of one type uses less memory than a mixed list.',
        'Order actions for efficiency: test the condition most likely to fail first, filter a dataset before sorting it, avoid recalculating the same value inside a loop.',
        'Naming conventions: meaningful names (total_price not tp), camelCase (firstName), snake_case (first_name — the Python convention). Be consistent throughout.',
        'Readability is affected by naming, use of white space/blank lines and indentation, and keeping lines to a maximum length so no horizontal scrolling is needed.',
        'Judging an algorithm: does it meet the requirements, is it efficient in storage and execution time, are the data structures/types/variables/constants appropriate, is it presented clearly and is it maintainable?',
        'These are exactly the bullets the ESP Task 4a "code organisation" marks are awarded against — learn them as a checklist.'
      ],
      terms: [
        { t: 'camelCase', d: 'A naming convention where the first word is lower case and each following word starts with a capital, e.g. totalPrice.' },
        { t: 'snake_case', d: 'A naming convention where words are lower case and separated by underscores, e.g. total_price. The Python standard.' },
        { t: 'Maintainability', d: 'How easily code can be understood, corrected and extended by another developer later.' },
        { t: 'Efficiency', d: 'How well a solution uses execution time and memory.' }
      ],
      exam: [
        { marks: 6, q: 'A program searches a list of 50,000 customer records by customer ID on every transaction. Discuss how the choice of data structure affects efficiency.',
          a: 'With an unsorted list the program must use a linear search, checking each record until a match is found, averaging 25,000 comparisons and 50,000 in the worst case — with many transactions this makes the program noticeably slow. Sorting the list allows a binary search, roughly 16 comparisons, but the list must be kept sorted, which costs time on every insertion. A dictionary keyed on customer ID retrieves the record directly by key, so lookup time barely increases with size; the trade-off is higher memory use. For frequent lookups by a unique ID the dictionary is the most efficient choice; a plain list would only be acceptable for a small dataset or where the data is always processed in full.' }
      ]
    },
    {
      id: '2.10', title: 'Robust code and debugging',
      must: [
        'Robust code: handles unexpected inputs, handles unexpected terminations, and produces specific and meaningful error messages.',
        'Techniques: validate all input, use try/except to catch errors such as ValueError, ZeroDivisionError and FileNotFoundError, provide default values, and save/close resources safely.',
        'A meaningful error message tells the user what was wrong and what to do: "Enter a whole number between 1 and 6" — not "Error 5" and not a raw stack trace (which can also leak system information to an attacker).',
        'Debugging = locating errors in code and correcting them.',
        'Error types: syntax errors (code will not run — missing colon, unclosed bracket), runtime errors (crash during execution — dividing by zero, converting "abc" to int), logic errors (runs but gives the wrong answer — wrong operator, off-by-one, wrong order).',
        'Logic errors are the hardest to find because there is no error message: use trace tables, print statements, and an IDE debugger with breakpoints and watch/step-through.',
        'Debugging role: it is what turns working-in-the-happy-path code into robust code that survives real users and real data.'
      ],
      terms: [
        { t: 'Robust', d: 'Describes code that copes with unexpected input and conditions without crashing.' },
        { t: 'Syntax error', d: 'A breach of the rules of the language that prevents the program from running.' },
        { t: 'Runtime error', d: 'An error occurring while the program executes, causing it to crash.' },
        { t: 'Logic error', d: 'An error where the program runs but produces an incorrect result.' },
        { t: 'Exception handling', d: 'Using try/except to catch an error at run time and respond to it gracefully.' },
        { t: 'Breakpoint', d: 'A marker set in an IDE that pauses execution so variable values can be inspected.' }
      ],
      exam: [
        { marks: 4, q: 'A program crashes when the user types "ten" at a prompt asking for a number. Explain how the program could be made robust.',
          a: 'Wrap the conversion in a try/except block so the ValueError raised by int() is caught instead of terminating the program (2). In the except branch display a specific message such as "Please enter a whole number" and loop back to ask again, so the user can recover without restarting and no data already entered is lost (2).' }
      ]
    },
    {
      id: '2.11', title: 'Common algorithms: searching and sorting',
      must: [
        'Linear search: check each item from the start until the target is found or the end is reached. Works on unsorted data. Best case 1 comparison, worst case n, average n/2.',
        'Binary search: requires sorted data. Check the middle item; if the target is smaller search the left half, if larger the right half; repeat, halving the search space each time. Worst case ≈ log2(n) comparisons — 50,000 items in about 16 checks.',
        'Linear vs binary: linear is simple and needs no sorting but is slow on large data; binary is far faster but the data must be sorted first and kept sorted, which costs time.',
        'Bubble sort: repeatedly compare adjacent pairs and swap if out of order; the largest value "bubbles" to the end each pass. Simple to code, very slow on large lists; efficient only on nearly-sorted data (with an early-exit flag).',
        'Insertion sort: take each item in turn and insert it into its correct place among the items already sorted. Efficient for small or nearly-sorted lists, and can sort data as it arrives.',
        'Merge sort: divide the list in half repeatedly until single items remain, then merge the sorted halves back together. Much faster on large lists and its performance is consistent, but it uses extra memory for the temporary lists and is harder to implement.',
        'Metrics for comparing algorithms: use of memory space, execution time, and number of comparisons.',
        'Best/worst/average case reasoning (Big O notation is NOT required): e.g. bubble sort best case is an already-sorted list (one pass with no swaps), worst case is a list in reverse order.'
      ],
      terms: [
        { t: 'Linear search', d: 'Checking each item in turn from the start until the target is found or the list ends.' },
        { t: 'Binary search', d: 'Repeatedly halving a sorted list by comparing with the middle item until the target is found.' },
        { t: 'Bubble sort', d: 'Repeatedly comparing and swapping adjacent items so the largest moves to the end on each pass.' },
        { t: 'Insertion sort', d: 'Building a sorted section by taking each item and inserting it into its correct position.' },
        { t: 'Merge sort', d: 'A divide-and-conquer sort that splits the list down to single items and merges sorted sub-lists back together.' },
        { t: 'Worst case', d: 'The input arrangement that causes an algorithm to perform the maximum amount of work.' }
      ],
      exam: [
        { marks: 6, q: 'A system holds 2 million product codes that are searched constantly but updated once a night. Justify the most suitable search algorithm.',
          a: 'Binary search is most suitable. It halves the remaining data with every comparison, so 2 million records are searched in around 21 comparisons, whereas a linear search would average 1 million — with constant searching this difference dominates performance. Binary search requires the data to be sorted, which is normally its main drawback, but here the data is only updated once a night so the list can be sorted in the overnight batch and stays sorted all day. The sort cost is therefore paid once rather than per search, making binary search clearly the better choice.' },
        { marks: 4, q: 'Explain one benefit and one drawback of merge sort compared with bubble sort.',
          a: 'Benefit: merge sort divides the data and merges sorted halves, so the number of comparisons grows far more slowly as the list grows — on a large dataset it completes in a fraction of the time bubble sort takes (2). Drawback: merge sort creates temporary sub-lists so uses considerably more memory, and it is harder to implement and debug than bubble sort, which needs only a nested loop and a swap (2).' }
      ]
    },
    {
      id: '2.12', title: 'Testing',
      must: [
        'Test individual components before integrating them — software, hardware, data, interfaces and the resulting service — because a defect is far cheaper and easier to locate in one small component than in an assembled system.',
        'Testing methods: concept (is the idea viable?), unit (one module), boundary (values at the edge of an accepted range), integration (modules working together), performance (speed/responsiveness), system (whole system against the spec), acceptance (client signs off against requirements), usability (real users can complete tasks), regression (existing features still work after a change), load/stress (behaviour under heavy or excessive demand).',
        'Closed box (black box) testing: tester sees only inputs and outputs, not the code — tests against requirements. Open box (white box) testing: tester can see the code and tests the internal paths and logic.',
        'Automation: macros (record and replay repeated actions), scripts (code that runs test sequences unattended), functional testing tools (frameworks that run large test suites and report failures). Benefits: fast, repeatable, no human error, run overnight; drawbacks: cost and time to set up, must be maintained, cannot judge usability.',
        'Test data types: valid (normal accepted data), invalid (rejected data), boundary/extreme (values on the limits, e.g. 0 and 100 for 1–99), erroneous (wrong data type entirely, e.g. letters in an age field).',
        'A test plan contains: the test to be carried out, its purpose, the test data used, the expected result, the actual result, and any further action required.',
        'Always test the boundary values — most defects live at the edge of a range (using > where >= was needed).',
        'This topic is directly assessed in ESP Task 2, where the test documentation is worth marks in its own right.'
      ],
      terms: [
        { t: 'Unit testing', d: 'Testing an individual module or function in isolation.' },
        { t: 'Integration testing', d: 'Testing that separately developed modules work correctly when combined.' },
        { t: 'Regression testing', d: 'Re-running earlier tests after a change to confirm existing functionality still works.' },
        { t: 'Closed box testing', d: 'Testing based only on inputs and expected outputs, without access to the source code.' },
        { t: 'Open box testing', d: 'Testing with knowledge of the internal code structure, to exercise specific paths.' },
        { t: 'Boundary test data', d: 'Values at the very edge of an acceptable range, used to check limit conditions.' },
        { t: 'Erroneous test data', d: 'Data of a completely inappropriate type that the system should reject.' },
        { t: 'Acceptance testing', d: 'Testing carried out with or for the client to confirm the solution meets the agreed requirements.' }
      ],
      exam: [
        { marks: 4, q: 'A field accepts an integer age between 18 and 65. Give one example each of valid, boundary, invalid and erroneous test data.',
          a: 'Valid: 40 — inside the range and should be accepted (1). Boundary: 18 (or 65) — the exact limit, should be accepted (1). Invalid: 17 (or 66) — correct type but outside the range, should be rejected with a message (1). Erroneous: "twenty" — wrong data type entirely, should be rejected without crashing (1).' },
        { marks: 6, q: 'Explain why regression testing is carried out and the risk of omitting it.',
          a: 'Regression testing re-runs previously passed tests after code has been changed. It is carried out because a fix or new feature can have unintended side effects — shared functions, changed data structures or altered validation can break behaviour elsewhere that was previously working. Without it, the team only tests the new change, so a defect introduced in an untouched area reaches the client, damaging confidence and costing far more to fix in live use than during development. Automating the regression suite makes it practical to re-run the full set of tests on every release.' }
      ]
    }
  ]
},

/* ───────────────────────── Content area 3 ───────────────────────── */
{
  id: 'ca3', num: 3, paper: 1, title: 'Emerging issues and impact of digital',
  blurb: 'Impact of digital technology on organisations, society and individuals, digital inclusion, and emerging technologies. Question style: extended "discuss/evaluate the impact" answers — you need both positives and negatives plus a judgement.',
  topics: [
    {
      id: '3.1', title: 'Impact of digital technologies',
      must: [
        'Impact on organisational culture: communication shifts (face to face → email, instant messaging, video calls); higher productivity and always-available expectations; more staff monitoring; new working practices (remote, hybrid, in-office); automation of services including AI.',
        'Impact on society — negatives: job losses through automation, shift in required skills, reduced human decision-making and loss of empathy, privacy loss (digital footprint, surveillance), changing behaviour (loss of social skills, digital identity), isolation for those lacking skills, equipment or connectivity.',
        'Impact on society — positives: access to wider personal and professional social networks, access to online government/commercial/entertainment services, improved access to information, globalisation and access to global media.',
        'Generative AI (text, image, video, audio) is explicitly named in the spec — expect questions on its impact on jobs, on accuracy/bias, and on ethics.',
        'Digital inclusion = ensuring fair access to digital services: suitable hardware and software, connectivity, checking datasets for bias, following codes of best practice, and complying with the public sector bodies\' website and mobile applications accessibility regulations.',
        'Those regulations require public sector sites/apps to meet accessibility standards (WCAG) and publish an accessibility statement.',
        'End user characteristics affecting inclusivity: age; digital skills and literacy; internal vs external audience; cultural issues including bias in digital systems; additional needs and accessibility requirements (screen readers, contrast, captions, keyboard-only navigation).',
        'Benefits of continuing professional development: greater industry and sector competence, better employability and job security, and access to and adherence to industry standards.'
      ],
      terms: [
        { t: 'Digital inclusion', d: 'Ensuring everyone has fair access to, and the ability to use, digital services.' },
        { t: 'Digital footprint', d: 'The trail of data left behind by a person\'s online activity.' },
        { t: 'Accessibility', d: 'Designing systems so that people with disabilities or additional needs can use them.' },
        { t: 'Bias in datasets', d: 'Unrepresentative training data that causes a system to produce unfair outcomes for some groups.' },
        { t: 'Generative AI', d: 'AI that produces new content — text, images, audio or video — from a prompt.' },
        { t: 'CPD', d: 'Continuing professional development — ongoing training that maintains and extends professional competence.' }
      ],
      exam: [
        { marks: 9, q: 'A local council is moving all its services online. Evaluate the impact of this on the residents it serves.',
          a: 'Benefits: residents can access services 24/7 without travelling to an office, which suits shift workers and those with mobility difficulties; transactions are processed faster with automated validation reducing errors; the council saves money that can be redirected to services; information is easier to find and update. Drawbacks: residents without connectivity, a device or the digital skills to use one are excluded, and this correlates with age, disability and low income — the very groups most likely to need council services; loss of face-to-face contact reduces the ability to explain complex individual circumstances; a system outage removes access entirely; more personal data is held online, increasing the impact of a breach. Mitigations: retain a phone and in-person route, meet the public sector accessibility regulations so screen readers and keyboard navigation work, test with real users of differing ages and abilities, and provide support in libraries. Judgement: moving online is justified by the cost and convenience gains, but only if a non-digital route is retained, because otherwise the council excludes residents it has a statutory duty to serve.' }
      ]
    },
    {
      id: '3.2', title: 'Emerging technologies',
      must: [
        'Storage media — demand keeps rising (video, IoT telemetry, AI training data), driving cloud storage and higher-capacity solid state media.',
        'Processing — quantum computing: uses qubits to solve certain problems (optimisation, simulation, cryptography) far faster; a future threat to current encryption; still expensive and experimental.',
        'Internet of Things (IoT): everyday objects with sensors and network connections. Edge computing processes data on or near the device instead of sending it to the cloud, reducing latency and bandwidth. Contexts: industrial (predictive maintenance), smart city (traffic, air quality), domestic (thermostats, cameras).',
        'AI: machine learning (systems that improve from data) and generative AI. Impacts: automation of routine work, faster analysis, personalisation; risks include bias, inaccuracy/hallucination, lack of explainability, job displacement and data protection issues.',
        'Extended reality: augmented reality overlays digital content on the real world; virtual reality replaces it entirely. Used in training, retail, design and healthcare.',
        'Open source software: source code is publicly available and modifiable. Benefits: no licence cost, community support, code can be inspected for security, no vendor lock-in. Drawbacks: no guaranteed support contract, variable documentation, licence obligations, may need in-house expertise.',
        'Blockchain: a distributed, append-only ledger where each block is cryptographically linked to the previous one, making records tamper-evident. Used for cryptocurrency, supply chain traceability and smart contracts. Drawbacks: energy use, transaction speed, complexity.',
        'Environmental impact: consumption of rare metals, energy used to manufacture electronics, and the environmental cost of disposal (WEEE/e-waste).',
        'Autonomous machines: self-driving vehicles and robotic assembly lines — raise safety, liability and employment questions.',
        'Judgement questions: link the technology to the specific organisation in the scenario, weigh benefits against risks/costs, and conclude.'
      ],
      terms: [
        { t: 'Internet of Things (IoT)', d: 'Networked everyday devices with sensors that collect and exchange data.' },
        { t: 'Edge computing', d: 'Processing data at or near the device that generated it rather than in a central cloud.' },
        { t: 'Machine learning', d: 'A subset of AI where systems improve their performance by learning patterns from data.' },
        { t: 'Augmented reality', d: 'Technology overlaying computer-generated content onto a view of the real world.' },
        { t: 'Blockchain', d: 'A distributed, append-only ledger of cryptographically linked records that is resistant to tampering.' },
        { t: 'Open source software', d: 'Software whose source code is freely available to view, modify and redistribute under its licence.' },
        { t: 'Quantum computing', d: 'Computing using qubits that can represent multiple states, suited to certain very large problems.' }
      ],
      exam: [
        { marks: 6, q: 'A logistics company is considering fitting IoT sensors to its delivery vans. Discuss the benefits and drawbacks.',
          a: 'Benefits: sensors report location, fuel use and engine condition in real time, so routes can be optimised to cut fuel costs and customers can be given accurate delivery windows; predictive maintenance from vibration and temperature data reduces breakdowns and off-road time. Using edge computing, only exceptions are transmitted, reducing mobile data costs and latency. Drawbacks: significant upfront cost for hardware and installation; the data is personal data about drivers, so monitoring raises privacy concerns and must comply with the DPA/UK GDPR; each connected device widens the attack surface and insecure IoT devices are a known target; the company becomes dependent on connectivity and on the supplier for firmware updates. On balance the fuel and maintenance savings usually justify the investment, provided device hardening, update policies and a clear staff monitoring policy are in place.' }
      ]
    }
  ]
},

/* ───────────────────────── Content area 4 ───────────────────────── */
{
  id: 'ca4', num: 4, paper: 1, title: 'Legislation and regulatory requirements',
  blurb: 'Legislation, codes of conduct and industry standards. Mostly recall marks — this is the cheapest content area to bank if you learn the lists.',
  topics: [
    {
      id: '4.1', title: 'Legislation',
      must: [
        'Health and Safety at Work Act — key points: provide a safe working environment; ensure staff are properly trained; adequate welfare provision; provide relevant information, instruction and supervision; display screen equipment (DSE) requirements.',
        'Employer implications for DSE: carry out a workstation assessment, reduce risks including ensuring workers take breaks from screen work, provide an eye test on request, and provide training and information.',
        'Digital health and safety risks: eye strain, RSI, back/posture problems, trailing cables, overloaded sockets. Mitigations: adequate training, safe working environment (adjustable chair, monitor at eye level, cable management), safe working practices (regular breaks, correct posture).',
        'Data Protection Act / UK GDPR — protects personal data. Principles: processed lawfully, fairly and transparently; used for a specified, explicit purpose; adequate, relevant and limited to what is necessary (data minimisation); accurate and kept up to date; kept no longer than necessary; processed securely (integrity and confidentiality); with accountability on the controller; and restrictions on transfer outside the UK/EEA without adequate protection.',
        'Individual rights include: to be informed, of access (subject access request), to rectification, to erasure, to restrict processing, to data portability, and to object.',
        'Effects: organisations must appoint responsible people, keep records, report serious breaches to the ICO within 72 hours, and can face very large fines; individuals gain control over their data.',
        'Computer Misuse Act 1990 — three main offences: unauthorised access to computer material; unauthorised access with intent to commit a further offence; unauthorised modification of computer material (plus later provisions on making/supplying hacking tools and serious damage).',
        'CMA consequences: fines and imprisonment for the employee, plus reputational damage, legal costs and loss of contracts for the company. Employers should ensure employee awareness through AUPs and training.',
        'Equality Act — nine protected characteristics: age, disability, gender reassignment, marriage and civil partnership, pregnancy and maternity, race, religion or belief, sex, sexual orientation.',
        'Four types of discrimination: direct, indirect, harassment, victimisation. Individuals are protected at work, in education, when using services and as consumers. Employment tribunal claims normally must be made within three months less one day.',
        'Intellectual property: copyright (automatic, protects the expression — including source code); registered designs (protect appearance, must be applied for); unregistered designs (automatic but shorter and weaker protection); patents (protect a novel invention/technical process, must be applied for, expensive, published); trade marks (brand identifiers).',
        'International law applies to some offences — international law in cyberspace and international law on surveillance; cybercrime frequently crosses borders, which complicates enforcement.'
      ],
      terms: [
        { t: 'Personal data', d: 'Any information relating to an identified or identifiable living individual.' },
        { t: 'Data minimisation', d: 'The principle that only data that is adequate, relevant and necessary for the stated purpose is collected.' },
        { t: 'Subject access request', d: 'A request by an individual for a copy of the personal data an organisation holds about them.' },
        { t: 'Computer Misuse Act 1990', d: 'UK law making unauthorised access to, and unauthorised modification of, computer material a criminal offence.' },
        { t: 'Indirect discrimination', d: 'A policy applied to everyone that puts people sharing a protected characteristic at a particular disadvantage.' },
        { t: 'Patent', d: 'A registered right protecting a novel invention or technical process for a limited period.' },
        { t: 'Copyright', d: 'An automatic right protecting the expression of an original work, including source code.' },
        { t: 'DSE assessment', d: 'A workstation assessment of display screen equipment required of employers under health and safety law.' }
      ],
      exam: [
        { marks: 6, q: 'An employee uses a colleague\'s login to read the payroll file out of curiosity and then changes their own recorded overtime. Explain which legislation applies and the possible consequences.',
          a: 'The Computer Misuse Act 1990 applies. Using another person\'s credentials to read the payroll file is unauthorised access to computer material (1). Altering the overtime record is unauthorised modification of computer material, a more serious offence (1). Data protection legislation is also engaged because payroll contains personal data being processed without a lawful basis, so the organisation may have to report a breach to the ICO (1). Consequences for the employee: dismissal for gross misconduct, prosecution, a fine and possible imprisonment (1). Consequences for the organisation: regulatory action and fines for inadequate access controls, reputational damage and loss of staff trust (1), and it would be expected to show it had an acceptable use policy and training in place to demonstrate employee awareness (1).' },
        { marks: 4, q: 'Explain two ways a software company can protect its intellectual property.',
          a: 'Source code is automatically protected by copyright as soon as it is written, so the company can take civil action against anyone copying or distributing it without a licence; adding a licence file and copyright notice makes ownership clear (2). A genuinely novel technical process within the software can be protected by applying for a patent, which prevents competitors implementing the same invention for the term of the patent, although it is costly and requires the invention to be published (2).' }
      ]
    },
    {
      id: '4.2', title: 'Guidelines, codes of conduct and standards',
      must: [
        'Codes of conduct come from three sources: organisational (the employer\'s own), professional (BCS, IAP, CIISec), and governmental.',
        'BCS = British Computer Society (Chartered Institute for IT); IAP = Institution of Analysts and Programmers; CIISec = Chartered Institute of Information Security.',
        'How codes of conduct influence behaviour: they ensure individuals follow policies, procedures and legislation; ensure quality of work by minimising risk to the public and requiring competence and integrity; require deadlines to be met, effective communication, and confidentiality and trust to be maintained.',
        'Industry standards: ISO (International Organization for Standardization), WCAG (Web Content Accessibility Guidelines), W3C (World Wide Web Consortium), IETF (Internet Engineering Task Force), BS (British Standard), IEEE (Institute of Electrical and Electronics Engineers), PCI SSC (Payment Card Industry Security Standards Council).',
        'PCI DSS applies to anyone handling card payments — you must know it exists if the scenario involves payments.',
        'Acceptable use policy (AUP): sets out permitted activities, prohibited activities, working practices including confidentiality, communication etiquette (projecting the correct organisational image), and the sanctions/penalties for breaching it.',
        'Whistleblowing procedures allow staff to report wrongdoing (illegal, unsafe or unethical practice) confidentially and without fear of reprisal; without them problems stay hidden until they cause harm.',
        'Judgement questions: link a specific code/standard to the scenario — e.g. a public sector website must meet WCAG under the accessibility regulations; a payment feature must meet PCI DSS.'
      ],
      terms: [
        { t: 'Code of conduct', d: 'A set of rules setting out the professional behaviour expected of members or employees.' },
        { t: 'BCS', d: 'The British Computer Society, the chartered professional body for IT in the UK.' },
        { t: 'WCAG', d: 'Web Content Accessibility Guidelines — the standard for making web content accessible.' },
        { t: 'Acceptable use policy', d: 'A policy defining permitted and prohibited use of an organisation\'s IT systems and the penalties for misuse.' },
        { t: 'Whistleblowing', d: 'Reporting wrongdoing within an organisation through a protected, confidential procedure.' },
        { t: 'ISO', d: 'The International Organization for Standardization, which publishes international standards including for IT and quality.' }
      ],
      exam: [
        { marks: 4, q: 'Explain why an organisation would introduce an acceptable use policy in addition to relying on the law.',
          a: 'The law sets out only what is criminal; an AUP defines the organisation\'s own expectations, such as what personal use of email is permitted and how staff must represent the company online (2). It makes staff aware of what is prohibited and states the sanctions, so the organisation can take disciplinary action and can demonstrate it took reasonable steps to prevent misuse if an incident occurs (2).' }
      ]
    }
  ]
}

];
