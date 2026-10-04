/* Web development tracks for the Occupational Specialism.

   PO6 requires a solution implemented in at least two permitted languages
   (Python 3, C#, SQL, JavaScript, PHP) covering front end and back end. HTML
   and CSS are not on that list because they are not programming languages, but
   nothing gets built without them — so they are here as the foundation, with
   JavaScript and SQL as the two assessed languages the pairing usually rests on.

   Code samples are arrays of lines rather than strings containing escape
   sequences. That is deliberate: an earlier version of this project was broken
   in production by a newline escape collapsing inside a string literal. */

window.TLDATA = window.TLDATA || {};

window.TLDATA.webdev = {
  intro: 'Four tracks covering the front end and back end you need for the Occupational Specialism. PO6 asks for a working solution in at least two permitted languages — JavaScript and SQL are the natural pair, with HTML and CSS underneath them. Each lesson is a concept, a worked example you should type out rather than read, and the mistake that usually costs marks.',
  howto: 'Type every example out by hand. Copying teaches nothing and reading teaches less — the same reason the from-memory checkpoints exist in the catch-up section. Then do the task at the end of each track and build something small that actually runs.',

  tracks: [

    {
      id: 'html', name: 'HTML', blurb: 'Structure and meaning',
      why: 'HTML is marked indirectly: PO4 design, PO6 UI features and techniques, and accessibility requirements that trace straight back to WCAG. Semantic markup is what makes a screen reader work, which is the Robust principle you already know.',
      lessons: [
        { t: 'The skeleton',
          b: 'Every page has the same frame. The doctype tells the browser to use standards mode, the lang attribute tells assistive technology which language to pronounce, and the viewport meta is what makes a page work on a phone at all.',
          code: [
            '<!DOCTYPE html>',
            '<html lang="en">',
            '<head>',
            '  <meta charset="UTF-8">',
            '  <meta name="viewport" content="width=device-width, initial-scale=1">',
            '  <title>Booking system</title>',
            '  <link rel="stylesheet" href="style.css">',
            '</head>',
            '<body>',
            '  <!-- page content -->',
            '  <script src="app.js"></script>',
            '</body>',
            '</html>'
          ],
          note: 'The script tag goes at the end of body so the elements exist before the code runs. Put it in head and your JavaScript will not find anything.' },

        { t: 'Semantic elements',
          b: 'A div says nothing. A semantic element tells the browser and the screen reader what a region is for. This is the difference between a page that passes an accessibility check and one that does not.',
          code: [
            '<header>',
            '  <h1>Chelmsford Leisure Centre</h1>',
            '  <nav>',
            '    <a href="#book">Book</a>',
            '    <a href="#classes">Classes</a>',
            '  </nav>',
            '</header>',
            '',
            '<main>',
            '  <section id="book">',
            '    <h2>Book a court</h2>',
            '    <article>',
            '      <h3>Badminton</h3>',
            '      <p>Six courts, bookable in one hour slots.</p>',
            '    </article>',
            '  </section>',
            '</main>',
            '',
            '<footer>',
            '  <p>Contact: bookings@example.org</p>',
            '</footer>'
          ],
          note: 'Headings must not skip levels. h1 then h3 with no h2 between them breaks screen reader navigation and is a WCAG failure.' },

        { t: 'Forms and validation',
          b: 'Forms are where most OS projects live. The browser gives you a lot of validation free, and every attribute here is one less thing your JavaScript has to check.',
          code: [
            '<form id="bookingForm">',
            '  <label for="name">Full name</label>',
            '  <input type="text" id="name" name="name" required minlength="2" maxlength="60">',
            '',
            '  <label for="email">Email</label>',
            '  <input type="email" id="email" name="email" required>',
            '',
            '  <label for="people">Number of players</label>',
            '  <input type="number" id="people" name="people" min="2" max="4" required>',
            '',
            '  <label for="slot">Time slot</label>',
            '  <select id="slot" name="slot" required>',
            '    <option value="">Choose a time</option>',
            '    <option value="09:00">09:00</option>',
            '    <option value="10:00">10:00</option>',
            '  </select>',
            '',
            '  <button type="submit">Book court</button>',
            '</form>'
          ],
          note: 'Every input needs a label whose for matches the input id. Without it a screen reader reads an unlabelled box, and clicking the text will not focus the field. This is the single most common accessibility failure in student projects.' },

        { t: 'Tables, and when not to use them',
          b: 'Tables are for tabular data only — never for layout. A table needs a caption and header cells with scope so the relationship between a value and its column is announced.',
          code: [
            '<table>',
            '  <caption>Court availability, Monday</caption>',
            '  <thead>',
            '    <tr>',
            '      <th scope="col">Time</th>',
            '      <th scope="col">Court</th>',
            '      <th scope="col">Status</th>',
            '    </tr>',
            '  </thead>',
            '  <tbody>',
            '    <tr>',
            '      <th scope="row">09:00</th>',
            '      <td>1</td>',
            '      <td>Free</td>',
            '    </tr>',
            '  </tbody>',
            '</table>'
          ],
          note: 'Use CSS grid or flexbox for layout. A layout table is read aloud cell by cell and makes no sense.' },

        { t: 'Images, media and alt text',
          b: 'Alt text is the Perceivable principle in practice. It describes the purpose of the image, not its appearance.',
          code: [
            '<img src="court.jpg" alt="Badminton court set up with net and markings">',
            '',
            '<!-- decorative only: empty alt so it is skipped -->',
            '<img src="divider.png" alt="">',
            '',
            '<video controls width="600">',
            '  <source src="tour.mp4" type="video/mp4">',
            '  <track kind="captions" src="tour.vtt" srclang="en" label="English">',
            '  Your browser does not support video.',
            '</video>'
          ],
          note: 'alt="image of a court" wastes the mark. The screen reader already says it is an image. Describe what it shows and why it is there.' }
      ],
      task: 'Build a single page for a booking system: a semantic header with navigation, a main region with a form collecting name, email, date, time slot and number of people, and a table showing current availability. Every input labelled, every image with alt text, headings in order. No CSS yet.'
    },

    {
      id: 'css', name: 'CSS', blurb: 'Layout, responsiveness and contrast',
      why: 'PO6 names layout grids, use of space, font selection, letter and line spacing, justification, colour and contrast, input focus and hover controls. Every one of those is CSS, and contrast and focus are also WCAG requirements.',
      lessons: [
        { t: 'Selectors and the cascade',
          b: 'Three things decide which rule wins: specificity, then order. An id beats a class, a class beats an element. Keep specificity low and you will spend far less time fighting your own stylesheet.',
          code: [
            '/* element */',
            'p { color: #333; }',
            '',
            '/* class — prefer these */',
            '.card { padding: 16px; border-radius: 8px; }',
            '',
            '/* id — highest specificity, use sparingly */',
            '#bookingForm { max-width: 480px; }',
            '',
            '/* descendant and state */',
            '.card p { margin: 0 0 8px; }',
            'button:hover { background: #1b5e20; }',
            'input:focus { outline: 3px solid #4fc3f7; outline-offset: 2px; }'
          ],
          note: 'Never write outline: none on a focus state without replacing it. Removing the focus ring makes the page unusable by keyboard, which fails the Operable principle.' },

        { t: 'Custom properties and a colour system',
          b: 'Define colours once as variables. It makes a theme change a two-line edit and it is what lets you support dark mode without duplicating the stylesheet.',
          code: [
            ':root {',
            '  --bg: #ffffff;',
            '  --text: #1a1a1a;',
            '  --accent: #0b5fa5;',
            '  --space: 16px;',
            '}',
            '',
            '@media (prefers-color-scheme: dark) {',
            '  :root {',
            '    --bg: #121212;',
            '    --text: #ececec;',
            '    --accent: #6fb3f0;',
            '  }',
            '}',
            '',
            'body { background: var(--bg); color: var(--text); }',
            'a { color: var(--accent); }'
          ],
          note: 'WCAG AA needs a contrast ratio of at least 4.5 to 1 for normal text. Light grey on white is the classic student failure — check it with a contrast checker before you submit.' },

        { t: 'Flexbox — one dimension',
          b: 'Flexbox lays items out in a row or a column. Use it for navigation bars, button rows and anything where items sit along a single line.',
          code: [
            '.nav {',
            '  display: flex;',
            '  gap: 12px;',
            '  align-items: center;',
            '  justify-content: space-between;',
            '}',
            '',
            '.btn-row {',
            '  display: flex;',
            '  gap: 8px;',
            '  flex-wrap: wrap;',
            '}'
          ],
          note: 'justify-content works along the main axis, align-items across it. If the flex direction is column they swap over, which is where most confusion comes from.' },

        { t: 'Grid — two dimensions',
          b: 'Grid lays out rows and columns together. This single line gives you a responsive card layout with no media query at all.',
          code: [
            '.cards {',
            '  display: grid;',
            '  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));',
            '  gap: 16px;',
            '}',
            '',
            '/* explicit page layout */',
            '.layout {',
            '  display: grid;',
            '  grid-template-columns: 240px 1fr;',
            '  grid-template-areas: "sidebar main";',
            '  min-height: 100vh;',
            '}',
            '.sidebar { grid-area: sidebar; }',
            '.main { grid-area: main; }'
          ],
          note: 'auto-fit with minmax is the one to remember. Cards grow to fill the row and wrap when they cannot fit 240px, on any screen size.' },

        { t: 'Responsive design',
          b: 'Design for the small screen first, then add rules as the viewport grows. Min-width queries build upward and stay far simpler than max-width queries fighting downward.',
          code: [
            '/* mobile first — this is the default */',
            '.layout { display: block; }',
            '',
            '@media (min-width: 768px) {',
            '  .layout {',
            '    display: grid;',
            '    grid-template-columns: 240px 1fr;',
            '  }',
            '}',
            '',
            '/* readable text without a media query */',
            'body { font-size: clamp(15px, 1vw + 13px, 18px); line-height: 1.6; }',
            'img { max-width: 100%; height: auto; }'
          ],
          note: 'Line height of about 1.5 to 1.6 and a measure of 60 to 75 characters is a readability standard, not a preference. PO6 names line spacing explicitly.' }
      ],
      task: 'Style the booking page from the HTML task. Mobile first, a responsive card grid for availability, a visible focus state on every interactive element, colours defined as custom properties with a dark mode, and text at AA contrast. Check it at 375px wide and at full desktop width.'
    },

    {
      id: 'js', name: 'JavaScript', blurb: 'Behaviour, the DOM and APIs',
      why: 'One of the five permitted languages and the obvious front-end half of your two. PO6 names dynamic page content, form handling, interactions and feedback, data visualisation, and connecting to APIs — all of this track.',
      lessons: [
        { t: 'Variables, types and functions',
          b: 'Use const by default and let when the value must change. Never use var. Functions should do one job and return a value rather than reaching out and changing things elsewhere.',
          code: [
            'const MAX_PLAYERS = 4;',
            'let booked = 0;',
            '',
            'function slotsRemaining(capacity, taken) {',
            '  return capacity - taken;',
            '}',
            '',
            '// arrow function, same thing',
            'const isFull = (capacity, taken) => taken >= capacity;',
            '',
            'console.log(slotsRemaining(6, 2));  // 4',
            'console.log(isFull(6, 6));          // true'
          ],
          note: 'Use === and not ==. Double equals converts types first, so "2" == 2 is true, which hides real bugs.' },

        { t: 'Arrays and the three methods worth knowing',
          b: 'map, filter and reduce replace most loops you would otherwise write, and read far closer to what you mean.',
          code: [
            'const bookings = [',
            '  { name: "Jack",  slot: "09:00", players: 2 },',
            '  { name: "Priya", slot: "10:00", players: 4 },',
            '  { name: "Sam",   slot: "09:00", players: 3 }',
            '];',
            '',
            '// filter — keep the ones that match',
            'const nineAm = bookings.filter(b => b.slot === "09:00");',
            '',
            '// map — transform each into something else',
            'const names = bookings.map(b => b.name);',
            '',
            '// reduce — collapse to a single value',
            'const totalPlayers = bookings.reduce((sum, b) => sum + b.players, 0);',
            '',
            'console.log(nineAm.length, names, totalPlayers);  // 2 ["Jack","Priya","Sam"] 9'
          ],
          note: 'filter returns an array even when one item matches. find returns the item itself, or undefined. Mixing them up is a common source of undefined errors.' },

        { t: 'The DOM — finding and changing things',
          b: 'The DOM is the page as a tree of objects. You select a node, then read or change it.',
          code: [
            'const form = document.getElementById("bookingForm");',
            'const list = document.querySelector(".booking-list");',
            'const rows = document.querySelectorAll(".booking-row");',
            '',
            '// change text safely',
            'list.textContent = "No bookings yet";',
            '',
            '// build an element',
            'const li = document.createElement("li");',
            'li.textContent = "Jack — 09:00";',
            'li.classList.add("booking-row");',
            'list.appendChild(li);',
            '',
            '// show and hide',
            'document.querySelector(".error").hidden = true;'
          ],
          note: 'Use textContent, not innerHTML, for anything a user typed. innerHTML executes markup, which is how cross-site scripting gets in — the same XSS you learned in content area 8.' },

        { t: 'Events and form handling',
          b: 'This is the core of a front end: listen for the submit, stop the page reloading, validate, then act.',
          code: [
            'const form = document.getElementById("bookingForm");',
            'const error = document.getElementById("error");',
            '',
            'form.addEventListener("submit", function (e) {',
            '  e.preventDefault();',
            '',
            '  const name = form.name.value.trim();',
            '  const players = Number(form.people.value);',
            '',
            '  if (name.length < 2) {',
            '    error.textContent = "Name must be at least 2 characters.";',
            '    error.hidden = false;',
            '    form.name.focus();',
            '    return;',
            '  }',
            '',
            '  if (players < 2 || players > 4) {',
            '    error.textContent = "Players must be between 2 and 4.";',
            '    error.hidden = false;',
            '    return;',
            '  }',
            '',
            '  error.hidden = true;',
            '  addBooking({ name: name, players: players });',
            '  form.reset();',
            '});'
          ],
          note: 'e.preventDefault() is what stops the browser reloading the page on submit. Forget it and your code appears to do nothing at all.' },

        { t: 'Fetching from an API',
          b: 'PO6 names API request methods, endpoints, retrieving and parsing data and displaying it. async and await is the readable way to do it, and try/catch is where the marks for robustness are.',
          code: [
            'async function loadSlots() {',
            '  try {',
            '    const res = await fetch("/api/slots?date=2026-11-16");',
            '',
            '    if (!res.ok) {',
            '      throw new Error("Server returned " + res.status);',
            '    }',
            '',
            '    const data = await res.json();',
            '    render(data);',
            '  } catch (err) {',
            '    document.getElementById("error").textContent =',
            '      "Could not load slots. Please try again.";',
            '    console.error(err);',
            '  }',
            '}',
            '',
            '// POST with a body',
            'async function saveBooking(booking) {',
            '  const res = await fetch("/api/bookings", {',
            '    method: "POST",',
            '    headers: { "Content-Type": "application/json" },',
            '    body: JSON.stringify(booking)',
            '  });',
            '  return res.json();',
            '}'
          ],
          note: 'fetch does not throw on a 404 or a 500 — it only throws if the request could not be made at all. You must check res.ok yourself, and this is exactly the robustness that gets credited.' },

        { t: 'Storing state locally',
          b: 'localStorage keeps data on the device between visits. It stores strings only, so objects go through JSON.',
          code: [
            'function save(bookings) {',
            '  localStorage.setItem("bookings", JSON.stringify(bookings));',
            '}',
            '',
            'function load() {',
            '  try {',
            '    const raw = localStorage.getItem("bookings");',
            '    return raw ? JSON.parse(raw) : [];',
            '  } catch (err) {',
            '    return [];',
            '  }',
            '}'
          ],
          note: 'Wrap the read in try/catch. Private browsing and blocked site data make localStorage throw rather than return null, and an unhandled throw takes the whole page down.' }
      ],
      task: 'Make the booking page work. On submit, validate the inputs, add the booking to an array, render it into the availability table, and persist to localStorage so it survives a refresh. Add a delete button per row. Handle the empty state and show a clear error message for every invalid input.'
    },

    {
      id: 'sql', name: 'SQL', blurb: 'The back-end half',
      why: 'SQL is a permitted language in its own right, so HTML/CSS/JavaScript plus SQL satisfies the two-language requirement with a genuine front end and back end. PO6 also names JDBC and ODBC, prepared statements and result sets.',
      lessons: [
        { t: 'Creating tables and choosing types',
          b: 'The data type decisions you make here are the ones content area 6.2 asks about: storage size, whether arithmetic and sorting work, and what validation is possible.',
          code: [
            'CREATE TABLE members (',
            '  member_id   INTEGER PRIMARY KEY,',
            '  first_name  VARCHAR(50) NOT NULL,',
            '  last_name   VARCHAR(50) NOT NULL,',
            '  email       VARCHAR(120) NOT NULL UNIQUE,',
            '  date_joined DATE NOT NULL,',
            '  is_active   BOOLEAN DEFAULT TRUE',
            ');',
            '',
            'CREATE TABLE bookings (',
            '  booking_id  INTEGER PRIMARY KEY,',
            '  member_id   INTEGER NOT NULL,',
            '  court       INTEGER NOT NULL,',
            '  slot_start  DATETIME NOT NULL,',
            '  players     INTEGER NOT NULL CHECK (players BETWEEN 2 AND 4),',
            '  FOREIGN KEY (member_id) REFERENCES members(member_id)',
            ');'
          ],
          note: 'Store a date as DATE or DATETIME, never VARCHAR. A date held as text sorts alphabetically, cannot be compared, and blocks every date function — the exact problem content area 6.2 examines.' },

        { t: 'SELECT, WHERE and ORDER BY',
          b: 'Reading data. WHERE filters rows, ORDER BY sorts them, LIMIT caps how many come back.',
          code: [
            'SELECT first_name, last_name, email',
            'FROM members',
            'WHERE is_active = TRUE',
            'ORDER BY last_name ASC;',
            '',
            'SELECT *',
            'FROM bookings',
            'WHERE slot_start BETWEEN "2026-11-16 09:00" AND "2026-11-16 17:00"',
            '  AND players >= 3',
            'ORDER BY slot_start',
            'LIMIT 20;',
            '',
            '-- pattern matching and sets',
            'SELECT * FROM members WHERE email LIKE "%@chelmsford.ac.uk";',
            'SELECT * FROM bookings WHERE court IN (1, 2, 3);'
          ],
          note: 'SELECT * is fine while exploring but name your columns in real code. It is faster, and it does not silently break when someone adds a column.' },

        { t: 'INSERT, UPDATE and DELETE',
          b: 'The other three of the four CRUD operations. UPDATE and DELETE without a WHERE clause hit every row in the table.',
          code: [
            'INSERT INTO members (member_id, first_name, last_name, email, date_joined)',
            'VALUES (1, "Jack", "Harpley", "jack@example.org", "2026-09-01");',
            '',
            'UPDATE members',
            'SET is_active = FALSE',
            'WHERE member_id = 1;',
            '',
            'DELETE FROM bookings',
            'WHERE booking_id = 42;'
          ],
          note: 'Write the WHERE clause before the SET clause. It sounds trivial and it is the reason people wipe whole tables.' },

        { t: 'JOINs',
          b: 'A join is why the relational model beats the hierarchical one. INNER JOIN returns rows that match in both tables; LEFT JOIN keeps every row from the left table even without a match.',
          code: [
            '-- every booking with the member who made it',
            'SELECT b.booking_id, m.first_name, m.last_name, b.court, b.slot_start',
            'FROM bookings b',
            'INNER JOIN members m ON b.member_id = m.member_id',
            'ORDER BY b.slot_start;',
            '',
            '-- every member, including those who have never booked',
            'SELECT m.first_name, m.last_name, b.booking_id',
            'FROM members m',
            'LEFT JOIN bookings b ON m.member_id = b.member_id;'
          ],
          note: 'If you want to find members with no bookings, LEFT JOIN then WHERE b.booking_id IS NULL. An INNER JOIN can never show you something that is missing.' },

        { t: 'Aggregates and GROUP BY',
          b: 'COUNT, SUM, AVG, MIN and MAX collapse many rows into one value. GROUP BY says which rows get collapsed together.',
          code: [
            '-- how many bookings per court',
            'SELECT court, COUNT(*) AS total',
            'FROM bookings',
            'GROUP BY court',
            'ORDER BY total DESC;',
            '',
            '-- only the busy courts',
            'SELECT court, COUNT(*) AS total',
            'FROM bookings',
            'GROUP BY court',
            'HAVING COUNT(*) > 10;',
            '',
            'SELECT AVG(players) AS avg_players FROM bookings;'
          ],
          note: 'WHERE filters rows before grouping; HAVING filters groups after. You cannot use an aggregate in a WHERE clause, and that is the error message people spend an hour on.' },

        { t: 'Prepared statements and injection',
          b: 'This is the security lesson and it is the same SQL injection from content area 8.2. Never build a query by joining strings containing user input.',
          code: [
            '# WRONG — the user controls the query',
            'cursor.execute("SELECT * FROM members WHERE email = " + user_input)',
            '',
            '# RIGHT — parameterised, the input can only ever be a value',
            'cursor.execute(',
            '    "SELECT * FROM members WHERE email = ?",',
            '    (user_input,)',
            ')',
            '',
            '# JDBC equivalent in Java/C# style',
            '# PreparedStatement ps = conn.prepareStatement(',
            '#     "SELECT * FROM members WHERE email = ?");',
            '# ps.setString(1, userInput);',
            '# ResultSet rs = ps.executeQuery();'
          ],
          note: 'A placeholder is not just escaping. The database receives the query structure and the values separately, so user input can never change what the query does. Say that sentence in the exam and you have the mitigation mark.' }
      ],
      task: 'Design and build the database behind the booking page: members and bookings tables with a foreign key and a CHECK constraint. Write queries for every booking on a given date with the member name, a count of bookings per court, and a list of members who have never booked. Then connect it to your front end with parameterised queries only.'
    }

  ]
};
