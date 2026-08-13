/* Occupational Specialism — Digital Software Development.
   Extended synoptic project: 50 hours 30 minutes supervised, 144 marks,
   four tasks. Graded Pass / Merit / Distinction. */

window.TLDATA = window.TLDATA || {};

window.TLDATA.os = {
  overview: {
    name: 'Occupational Specialism: Digital Software Development',
    duration: '50 hours 30 minutes of supervised time, across multiple sessions',
    marks: '144 marks, graded Pass / Merit / Distinction / Unclassified',
    conditions: [
      'A single synoptic extended project responding to a given scenario.',
      'Completed under a combination of supervised and controlled conditions at your centre, and externally marked by Pearson.',
      'Internet access is permitted for all tasks EXCEPT Task 3b.',
      'Output is a portfolio of evidence submitted electronically.',
      'You are assessed on applying skills — you are not answering knowledge questions, but you must draw on the knowledge to make good decisions.'
    ],
    aiNote: 'Task 1 Activity C requires you to use a generative AI model to produce short code snippets for specific pieces of functionality — not a whole solution. You must show your prompts, the output, your review of how well it meets the requirement, and your refinement of it. Using AI to generate the entire solution is not what is being assessed and will not gain the marks.',
    pos: [
      { code: 'PO1', name: 'Analyse a problem to define requirements and acceptance criteria, aligned to user needs', marks: 24, pct: 16.7 },
      { code: 'PO2', name: 'Design, implement and test software', marks: 57, pct: 39.6 },
      { code: 'PO3', name: 'Change, maintain and support software', marks: 18, pct: 12.5 },
      { code: 'PO4', name: 'Create solutions in a social and collaborative environment', marks: 9, pct: 6.3 },
      { code: 'PO5', name: 'Discover, evaluate and apply reliable sources of knowledge', marks: 18, pct: 12.5 },
      { code: 'PO6', name: 'Apply ethical principles and manage risks in line with legal and regulatory requirements', marks: 18, pct: 12.5 }
    ],
    dpddNote: 'If you are on the older Digital Production, Design and Development specialism the structure is very close — the same performance outcomes and the same design/implement/test/evaluate shape. Check your own centre\'s task titles against this, but the revision content applies either way.'
  },

  tasks: [
    {
      id: 'os1', code: 'Task 1', title: 'Analysing a problem and designing a solution',
      produce: 'Requirements analysis, user analysis, and full design documentation for the solution — plus the AI snippet activity.',
      points: [
        'Analyse the brief: identify the client, the end users, the business need and the measurable value of solving it.',
        'Apply computational thinking to split the problem into discrete objects.',
        'Define functional requirements: inputs required, data needed, processing that must happen, system logic, deployment and usage platforms.',
        'Define non-functional requirements: security, accessibility, scalability, and KPIs for responsiveness, load handling and reliability.',
        'Write user acceptance criteria — testable statements of what "done" means. These come back in Task 3.',
        'Perform a user analysis using business analysis models: user stories, activity diagrams, mind maps, product road maps, process diagrams, entity relationship diagrams.',
        'Design the product: interface designs (wireframes, style guide, clickable prototype), algorithms for the key problems, and data requirements designs (data dictionary, ERD, normalisation to third normal form).',
        'Choose your languages and justify them against: suitability for the task, organisational policy, scalability, security, availability of trained staff, cost and reliability. You must use at least two of Python 3.10+, C#, SQL, JavaScript, PHP.',
        'Identify risks and how you will mitigate them; identify legal, regulatory and ethical requirements for this context.',
        'Activity C: use a generative AI model for specific snippets — record the prompt, the raw output, your evaluation of it against the requirement, and your refinement.'
      ],
      checklist: [
        'Functional and non-functional requirements listed separately and numbered.',
        'Acceptance criteria written so each can be tested yes/no.',
        'At least two business analysis models used, not just a list of features.',
        'Wireframes for every screen, plus a style guide.',
        'Data design: ERD and normalisation to 3NF where a database is used.',
        'Language choice justified against named criteria, not "because I know it".',
        'Risk table: risk, likelihood, seriousness, impact, mitigation, contingency.',
        'AI prompts, outputs, review and refinement all evidenced.',
        'Sources of knowledge referenced and their reliability evaluated (PO5 marks).'
      ]
    },
    {
      id: 'os2', code: 'Task 2', title: 'Developing the solution',
      produce: 'The working software, built from your Task 1 designs, using at least two languages, plus testing evidence.',
      points: [
        'Implement front-end and back-end using at least two appropriate languages.',
        'Use tools, APIs, packages, modules and libraries appropriately — dynamic content, form handling, file and data handling, database create/read/update/delete, interface components, media, responsive layout, network communication, security features (user access control, encrypting data).',
        'Connect code to data sources: create the database, connect via API/JDBC/ODBC, extract, store, update and delete data. Show the connection method and how credentials are handled securely.',
        'Apply UX principles: consistency, information hierarchy, visual hierarchy, confirmation of actions, user control, accessibility.',
        'Apply UI technique: layout grids, use of space, typography and spacing, colour and contrast, input focus, hover states — with decisions justified by browser support, target device, user characteristics, bandwidth, branding, accessibility and input method.',
        'Use common coding conventions throughout: naming, commenting/annotation, modularisation, structure and indentation, version control.',
        'Follow good practice (12-factor principles): one codebase in version control, declared dependencies, config in the environment, separate build and run, stateless processes, logs as event streams, dev/staging/production kept similar.',
        'Test as you build: functional (unit, smoke, integration, system), non-functional (availability, compatibility, configuration, load), front-end (browser and OS compatibility, rendering, load times, responsiveness) and security testing (vulnerability scanning, static and dynamic analysis).',
        'Record tests properly: purpose, test data (valid, invalid, valid extreme, invalid extreme, erroneous), pre-requisites, expected result, actual result, changes made, re-tests/regression.',
        'Select a deployment method and evidence it: local install, network/server install, mobile, web, cloud, containerisation.'
      ],
      checklist: [
        'At least two languages genuinely used (e.g. Python back end + SQL, or JavaScript front end + PHP back end).',
        'Code is modular, commented, consistently named and indented.',
        'Version control used, with meaningful commit history as evidence.',
        'Security implemented, not just described: input validation, hashed passwords, access control, no credentials hard-coded in the source.',
        'Accessibility considered in the UI and evidenced.',
        'Full test plan with all five types of test data.',
        'Screenshots of both failing and passing tests, and of the fixes.',
        'Deployment evidenced end to end.'
      ]
    },
    {
      id: 'os3a', code: 'Task 3a', title: 'Gathering feedback',
      produce: 'Evidence of feedback gathered from users and peers on your working solution.',
      points: [
        'Select techniques to obtain qualitative and quantitative data: surveys/questionnaires, user observation with observation records, interviews, focus groups representing a cross-section of the target audience, verbal feedback, performance and use data, peer mentoring.',
        'Design the instruments properly — questions must map back to your acceptance criteria, not be generic "did you like it?" questions.',
        'Get both types: quantitative (ratings, task completion times, error counts) and qualitative (comments, observed difficulties).',
        'Record raw evidence: completed questionnaires, observation notes, interview notes, screenshots of analytics.',
        'Cover a representative range of users, including any with accessibility needs identified in Task 1.',
        'This is also where PO4 (collaborative working) is evidenced — code reviews, paired programming, walkthroughs, formal inspections.'
      ],
      checklist: [
        'At least two different feedback techniques used.',
        'Both qualitative and quantitative data collected.',
        'Questions traceable to your acceptance criteria.',
        'Raw, dated evidence included in the portfolio.',
        'Participants represent the actual target users.'
      ]
    },
    {
      id: 'os3b', code: 'Task 3b', title: 'Evaluating feedback',
      produce: 'An evaluation of the feedback and of the solution, with planned changes. No internet access for this task.',
      points: [
        'Analyse the feedback: what does it actually show, including where responses conflict?',
        'Evaluate the solution against every acceptance criterion and non-functional requirement (KPIs, accessibility, security).',
        'Identify the changes required, prioritise them, and plan them — this is the PO3 change/maintain/support outcome.',
        'Cover the change management stages: identify the issue, document it, communicate it to technical and non-technical audiences, plan and schedule the change, regression test, and control the release (planned vs reactive).',
        'Reflect on your own performance: skills gaps you identified, how you addressed them, and what you would do differently.',
        'Comment on the ethical, legal and regulatory decisions you made and whether they were appropriate (PO6).',
        'Prepare beforehand: no internet in this task, so any reference material you need (your notes, your own documentation) must already be in your portfolio.'
      ],
      checklist: [
        'Every acceptance criterion judged with evidence.',
        'Feedback analysed, not just repeated.',
        'Conflicting feedback acknowledged and a reasoned decision taken.',
        'Changes prioritised with justification (impact vs effort).',
        'Regression testing addressed.',
        'Communication to non-technical stakeholders demonstrated.',
        'Honest reflection on limitations and on your own development.'
      ]
    }
  ],

  areas: [
    {
      id: 'osa1', num: 1, title: 'Analyse a problem to define requirements and acceptance criteria',
      points: [
        'Software development lifecycle stages: research and familiarisation → planning and requirement analysis → user analysis → designing the product → developing and testing → deploying/implementing → maintenance.',
        'Research and familiarisation: explore the client request, research the context and market (common problems and risks, current hardware/software use, emerging technologies, existing solutions and how they meet user needs, industry guidelines and regulations), and identify shortfalls in your own skills.',
        'Planning and requirement analysis: identify business requirements; assess the measurable value to the user and to the client/business; apply computational thinking to split the problem into discrete objects; define functional and non-functional requirements; define KPIs; identify performance constraints; create user acceptance criteria; schedule tasks, subtasks and milestones; allocate resources; estimate costs; choose languages against criteria; identify and mitigate risks.',
        'Roles: product owner/client (sets and communicates requirements), scrum master (facilitates the team and removes blockers), technical lead (technical guidance), project manager (plans and manages budget, scope, schedule, risk, quality), systems analyst (analyses the current system, defines requirements, designs the solution), UX/UI designer (researches users and designs the interface), software developer/engineer (builds and maintains it), operations engineer (stability), security engineer (security), software testers (quality assurance).',
        'Methodologies — Agile: incremental delivery (sprint, epic, story, spike), high-quality product with initially limited functionality, each increment adds functionality, requirements can change throughout, can lack formal documentation, client sees working software each iteration, cost-effective route to an initial product, cancelled projects still leave usable code.',
        'Scaled Agile: the same plus product increments, cohesive reporting across teams, and a final iteration focused on stability.',
        'Waterfall: rigid, systematic steps; progress measured by artefacts completed; high initial cost and slower return; early cancellation may leave nothing usable; limited client interaction; heavy documentation.',
        'RAD: rapid prototypes systematically improved; features first and quality second; clients may see only partial products early; relies on reusing existing code; suits small-to-medium projects.',
        'Lean: eliminate waste (unnecessary or wrong features, repeated tasks, over-complex solutions, poor communication, unnecessary changes); decide as late as possible; short iterations with fast delivery; iterations must be fit for use rather than feature-complete; suits small teams and limited resources.',
        'User Centred Design: ask who the user is, what they want to achieve, how/when/why they interact, and what the experience is. Characteristics: empathetic, iterative, interdisciplinary. Stages: understand the use context → specify user requirements → design the solution → assess against requirements, and repeat.',
        'Secure by design: security is considered when requirements are written, not added at the end.',
        'Functional requirements = what the system must do (inputs, data, processing, logic, platforms). Non-functional = how well it must do it (security, accessibility, scalability, responsiveness, load handling, reliability, acceptance criteria).',
        'Spike testing: a short, time-boxed piece of exploratory work early on to establish requirements and determine the scope and difficulty of a problem.',
        'Addressing personal training needs: identify the knowledge and skills gaps, then close them by coaching from a professional or peer, learning on the job, self-study, professional forums, or online workshops.'
      ]
    },
    {
      id: 'osa2', num: 2, title: 'Ethical principles, legal and regulatory requirements, and risk',
      points: [
        'Legal and regulatory areas to consider: intellectual property rights and licences, consumer protection, age ratings and classifications, advertising law, data protection and privacy, copyright and patent, gambling legislation, staff and employment practices, territorial restrictions, system security, equality and diversity.',
        'Standards: ISO/IEC/IEEE 90003:2018 (software quality management) and W3C (web standards, and via WCAG, accessibility).',
        'Ethical considerations: codes of conduct, professional practice, software licensing, inclusion and diversity — including bias in datasets and models, and honest use of AI-generated content.',
        'Risk identification areas: data and system security (malicious vs accidental), compatibility with other systems, speed of development, meeting functional and non-functional requirements, meeting KPIs, legal and ethical considerations, user engagement, product reach.',
        'Assess risk as likelihood versus seriousness, state the potential impact, plan mitigation, plan contingency, and monitor it on an ongoing basis.',
        'Supporting policies and procedures: backup, security, CIA (confidentiality, integrity, availability), personnel/skills/training, business continuity planning, disaster recovery planning.',
        'You must be able to make and justify development decisions based on risk versus reward for the specific context and market.'
      ]
    },
    {
      id: 'osa3', num: 3, title: 'Discover, evaluate and apply reliable sources of knowledge',
      points: [
        'Sources: search engines, wikis, blogs, academic papers, peers, forums, code comments, code repositories.',
        'Evaluating reliability: reputation (who is the author and are they credible), bias (who wrote it and what is their interest), evidence used to support the content, cross-referencing/triangulation against other sources, and currency (when was it last updated).',
        'Official documentation and standards outrank a blog post; a five-year-old answer may reference a deprecated library.',
        'Cite what you use in your portfolio and say why you judged it reliable — this is directly worth marks (PO5 is 12.5%).',
        'Techniques for obtaining evaluation data: verbal feedback (formal and informal), surveys/questionnaires, performance and use data, user observation with observation records, focus groups representing a cross-section of the audience, interviews, peer mentoring, and formal line management/appraisal procedures.',
        'Qualitative data explains why; quantitative data shows how much. You need both to evaluate a solution properly.'
      ]
    },
    {
      id: 'osa4', num: 4, title: 'Design',
      points: [
        'Function-oriented (top-down) design: consider how data flows through the system, build it from sub-systems (functions), use data flow diagrams, and break the problem down by what each function does.',
        'Object-oriented design: make code reusable through methods, classes and objects/instances. Characteristics: encapsulation, data abstraction, polymorphism, inheritance. Design patterns fall into creational, structural and behavioural groups.',
        'Data model design: visualise the data and how it is organised. Models — conceptual, logical, physical, hierarchical, relational. Tools — Entity Relationship Model and UML.',
        'Test-driven development (TDD): write a test defining the improvement first → run all tests until the new one fails → write code → run tests and refactor → repeat.',
        'Behaviour-driven development (BDD): specify the required behaviour before coding; behaviours must have business value and map to requirements; specification structure = title, narrative, acceptance criteria.',
        'Functional design: build the program as modules that each perform one defined process. Characteristics: recursion, closures, first-class functions, higher-order functions, anonymous functions, currying. Components: arguments, statements, blocks, procedures, functions.',
        'Source code and content management platforms: coding, repositories, branching, building, testing, deployment. Understand proprietary vs open source, and workflows (gitFlow, gitHubFlow).',
        'Choose a platform on: target audience, budget, technical features, staff and training, ease/speed of development, platform updates, security, reliability, performance, compatibility.',
        'UX design principles: consistency (intuitive, attractive, reinforces brand), information hierarchy (easier navigation), visual hierarchy (important content stands out), confirmation (the user knows what an action did), user control (navigate, work efficiently, correct errors), accessibility (usable by a wide range of users).',
        'UI design outputs: wireframes, style guides, clickable prototypes.',
        'Content management system features: SEO, page/screen management, social media integration, analytics, workflow management, publishing controls, security management, versioning and rollback, content repositories, open APIs, multilingual support, support.',
        'Program design conventions: pre-defined code, flowcharts using standard BCS symbols, pseudocode using standard notation, control structures, data types, validation, data structures.',
        'Asset selection: file types, file size, compression, streaming vs encoding audio, streaming vs embedding video, metadata, quality required, bandwidth and storage available, target platform. Use AI-generated assets legally and ethically.',
        'Target platform features affect design: operating systems, file systems, server/infrastructure (physical or virtual), the language stack, and mobile vs web.',
        'Databases support user management, e-commerce (stock, orders, personalisation), diagnostics and performance analysis. Design them with a data dictionary, an ERD, and normalisation to third normal form.',
        'Network integration points: what is processed locally, what remotely, how data transfers between them, how systems connect, where the system boundaries are, and which external systems you integrate with.'
      ]
    },
    {
      id: 'osa5', num: 5, title: 'Create solutions in a social and collaborative environment',
      points: [
        'Why collaborate: reduced development time, better communication, shared knowledge, skills development, and code reviews.',
        'Code review forms: paired programming, informal walkthroughs, formal inspections.',
        'Know when to work independently instead — focused individual work suits well-defined, self-contained tasks; collaboration suits design decisions, integration and quality assurance.',
        'Collaborative technologies: communication (email, instant messaging), resource management (cloud storage, backup, synchronisation), knowledge (collaboration hubs, wikis, community forums, news sites), and documentation for both technical and non-technical audiences.',
        'Code collaboration: version control and source control (branching, pull requests, merge conflict resolution) and shared IDE features.',
        'Evidence this in the portfolio: commit history, review comments, meeting notes, agreed standards.'
      ]
    },
    {
      id: 'osa6', num: 6, title: 'Implement a solution using at least two languages',
      points: [
        'Permitted languages: Python 3 (3.10+), C#, SQL, JavaScript, PHP. You must use at least two, covering front end and back end.',
        'Use tools/APIs/packages/modules/libraries for: dynamic page content, containerisation, stateful vs stateless components, form handling, file and data handling (local files; create/open/read/write/delete/close files on a server; cookies; add/delete/modify database data), interface components, media content, adaptive/responsive layout, working with existing applications and platforms, specific devices, network communication, infrastructure as code, and security features (user access control, encryption).',
        'Package front end and back end into a single usable product.',
        'CI/CD pipelines: source code control → build automation → unit test automation → deployment automation → monitoring.',
        'Coding conventions: naming, annotations/comments, modularisation, structure/indentation, version control.',
        '12-factor principles: one codebase in version control with many deploys; explicitly declare and isolate dependencies; store config in the environment; treat backing services as attached resources; strictly separate build and run; execute as stateless processes; export services via port binding; scale out via the process model; fast startup and graceful shutdown; keep dev, staging and production similar; treat logs as event streams; run admin tasks as one-off processes.',
        'UI features: images and animation, audio, effects, interactions (user input; textual, graphical, audio and haptic feedback), and data visualisation (dashboards, graphing, data presentation).',
        'UI techniques: layout grids, layout and use of space, font selection and typesetting, letter and line spacing, justification, colour and contrast, input focus, hover controls.',
        'Design decisions consider: browser support, target device/platform, user characteristics, bandwidth, style and branding, accessibility, and input method (voice, text, touch, mouse).',
        'Connecting to data: APIs (request methods, endpoints, retrieving and parsing data, displaying it, API keys), JDBC (core API, driver manager, connection statement, prepared statement, result set, SQL queries), ODBC (application, driver manager, driver, data source). Connection needs the database/data source name, credentials and optional parameters. Operations: extract, store, update, delete.',
        'Deployment methods: local installation, network/server installation, mobile platforms, web-based platforms, cloud-based platforms, containerisation, container-scheduling platforms.'
      ]
    },
    {
      id: 'osa7', num: 7, title: 'Testing a software solution',
      points: [
        'Functional testing: unit, smoke, integration, system.',
        'Non-functional testing: availability, compatibility, configuration, load.',
        'Front-end testing checks: code/script performance and functionality, browser compatibility, OS compatibility, cross-browser performance, formatting and rendering, loading times, responsiveness.',
        'Security testing: vulnerability scanning, static analysis, dynamic analysis, integration analysis.',
        'Techniques: acceptance, alpha, beta, closed box, open box/structural. Manual and automated (including AI tools).',
        'Alpha testing is internal, before release; beta testing is with real users outside the organisation.',
        'Test plan contents: purpose of the test; test data (valid, invalid, valid extreme, invalid extreme, erroneous); pre-requisites for the test; expected results; then update with actual results, changes made, and re-tests/regression testing after changes.',
        'Choose the test type to match the stage of the lifecycle: unit tests while building a module, integration when combining, system before acceptance, regression after any change.'
      ]
    },
    {
      id: 'osa8', num: 8, title: 'Change, maintain and support software',
      points: [
        'Preventive maintenance addresses foreseeable issues: regulatory changes, compatibility with new products or technology, changes in business process, release of a new product or service.',
        'Corrective maintenance addresses unforeseen problems: new vulnerabilities in other products (zero day), targeted attacks, data corruption, system failures.',
        'Iterative development keeps a product relevant: review after user/client feedback, technology developments, competition, efficiency improvements, and future-proofing.',
        'Change management stages: identify issues/changes from feedback and review → document developments and changes → communicate with technical and non-technical audiences → plan the changes → schedule them → regression test → control and release the update (planned or reactive).',
        'Maintaining code in a team: separate code and use modularity, keep it readable, follow accepted conventions, comment/annotate informatively, and update change logs and documentation.',
        'Supporting users — communication routes: face to face, remote conferencing, written (blogs, formal reports, technical documentation, release notes, user guides/help files, FAQs), visual and audio (demonstrations, screencasts, narration), and machine-readable API contracts. Match tone and technical vocabulary to the audience.',
        'Systematic issue resolution: identify or replicate the issue → investigate the possible cause (user error, system error, application error, security breach) → apply testing techniques to find the error, make the change, confirm the error does not return and that nothing else broke → communicate how and when it was resolved to stakeholders → document lessons learned.'
      ]
    }
  ]
};
