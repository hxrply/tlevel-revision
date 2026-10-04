/* Catch-up — condensed recovery sections for the plan days that were missed.
   Each day is designed to be recoverable in 15-25 minutes instead of the full
   hour: the facts that carry marks, the confusions that cost them, and a short
   written question set. Questions are numbered continuously with the tutor
   notes so the marking record stays in one sequence.

   Written for working away from a computer: the question text is self-contained
   and there is a text export, so a day can be printed or read on a phone. */

window.TLDATA = window.TLDATA || {};

window.TLDATA.catchup = {
  intro: 'Everything from Day 17 onward, compressed. A missed day is recoverable in about twenty minutes here rather than the full hour: the facts that actually carry marks, the confusions that cost them, and five written questions. Do the reading, do the checkpoint from memory, then write the questions on paper and send them to be marked.',
  howto: 'Order matters. Read the core section once. Close it and do the checkpoint from memory - that retrieval step is what moves material, and skipping it is what produced a 0 out of 2 on the business sectors twenty minutes after reading the table. Then write the questions. Reveal a model answer only after you have written something, even if what you write is wrong.',

  days: [

    {
      day: 17, plan: 'Week 3, Day 3', title: 'Change management', area: '5.4 part 2', mins: 25,
      why: 'The single most examined sub-topic on Paper 2. The four implementation methods come up almost every series, and they are marked on the trade-off, not the definition.',
      core: [
        { h: 'The four implementation methods - learn the trade-off, not the name',
          b: [
            'Direct (big bang): old system off, new system on at one point in time. Cheapest and fastest; but there is no fallback, so a failure stops the business.',
            'Parallel: both systems run together until confidence is gained. Safest - outputs can be compared and the old system is a fallback; but it doubles workload and cost because everything is entered twice.',
            'Phased: introduced module by module. Problems are contained to one module and staff learn gradually; but it takes longer and the two systems must interoperate throughout the transition.',
            'Pilot: the complete system in one site or department first. Real-world proof at limited risk, and it creates trained super-users for the wider rollout; but rollout is slower and the pilot site may not represent everywhere else.'
          ] },
        { h: 'How to answer a choose-the-method question',
          b: [
            'Name the method, say why it fits this scenario, then say why one named alternative is worse. Three moves.',
            'Look for the risk level in the scenario. Safety-critical or legally critical data (hospital, bank, payroll) rules out direct changeover every time.',
            'A strong answer often combines two: a pilot followed by a phased rollout, with a tested rollback plan.'
          ] },
        { h: 'The change management process',
          b: [
            'Identify the type of change (new system or amendment) - define it with SMARTER objectives - identify the impact - allocate resources (budget, time, staffing, hardware and software) - communicate risks and desired impacts to stakeholders to gain acceptance - configure the system including integration with legacy systems - fully test it in an environment mirroring live - implement - document - plan rollback - identify training needs - monitor with a post-implementation review.',
            'SMARTER = Specific, Measurable, Achievable, Realistic, Time-bound, Evaluated, Reviewed.',
            'Change advisory board (CAB): prioritises and reviews change requests, runs the approval stages, monitors the change process and provides feedback.',
            'Rollback planning has three parts: backup methodology, backup location, and a recovery plan.'
          ] },
        { h: 'Feasibility of a digital project',
          b: [
            'Benefits and drawbacks: financial savings, cost of the change, impact on processes such as productivity and security, new products, reputation.',
            'Risks: workforce resistance to change, misuse of new systems, inadequate support or knowledge, disruption during implementation.',
            'Constraints: budget, time, human and technological resources.'
          ] }
      ],
      traps: [
        'Rollback is change management. Regression testing is re-running old tests on new code. These are different topics on different papers.',
        'Parallel running is the safest method but it is not the right answer to every question - it doubles the data entry workload, which can be decisive where staff are already stretched.',
        'A pilot is the whole system in one place. Phased is part of the system everywhere. People swap these constantly.'
      ],
      check: 'Write the four implementation methods with one advantage and one disadvantage each, then SMARTER in full.',
      qs: [
        { n: 62, marks: 2, cmd: 'State', q: 'State what each letter of SMARTER stands for.',
          a: 'Specific, Measurable, Achievable, Realistic, Time-bound, Evaluated, Reviewed.' },
        { n: 63, marks: 4, cmd: 'Explain', q: 'Explain one advantage and one disadvantage of parallel implementation.',
          a: 'Advantage: both systems run at the same time, so outputs can be compared to prove the new system produces the same results, and the old system remains available as a fallback if the new one fails (2). Disadvantage: every transaction must be entered into both systems, which doubles the workload and staffing cost for the duration, and the two sets of data can drift apart if an entry is missed from one (2).' },
        { n: 64, marks: 3, cmd: 'State', q: 'State three things a rollback plan must cover.',
          a: 'The backup methodology (how backups are taken and how often); the backup location (where copies are held, including offsite); and the recovery plan (the procedure for reverting to the previous system without data loss).' },
        { n: 65, marks: 4, cmd: 'Explain', q: 'Explain two risks when implementing a new digital system, and how each can be reduced.',
          a: 'Workforce resistance: staff may fear job losses or resent extra workload during transition, and resistant staff work around the new system or enter data poorly, undermining data quality (1). Reduce it by communicating the reasons and benefits early, involving staff in requirements gathering, and providing training matched to identified needs (1). Disruption during implementation: service may degrade while systems are switched over, costing sales or clinical capacity (1). Reduce it with a phased or pilot approach, a change window outside peak hours, and a tested rollback plan so a failed change can be reversed (1).' },
        { n: 66, marks: 9, cmd: 'Evaluate', q: 'A hospital is replacing its patient records system. Evaluate the most appropriate implementation method.',
          a: 'Direct changeover is cheapest and quickest but unacceptable here: if the new system fails there is no fallback and clinicians cannot access patient records, which is a direct risk to patient safety. Parallel running keeps the old system available and lets outputs be compared for accuracy, a strong safeguard for critical data, but every record must be entered twice, doubling clinical admin workload in an already pressured environment and risking divergence between the two systems. Phased implementation introduces appointments first, then prescribing, then records; problems stay contained to one module and staff learn gradually, but the old and new systems must exchange data across a long transition, which is technically complex. Pilot implementation runs the full system in one ward, giving real-world evidence at limited risk and creating trained super-users to support the wider rollout. Judgement: a pilot followed by a phased rollout is most appropriate, because it limits risk to patients while still proving the complete system before the hospital depends on it, provided a tested rollback plan and full backups are in place.' }
      ]
    },

    {
      day: 18, plan: 'Week 3, Day 4', title: 'Data, information and data types', area: '6.1 and 6.2', mins: 20,
      why: 'The data/information/knowledge ladder is a guaranteed short-answer question, and the structured versus unstructured distinction underpins the whole of area 6.',
      core: [
        { h: 'The ladder - learn it with one worked example',
          b: [
            'Data = raw, unprocessed facts with no context. Example: 37.',
            'Information = data processed and given context so it has meaning. Example: 37 orders were placed on Tuesday.',
            'Knowledge = information combined with experience and understanding, used to make a decision. Example: Tuesday order spikes follow the weekly email, so send the email on Mondays.',
            'Each rung adds something: context turns data into information, experience turns information into knowledge.'
          ] },
        { h: 'Sources of data and the value metrics',
          b: [
            'Sources: humans (surveys, forms); AI and machine learning - beware the feedback loop where AI-generated data trains the next model and amplifies errors and bias; sensors; and existing systems.',
            'Four metrics for the value of data: quantity (enough of it), timeframe (how current), source (how trustworthy the origin), veracity (how accurate and truthful it is).',
            'Ethical practice: collect only what is needed, be transparent, obtain consent, avoid bias, anonymise where possible, store securely, delete when no longer needed.'
          ] },
        { h: 'Transforming, and the quantitative/qualitative split',
          b: [
            'Three methods of transforming data: manipulating (changing form or arrangement - sorting, filtering, merging, reformatting), analysing (examining it to find patterns), processing (performing operations to produce a result).',
            'Quantitative = numeric, measurable, structured. Qualitative = descriptive or opinion-based, unstructured.',
            'Structured data has defined fields and a format (a database table) so it can be queried directly. Unstructured data (free text, images, audio, video) has no predefined model.',
            'Representations of quantitative data: discrete (whole countable values - number of orders), continuous (any value in a range, from measurement - 21.35 degrees), categorical (named groups - small, medium, large).'
          ] },
        { h: 'Data types in data systems',
          b: [
            'Integer, real, character, string, Boolean, date, and BLOB (binary large object - an image, audio or video file stored as binary).',
            'Why the choice matters: it affects storage size, whether arithmetic and sorting are possible, and what validation can be applied.',
            'The examined example: a date stored as a string cannot be sorted or compared correctly.'
          ] }
      ],
      traps: [
        'Information is not just more data - the added ingredient is context. Knowledge is not just more information - the added ingredient is experience and judgement.',
        'Veracity appears twice in area 6: as a value metric here and as one of the six Vs of big data. Same word, same meaning, two lists.',
        'Qualitative does not mean low quality. It means descriptive.'
      ],
      check: 'Write the three rungs of the ladder with your own example of each, then the four metrics for the value of data.',
      qs: [
        { n: 67, marks: 3, cmd: 'Explain', q: 'Explain the difference between data, information and knowledge, using one example that runs through all three.',
          a: 'Data is raw unprocessed fact with no context, such as the number 37 (1). Information is that data processed and given context so it means something, such as 37 orders were placed on Tuesday (1). Knowledge is information combined with experience and understanding so a decision can be made, such as recognising that Tuesday spikes follow the weekly marketing email and therefore moving the email to Monday (1).' },
        { n: 68, marks: 2, cmd: 'State', q: 'State the four metrics used to judge the value of data.',
          a: 'Quantity, timeframe, source, veracity.' },
        { n: 69, marks: 4, cmd: 'Explain', q: 'Explain the difference between structured and unstructured data, giving one example of each and one consequence of the difference.',
          a: 'Structured data has a defined format and fields, such as a table of customer records with name, date of birth and order total (1), so it can be searched, sorted and queried directly with SQL (1). Unstructured data has no predefined model - free-text customer feedback, images, audio (1) - so it must be stored as whole objects and needs processing such as text or image analysis before it can be queried, which costs more time and storage (1).' },
        { n: 70, marks: 3, cmd: 'Explain', q: 'A system stores dates of birth as strings. Explain two problems this causes.',
          a: 'Dates held as strings sort alphabetically rather than chronologically, so 01/12/2001 sorts before 02/01/1990 and any ordered report or age calculation is wrong (2). Arithmetic and comparison are also impossible without conversion, so the system cannot calculate an age or select everyone born before a given date, and no date-specific validation can be applied, letting impossible values such as 31/02 be stored (1).' },
        { n: 71, marks: 3, cmd: 'State', q: 'State the three representations of quantitative data and give one example of each.',
          a: 'Discrete - whole countable values, such as the number of orders placed. Continuous - any value within a range, obtained by measurement, such as a temperature of 21.35 degrees. Categorical - values falling into named groups, such as garment sizes small, medium and large.' }
      ]
    },

    {
      day: 19, plan: 'Week 3, Day 5', title: 'Formats, big data and data quality', area: '6.3 and 6.4', mins: 25,
      why: 'The six Vs and the five wrangling steps are both straight recall, and the format comparison question (JSON vs CSV vs XML) is a reliable four to six marks.',
      core: [
        { h: 'The four formats - know what each is for',
          b: [
            'JSON - key and value text format, nested, human-readable. The standard for APIs and web data exchange. Compact and easy to parse.',
            'CSV - comma-separated values, one record per line. Very small and universally supported, but has no data types, no nesting, and breaks if the data itself contains commas.',
            'XML - tags describing structured nested data. Self-describing and validatable against a schema, but verbose so files are larger than JSON.',
            'Plain text - simple, but with no structure a program can rely on.',
            'Choosing: CSV for bulk tabular data and analysis; JSON for API and web exchange and nested data; XML where a strict schema and validation are required.'
          ] },
        { h: 'Encoding and metadata',
          b: [
            'ASCII - 7 or 8-bit encoding, 128 characters, covers English letters, digits and control characters. Compact but cannot represent accented or non-Latin characters.',
            'UTF-8 - variable-width Unicode, can represent virtually every character in every language, and is backwards compatible with ASCII. The default whenever names or addresses go beyond English.',
            'Metadata = data about data: author, created date, file size, format, resolution, location. It provides context so files can be searched, sorted and managed.'
          ] },
        { h: 'Big data - the six Vs',
          b: [
            'Volume - how much. Variety - how many different types and sources. Variability - how much its meaning or flow changes over time. Velocity - how fast it arrives and must be processed. Veracity - how accurate and truthful it is. Value - what it is actually worth to the organisation.',
            'The impact of each is the second half of the question: high volume needs scalable storage such as a data lake; high variety needs flexible schemas; high velocity needs stream processing rather than batch; poor veracity means cleaning and validation before use.'
          ] },
        { h: 'Quality assurance and wrangling',
          b: [
            'QA methods: validation (data is sensible and in the right form), verification (it matches the original source), reliability (consistent results over repeated collection), consistency (the same value is the same everywhere).',
            'Data wrangling = transforming raw data into a usable form. Five steps: structure, clean, validate, enrich, publish.',
            'Factors affecting maintenance: time, skills, cost.',
            'Core functions of a data system: input, search, save, integrate, organise (index), output, feedback loop.'
          ] },
        { h: 'Data entry errors - the two named types',
          b: [
            'Transcription error: mis-reading or mis-typing a value, such as 5 for S.',
            'Transposition error: digits swapped, such as 3948 typed as 3489. The difference is always divisible by 9, which is how check digits catch them.',
            'Avoiding them: validation of input, verification by double entry, drop-down menus and pre-filled boxes - removing free typing removes most errors.'
          ] }
      ],
      traps: [
        'Validation checks data is plausible. Verification checks it matches the source. A valid date of birth can still be the wrong one.',
        'Variety and variability are different Vs. Variety is how many types; variability is how much it changes over time.',
        'Transposition is digits swapped. Transcription is mis-typing. The one with the 9 rule is transposition.'
      ],
      check: 'Write the six Vs, then the five wrangling steps in order, then the two named data entry errors with an example of each.',
      qs: [
        { n: 72, marks: 3, cmd: 'State', q: 'State the six Vs of big data.',
          a: 'Volume, variety, variability, velocity, veracity, value.' },
        { n: 73, marks: 4, cmd: 'Explain', q: 'A company must exchange nested order data with a partner over an API. Explain why JSON would be more suitable than CSV.',
          a: 'JSON stores data as nested key and value pairs, so an order containing several line items and a delivery address can be represented in one structure (1), whereas CSV is flat with one record per line and cannot express nesting without being split across multiple files (1). JSON is also the standard format for APIs and is parsed natively by most languages, reducing integration work (1). CSV additionally carries no data types, so numbers and dates arrive as text and must be converted, and it breaks if any field contains a comma (1).' },
        { n: 74, marks: 2, cmd: 'Explain', q: 'Explain why a system holding international customer names should use UTF-8 rather than ASCII.',
          a: 'ASCII has only 128 characters and cannot represent accented or non-Latin characters, so names would be corrupted or rejected (1). UTF-8 is variable-width Unicode able to represent virtually every character in every language, and is backwards compatible with ASCII so existing English data is unaffected (1).' },
        { n: 75, marks: 3, cmd: 'State', q: 'State the five steps of data wrangling, in order.',
          a: 'Structure, clean, validate, enrich, publish.' },
        { n: 76, marks: 4, cmd: 'Explain', q: 'Explain the difference between a transcription error and a transposition error, and state one way of reducing each.',
          a: 'A transcription error is mis-reading or mis-typing a value, such as entering 5 in place of S (1); it is reduced by replacing free typing with drop-down menus and pre-filled entry boxes so the value is selected rather than typed (1). A transposition error is digits swapped, such as 3948 entered as 3489 (1); the difference is always divisible by 9, so a check digit on the field detects it automatically, and verification by double entry also catches it (1).' }
      ]
    },

    {
      day: 20, plan: 'Week 3, Day 6', title: 'Visualisation, data models and access control', area: '6.5', mins: 20,
      why: 'Three separate list-based topics in one sub-area, and the access control acronyms (RBAC, RuBAC) are easy marks that candidates routinely drop.',
      core: [
        { h: 'Visualisation - format and audience',
          b: [
            'Graphs show relationships and trends over time. Charts show comparisons and proportions (bar, pie). Tables show exact values. Reports give detailed narrative plus figures. Dashboards give a live KPI overview. Infographics present a simple message to a general audience.',
            'Choose on three things: the type of data, the intended audience, and the brief.',
            'Worked matches: a dashboard suits a manager needing at-a-glance status; a table suits an accountant needing exact figures; an infographic suits the public.',
            'Drawbacks worth naming: pie charts with many segments are unreadable; dashboards oversimplify; infographics mislead through truncated axes; tables of raw numbers hide trends.'
          ] },
        { h: 'The three data models',
          b: [
            'Hierarchical: a tree with one-to-many parent and child links. Fast to traverse downwards and simple, but cannot represent many-to-many relationships and restructuring is hard.',
            'Network: records can have multiple parents, so many-to-many relationships are supported and navigation between related records is fast; but the structure is complex to design and maintain.',
            'Relational: data in tables of rows and columns linked by primary and foreign keys. Flexible querying with SQL, minimal redundancy through normalisation, and the industry standard; but joins across many tables can be slower.',
            'Selecting a model depends on efficiency of accessing individual items, efficiency of storage, and complexity of implementation.'
          ] },
        { h: 'Access control',
          b: [
            'Permissions cover authorisation, privileges, access rights and rules.',
            'RBAC - role-based access control: permissions attach to a job role, so a new starter simply gets the role. Simple to administer at scale, but roles can become too broad.',
            'RuBAC - rule-based access control: access is granted by rules and conditions such as time of day, location or device.',
            'APIs provide controlled programmatic access between systems.'
          ] },
        { h: 'Data analysis stores',
          b: [
            'Data warehouse: structured, cleaned data organised for reporting.',
            'Data lake: raw data of any type stored cheaply until needed.',
            'Data mart: a subset of a warehouse serving one department.'
          ] }
      ],
      traps: [
        'RBAC is by role. RuBAC is by rule. One letter apart and examined together.',
        'A warehouse holds cleaned structured data; a lake holds raw data of any type. Lake is the messy one.',
        'The relational model is the industry standard, but it is not automatically the right answer - a question stressing many-to-many navigation speed may want the network model.'
      ],
      check: 'Write the three data models with one advantage and one drawback each, then the difference between RBAC and RuBAC.',
      qs: [
        { n: 77, marks: 4, cmd: 'Explain', q: 'Explain why a relational model would be chosen over a hierarchical model for a college system holding students, courses and tutors.',
          a: 'A student takes several courses and a course has several students, which is a many-to-many relationship; a hierarchical model allows only one-to-many parent and child links, so it cannot represent this without duplicating records (2). The relational model links tables through primary and foreign keys, so a junction table expresses the relationship once, keeping redundancy minimal through normalisation (1) and allowing flexible SQL queries such as listing every course for one tutor without restructuring the data (1).' },
        { n: 78, marks: 3, cmd: 'Explain', q: 'Explain the difference between role-based and rule-based access control, giving one example of each.',
          a: 'Role-based access control attaches permissions to a job role, so a new reception employee is given the reception role and inherits exactly the rights that role carries (1). Rule-based access control grants access according to conditions, for example allowing payroll access only from an on-site device during working hours (1). RBAC is simpler to administer at scale because changes are made once per role, whereas RuBAC gives finer control over the circumstances of access (1).' },
        { n: 79, marks: 2, cmd: 'Explain', q: 'A manager needs to see current sales performance at a glance. Explain which visualisation format is most suitable and why.',
          a: 'A dashboard (1), because it presents live KPIs such as sales to date, customers served and stock levels together in one view, letting the manager judge current status immediately without reading detail or running a report (1).' },
        { n: 80, marks: 3, cmd: 'Explain', q: 'Explain the difference between a data warehouse, a data lake and a data mart.',
          a: 'A data warehouse holds structured, cleaned data organised for reporting across the organisation (1). A data lake holds raw data of any type, structured or unstructured, stored cheaply until a use is found for it (1). A data mart is a subset of a warehouse serving the needs of one department, such as finance or marketing (1).' },
        { n: 81, marks: 4, cmd: 'Explain', q: 'Explain two drawbacks of presenting data as an infographic for a public audience.',
          a: 'Infographics compress data into a simple visual message, so detail and caveats are lost and the audience cannot see the underlying figures or sample size to judge reliability (2). Design choices can also mislead, whether or not intentionally - a truncated axis exaggerates a small difference and disproportionate icons overstate a change - so the reader can draw a conclusion the data does not support (2).' }
      ]
    },

    {
      day: 21, plan: 'Week 3, Day 7', title: 'Review - content areas 5 and 6', area: 'Review', mins: 20,
      why: 'Week 3 is now complete. This is the retrieval day that decides whether areas 5 and 6 are still there in November.',
      core: [
        { h: 'Do this, in this order',
          b: [
            'Quiz on the site: content areas 5 and 6, 20 questions. Write the score down.',
            'RAG-rate areas 5 and 6 on the Paper 2 page. Be honest - a generous rating now costs marks later.',
            'Flashcards: full sweep including Paper 1 terms.'
          ] },
        { h: 'The lists that must be automatic by now',
          b: [
            'Three business sectors with what each optimises for.',
            'Internal triggers, and PESTLE with one example per letter.',
            'The six risks of using digital systems, and separately the five impacts.',
            'The four implementation methods with trade-offs. SMARTER.',
            'The data, information, knowledge ladder. The six Vs. The five wrangling steps.',
            'The three data models. RBAC versus RuBAC.'
          ] }
      ],
      traps: [
        'Risks are what can go wrong. Impacts are what it costs the business afterwards. Two lists, routinely merged.',
        'Political is who is in charge. Legal is what the rules are.',
        'Management watches the dials. Finance counts the money.'
      ],
      check: 'Every list in the second block above, written from memory, no notes. Then check.',
      qs: [
        { n: 82, marks: 3, cmd: 'State', q: 'State the six risks to an organisation of using digital systems.',
          a: 'Security breaches; privacy breaches; regulatory and legal non-compliance; audience exclusion; emerging rival technologies making systems or products obsolete; technical issues including over-reliance, system failure and a system not fit for purpose.' },
        { n: 83, marks: 2, cmd: 'State', q: 'State four impacts an organisation could face as a result of those risks.',
          a: 'Any four of: legal action; fines; reputational damage; withdrawal of licence to practise; loss of business.' },
        { n: 84, marks: 6, cmd: 'Analyse', q: 'An online retailer suffers a security breach exposing 40,000 customer records. Analyse the impact on the organisation.',
          a: 'Operationally, systems may be taken offline for investigation, halting sales, and staff time is diverted to handling customer enquiries instead of trading. Financially the retailer faces forensic investigation and remediation costs, credit monitoring for affected customers and lost trading during any outage. Legally the breach involves personal data, so it must be reported to the ICO within 72 hours and affected customers informed; the ICO can impose a substantial fine and individuals may bring claims. Reputationally customers lose confidence in the retailer holding card and address data, so retention falls and acquiring new customers becomes more expensive. Long term, if card data was involved PCI DSS status and the ability to take card payments could be withdrawn, which threatens the viability of the business; the long-term cost usually exceeds the immediate fine.' },
        { n: 85, marks: 4, cmd: 'Explain', q: 'Explain two ways a charity and a private retailer would differ in their priorities for a new website.',
          a: 'Budget: the charity is funded by donations with any surplus going to the cause, so it prioritises low build and running costs, often using open source software and volunteer effort, and resists expensive custom features (2). Measure of success: the retailer judges the site on sales and return on investment, so it invests in checkout, product search and personalisation, whereas the charity judges it on donations raised and awareness of the cause, so it prioritises telling that story and making donating frictionless (2).' },
        { n: 86, marks: 3, cmd: 'Explain', q: 'Explain why a new piece of legislation is a Legal trigger for change rather than a Political one.',
          a: 'Legal triggers are changes to the law itself that the organisation must comply with, such as new data protection or accessibility legislation, which force a change regardless of who is in government (2). Political triggers are changes in who holds power and what they prioritise - a change of government, conflict, or shifted spending priorities - which may or may not result in new law (1).' }
      ]
    },

    {
      day: 22, plan: 'Week 4, Day 1', title: 'Hardware and software', area: '7.1 and 7.2', mins: 22,
      why: 'Area 7 opens Paper 2 territory you have not touched yet. Hardware questions are usually match-to-scenario, which is a format that rewards a justification habit you already have.',
      core: [
        { h: 'Processor and memory - the characteristics that justify a choice',
          b: [
            'Cores: more cores means more tasks genuinely in parallel. Clock speed: cycles per second, higher is faster per core. Cache: small very fast memory close to the CPU that reduces waiting for main memory.',
            'RAM is volatile, read and write, and holds what is currently in use; more RAM means less swapping to disk. ROM is non-volatile and read-only, holding firmware such as boot instructions.',
            'Secondary storage: magnetic HDD - cheap per GB, high capacity, moving parts so slower and fragile. Solid state SSD - no moving parts, much faster, dearer per GB, limited write cycles. Optical - cheap removable media, low capacity, slow.',
            'GPUs handle graphics and highly parallel work, which is why they are used for AI and machine learning.',
            'Cooling: air (fans and heatsinks - cheap, simple, noisier, less effective) and liquid (better heat transfer, quieter under load, costlier with a leak risk).'
          ] },
        { h: 'Operating system types',
          b: [
            'Batch: non-interactive, high volume, jobs scheduled and run without user interaction - payroll and billing runs.',
            'Multitasking: concurrent execution of several tasks using time-slicing and interrupts. Time-slicing means each process gets a small slice of processor time in turn; interrupts are signals that make the processor suspend the current task for something urgent.',
            'Also real-time, single-user and multi-user types - know that the question is usually which one suits the scenario.'
          ] },
        { h: 'Utilities and development tools',
          b: [
            'Utilities: file management, defragmenters (reorganise fragmented files on magnetic drives - not used on SSDs), file compression, backup software, anti-malware.',
            'IDE: combines code editing with syntax highlighting and autocomplete, debugging tools (breakpoints, step through, watch variables) and screen design tools in one application.',
            'Compiler: translates the whole program to machine code before execution. Fast execution afterwards, source not distributed, errors reported all at once; but must be recompiled after every change and the output is platform-specific.',
            'Interpreter: translates and executes line by line. Immediate feedback, easy to test small changes, portable; but slower at run time and the source is needed to run it.'
          ] }
      ],
      traps: [
        'Defragmenting an SSD is pointless and shortens its life. If a scenario mentions SSDs, do not offer defragmentation as a maintenance task.',
        'RAM versus ROM: volatile versus non-volatile is the mark, not size or speed.',
        'A compiler is not faster than an interpreter at translating - it is faster at running afterwards. The speed is in execution, not compilation.'
      ],
      check: 'Write the three processor characteristics with what each one buys you, then compiler versus interpreter with two points each.',
      qs: [
        { n: 87, marks: 4, cmd: 'Explain', q: 'Explain the difference between a compiler and an interpreter, giving one advantage of each.',
          a: 'A compiler translates the entire source program into machine code before it is executed, reporting all errors together (1); the advantage is that execution afterwards is fast and the source code need not be distributed (1). An interpreter translates and executes the program line by line (1); the advantage is immediate feedback when testing a small change, and the same source runs on any platform with an interpreter available (1).' },
        { n: 88, marks: 3, cmd: 'Explain', q: 'A database server is read constantly all day. Explain which type of secondary storage should be fitted and why.',
          a: 'A solid state drive (1). It has no moving parts so access time is far lower than a magnetic drive, which matters because the workload is constant reads where latency directly limits how many queries can be served (1). The higher cost per gigabyte is justified because access time matters more than capacity for this workload, and the absence of moving parts also makes it more reliable in a machine that runs continuously (1).' },
        { n: 89, marks: 2, cmd: 'State', q: 'State two differences between RAM and ROM.',
          a: 'RAM is volatile so its contents are lost when power is removed, whereas ROM is non-volatile and retains its contents (1). RAM can be both read and written during normal operation, whereas ROM is read-only and holds firmware such as the boot instructions (1).' },
        { n: 90, marks: 3, cmd: 'Explain', q: 'Explain what a batch operating system is and give one situation where it is appropriate.',
          a: 'A batch operating system runs jobs that have been queued and scheduled, processing them without any user interaction while they run (2). It suits high-volume repetitive processing where no decisions are needed during the run, such as an overnight payroll or billing run (1).' },
        { n: 91, marks: 3, cmd: 'Explain', q: 'Explain three features of an IDE that speed up development.',
          a: 'Code editing features such as syntax highlighting and autocomplete reduce typing errors and catch syntax mistakes as the code is written rather than at run time (1). Debugging tools such as breakpoints, stepping through code and watching variables let a developer see the state of the program at the point a fault occurs instead of guessing (1). Integrated screen design tools and a built-in run and build process keep everything in one application, removing the time lost switching between separate editor, compiler and designer (1).' }
      ]
    },

    {
      day: 23, plan: 'Week 4, Day 2', title: 'Networks - types and topologies', area: '7.3 part 1', mins: 25,
      why: 'Networks is the densest topic on either paper. It is split across two days deliberately - do not try to take it in one.',
      core: [
        { h: 'Network types by scale',
          b: [
            'PAN - personal, one person, such as Bluetooth devices.',
            'LAN - one site, an office or school.',
            'MAN - a town or city.',
            'WAN - geographically dispersed; the internet is the largest.',
            'VPN - an encrypted tunnel across a public network, so remote traffic is private.'
          ] },
        { h: 'Connectivity',
          b: [
            'Copper ethernet: cheap, easy to install, adequate speed; but distance-limited and suffers electromagnetic interference.',
            'Fibre-optic: very high bandwidth over long distances, immune to interference; but more expensive and harder to install and terminate.',
            'Wireless: no cabling and mobile devices can move; but shared bandwidth, interference, and signal degrades with distance and obstacles.'
          ] },
        { h: 'Topologies',
          b: [
            'Star: every node connects to a central switch. Reliable because one cable failure affects one node, easy to add nodes, good performance; but needs more cable and the central device is a single point of failure.',
            'Mesh: nodes interconnect with multiple paths. Highly resilient with no single point of failure; but expensive and complex to cable and manage.',
            'Bus and ring also exist - know that a break affects more than one node.',
            'Physical topology is how devices are actually cabled. Logical topology is the path data actually takes. A network can be physically a star but logically a bus.'
          ] },
        { h: 'Models and components',
          b: [
            'Client-server: central servers hold data and services. Centralised security, backup and administration, and it scales well; but costly, and the server is a single point of failure.',
            'Peer-to-peer: each device shares its own resources. Cheap and simple with no server needed; but backup and security are per-device and it does not scale.',
            'Components: server provides services; client requests them; router connects different networks and routes packets between them; switch connects devices within a LAN and forwards frames only to the intended port.',
            'Benefits of networking: share files, hardware and internet access; centralised backup, security and updates; central user account management. Drawbacks: hardware and setup cost, a single point of failure, and malware spreading across connected machines.'
          ] }
      ],
      traps: [
        'A router joins different networks. A switch connects devices inside one network. This is examined constantly and is worth getting exactly right.',
        'Star is the common answer for reliability because one failed cable affects one node - but the central switch is still a single point of failure, and saying so is often the extra mark.',
        'Physical and logical topology are different things. A question using the word logical is not asking about cabling.'
      ],
      check: 'Write the five network types by scale, then star and mesh with one advantage and one drawback each, then the difference between a router and a switch.',
      qs: [
        { n: 92, marks: 3, cmd: 'Explain', q: 'Explain the difference between a router and a switch.',
          a: 'A switch connects devices within a single local network and forwards frames only to the port the destination device is on, which reduces unnecessary traffic (1). A router connects different networks together and decides which route a packet should take between them (1). So a switch moves traffic inside a LAN, whereas a router moves traffic between a LAN and another network such as the internet (1).' },
        { n: 93, marks: 4, cmd: 'Explain', q: 'Explain one advantage and one drawback of a star topology.',
          a: 'Advantage: every node has its own cable to a central switch, so a single cable failure takes out only that one node and the rest of the network continues working, and new nodes can be added without disturbing existing ones (2). Drawback: it needs more cable than a bus since every device needs its own run back to the switch, and the central switch is a single point of failure whose loss takes down the entire network (2).' },
        { n: 94, marks: 2, cmd: 'Explain', q: 'Explain why a company would use a VPN for remote workers.',
          a: 'A VPN creates an encrypted tunnel across the public internet, so traffic between the remote worker and the company network cannot be read or altered if intercepted (1). It also lets the remote device access internal resources as though it were on the office LAN, without exposing those services directly to the internet (1).' },
        { n: 95, marks: 4, cmd: 'Explain', q: 'A small design studio with six staff is choosing between client-server and peer-to-peer. Explain which is more appropriate and why.',
          a: 'Peer-to-peer is more appropriate at this size (1). With six staff there is no need for the cost of server hardware, licensing and administration, and each machine can share the files and printer it holds (1). Client-server would give centralised backup, security and account management, which matters as an organisation grows (1), but for six people the administrative overhead and capital cost outweigh that, and centralised backup can instead be achieved with cloud sync - though the studio should revisit the decision if headcount grows or client data obligations increase (1).' },
        { n: 96, marks: 2, cmd: 'Explain', q: 'Explain the difference between physical and logical topology.',
          a: 'Physical topology describes how the devices are actually cabled together - which wire runs where (1). Logical topology describes the path the data actually takes between devices, which can differ from the cabling; a network can be physically wired as a star while data behaves as though travelling on a bus (1).' }
      ]
    },

    {
      day: 24, plan: 'Week 4, Day 3', title: 'Networks - layers and protocols', area: '7.3 part 2', mins: 25,
      why: 'OSI and TCP/IP are pure recall and they come up reliably. The plan asks you to sketch both side by side until it is correct, because that is the only way this sticks.',
      core: [
        { h: 'OSI seven layers, top to bottom',
          b: [
            'Application - user-facing services: HTTP, FTP, SMTP.',
            'Presentation - translation, encryption, compression.',
            'Session - establishing, maintaining and ending sessions.',
            'Transport - end-to-end delivery, segmentation, TCP and UDP.',
            'Network - logical addressing and routing, IP.',
            'Data link - framing and physical addressing (MAC).',
            'Physical - the actual transmission of bits over the medium.'
          ] },
        { h: 'TCP/IP four layers, and how they map',
          b: [
            'Application - combines OSI application, presentation and session.',
            'Transport - TCP and UDP.',
            'Internet - IP and routing.',
            'Network or link - physical transmission.',
            'The mapping is the question: four layers covering the same seven functions.'
          ] },
        { h: 'Packets',
          b: [
            'A packet has a header (source and destination IP addresses, packet number, protocol), a payload (the data) and a trailer (an error check such as a CRC).',
            'Packet switching splits data into packets that may take different routes and are reassembled in order at the destination using the packet numbers.',
            'CRC - cyclic redundancy check: a value calculated before sending and recalculated on arrival. A mismatch means corruption, so the packet is retransmitted.'
          ] },
        { h: 'Protocols worth knowing by name',
          b: [
            'HTTP - web pages. HTTPS - web pages encrypted with TLS.',
            'SMTP - sending mail. POP - downloads mail and typically removes it from the server. IMAP - keeps mail on the server and synchronises across devices.',
            'FTP - file transfer.',
            'Bandwidth is how much data can transfer per second; latency is the delay before transfer begins. High bandwidth with high latency still feels slow for interactive work such as remote desktop.'
          ] }
      ],
      traps: [
        'POP removes mail from the server; IMAP leaves it there and syncs. If a scenario mentions reading mail on a phone and a laptop, the answer is IMAP.',
        'Bandwidth and latency are not the same thing and a question about a laggy video call is usually about latency, not bandwidth.',
        'The trailer holds the error check, not the addresses. Addresses are in the header.'
      ],
      check: 'Sketch OSI and TCP/IP side by side, in order, with the mapping between them. Repeat until correct with no notes.',
      qs: [
        { n: 97, marks: 4, cmd: 'State', q: 'State the seven layers of the OSI model in order, from top to bottom.',
          a: 'Application, Presentation, Session, Transport, Network, Data link, Physical.' },
        { n: 98, marks: 3, cmd: 'Explain', q: 'Explain how the four TCP/IP layers map onto the seven OSI layers.',
          a: 'The TCP/IP application layer combines the OSI application, presentation and session layers (1). The TCP/IP transport layer corresponds to the OSI transport layer, carrying TCP and UDP (1). The TCP/IP internet layer corresponds to the OSI network layer, handling IP addressing and routing, and the TCP/IP network or link layer combines the OSI data link and physical layers (1).' },
        { n: 99, marks: 3, cmd: 'Explain', q: 'Explain the three parts of a data packet.',
          a: 'The header carries the source and destination IP addresses, the packet number and the protocol in use, so the packet can be routed and reassembled in the right order (1). The payload is the actual data being carried (1). The trailer carries an error check such as a cyclic redundancy check, which is recalculated on arrival so corruption can be detected and the packet retransmitted (1).' },
        { n: 100, marks: 3, cmd: 'Explain', q: 'A user reads email on both a laptop and a phone. Explain which mail protocol should be used and why.',
          a: 'IMAP (1). IMAP keeps messages on the server and synchronises state across every device, so a message read or filed on the phone shows as read or filed on the laptop (1). POP downloads messages and typically removes them from the server, so mail collected on one device would be missing from the other and read status would not synchronise (1).' },
        { n: 101, marks: 3, cmd: 'Explain', q: 'Explain the difference between bandwidth and latency, and why a connection with high bandwidth can still feel slow.',
          a: 'Bandwidth is how much data can be transferred per second; latency is the delay before a transfer begins (2). A satellite link may have ample bandwidth for a large download but high latency, so every interaction in a remote desktop session or a video call waits for the round trip and the connection feels slow even though throughput is high (1).' }
      ]
    },

    {
      day: 25, plan: 'Week 4, Day 4', title: 'Virtual, cloud and resilience', area: '7.4 and 7.5', mins: 22,
      why: 'The IaaS, PaaS, SaaS responsibility split is a reliable question and has a memory aid that makes it almost free. Resilience answers have a three-part structure that works every time.',
      core: [
        { h: 'Virtualisation',
          b: [
            'A virtual machine is a software-based computer running on physical hardware with its own operating system.',
            'A hypervisor creates and manages VMs and allocates physical resources. Type 1 (bare metal) runs directly on the hardware - faster and more secure, used in data centres. Type 2 (hosted) runs as an application on an existing OS - easier for desktop testing, slower.',
            'Benefits: cost effective at scale (many VMs on fewer machines); easy management (create, clone, snapshot, delete in software); resilience (a VM can be moved to other hardware); lower carbon footprint.',
            'Drawbacks: extra load because the host runs many guests plus the hypervisor; slower than running directly on hardware; and false representation of performance - software tested in a VM may behave differently on real hardware.'
          ] },
        { h: 'Cloud and the responsibility split',
          b: [
            'Private cloud: infrastructure dedicated to one organisation - more control and security, higher cost. Public cloud: shared multi-tenant infrastructure - cheap and elastic, less control.',
            'Cloud benefits: portability, elasticity (scale up and down with demand), fewer storage limitations, pay for what you use with no capital hardware spend.',
            'IaaS - the provider manages hardware and virtualisation; the client manages OS, middleware, runtime, data, applications and user accounts. Most control, most responsibility.',
            'PaaS - the provider also manages the OS, middleware and runtime; the client manages applications, data and accounts.',
            'SaaS - the provider manages everything up to the application; the client manages only user accounts and their own data.',
            'Memory aid: moving IaaS to PaaS to SaaS transfers responsibility from the client to the provider.'
          ] },
        { h: 'Resilience',
          b: [
            'Software updates and patches close newly discovered vulnerabilities. Unpatched software is one of the most common causes of a breach.',
            'Hardware replacement on a rolling plan, plus secure disposal so data cannot be recovered from retired media.',
            'Redundancy: duplicate components and copies of data, such as RAID and clustered servers, so one failure does not cause loss or downtime.',
            'Device hardening: removing unneeded ports, applications, permissions and access to reduce the attack surface.',
            'Backups: onsite is fast to restore but destroyed by the same fire or flood; remote offsite survives a site disaster but is slower to retrieve; cloud is offsite and automated but depends on connectivity.',
            'Recovery sites: hot (fully equipped and running, near-instant failover, very expensive), warm (equipment in place, data restored from backup, hours to switch), cold (space and power only, days to become operational, cheapest).'
          ] }
      ],
      traps: [
        'Type 1 hypervisor is bare metal and goes in the data centre. Type 2 is hosted on an existing OS and goes on a desktop. The numbers do not sound like anything, so attach each to its place.',
        'Hot, warm and cold sites are about how fast you can switch, and the cost runs the opposite way. Hot is fastest and dearest.',
        'For any improve-resilience question, give a technical control, a procedural control and a people control. Three different kinds, not three technical ones.'
      ],
      check: 'Write what the client is responsible for under IaaS, PaaS and SaaS, then the three recovery site types with switch-over time and relative cost.',
      qs: [
        { n: 102, marks: 4, cmd: 'Explain', q: 'Explain the difference between IaaS, PaaS and SaaS in terms of what the client is responsible for.',
          a: 'Under IaaS the provider manages the hardware, network and virtualisation, and the client remains responsible for the operating system, middleware, runtime, data, applications and user accounts - most control but most work (2). Under PaaS the provider additionally manages the operating system and runtime, so the client manages only applications, data and accounts, letting developers deploy code without maintaining servers (1). Under SaaS the provider manages everything up to and including the application, leaving the client responsible only for user accounts and its own data - least effort but least control (1).' },
        { n: 103, marks: 3, cmd: 'Explain', q: 'Explain the difference between a type 1 and a type 2 hypervisor, and where each is used.',
          a: 'A type 1 or bare metal hypervisor runs directly on the physical hardware with no host operating system beneath it, which makes it faster and reduces the attack surface, so it is used for production virtualisation in data centres (2). A type 2 or hosted hypervisor runs as an application on top of an existing operating system, which is slower because of the extra layer but far easier to set up, so it is used on desktops for development and testing (1).' },
        { n: 104, marks: 3, cmd: 'Explain', q: 'Explain the difference between a hot, warm and cold recovery site.',
          a: 'A hot site is fully equipped and already running with current data, giving near-instant failover, but it is the most expensive because the capacity is duplicated and idle (1). A warm site has the equipment in place but data must be restored from backup, so switching takes hours at moderate cost (1). A cold site provides only space and power, so it takes days to become operational, but it is the cheapest option (1).' },
        { n: 105, marks: 4, cmd: 'Explain', q: 'Explain one benefit and one drawback of running an organisation on virtual machines rather than separate physical servers.',
          a: 'Benefit: many virtual machines run on far fewer physical hosts, so hardware, power and cooling costs fall, and each VM can be created, cloned, snapshotted or moved to other hardware in software, which makes both provisioning and recovery much faster (2). Drawback: every guest plus the hypervisor shares the same physical resources, so execution is slower than running directly on hardware and a heavily loaded host degrades all its guests at once; performance measured in a VM can also misrepresent how software will behave on real hardware (2).' },
        { n: 106, marks: 6, cmd: 'Explain', q: 'A company has suffered two days of downtime after a server failure. Explain how it could improve the resilience of its systems.',
          a: 'Technical: introduce redundancy so no single component can cause an outage - RAID for disks and clustered servers so another node takes over, plus offsite or cloud backups so data survives a site-level disaster (2). Procedural: adopt a rolling hardware replacement plan so equipment is retired before it fails and support ends, keep software patched to close known vulnerabilities, and define and test a recovery procedure against a stated recovery time, choosing a warm or hot site if two days of downtime is unacceptable (2). People: write standard operating procedures and train staff on them through induction and refresher training, because recovery plans fail when the people executing them have never practised, and run a restore test rather than assuming backups work (2).' }
      ]
    },

    {
      day: 26, plan: 'Week 4, Day 5', title: 'Security threats and vulnerabilities', area: '8.1 and 8.2', mins: 25,
      why: 'Area 8 is heavily examined and mostly recall. The social engineering family (phishing, spear phishing, smishing, vishing, pharming) is almost free marks once the names are attached to the right channel.',
      core: [
        { h: 'Confidential information - what and why',
          b: [
            'HR information: salaries and benefits, staff personal details. Commercially sensitive: client details, stakeholder details, intellectual property, sales numbers, contracts. Access information: usernames, passwords, MFA details, PINs, access codes, biometric data.',
            'Why salaries are confidential: to stop competitors offering higher wages to poach staff, and to stop employees comparing salaries and demanding parity.',
            'Why IP is confidential: to prevent competitors copying designs. Why client details: to stop competitors approaching clients, and to protect client privacy.',
            'Impact of failing to maintain confidentiality: non-compliance including loss of licence to practise; loss of trust; damage to image; financial loss through fines, refunds and lost business.'
          ] },
        { h: 'Attacks',
          b: [
            'Botnet - a network of infected machines controlled remotely, used for spam or DDoS. DoS and DDoS - flooding a service so genuine users cannot reach it; impact is lost sales and reputational damage.',
            'Malicious hacking techniques: password cracking and brute force; cross-site scripting (injecting script into a page viewed by others); SQL injection.',
            'SQL injection and buffer overflow are both prevented by validating and sanitising all input and using parameterised queries. The link between validation and security is examined regularly.',
            'Man-in-the-middle - intercepting traffic between two parties; mitigated by HTTPS and TLS and by avoiding open Wi-Fi. Also DNS attacks and insecure APIs.'
          ] },
        { h: 'Malware - what distinguishes each',
          b: [
            'Virus: attaches to a file, needs a host and user action to spread.',
            'Worm: self-replicating across a network with no user action.',
            'Key logger: records keystrokes to steal credentials.',
            'Ransomware: encrypts data and demands payment.',
            'Trojan: appears legitimate but carries a malicious payload. Spyware and adware also named.'
          ] },
        { h: 'Social engineering - the channel is the mark',
          b: [
            'Phishing - mass fraudulent email. Spear phishing - targeted at a named individual using researched detail. Smishing - by SMS. Vishing - by voice call. Pharming - redirecting a user to a fake site. Also baiting, shouldering and pretexting.',
            'Human threats: human error (mitigate with clear file properties, confirmation boxes and training); malicious employee (immediate removal from premises and immediate suspension of accounts); disguised criminal.',
            'Physical vulnerabilities: lack of access control; poor access control such as tailgating; and the nature of the location.',
            'Technical vulnerabilities: weak encryption, poor password policy, no MFA; out-of-date or unsupported components, including zero-day vulnerabilities.'
          ] }
      ],
      traps: [
        'A virus needs a host file and a user action. A worm spreads itself across a network. That distinction is the whole question.',
        'Phishing is mass; spear phishing is targeted at one named person. If the scenario mentions research into the victim, it is spear phishing.',
        'SQL injection is a security topic and a validation topic. Mentioning input validation and parameterised queries is what earns the mitigation mark.'
      ],
      check: 'Write the five social engineering types with their channel, then the four malware types with what distinguishes each.',
      qs: [
        { n: 107, marks: 3, cmd: 'Explain', q: 'Explain the difference between a virus and a worm.',
          a: 'A virus attaches itself to a host file and requires a user action, such as opening that file, before it can execute and spread (1). A worm is self-contained and self-replicating, spreading across a network by exploiting vulnerabilities with no user action required (1). A worm therefore spreads far faster and can infect an entire network from one entry point, whereas a virus depends on users passing the infected file on (1).' },
        { n: 108, marks: 4, cmd: 'Explain', q: 'Explain the difference between phishing and spear phishing, and state one mitigation for each.',
          a: 'Phishing sends a generic fraudulent message to a very large number of recipients hoping a small proportion respond (1); it is mitigated by spam and link filtering plus staff training to recognise generic approaches and check sender addresses (1). Spear phishing targets a named individual using researched detail such as their job title, manager and current projects, which makes it far more convincing (1); it is mitigated by out-of-band verification for any request to move money or change payment details, plus MFA so stolen credentials alone are not enough (1).' },
        { n: 109, marks: 4, cmd: 'Explain', q: 'Explain what SQL injection is and how it can be prevented.',
          a: 'SQL injection is where an attacker enters SQL fragments into an input field so that the text is executed as part of the database query rather than treated as data, letting them read, alter or delete records they have no right to (2). It is prevented by validating and sanitising all input so unexpected characters are rejected, and by using parameterised queries or prepared statements, which pass user input as a value that can never be interpreted as SQL (2).' },
        { n: 110, marks: 3, cmd: 'Explain', q: 'Explain why an organisation keeps staff salary information confidential.',
          a: 'Competitors who learn what staff are paid can target them with higher offers and poach them, costing the organisation experienced people and recruitment expense (2). Internally, staff who learn colleagues on similar work are paid more will demand parity, creating disputes and pressure on the pay structure (1).' },
        { n: 111, marks: 4, cmd: 'Explain', q: 'Explain two physical vulnerabilities and how each can be addressed.',
          a: 'Lack of access control means anyone can enter areas holding servers or confidential records (1); address it with entry control systems such as card or code locks on every secure area, so entry requires an issued credential (1). Poor access control allows tailgating, where someone follows an authorised person through a door, and shared or unchanged door codes (1); address it with complex codes changed regularly, physical measures such as turnstiles or airlocks that admit one person at a time, and monitoring and auditing of access to secure areas so entries can be traced (1).' }
      ]
    },

    {
      day: 27, plan: 'Week 4, Day 6', title: 'Threat mitigation, CIA and IAAA', area: '8.3 and 8.4', mins: 22,
      why: 'CIA and IAAA are both short acronyms that carry several marks each, and the backup types question has a trade-off that is easy to get backwards.',
      core: [
        { h: 'Encryption - three kinds, three jobs',
          b: [
            'Hashing: one-way. Used to store passwords so the plaintext is never held; a hash cannot be reversed, only compared.',
            'Symmetric: one shared key. Fast, good for bulk data, but the key must be exchanged securely.',
            'Asymmetric: a public and private key pair. Solves key exchange and supports digital signatures, but is slower, so in practice it is used to exchange a symmetric key.'
          ] },
        { h: 'Backups - the trade-off runs opposite ways',
          b: [
            'Full: a complete copy. Slowest to take, fastest to restore.',
            'Incremental: only what changed since the last backup of any type. Fastest to take, slowest to restore because every increment is needed.',
            'Differential: everything changed since the last full backup. Middle on both.',
            'Test restores, not just backups - an untested backup is an assumption.'
          ] },
        { h: 'Other controls',
          b: [
            'Anti-malware scans against signatures and behaviour, with quarantine, disinfect and delete actions. Must be updated; cannot catch a true zero-day alone.',
            'Intrusion detection monitors for suspicious patterns and alerts - it detects but does not by itself prevent.',
            'Firewall configuration with rules for inbound and outbound traffic, traffic type, application and IP address. Network segregation so a breach in one segment does not reach another. Air gaps physically isolate critical systems.',
            'Port scanning finds open ports so unnecessary ones can be closed. Penetration testing simulates an attack - ethical hacking is authorised and reported to the owner.',
            'Device hardening, user access policies, staff vetting and staff training. Best answers combine a technical, a procedural and a people control - defence in depth.'
          ] },
        { h: 'CIA and IAAA',
          b: [
            'CIA triad - Confidentiality: data kept private by controlling access. Integrity: data has not been tampered with. Availability: data is available and usable when needed.',
            'They interrelate: without confidentiality an attacker can alter data and destroy integrity; without integrity data may be available but useless; over-tightening confidentiality reduces availability for legitimate users.',
            'IAAA in order - Identification: recognising who someone claims to be (username, card, biometric). Authentication: proving that claim (password, MFA, biometric). Authorisation: what they are permitted to access and do (roles, access control lists). Accountability: tracing actions back to the responsible user through audit logs - which requires unique accounts, because shared logins destroy accountability.',
            'Principle of least privilege: give the minimum access needed to do the job, which limits damage from both a compromised account and a malicious insider.'
          ] }
      ],
      traps: [
        'Incremental is fastest to take and slowest to restore. Full is the reverse. Getting this backwards is the most common error on the backup question.',
        'Hashing is not encryption you can reverse - that is the point of using it for passwords.',
        'Identification is the claim; authentication is the proof. Two different stages, asked as one question.'
      ],
      check: 'Write CIA with one sentence each, then IAAA in order with one method each, then the three backup types with take time and restore time.',
      qs: [
        { n: 112, marks: 3, cmd: 'Explain', q: 'Explain the three elements of the CIA triad.',
          a: 'Confidentiality means data is kept private by controlling who can access it, so only authorised people can see it (1). Integrity means data has not been altered or tampered with, so it can be trusted to be what was recorded (1). Availability means data and systems are accessible and usable when legitimate users need them (1).' },
        { n: 113, marks: 4, cmd: 'Explain', q: 'Explain the four stages of the IAAA model, in order.',
          a: 'Identification is the user stating who they are, for example by entering a username or presenting a card (1). Authentication is proving that claim is genuine, through a password, multi-factor method or biometric (1). Authorisation determines what that authenticated user is permitted to access and do, usually through their role or an access control list (1). Accountability means actions can be traced back to the individual responsible, through audit logs and activity monitoring, which requires unique accounts since shared logins make it impossible to say who did what (1).' },
        { n: 114, marks: 4, cmd: 'Explain', q: 'Explain the difference between full, incremental and differential backups, and the trade-off involved.',
          a: 'A full backup copies everything, so it takes the longest to create and uses the most storage, but restoring needs only that one copy so it is the fastest to recover from (2). An incremental backup copies only what has changed since the last backup of any type, so it is the quickest to take and smallest, but a restore needs the full backup plus every increment in sequence, making recovery slowest and more fragile (1). A differential backup copies everything changed since the last full backup, sitting between the two: larger and slower to take than an incremental but needing only the full plus one differential to restore (1).' },
        { n: 115, marks: 3, cmd: 'Explain', q: 'Explain why passwords are stored as hashes rather than encrypted.',
          a: 'Hashing is a one-way process, so the stored value cannot be converted back into the original password even by someone with full access to the database (1). When a user logs in, the entered password is hashed and the hashes are compared, so the system never needs to hold the plaintext (1). Encryption is reversible, which means a key exists somewhere that could recover every password at once if it were stolen (1).' },
        { n: 116, marks: 6, cmd: 'Explain', q: 'An accountancy firm wants to reduce the risk of a data breach. Explain three measures it could take, covering different types of control.',
          a: 'Technical: configure firewalls with explicit inbound and outbound rules and segregate the network so client records sit in a separate segment, meaning a compromise of a general workstation does not reach them; apply least privilege so each user can reach only the clients they work on (2). Procedural: enforce a patching schedule so known vulnerabilities are closed, require MFA on all remote access, and run access reviews so leavers and role changes are reflected promptly; test restores rather than assuming backups work (2). People: vet staff before granting access to client data and train them on social engineering, since spear phishing targeting named accountants is a realistic threat and no technical control stops a user voluntarily handing over credentials; maintain unique accounts so actions remain traceable (2).' }
      ]
    },

    {
      day: 28, plan: 'Week 4, Day 7', title: 'Review - Paper 2 content complete', area: 'Review', mins: 25,
      why: 'Both papers are now covered. This is the point where you find out what is genuinely secure and what only felt secure.',
      core: [
        { h: 'Do this, in this order',
          b: [
            'Quiz on the site: All of Paper 2, 40 questions. Write the score down - this is your Paper 2 baseline.',
            'RAG-rate areas 7 and 8. Every red topic across both papers is now a target for weeks 5 and 6.',
            'Flashcards: full sweep of all eight content areas.'
          ] },
        { h: 'The acronym sweep - all of these, from memory',
          b: [
            'PESTLE. SMARTER. The six Vs. The five wrangling steps.',
            'OSI seven layers. TCP/IP four layers. The OSI to TCP/IP mapping.',
            'IaaS, PaaS, SaaS - what the client is responsible for in each.',
            'CIA. IAAA. RBAC versus RuBAC.',
            'Hot, warm, cold sites. Full, incremental, differential backups.'
          ] }
      ],
      traps: [
        'A quiz score tells you what you recognise. A blank sheet tells you what you know. Do the blank sheet first and the quiz second.',
        'Be strict on the RAG rating. A topic is green only if you could write its list cold right now.'
      ],
      check: 'Every acronym in the sweep above, written out with no notes, before you touch the quiz.',
      qs: [
        { n: 117, marks: 3, cmd: 'State', q: 'State what each letter of PESTLE stands for and give one example of each.',
          a: 'Political - a change of government shifting spending priorities. Economic - a recession reducing consumer spending. Social - remote working becoming the norm. Technological - a zero-day vulnerability or a new technology arriving. Legal - new data protection legislation. Environmental - sustainability requirements, a pandemic or a natural disaster.' },
        { n: 118, marks: 4, cmd: 'Explain', q: 'Explain two ways the CIA triad elements can conflict with one another.',
          a: 'Tightening confidentiality can reduce availability: adding more authentication steps, narrower permissions and stricter network segregation makes data harder for legitimate users to reach, and an over-restricted system drives staff to work around it with shadow copies (2). Losing confidentiality undermines integrity: an attacker who gains unauthorised access can alter records as well as read them, so data remains available but can no longer be trusted, which for some purposes is worse than losing it entirely (2).' },
        { n: 119, marks: 4, cmd: 'Explain', q: 'A hospital must choose between a hot site and a cold site for disaster recovery. Explain which is more appropriate and why.',
          a: 'A hot site is more appropriate (1). It is fully equipped and already running with current data, so failover is near-instant and clinicians retain access to patient records; a cold site provides only space and power and would take days to become operational (1). Days without access to records would directly threaten patient safety and halt admissions, so the downtime a cold site implies is unacceptable regardless of cost (1). The hot site is substantially more expensive because capacity is duplicated and largely idle, but for safety-critical services that cost is justified, and a warm site would still mean hours of outage (1).' },
        { n: 120, marks: 3, cmd: 'Explain', q: 'Explain why unique user accounts are necessary for accountability.',
          a: 'Accountability means every action in a system can be traced back to the individual responsible, using audit logs and activity monitoring (1). If several people share one login, the logs show only that the shared account performed an action, not which person did it (1). That makes it impossible to investigate misuse, to evidence compliance, or to take disciplinary or legal action, so shared logins destroy accountability even when every other control is in place (1).' },
        { n: 121, marks: 9, cmd: 'Evaluate', q: 'A medium-sized retailer is moving its customer database from on-premises servers to a public cloud provider. Evaluate the impact of this decision on the organisation.',
          a: 'Benefits: the retailer stops buying, housing and cooling server hardware, converting capital spend into predictable operating cost and freeing cash for trading. Elasticity means capacity can scale up for peak periods such as Black Friday and back down afterwards, which on-premises hardware cannot do without buying for the peak and idling the rest of the year. The provider handles hardware resilience, patching of the underlying platform and geographic redundancy, giving a smaller IT team a level of availability it could not build itself. Drawbacks: the data is customer personal data, so moving it to a third party makes the provider a processor under the UK GDPR, requiring a contract, due diligence and attention to where data is stored, and a breach remains the retailer responsibility to report to the ICO within 72 hours. Trading now depends entirely on connectivity, so an internet outage at head office or a provider incident stops business in a way a local server would not. Costs can also rise over time and migration creates vendor lock-in, since moving a large database away again is expensive and slow. Mitigations: encrypt data at rest and in transit, use least privilege and MFA on administrative accounts, contract for data residency in the UK or EEA, hold an independent backup outside the provider, and provision a secondary internet connection. Judgement: on balance the move is justified, because elasticity and the provider resilience outweigh what the retailer could achieve in-house at this size, provided the processor contract, encryption, an independent backup and a second connectivity route are in place before migration rather than after.' }
      ]
    }

  ]
};
