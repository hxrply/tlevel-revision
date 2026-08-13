/* Core Paper 2 — content areas 5-8. Same structure as core-p1.js. */

window.TLDATA = window.TLDATA || {};

window.TLDATA.paper2 = [

/* ───────────────────────── Content area 5 ───────────────────────── */
{
  id: 'ca5', num: 5, paper: 2, title: 'Business context',
  blurb: 'Types of organisation, how digital adds value, risk, and technical change management. Change management is the biggest sub-topic here and the most commonly examined.',
  topics: [
    {
      id: '5.1', title: 'Business environment',
      must: [
        'Organisations exist to provide a service or a product (or both).',
        'Private sector: owned by private individuals/shareholders and normally profit-making. SME (small or medium-sized enterprise), large enterprise, and NGO (non-governmental organisation).',
        'Public sector: funded and run by government — NHS, councils, schools, police. Priorities are service delivery, accountability and value for money rather than profit, and they must meet the public sector accessibility regulations.',
        'Voluntary/charity sector: not for profit; surplus is reinvested into the cause; often relies on volunteers and donations, so budgets for digital are tight.',
        'Business models: B2C (business to customer — sells directly to the public), B2B (business to business — sells to other organisations, larger orders, contract-based), B2M (business to many — sells to both consumers and businesses through the same channels).',
        'Internal stakeholders: owners, directors, employees.',
        'External stakeholders: customers/clients, suppliers, shareholders, outsourced services, investors/funders, government.',
        'Stakeholders matter because each has a different interest in a digital project — employees care about training and job security, customers about usability and privacy, investors about return, government about compliance. Requirements gathering must cover all of them.'
      ],
      terms: [
        { t: 'SME', d: 'A small or medium-sized enterprise — a private sector business below defined staff and turnover thresholds.' },
        { t: 'NGO', d: 'A non-governmental organisation operating independently of government, often not for profit.' },
        { t: 'B2B', d: 'Business to business — an organisation whose customers are other organisations.' },
        { t: 'B2C', d: 'Business to customer — an organisation selling directly to individual consumers.' },
        { t: 'Internal stakeholder', d: 'A person inside the organisation with an interest in it, such as an owner, director or employee.' },
        { t: 'External stakeholder', d: 'A person or body outside the organisation with an interest in it, such as a customer, supplier or regulator.' }
      ],
      exam: [
        { marks: 4, q: 'Identify two stakeholders in a new online booking system for a leisure centre run by a local council, and state one requirement each would have.',
          a: 'Customers (external) — need the system to be easy to use on a phone and accessible to users with additional needs, since a council service must serve everyone (2). Employees/reception staff (internal) — need the bookings to appear in the existing till system and to receive training, so they are not left managing two systems manually (2).' }
      ]
    },
    {
      id: '5.2', title: 'Digital value to organisations',
      must: [
        'Sales and marketing: better market research, better brand promotion including social media, online selling, personalising services from customer behaviour, better customer retention, brand differentiation, search and social media analytics.',
        'Research, design and development: provision of unique products and services.',
        'Human resources: staff records, performance management, training records.',
        'Operations: enhanced internal communication, automation of internal processes, automated manufacturing, remote working, intranet/shared workspace, document sharing and online shared storage.',
        'Management: real-time monitoring of KPIs (sales, customers served, units manufactured) and real-time location of assets.',
        'Logistics: automated stock control. Finance: reduced costs, increased revenue, better financial reporting from up-to-date information.',
        'Meeting user needs and quality: appropriate and effective functionality (users can do all required tasks); reduction of pain points (response time — communicate the expected time and notify changes; reduce task complexity); appropriate accessibility provision.',
        'Also: compatibility with internal legacy systems, with proposed future systems and with external services; availability of service (minimise downtime, future-proof for upgrades); effective end user support including digital support; and ease of installation via an installation package.',
        'Answer technique: name the business area, name the digital system, then state the measurable benefit ("automated stock control means reorder points trigger automatically, cutting both stock-outs and over-ordering").'
      ],
      terms: [
        { t: 'KPI', d: 'Key performance indicator — a measurable value showing how effectively an objective is being met.' },
        { t: 'Pain point', d: 'A specific problem or frustration a user experiences when using a product or service.' },
        { t: 'Legacy system', d: 'An older system still in use that new solutions must remain compatible with.' },
        { t: 'Customer retention', d: 'Keeping existing customers, usually cheaper than acquiring new ones.' },
        { t: 'Intranet', d: 'A private network within an organisation used to share information and resources internally.' }
      ],
      exam: [
        { marks: 6, q: 'Explain how digital systems could add value to a small independent retailer with three shops.',
          a: 'An EPOS system with automated stock control records every sale in real time and triggers reorders at defined levels, reducing both stock-outs that lose sales and over-ordering that ties up cash. Sales data across the three shops lets management monitor KPIs such as units sold per store, so stock can be moved to where it sells. An online store extends reach beyond the local area and allows selling outside opening hours. Customer data supports targeted marketing such as personalised offers, which improves retention. Shared cloud storage means all three shops work from the same price lists and procedures, removing the errors caused by out-of-date paper copies.' }
      ]
    },
    {
      id: '5.3', title: 'Risks to organisations of using digital systems',
      must: [
        'Security breaches: compromised confidentiality, loss of integrity, reduced availability (the CIA triad in reverse).',
        'Privacy breaches: exposure of personal information or of business information.',
        'Regulatory and legal non-compliance — e.g. failing data protection, accessibility or PCI DSS requirements.',
        'Audience exclusion: bias in the system or dataset, and poor user experience, which lock out or drive away parts of the audience.',
        'Emerging rival technologies making the organisation\'s systems or products obsolete.',
        'Technical issues: over-reliance on a system and system failure; a system that is simply not fit for purpose.',
        'Impacts of these risks: legal action, fines, reputational damage, withdrawal of licence to practise, and loss of business.',
        'Structure for "impact" questions: immediate operational impact → financial impact → legal/regulatory impact → reputational impact → long-term impact on customers and staff.'
      ],
      terms: [
        { t: 'Security breach', d: 'An incident where systems or data are accessed, altered or made unavailable without authorisation.' },
        { t: 'Privacy breach', d: 'Exposure of personal or confidential information to those not entitled to see it.' },
        { t: 'Audience exclusion', d: 'Designing a system in a way that prevents part of the intended audience from using it.' },
        { t: 'Reputational damage', d: 'Loss of trust and standing that reduces future business after an incident.' }
      ],
      exam: [
        { marks: 6, q: 'An online retailer suffers a breach exposing 40,000 customer records. Analyse the impact on the organisation.',
          a: 'Operationally, systems may be taken offline for investigation, halting sales and requiring staff time to handle enquiries. Legally, the breach involves personal data so it must be reported to the ICO within 72 hours and affected customers informed; the ICO can impose a substantial fine, and affected individuals may bring claims. Financially the organisation faces the fine, the cost of forensic investigation and remediation, credit-monitoring for customers and lost trading. Reputationally, customers lose trust in the retailer\'s ability to hold card and address data, so retention falls and acquisition becomes more expensive; if card data was involved, PCI DSS status and the ability to take card payments could be withdrawn, which threatens the business itself. The long-term impact usually exceeds the immediate fine.' }
      ]
    },
    {
      id: '5.4', title: 'Technical change management',
      must: [
        'Internal triggers for change: organisational restructuring, expansion, downsizing, and new strategic objectives (diversification, rebranding, additional features or services).',
        'External triggers (PESTLE): Political — change of government, conflict, shifting priorities. Economic — new services, recession, inflation, interest rates, consumer trends, new competitors, entering new markets. Social — demographics, market/social trends, remote working, cultural expectations. Technological — new technologies, retirement of obsolete technology, system failure, zero-day vulnerabilities. Legal — new or changed legislation. Environmental — sustainability, pandemics, natural disasters.',
        'Ways organisations respond: new/amended policies; new/amended business processes (staffing numbers, delivery schedules, opening hours); new/amended products or services (brand new, next generation, or minor updates); new or improved digital systems (back-end and customer-facing); improved training; restructuring (management structure, redrawing boundaries).',
        'Change advisory board (CAB): prioritises and reviews change requests, runs the stages of approval, monitors the change process (collating and analysing change data, checking implementation, acting to accelerate change) and provides feedback.',
        'The change management process: identify the type of change (new system or amendment) → define the changes using SMARTER objectives → identify the impact (measure/forecast and analyse positive and negative) → allocate resources (budget, time, staffing, hardware and software) → identify and communicate risks and desired impacts to stakeholders to gain acceptance and ensure compliance → configure the new system/process (integration with legacy systems, maintaining service during change) → fully test it (reproducible results, a test environment mirroring live) → implement it → document it → plan rollback → identify training needs → monitor progress with a post-implementation review, using version control software throughout.',
        'SMARTER = Specific, Measurable, Achievable, Realistic, Time-bound, Evaluated, Reviewed.',
        'Four implementation methods — learn the trade-offs, they are examined constantly:',
        '• Direct (big bang): old system off, new system on. Cheapest and fastest; no fallback, so a failure stops the business.',
        '• Parallel: both run together until confidence is gained. Safest — outputs can be compared and the old system is a fallback; but doubles the workload and cost.',
        '• Phased: introduced module by module. Problems are contained and staff learn gradually; takes longer and the two systems must interoperate during the transition.',
        '• Pilot: full system in one site/department first. Real-world proof at limited risk; slower rollout and the pilot site may not represent everywhere else.',
        'Documenting change: ensure requirement traceability including responsibility and accountability, keep information up to date, record all decisions, retain change documentation and produce user training manuals.',
        'Rollback planning: backup methodology, backup location, and a recovery plan — so a failed change can be reversed without data loss.',
        'Feasibility of a digital project — benefits and drawbacks (financial savings, cost of the change, impact on processes such as productivity, communication and security, new products, reputation); risks (workforce resistance to change, misuse of new systems, inadequate support or knowledge, disruption during implementation); constraints (budget, time, human and technological resources).'
      ],
      terms: [
        { t: 'Change advisory board (CAB)', d: 'A group that reviews, prioritises and approves proposed changes and monitors their implementation.' },
        { t: 'SMARTER objectives', d: 'Specific, Measurable, Achievable, Realistic, Time-bound, Evaluated and Reviewed objectives.' },
        { t: 'Parallel implementation', d: 'Running the old and new systems at the same time until the new one is proven.' },
        { t: 'Phased implementation', d: 'Introducing a new system one part at a time.' },
        { t: 'Pilot implementation', d: 'Introducing the complete new system in one location or department before rolling it out fully.' },
        { t: 'Direct changeover', d: 'Switching off the old system and switching on the new one at a single point in time.' },
        { t: 'Rollback plan', d: 'A prepared procedure for reverting to the previous system if a change fails.' },
        { t: 'Requirement traceability', d: 'Being able to link each requirement to the design, code and test that satisfies it, with named responsibility.' },
        { t: 'Feasibility', d: 'An assessment of whether a project is achievable within its benefits, risks and constraints.' }
      ],
      exam: [
        { marks: 9, q: 'A hospital is replacing its patient records system. Evaluate the most appropriate implementation method.',
          a: 'Direct changeover would be cheapest and quickest but is unacceptable here: if the new system fails there is no fallback and clinicians would be unable to access patient records, creating a direct risk to patient safety. Parallel running keeps the old system available and allows outputs to be compared for accuracy, which is a strong safeguard for critical data, but it requires every record to be entered twice, which doubles clinical admin workload in an already pressured environment and increases the chance of the two systems diverging. Phased implementation introduces modules such as appointments first, then prescribing, then records; problems are contained to one module and staff learn gradually, but the old and new systems must exchange data during a long transition, which is technically complex. Pilot implementation runs the full system in one ward or department, giving real-world evidence at limited risk and creating trained "super-users" who can support the wider rollout. Judgement: a pilot followed by a phased rollout is most appropriate, combined with a tested rollback plan and full backups, because it limits risk to patients while still proving the complete system before it is trusted hospital-wide.' },
        { marks: 6, q: 'Explain why staff resistance is a risk when implementing a new digital system, and how it can be reduced.',
          a: 'Staff may fear job losses through automation, feel their existing skills are devalued, or resent extra workload during transition; resistant staff work around the new system, continue using old processes or enter data poorly, which undermines data quality and the benefits case (3). It can be reduced by communicating the reasons for and benefits of the change early, involving staff in requirements gathering so they influence the design, providing training and refresher courses matched to identified training needs, using a phased or pilot approach so change is gradual, and providing visible support during and after go-live (3).' }
      ]
    }
  ]
},

/* ───────────────────────── Content area 6 ───────────────────────── */
{
  id: 'ca6', num: 6, paper: 2, title: 'Data',
  blurb: 'How data is categorised, stored, quality-assured, moved and analysed. Lots of definitions — ideal flashcard territory — plus judgement questions on choosing formats and models.',
  topics: [
    {
      id: '6.1', title: 'Data, information and knowledge',
      must: [
        'Data = raw, unprocessed facts and figures with no context (e.g. 37).',
        'Information = data that has been processed and given context so it has meaning (e.g. 37 orders were placed on Tuesday).',
        'Knowledge = information combined with experience and understanding, used to make decisions (e.g. Tuesday order spikes follow the weekly email, so send it on Mondays).',
        'Sources of data: humans (surveys, forms); AI/machine learning — beware the feedback loop where AI-generated data is used to train the next model, amplifying errors and bias; sensors (temperature, accelerometer, vibration, sound, light, pressure); IoT smart objects (thermostats, lights, security cameras, trackers); transactions (customer data, membership, timing, basket).',
        'Metrics for the value of data: quantity (enough of it), timeframe (how current), source (how trustworthy the origin), veracity (how accurate and truthful it is).',
        'Ethical data practice: collect only what is needed, be transparent about use, obtain consent, avoid bias, anonymise where possible, store securely and delete when no longer needed.',
        'How organisations use data: analysis to identify patterns; system performance analysis (load, outage, throughput, status); user monitoring (login/logout, resources accessed); targeted marketing (discounts, upselling); threat/opportunity assessment (competitors, security, compliance).'
      ],
      terms: [
        { t: 'Data', d: 'Raw, unprocessed facts and figures with no context.' },
        { t: 'Information', d: 'Data that has been processed and given context so that it has meaning.' },
        { t: 'Knowledge', d: 'Information combined with experience and understanding that can be acted upon.' },
        { t: 'Veracity', d: 'The accuracy and truthfulness of data.' },
        { t: 'Feedback loop (AI)', d: 'Where a system is trained on its own generated outputs, reinforcing existing errors and bias.' }
      ],
      exam: [
        { marks: 3, q: 'Using an example, explain the difference between data, information and knowledge.',
          a: 'Data is the raw figure with no context, e.g. 4.2 (1). Information is that figure processed and given context, e.g. the average delivery time in March was 4.2 days (1). Knowledge is applying experience to that information to act, e.g. knowing that customers cancel above 4 days, so a second courier is needed in March (1).' }
      ]
    },
    {
      id: '6.2', title: 'Transforming data, taxonomy and data types',
      must: [
        'Three methods of transforming data: manipulating (changing its form or arrangement — sorting, filtering, merging, reformatting), analysing (examining it to find patterns and meaning), processing (performing operations to produce an output).',
        'Quantitative data = numeric, measurable, and structured. Qualitative data = descriptive/opinion-based, and unstructured.',
        'Structured data has a defined format and fields (a database table) so it can be searched and queried directly. Unstructured data (free-text feedback, images, audio, video) has no predefined model and must be stored and retrieved as a single object, or codified into structured data (e.g. coding open comments into themes).',
        'Representations of quantitative data: discrete (whole, countable values — number of orders), continuous (any value within a range, from measurement — temperature 21.35°C), categorical (values that fall into named groups — small/medium/large).',
        'Common data types in data systems: integer, real, character, string, Boolean, date, and BLOB (binary large object — an image, audio or video file stored as binary).',
        'Data type choice affects storage size, whether arithmetic or sorting is possible, and what validation can be applied. Dates stored as strings cannot be sorted or compared correctly.'
      ],
      terms: [
        { t: 'Quantitative data', d: 'Numeric data that can be measured and counted; it is structured.' },
        { t: 'Qualitative data', d: 'Descriptive, opinion-based data; it is unstructured.' },
        { t: 'Structured data', d: 'Data organised into a predefined model with defined fields, so it is easily searchable.' },
        { t: 'Unstructured data', d: 'Data with no predefined model, stored and retrieved as a single object.' },
        { t: 'Discrete value', d: 'A countable whole-number value.' },
        { t: 'Continuous value', d: 'A measured value that can take any value within a range.' },
        { t: 'BLOB', d: 'Binary large object — a data type for storing large binary items such as images or video.' }
      ],
      exam: [
        { marks: 4, q: 'A survey collects a star rating out of 5 and a free-text comment. Explain how each would be categorised and stored.',
          a: 'The star rating is quantitative, discrete and structured, stored as an integer field so it can be averaged, sorted and charted directly (2). The comment is qualitative and unstructured, stored as a string/text object retrieved as a whole; to analyse it, it must first be codified into structured data such as theme categories or a sentiment score (2).' }
      ]
    },
    {
      id: '6.3', title: 'Data formats and storage structures',
      must: [
        'JSON — key:value text format, nested, human-readable, the standard for APIs and web data exchange. Compact and easy to parse in most languages.',
        'CSV — comma-separated values, one record per line. Very small and universally supported (spreadsheets, pandas) but has no data types, no nesting and breaks if the data itself contains commas.',
        'XML — tags describing structured, nested data. Self-describing and validatable against a schema, but verbose so file sizes are larger than JSON.',
        'Text file (.txt) — plain unstructured text, simple but with no structure for a program to rely on.',
        'ASCII — 7/8-bit character encoding covering English letters, digits and control characters (128 characters). Compact but cannot represent accented or non-Latin characters.',
        'UTF-8 — variable-width Unicode encoding that can represent virtually every character in every language, and is backwards compatible with ASCII. The default choice for anything international.',
        'Choosing a format: CSV for bulk tabular data and analysis; JSON for API/web exchange and nested data; XML where a strict schema and validation are required; UTF-8 as the encoding whenever names, addresses or languages beyond English are involved.',
        'Metadata = data about data (author, created date, file size, format, resolution, location). It provides description and context so files can be searched, sorted, managed and understood.',
        'File-based and directory-based structures: files organised into named folders — simple and familiar, but finding data relies on knowing the location and there are no relationships between items.',
        'Hierarchy-based structure: a tree of parent/child nodes with a single root. Navigation is fast down a branch and permissions can be inherited, but items that belong in two places do not fit, and moving a parent moves everything beneath it.'
      ],
      terms: [
        { t: 'JSON', d: 'JavaScript Object Notation — a lightweight text format storing key:value pairs, widely used by APIs.' },
        { t: 'CSV', d: 'Comma-separated values — a plain text format storing tabular data one record per line.' },
        { t: 'XML', d: 'Extensible Markup Language — a self-describing, tag-based format for structured data.' },
        { t: 'UTF-8', d: 'A variable-width Unicode character encoding capable of representing characters from all major languages.' },
        { t: 'ASCII', d: 'A character encoding representing 128 English characters and control codes.' },
        { t: 'Metadata', d: 'Data that describes other data, providing context such as author, date and format.' },
        { t: 'Hierarchical structure', d: 'A tree-like organisation of data with parent and child nodes descending from a single root.' }
      ],
      exam: [
        { marks: 4, q: 'A weather station sends readings to a mobile app via a web API. Justify the use of JSON rather than CSV.',
          a: 'JSON is self-describing — each value is labelled with a key such as "temperature", so the app can read fields by name and is not broken if the order of fields changes, whereas CSV relies entirely on column position (2). JSON also supports nested structures, so a reading can contain a nested location object and an array of hourly values in one response, which CSV\'s flat rows cannot represent; it is also natively parsed by JavaScript in the app (2).' }
      ]
    },
    {
      id: '6.4', title: 'Big data, quality assurance and maintenance',
      must: [
        'Big Data is defined by six Vs: volume (how much), variety (how many different types/sources), variability (how much its meaning or flow changes over time), velocity (how fast it arrives and must be processed), veracity (how accurate and trustworthy), value (how useful it is to the organisation).',
        'Impact of each: high volume needs scalable storage such as a data lake; high variety needs flexible schemas and integration; high velocity needs stream processing rather than batch; poor veracity means cleaning and validation before analysis; low value means the cost of storing it may not be justified.',
        'Data quality assurance methods: validation (data is sensible/in the right form), verification (matches the original source), reliability (consistent results over repeated collection), consistency (the same value is the same everywhere it is stored), integrity (data has not been corrupted or altered without authorisation), redundancy (duplicate copies — deliberate redundancy protects against loss, but unintended redundancy causes conflicting versions).',
        'Factors affecting how data is maintained: time (how long cleaning and updating takes), skills (staff capable of the work), cost (storage, tools and staffing).',
        'Data wrangling = transforming raw data into a usable form. Five steps: structure (put it into a consistent shape), clean (remove duplicates, fix errors, handle missing values), validate (check it against rules), enrich (add data from other sources), output (deliver it in the required format for analysis).',
        'Core functions of a data system: input, search, save, integrate, organise (index), output, and feedback loop.',
        'Data entry errors: transcription errors (mis-reading/mis-typing a value, e.g. 5 for S) and transposition errors (digits swapped, e.g. 3948 typed as 3489 — always divisible by 9, which is how check digits catch them).',
        'Avoiding entry errors: validation of user input, verification by double entry, drop-down menus and pre-filled data entry boxes (removing free typing removes most errors).',
        'Factors affecting data entry: time needed to create the screens, expertise needed to create them, and time needed to enter the data — better-designed screens cost more up front but reduce errors and entry time thereafter.'
      ],
      terms: [
        { t: 'Big Data', d: 'Datasets so large or complex that traditional processing is inadequate, described by the six Vs.' },
        { t: 'Velocity', d: 'The speed at which data is generated and must be processed.' },
        { t: 'Data integrity', d: 'Assurance that data is accurate and has not been altered or corrupted without authorisation.' },
        { t: 'Data redundancy', d: 'Duplication of data — deliberate for backup, or accidental causing inconsistency.' },
        { t: 'Data wrangling', d: 'Structuring, cleaning, validating, enriching and outputting raw data so it is fit for analysis.' },
        { t: 'Transcription error', d: 'An error made when copying or typing data incorrectly.' },
        { t: 'Transposition error', d: 'An error where two digits or characters are entered in the wrong order.' }
      ],
      exam: [
        { marks: 6, q: 'A supermarket collects loyalty card transactions from 500 stores. Explain how three of the six Vs affect how this data is stored and processed.',
          a: 'Volume: millions of transactions per day mean traditional single-server databases cannot cope, so scalable cloud storage such as a data warehouse or data lake is needed, with archiving of older data to control cost (2). Velocity: transactions arrive continuously and shelf-stock decisions need same-day figures, so at least near-real-time processing is required rather than a monthly batch (2). Veracity: scanning errors, returns and shared cards mean some records are inaccurate, so the data must be cleaned and validated during wrangling before analysis, otherwise buying decisions are based on incorrect patterns (2).' },
        { marks: 4, q: 'Describe two methods of reducing data entry errors on an order form.',
          a: 'Use drop-down menus for fields with a fixed set of values such as product size, so the user selects rather than types and an invalid or misspelled value cannot be entered (2). Apply validation to typed fields — for example a format check on the postcode and a range check on quantity — with a clear error message so mistakes are caught at the point of entry rather than corrupting the order (2).' }
      ]
    },
    {
      id: '6.5', title: 'Visualisation, data models and access',
      must: [
        'Visualisation formats: graphs (relationships/trends over time), charts (comparisons and proportions — bar, pie), tables (exact values), reports (detailed narrative plus figures), dashboards (live KPI overview for managers), infographics (simplified visual summary for a general audience).',
        'Choose the format on: the type of data, the intended audience, and the brief. A dashboard suits a manager needing at-a-glance status; a table suits an accountant needing exact figures; an infographic suits the public.',
        'Drawbacks: pie charts with many segments are unreadable; dashboards can oversimplify; infographics can mislead through truncated axes; tables of raw numbers hide trends.',
        'Data models — hierarchical: tree with one-to-many parent/child links. Fast to traverse downwards and simple, but cannot represent many-to-many relationships and restructuring is hard.',
        'Network model: records can have multiple parents, so many-to-many relationships are supported and navigation between related records is fast; but the structure is complex to design and maintain.',
        'Relational model: data in tables of rows and columns, linked by primary and foreign keys. Flexible querying with SQL, minimal redundancy through normalisation, and the industry standard; but joins across many tables can be slower and it requires careful design.',
        'Selecting a model depends on: efficiency of accessing individual items, efficiency of storage, and complexity of implementation.',
        'Drawing models: hierarchical and network as blocks, arrows and labels; relational as tables with rows, columns and labels showing the key relationships.',
        'Data access across platforms — permissions: authorisation, privileges, access rights, and rules.',
        'Access mechanisms: RBAC (role-based access control — permissions attach to a job role, so a new starter simply gets the role; simple to administer at scale but roles can become too broad); RuBAC (rule-based access control — access decided by rules such as time of day, location or IP; flexible and contextual but rules can conflict and are harder to audit); APIs (a defined interface allowing another system to request data without direct database access — controlled, auditable, uses keys/tokens; but a poorly secured API is a major vulnerability).',
        'Data analysis tools: data warehouse (structured, cleaned data organised for reporting), data lake (raw data of any type stored cheaply until needed), data mart (a subset of a warehouse for one department); data mining and reporting for analysis; business intelligence used for financial planning and analysis and for CRM (customer data analytics and communications).'
      ],
      terms: [
        { t: 'Dashboard', d: 'A single screen presenting live key metrics visually for at-a-glance monitoring.' },
        { t: 'Relational model', d: 'A data model storing data in linked tables of rows and columns using keys.' },
        { t: 'RBAC', d: 'Role-based access control — permissions granted according to a user\'s role in the organisation.' },
        { t: 'RuBAC', d: 'Rule-based access control — access granted or denied according to defined rules such as time or location.' },
        { t: 'API', d: 'Application programming interface — a defined way for one system to request data or services from another.' },
        { t: 'Data warehouse', d: 'A central repository of structured, cleaned data organised for reporting and analysis.' },
        { t: 'Data lake', d: 'A store holding large volumes of raw data in its native format until it is needed.' },
        { t: 'Data mart', d: 'A subset of a data warehouse focused on a single business area or department.' },
        { t: 'Data mining', d: 'Analysing large datasets to discover patterns and relationships.' }
      ],
      exam: [
        { marks: 6, q: 'A retailer wants to give store managers live sales figures and give the finance team exact monthly totals. Recommend a visualisation for each and justify your choice.',
          a: 'Store managers should be given a dashboard. It presents the KPIs they act on — sales against target, units sold, busiest hours — updating live and visually, so a manager can see at a glance whether to move staff to tills without interpreting raw figures. Its weakness is oversimplification, so a drill-down to detail should be available. The finance team should be given a tabular report. They need exact values for reconciliation and audit, where a chart\'s approximation is unusable, and a table can be exported to a spreadsheet for further calculation. Matching the format to the audience and purpose is the key decision in both cases.' }
      ]
    }
  ]
},

/* ───────────────────────── Content area 7 ───────────────────────── */
{
  id: 'ca7', num: 7, paper: 2, title: 'Digital environments',
  blurb: 'Hardware, software, networks, virtualisation, cloud and resilience. Networks (OSI/TCP-IP, protocols, topologies) is the densest part — learn the layer tables cold.',
  topics: [
    {
      id: '7.1', title: 'Hardware',
      must: [
        'Types of computer: personal computers (general purpose, user-facing); mobile devices — smartphones and tablets (portable, touch, battery and processing constrained); servers (high reliability, run continuously, serve many clients); embedded devices (a computer built into a product to do one dedicated job, e.g. a washing machine controller or router).',
        'Input devices (keyboard, mouse, scanner, sensors) get data in; output devices (monitor, printer, speaker, actuator) present results.',
        'Processor characteristics: number of cores (more cores = more tasks truly in parallel), clock speed (cycles per second — higher is faster per core), cache size (small very fast memory close to the CPU that reduces waiting for RAM), and mobile processors (designed for low power consumption and heat rather than peak speed).',
        'Main memory: RAM — volatile, read/write, holds the programs and data currently in use; more RAM means less swapping to disk. ROM — non-volatile, read-only, holds firmware such as the boot instructions.',
        'Secondary storage: magnetic (HDD — cheap per GB, high capacity, moving parts so slower and fragile), solid state (SSD — no moving parts, much faster, more expensive per GB, limited write cycles), optical (CD/DVD/Blu-ray — cheap removable distribution, low capacity, slow, increasingly obsolete).',
        'Motherboard connects all components and carries the buses; GPUs handle graphics and highly parallel work (also used for AI/ML); network interface devices connect via PCI or USB.',
        'Cooling: air cooling (fans and heatsinks — cheap, simple, noisier, less effective) and liquid cooling (better heat transfer, quieter under load, costlier with a leak risk). Servers and data centres depend on cooling for reliability.',
        'Sensors capture physical measurements (temperature, motion, light, pressure) for IoT and embedded systems.',
        'Exam skill: match hardware to a scenario and justify with a characteristic — "an SSD because the database is read constantly and access time matters more than cost per GB".'
      ],
      terms: [
        { t: 'Embedded device', d: 'A computer built into a larger product to perform one dedicated function.' },
        { t: 'RAM', d: 'Random access memory — volatile working memory holding programs and data currently in use.' },
        { t: 'ROM', d: 'Read-only memory — non-volatile memory holding permanent instructions such as firmware.' },
        { t: 'Cache', d: 'Small, very fast memory close to the processor holding frequently used data and instructions.' },
        { t: 'Clock speed', d: 'The number of processor cycles executed per second, measured in GHz.' },
        { t: 'Solid state drive', d: 'Secondary storage using flash memory with no moving parts, giving fast access times.' },
        { t: 'GPU', d: 'Graphics processing unit — a processor with many cores suited to parallel work such as graphics and machine learning.' }
      ],
      exam: [
        { marks: 4, q: 'A video editing workstation is being specified. Explain two hardware choices you would prioritise.',
          a: 'A large amount of RAM, because video editing holds high-resolution frames and effects in working memory; with insufficient RAM the system swaps to disk and playback stutters (2). A dedicated GPU, because rendering and effects are highly parallel tasks that a GPU\'s many cores process far faster than a CPU, cutting export times significantly (2). (An SSD for fast read/write of large files is an equally valid answer.)' }
      ]
    },
    {
      id: '7.2', title: 'Software',
      must: [
        'Operating system types — batch: non-interactive, high volume, jobs scheduled and run without user interaction (payroll, billing runs). Multitasking: concurrent execution of multiple tasks using time-slicing and interrupts. Real-time (RTOS): guarantees a response within a strict time limit, used for monitoring/control and transaction processing (medical devices, industrial control). Network OS: manages resource sharing, user management and communication across a network. Mobile OS: for smartphones/tablets, lower processing requirements and optimised for battery life.',
        'Time-slicing = each process gets a small slice of processor time in turn; interrupts = signals that make the processor suspend the current task to deal with something urgent.',
        'Utilities: file management (organise, move, search files), defragmenters (reorganise fragmented files on magnetic drives to speed access — not used on SSDs), file compression (reduce file size for storage/transfer), package managers (install, update and remove software and resolve dependencies), protection software (anti-malware, firewall), backup software (scheduled copies for recovery).',
        'Code development tools — IDE: combines code editing (syntax highlighting, autocomplete), debugging tools (breakpoints, step through, watch variables) and screen design tools in one application; speeds development and reduces errors.',
        'Compiler: translates the whole source program into machine code before execution. Fast execution afterwards, source code not distributed, errors reported all at once; but must be recompiled after every change and the output is platform-specific.',
        'Interpreter: translates and executes line by line. Immediate feedback, easy to test small changes, portable across platforms; but slower at run time and the source is needed to run it.',
        'Application software: word processors, spreadsheets, databases, email and project management software (e.g. Gantt charts, task allocation, resource tracking — directly relevant to ESP Task 1).'
      ],
      terms: [
        { t: 'Real-time operating system', d: 'An OS guaranteeing a response within a strict time constraint, used for monitoring and control.' },
        { t: 'Time-slicing', d: 'Giving each process a small share of processor time in turn to give the appearance of simultaneous execution.' },
        { t: 'Interrupt', d: 'A signal causing the processor to suspend its current task to handle a higher-priority event.' },
        { t: 'IDE', d: 'Integrated development environment — software combining editor, debugger and build tools.' },
        { t: 'Compiler', d: 'A translator converting an entire source program into machine code before it is run.' },
        { t: 'Interpreter', d: 'A translator that converts and executes source code line by line.' },
        { t: 'Package manager', d: 'A utility that installs, updates and removes software and manages its dependencies.' }
      ],
      exam: [
        { marks: 6, q: 'Compare the use of a compiler and an interpreter for a student learning to program and for a commercial software product.',
          a: 'For a student learning to program, an interpreter is better: code runs immediately without a build step, errors are reported as each line executes so the cause is easy to locate, and small changes can be tested instantly, which supports experimentation. For a commercial product a compiler is better: translation happens once, so the delivered program executes much faster, and only the machine code is distributed, protecting the source from copying and reverse engineering. The compiler\'s drawbacks — recompiling after every change and producing platform-specific output — matter far less for a finished product than the performance and protection gains.' }
      ]
    },
    {
      id: '7.3', title: 'Networks',
      must: [
        'Benefits of networking: share files, hardware (printers) and internet access; centralised backup, security and software updates; communication and collaboration; central user account management. Drawbacks: cost of hardware and expertise; malware spreads across the network; a server or link failure affects many users; security risk from more access points; performance drops when congested.',
        'Network types by scale: PAN (personal — one person, e.g. Bluetooth), LAN (one site — office/school), MAN (a town or city), WAN (geographically dispersed — the internet is the largest), VPN (an encrypted tunnel across a public network so remote users appear to be on the private LAN).',
        'Connectivity — wired copper/ethernet: cheap, easy to install, adequate speed; but distance-limited and suffers electromagnetic interference. Fibre-optic: very high bandwidth over long distances, immune to interference, secure; but expensive and fragile, needing skilled installation. Wireless access points: mobility and no cabling; but shared bandwidth, interference and obstruction from walls, and greater security exposure.',
        'Topologies — star: every node connects to a central switch. Reliable (one cable failure affects one node), easy to add nodes, good performance; but needs more cable and the central device is a single point of failure. Mesh: nodes interconnect with multiple routes. Highly resilient with self-healing routing and no single point of failure; but expensive and complex to configure. Tree: hierarchical groups of stars — scales well and segments traffic, but failure of a higher node isolates a whole branch.',
        'Physical topology = how devices are actually cabled; logical topology = the path data actually takes. A network can be physically a star but logically a bus.',
        'Network models — client-server: central servers hold data and services; centralised security, backup and administration, scales well; but costly and the server is a single point of failure. Peer-to-peer: each device shares its own resources; cheap and simple for small numbers; but no central backup or security and performance degrades as it grows. Thin client: minimal processing on the device with the work done on a server; cheap endpoints, centrally managed and secure; but totally dependent on the server and the network.',
        'Components: server (provides services), client (requests them), router (connects different networks and routes packets between them), switch (connects devices within a LAN and forwards frames only to the intended port), internet connection/backbone (the high-capacity links carrying long-distance traffic).',
        'OSI seven layers (top to bottom): Application (user-facing services — HTTP, FTP, SMTP), Presentation (translation, encryption, compression), Session (establishing/maintaining/ending sessions), Transport (end-to-end delivery, segmentation, TCP/UDP), Network (logical addressing and routing — IP), Data link (framing and MAC addressing across a link — Ethernet), Physical (the actual signals and cabling). Mnemonic: All People Seem To Need Data Processing.',
        'TCP/IP four layers: Application (combines OSI application/presentation/session), Transport (TCP, UDP), Internet (IP, routing), Network/link (physical transmission).',
        'Packets: a data packet has a header (source and destination IP addresses, packet number, protocol), the payload (the data itself) and a trailer (error check such as CRC). Packet switching splits data into packets that may take different routes and are reassembled in order at the destination — efficient use of the network and resilient to a failed link, but packets can be lost through congestion, hardware failure or interference, and lost packets are re-requested.',
        'CRC (cyclic redundancy check): a calculated value sent with the packet and recalculated on arrival; a mismatch means corruption and retransmission.',
        'Protocols: HTTP (web pages), HTTPS (web pages encrypted with TLS), SMTP (sending mail), POP (downloads mail and typically removes it from the server), IMAP (keeps mail on the server, synchronising across devices), FTP (file transfer), SFTP (secure file transfer), DHCP (automatically allocates IP addresses), DNS (resolves domain names to IP addresses), RIP and OSPF (routing protocols — RIP is simple and hop-count based, OSPF is faster-converging and better on large networks).',
        'Bandwidth = how much data can be transferred per second; latency = the delay before transfer begins. High bandwidth with high latency still feels slow for interactive work like remote desktop or gaming; low bandwidth limits large transfers and video quality.'
      ],
      terms: [
        { t: 'LAN', d: 'Local area network — a network covering a single site such as an office or school.' },
        { t: 'WAN', d: 'Wide area network — a network spanning a large geographical area.' },
        { t: 'VPN', d: 'Virtual private network — an encrypted tunnel across a public network giving secure access to a private one.' },
        { t: 'Star topology', d: 'A layout where every node connects to a central switch or hub.' },
        { t: 'Mesh topology', d: 'A layout where nodes have multiple interconnections, providing alternative routes.' },
        { t: 'Switch', d: 'A device connecting devices on a LAN and forwarding frames only to the intended destination port.' },
        { t: 'Router', d: 'A device that connects separate networks and forwards packets between them using IP addresses.' },
        { t: 'OSI model', d: 'A seven-layer reference model describing how data is transmitted between systems.' },
        { t: 'Packet switching', d: 'Splitting data into packets that are routed individually and reassembled at the destination.' },
        { t: 'CRC', d: 'Cyclic redundancy check — an error-detection value used to identify corrupted packets.' },
        { t: 'DNS', d: 'Domain name system — resolves human-readable domain names into IP addresses.' },
        { t: 'DHCP', d: 'Dynamic host configuration protocol — automatically assigns IP addresses to devices on a network.' },
        { t: 'Bandwidth', d: 'The maximum amount of data that can be transferred per unit of time.' },
        { t: 'Latency', d: 'The delay between sending a request and the start of the response.' }
      ],
      exam: [
        { marks: 4, q: 'Explain the difference between IMAP and POP and recommend one for a user with a phone, laptop and tablet.',
          a: 'POP downloads messages to the device and typically removes them from the server, so mail exists only on the device that collected it (1). IMAP keeps messages on the server and synchronises the mailbox, so reads, deletions and folders appear on every device (1). IMAP should be recommended (1) because the user accesses mail from three devices and needs a consistent mailbox on all of them; POP would leave messages stranded on whichever device downloaded them first (1).' },
        { marks: 6, q: 'A small office of 12 staff is choosing between a peer-to-peer and a client-server network. Recommend one, justifying your choice.',
          a: 'Peer-to-peer is cheaper — no server hardware, licences or administrator — and is quick to set up, which suits a small office. However each machine holds its own data, so backups depend on individual users, security permissions are set per machine, and finding a file means knowing which computer holds it; performance also degrades as machines are used both as workstations and as file sources. Client-server centralises files, backups, antivirus and user accounts, so a single backup protects everything, permissions are applied consistently, and staff can log in from any machine. For 12 staff with shared documents, the administrative and data-protection advantages of client-server outweigh the higher cost, so client-server is recommended — with the caveat that the server is a single point of failure and needs redundancy and a tested restore procedure.' }
      ]
    },
    {
      id: '7.4', title: 'Virtual and cloud environments',
      must: [
        'Virtual machine = a software-based computer running on physical hardware, with its own OS. Virtual clients (virtual PC, virtual switch, virtual router) and virtual servers.',
        'Hypervisor = the software that creates and manages VMs and allocates physical resources to them. Type 1 (bare metal) runs directly on the hardware — faster, more secure, used in data centres. Type 2 (hosted) runs as an application on top of an existing OS — easier to set up, ideal for testing on a desktop, but slower because requests pass through the host OS.',
        'Key features of virtual environments: increased security, managed execution, sharing, aggregation, emulation, isolation and portability.',
        'Benefits: cost effective for large environments (many VMs on fewer physical machines); easy management (create, clone, snapshot, delete in software); resilience (a VM can be moved to other hardware); potentially lower carbon footprint; improved disaster recovery (restore a whole machine from a snapshot); better testing environments (safe isolated sandboxes, easy rollback); useful for education and training.',
        'Drawbacks: extra hardware load because the host runs many guests plus the hypervisor; slower execution than running directly on hardware; potential for false representation of performance — software tested in a VM may behave differently on real hardware.',
        'Cloud types: private (infrastructure dedicated to one organisation — more control and security, higher cost) and public (shared multi-tenant infrastructure from a provider — cheap and elastic, less control).',
        'Cloud benefits: portability (access from anywhere), elasticity (scale resources up and down with demand), fewer storage limitations, cost effectiveness (pay for what you use, no capital hardware spend).',
        'IaaS — provider manages virtualisation and hardware (servers, network, storage); the client manages the OS and middleware, runtime, data, applications and user accounts. Most control, most responsibility.',
        'PaaS — provider also manages the OS/middleware and runtime; the client manages applications, data and user accounts. Developers deploy code without maintaining servers.',
        'SaaS — provider manages everything up to the application; the client manages only user accounts and their data. Least effort, least control (e.g. a hosted email or CRM product).',
        'Memory aid: as you move IaaS → PaaS → SaaS, responsibility transfers from the client to the provider.'
      ],
      terms: [
        { t: 'Virtual machine', d: 'A software emulation of a computer that runs its own operating system on shared physical hardware.' },
        { t: 'Hypervisor', d: 'Software that creates and manages virtual machines and allocates physical resources to them.' },
        { t: 'Type 1 hypervisor', d: 'A hypervisor running directly on the hardware without a host operating system.' },
        { t: 'Elasticity', d: 'The ability of cloud resources to expand and contract automatically with demand.' },
        { t: 'IaaS', d: 'Infrastructure as a Service — the provider supplies virtualised hardware; the client manages the OS upwards.' },
        { t: 'PaaS', d: 'Platform as a Service — the provider supplies hardware, OS and runtime; the client manages applications and data.' },
        { t: 'SaaS', d: 'Software as a Service — the provider supplies the complete application; the client manages only accounts and data.' }
      ],
      exam: [
        { marks: 6, q: 'A start-up is deciding between running its own servers and using PaaS. Discuss the factors it should consider.',
          a: 'PaaS removes the need to buy, house, patch and maintain servers, so the start-up avoids large upfront capital cost and does not need infrastructure staff — developers deploy code and the provider manages the OS and runtime. Resources scale elastically, so a sudden increase in users does not require new hardware, and costs track usage. Against this, the start-up gives up control of the platform: it must accept the provider\'s supported runtimes and update schedule, and there is a risk of vendor lock-in if the application uses provider-specific services. Data is held by a third party, so the provider\'s security and data location must satisfy data protection obligations, and an outage at the provider takes the service down with no ability to intervene. For a start-up with limited capital and no infrastructure team, PaaS is normally the right choice, provided the contract, data location and an exit strategy are checked first.' }
      ]
    },
    {
      id: '7.5', title: 'Resilient digital environments',
      must: [
        'Benefits of resilience: increased security (data security in storage and transfer, reduced vulnerabilities); increased reputation (protecting brand/image and retaining customer confidence); reduction in downtime.',
        'Software updates/upgrades: planned updates and patches released in response to newly discovered vulnerabilities. Unpatched software is one of the most common causes of a breach.',
        'Hardware replacement: rolling replacement plans so equipment is replaced before it fails and support ends, plus secure disposal so data cannot be recovered from retired media.',
        'Data and system redundancy: duplicate components and copies of data (e.g. RAID, clustered servers) so a single failure does not cause loss or downtime.',
        'Device hardening: removing unneeded ports, applications, permissions and access to reduce the attack surface.',
        'Backup systems and recovery procedures: onsite (fast to restore, but destroyed by the same fire/flood), remote/offsite (survives a site disaster, slower to retrieve), cloud (offsite, automated, scalable, but depends on connectivity and a third party). The 3-2-1 rule — three copies, on two media, one offsite — is good practice.',
        'Recovery sites: hot site (fully equipped and running, near-instant failover, very expensive), warm site (equipment in place, data restored from backup, hours to switch), cold site (space and power only, days to become operational, cheapest).',
        'Standard operating procedures with effective staff training: induction, training on new digital systems, and training on new or updated policies — resilience fails when people do not follow the process.',
        'Answer technique: for "how would you improve resilience", give a technical control, a procedural control and a people control.'
      ],
      terms: [
        { t: 'Resilience', d: 'The ability of a system to continue operating, or recover quickly, when a failure or attack occurs.' },
        { t: 'Device hardening', d: 'Reducing the attack surface by removing unnecessary ports, software, permissions and access.' },
        { t: 'Redundancy', d: 'Duplicating components or data so that a single failure does not cause loss of service.' },
        { t: 'Hot site', d: 'A fully equipped, continuously running alternative site allowing near-immediate failover.' },
        { t: 'Cold site', d: 'A basic alternative site with space and power but no configured equipment, requiring days to become operational.' },
        { t: 'Patch', d: 'A software update released to fix a defect or close a security vulnerability.' }
      ],
      exam: [
        { marks: 6, q: 'An online retailer cannot afford any downtime during December. Recommend three measures to improve resilience and justify each.',
          a: 'Server and data redundancy with load balancing across clustered servers, so that if one server fails the others continue serving customers and no sale is lost — essential when a single outage in peak season costs a month of revenue. Offsite/cloud backups on a tested restore procedure, following the 3-2-1 rule, so that a fire, flood or ransomware attack at the main site does not destroy both the live data and its only copy; the restore must be tested because an untested backup is not a backup. A planned patching and change-freeze policy — apply security patches before December and freeze non-critical changes during peak — because unpatched software is a leading cause of breach, but an untested change deployed at peak is itself a leading cause of outage. A warm or hot standby site could be added if the cost is justified by the revenue at risk.' }
      ]
    }
  ]
},

/* ───────────────────────── Content area 8 ───────────────────────── */
{
  id: 'ca8', num: 8, paper: 2, title: 'Security',
  blurb: 'Confidential information, threats and vulnerabilities, mitigation, and the CIA/IAAA models. Long lists — but questions are usually "identify the threat, explain the impact, recommend mitigation", so learn threats in threat→impact→mitigation triples.',
  topics: [
    {
      id: '8.1', title: 'Confidential information',
      must: [
        'HR information: salaries and benefits, staff personal details.',
        'Commercially sensitive information: client details, stakeholder details, intellectual property, sales numbers, contracts.',
        'Access information: usernames, passwords, MFA details, PINs, access codes, passphrases, biometric data.',
        'Why salaries are kept confidential: to stop competitors offering higher wages to attract staff, and to stop employees comparing salaries and demanding comparable pay.',
        'Why staff details are kept confidential: to protect privacy and stop competitors contacting staff directly to poach them.',
        'Why IP is kept confidential: to prevent competitors copying designs. Why client details: to stop competitors approaching clients and to protect client privacy.',
        'Why access information is kept confidential: to prevent unauthorised access to systems.',
        'Impact of failing to maintain privacy and confidentiality: non-compliance with regulations including loss of licence to practise; loss of trust; damage to the organisation\'s image; financial loss (fines, refunds, loss of earnings and terminated contracts); legal action; and reduced security going forward.'
      ],
      terms: [
        { t: 'Confidentiality', d: 'Ensuring information is only accessible to those authorised to see it.' },
        { t: 'Intellectual property', d: 'Creations of the mind — designs, code, brands — that an organisation owns rights in.' },
        { t: 'Biometric data', d: 'Personal data derived from physical characteristics such as fingerprints or facial features.' },
        { t: 'Passphrase', d: 'A longer sequence of words used instead of a password, easier to remember and harder to crack.' }
      ],
      exam: [
        { marks: 4, q: 'Explain two reasons why an organisation must keep salary information confidential.',
          a: 'If competitors learn what staff are paid they can target key employees with higher offers, so the organisation loses skilled staff and the cost of replacing them (2). If employees see each other\'s salaries it can cause disputes and demands for comparable pay, damaging morale and potentially exposing the organisation to equal pay claims (2).' }
      ]
    },
    {
      id: '8.2', title: 'Threats and vulnerabilities',
      must: [
        'Botnet — a network of infected machines controlled remotely, used to send spam or carry out DDoS attacks. Mitigation: anti-malware, patching, network monitoring for unusual outbound traffic.',
        'DoS/DDoS — flooding a service with traffic so genuine users cannot access it. Impact: lost sales, reputational damage. Mitigation: traffic filtering, rate limiting, DDoS protection services, scalable cloud capacity.',
        'Malicious hacking — by hacktivists, nation states, organised crime or individuals. Techniques include password cracking/brute force, cross-site scripting (injecting script into a web page viewed by others), SQL injection (entering SQL into an input field to read or destroy database contents) and buffer overflow (sending more data than a buffer can hold to overwrite memory and run code).',
        'SQL injection and buffer overflow are both prevented by validating and sanitising all input (and using parameterised queries) — the link between validation and security is examined regularly.',
        'Malware: viruses (attach to a file, need a host and user action), worms (self-replicating across a network with no user action), key loggers (record keystrokes to steal credentials), ransomware (encrypts data and demands payment), spyware (secretly gathers information), remote access trojans (give an attacker remote control).',
        'Social engineering — manipulating people rather than technology: phishing (mass fraudulent email), spear phishing (targeted at a named individual using researched detail), smishing (by SMS), vishing (by voice call), pharming (redirecting a user to a fake site via DNS poisoning), watering hole attacks (compromising a site the target group is known to use), USB baiting (leaving infected drives to be picked up and plugged in). Mitigation is mainly staff training, reporting procedures, MFA and email filtering.',
        'Other threats: DNS attack/redirection of traffic; insecure APIs; man-in-the-middle attacks (intercepting traffic between two parties — mitigated by HTTPS/TLS and avoiding open Wi-Fi); open/unsecured Wi-Fi networks.',
        'Technical vulnerabilities: inadequate security processes (weak encryption, poor password policy, failure to use MFA); out-of-date components — hardware, software (unsupported, incompatible with legacy systems, zero-day bugs) and firmware.',
        'Human threats: human error (mitigate with clear file properties, confirmation boxes and staff training); malicious employee (immediate removal from premises and immediate suspension of accounts); disguised criminal (accompany all visitors and check identification); poor cyber hygiene (lock unattended machines, never write down passwords, good password management).',
        'Physical vulnerabilities: lack of access control (use entry control systems); poor access control (prevent tailgating, use complex codes, change them regularly, monitor and audit access to secure areas); nature of the location (shoulder surfing, environmental threats, vandalism); poor system robustness (use rugged machines); and natural disasters.',
        'Impact of threats and vulnerabilities: loss/leaking of sensitive data, unauthorised access to digital systems, data corruption, disruption of service, and unauthorised access to restricted physical areas.'
      ],
      terms: [
        { t: 'DDoS', d: 'Distributed denial of service — flooding a system from many sources so legitimate users cannot access it.' },
        { t: 'SQL injection', d: 'Entering SQL commands into an input field so they are executed against the database.' },
        { t: 'Buffer overflow', d: 'Sending more data than a memory buffer can hold so adjacent memory is overwritten, potentially executing attacker code.' },
        { t: 'Cross-site scripting', d: 'Injecting malicious script into a web page so it runs in other users\' browsers.' },
        { t: 'Ransomware', d: 'Malware that encrypts data and demands payment for its release.' },
        { t: 'Worm', d: 'Self-replicating malware that spreads across networks without user action.' },
        { t: 'Spear phishing', d: 'A targeted fraudulent message aimed at a specific individual using researched personal detail.' },
        { t: 'Pharming', d: 'Redirecting users from a genuine website to a fraudulent one, typically by poisoning DNS.' },
        { t: 'Man-in-the-middle attack', d: 'Intercepting communication between two parties without their knowledge.' },
        { t: 'Zero-day vulnerability', d: 'A flaw exploited before the vendor has released a fix.' },
        { t: 'Tailgating', d: 'Following an authorised person through a controlled door to gain physical access.' },
        { t: 'Shoulder surfing', d: 'Observing someone entering credentials or viewing data by watching over their shoulder.' }
      ],
      exam: [
        { marks: 6, q: 'An employee receives an email appearing to be from the finance director asking for an urgent bank transfer. Identify the attack, explain why it may succeed, and describe two mitigations.',
          a: 'This is spear phishing — a targeted social engineering attack using a known name and a plausible business context (1). It may succeed because it exploits authority and urgency: the employee is reluctant to question a director and is pressured not to check, and the sender address may be spoofed or very close to the genuine one (2). Mitigation 1: staff training and simulated phishing so employees recognise the pattern and know to verify unusual payment requests through a separate, known channel (1). Mitigation 2: a procedural control requiring dual authorisation for payments above a threshold, so no single employee can transfer funds on one instruction (1), supported by email filtering and external-sender banners (1).' },
        { marks: 4, q: 'Explain how unvalidated user input can lead to a security breach.',
          a: 'If input is passed straight to a database query, an attacker can enter SQL such as \' OR 1=1 -- so the query returns or deletes records they should not be able to reach — an SQL injection (2). Similarly, input longer than the allocated buffer can overwrite adjacent memory in a buffer overflow, potentially allowing attacker-supplied code to execute; validating length, type and format and using parameterised queries prevents both (2).' }
      ]
    },
    {
      id: '8.3', title: 'Threat mitigation',
      must: [
        'Security settings on hardware and software — configure securely rather than leaving defaults (default passwords are a known attack route).',
        'Anti-malware software: scans files and traffic against signatures and behaviour; actions include quarantine, disinfect and delete. Must be kept updated to detect new threats; cannot catch a true zero-day alone.',
        'Intrusion detection: monitors network/host activity for suspicious patterns and alerts. Detects, but does not by itself prevent.',
        'Encryption: hashing (one-way — used to store passwords so the plaintext is never held), symmetric (one shared key — fast, good for bulk data, but the key must be exchanged securely), asymmetric (public/private key pair — solves key exchange and enables digital signatures, but slower). HTTPS uses asymmetric encryption to exchange a symmetric key, then symmetric for the session.',
        'User access policies, staff vetting, staff training, software-based access control, and device hardening — control who can do what and reduce the attack surface.',
        'Backups: full (complete copy — slowest to take, fastest to restore), incremental (only what changed since the last backup of any type — fastest to take, slowest to restore as every increment is needed), differential (everything changed since the last full backup — middle ground). Store copies safely and offsite; test restores.',
        'Software updates and firmware/driver updates close known vulnerabilities; air gaps physically isolate critical systems from untrusted networks; certification of APIs ensures only trusted integrations connect; VPNs encrypt remote access; MFA requires two or more of something you know/have/are, and defeats stolen-password attacks; password managers allow long unique passwords per site.',
        'Port scanning identifies open ports so unnecessary ones can be closed (also used by attackers). Penetration testing simulates an attack to find weaknesses — ethical hacking is authorised and reported to the owner; unethical hacking is unauthorised and illegal under the Computer Misuse Act.',
        'Internet security processes: firewall configuration with rules for inbound and outbound traffic, traffic type, application and IP address; network segregation (virtual, physical or an offline network) so a breach in one segment cannot reach another; network monitoring; and port scanning.',
        'Best answers combine layers: technical control + procedural control + people control (defence in depth).'
      ],
      terms: [
        { t: 'Hashing', d: 'A one-way transformation of data into a fixed-length value, used to store passwords securely.' },
        { t: 'Symmetric encryption', d: 'Encryption using the same key to encrypt and decrypt, requiring secure key exchange.' },
        { t: 'Asymmetric encryption', d: 'Encryption using a public/private key pair, removing the need to share a secret key.' },
        { t: 'Multi-factor authentication', d: 'Requiring two or more independent factors — knowledge, possession or biometric — to authenticate.' },
        { t: 'Incremental backup', d: 'A backup containing only data changed since the previous backup of any type.' },
        { t: 'Differential backup', d: 'A backup containing all data changed since the last full backup.' },
        { t: 'Air gap', d: 'Physically isolating a system from unsecured networks so it cannot be reached remotely.' },
        { t: 'Penetration testing', d: 'An authorised simulated attack carried out to identify security weaknesses.' },
        { t: 'Network segregation', d: 'Dividing a network into separate segments so a compromise in one cannot spread to others.' },
        { t: 'Firewall', d: 'A system that filters network traffic against a set of rules to permit or block it.' }
      ],
      exam: [
        { marks: 6, q: 'Compare full, incremental and differential backups for a company that must restore quickly after ransomware.',
          a: 'A full backup copies everything: it takes the longest and uses the most storage each time, but restoring requires only the one set, so recovery is fastest and simplest. Incremental backups copy only what changed since the last backup, so nightly backups are quick and small, but restoring requires the last full backup plus every increment in order — if one is missing or corrupt the restore fails, and recovery is slowest. Differential backups copy everything changed since the last full backup, growing through the week but needing only two sets to restore. For fast recovery from ransomware a weekly full plus daily differential is a sensible balance, with at least one copy held offline or immutable so the ransomware cannot encrypt the backups themselves — and restores must be tested regularly.' },
        { marks: 6, q: 'Explain why multi-factor authentication significantly reduces the risk from stolen passwords.',
          a: 'Passwords are a single factor — something you know — so once obtained by phishing, key logging, brute force or a breach of another site where the password was reused, the attacker has everything needed to log in. MFA requires an additional independent factor such as a code from an authenticator app (possession) or a fingerprint (biometric). The attacker would have to compromise the second factor at the same time, which normally requires physical access to the user\'s device, so a stolen password alone becomes useless. It is not absolute — SIM swapping and MFA-fatigue prompt-bombing can defeat weaker implementations, so app-based or hardware-token factors are preferred over SMS.' }
      ]
    },
    {
      id: '8.4', title: 'CIA triad and the IAAA model',
      must: [
        'CIA triad — Confidentiality: data is kept private by controlling who has access. Integrity: data has not been tampered with, which is supported by maintaining confidentiality. Availability: data is available and useful when needed, which is supported by ensuring integrity.',
        'They interrelate: without confidentiality an attacker can alter data, destroying integrity; without integrity the data may be available but useless; over-tightening confidentiality can reduce availability for legitimate users. Security design is about balancing all three.',
        'IAAA — Identification: recognising an individual in a system. Methods: knowledge-based (username), possession-based (card, token), biometric.',
        'Authentication: verifying the identity claimed at identification — passwords/passphrases, multi-factor methods, biometric authentication. Passwords are cheap and familiar but reusable and guessable; biometrics cannot be forgotten or shared but cannot be changed if compromised and can raise privacy and accuracy concerns; tokens are strong but can be lost.',
        'Authorisation: ensuring authenticated users can only access the resources and actions they are permitted to — role-based access using the user\'s role, and access control lists.',
        'Accountability: ensuring actions in a system can be traced back to the responsible user — audit logs and user activity monitoring. Requires unique accounts: shared logins destroy accountability.',
        'Order matters: you identify (who you claim to be), authenticate (prove it), are authorised (what you may do), and are held accountable (what you did).',
        'Principle of least privilege: give the minimum access needed to do the job — limits the damage from both a compromised account and a malicious insider.'
      ],
      terms: [
        { t: 'CIA triad', d: 'Confidentiality, integrity and availability — the three core objectives of information security.' },
        { t: 'Integrity', d: 'Assurance that data has not been altered or tampered with.' },
        { t: 'Availability', d: 'Assurance that data and systems are accessible and usable when required.' },
        { t: 'Identification', d: 'Claiming an identity within a system, e.g. by entering a username.' },
        { t: 'Authentication', d: 'Proving that a claimed identity is genuine.' },
        { t: 'Authorisation', d: 'Determining which resources and actions an authenticated user is permitted.' },
        { t: 'Accountability', d: 'Being able to trace actions within a system back to the responsible user, usually via audit logs.' },
        { t: 'Access control list', d: 'A list specifying which users or roles may access a resource and what they may do with it.' },
        { t: 'Least privilege', d: 'Granting users only the minimum access rights required to perform their role.' }
      ],
      exam: [
        { marks: 6, q: 'Explain how the elements of the IAAA model would apply to a hospital records system.',
          a: 'Identification: each clinician has a unique username or smartcard so the system knows which individual is claiming access — shared logins would be unacceptable because they break the later stages (2). Authentication: the claim is proven with a password plus a second factor such as a smartcard or token, so a stolen password alone does not grant access to patient data (2). Authorisation: role-based access means a receptionist can see appointments but not clinical notes, while a consultant can see records for their own patients — applying least privilege limits how much data any one compromised account exposes (1). Accountability: every access and amendment is written to an audit log against the individual user, so unauthorised viewing of a record can be detected and investigated, which is both a deterrent and a data protection requirement (1).' }
      ]
    }
  ]
}

];
