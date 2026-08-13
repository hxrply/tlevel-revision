/* Python reference (spec Appendix 2), code patterns, and exam technique. */

window.TLDATA = window.TLDATA || {};

window.TLDATA.python = {
  note: 'The exam and ESP use Python 3.10 or later. Appendix 2 of the specification lists the commands you are expected to know — you will not be asked about anything outside it in the core, though you may go further in the Occupational Specialism.',
  groups: [
    { h: 'Input, output, type conversion', items: ['input()', 'print()', 'int()', 'str()', 'float()', 'bool()'] },
    { h: 'Selection', items: ['if', 'elif', 'else', 'match / case'] },
    { h: 'Iteration', items: ['while', 'for'] },
    { h: 'Functions', items: ['def'] },
    { h: 'Standard libraries', items: ['import', 'math', 'math.floor()', 'math.ceil()', 'math.trunc()', 'math.sqrt()', 'math.pow()', 'math.pi', 'random', 'random.random()', 'random.randint()', 'random.uniform()', 'random.sample()'] },
    { h: 'Built-in functions', items: ['range()', 'round()', 'max()', 'min()', 'count()', 'chr()', 'ord()', 'len()'] },
    { h: 'String handling', items: ['isupper()', 'islower()', 'upper()', 'lower()', 'isalpha()', 'isalnum()', 'isdigit()', 'split()', 'find()', 'index()', 'replace()', 'strip()', 'format()', 'len()', 'concatenation with +'] },
    { h: 'Lists, arrays, dictionaries', items: ['index()', 'append()', 'insert()', 'remove()', 'count()', 'pop()', 'sort()', 'in', 'not in', 'len()'] },
    { h: 'Text files', items: ['open()', 'read()', 'readline()', 'readlines()', 'write()', 'close()', 'line.strip()', 'line.split()'] },
    { h: 'Times and dates', items: ['datetime.now()', 'strftime()', 'strptime()'] },
    { h: 'ESP extras — pandas', items: ['import a .csv file', 'create and manipulate data frames', 'totals and averages over a column', 'count occurrences of a value', 'identify trends over time'] },
    { h: 'ESP extras — matplotlib', items: ['select data and plot appropriate graphs', 'axis labels', 'titles', 'legends', 'colour schemes'] }
  ],
  flowchart: [
    { sym: 'Oval (terminator)', use: 'Start and end of the algorithm' },
    { sym: 'Rectangle', use: 'A process to be carried out' },
    { sym: 'Rectangle with double side bars', use: 'A sub-process' },
    { sym: 'Diamond', use: 'A decision to be made — label both branches' },
    { sym: 'Parallelogram', use: 'Input or output' },
    { sym: 'Circle (connector)', use: 'A link to another part of the flowchart that cannot be joined by an unbroken arrow' },
    { sym: 'Arrow', use: 'The logical flow of the program' }
  ],
  patterns: [
    {
      h: 'Validated numeric input (range + type + robustness)',
      code: `MIN_TICKETS = 1
MAX_TICKETS = 6

def get_tickets():
    """Return a valid ticket count. Re-prompts until the input is usable."""
    while True:
        try:
            tickets = int(input(f"Tickets ({MIN_TICKETS}-{MAX_TICKETS}): "))
        except ValueError:
            print("Please enter a whole number.")
            continue
        if MIN_TICKETS <= tickets <= MAX_TICKETS:
            return tickets
        print(f"Enter a number between {MIN_TICKETS} and {MAX_TICKETS}.")`
    },
    {
      h: 'Reading a CSV text file safely',
      code: `def load_records(filename):
    """Return a list of [name, score] pairs from a comma-separated file."""
    records = []
    try:
        with open(filename, "r") as file:
            for line in file:
                line = line.strip()          # remove the newline
                if line == "":
                    continue                 # skip blank lines
                fields = line.split(",")
                records.append([fields[0], int(fields[1])])
    except FileNotFoundError:
        print(f"Could not find {filename}.")
    return records`
    },
    {
      h: 'Appending a record without destroying the file',
      code: `def add_record(filename, name, score):
    with open(filename, "a") as file:      # "a" appends, "w" would wipe it
        file.write(f"{name},{score}\\n")`
    },
    {
      h: 'Linear search',
      code: `def linear_search(items, target):
    """Return the index of target, or -1 if not present."""
    for i in range(len(items)):
        if items[i] == target:
            return i
    return -1`
    },
    {
      h: 'Binary search (list must be sorted)',
      code: `def binary_search(items, target):
    low = 0
    high = len(items) - 1
    while low <= high:
        mid = (low + high) // 2
        if items[mid] == target:
            return mid
        elif items[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1`
    },
    {
      h: 'Bubble sort (with early exit)',
      code: `def bubble_sort(items):
    n = len(items)
    for pass_num in range(n - 1):
        swapped = False
        for i in range(n - 1 - pass_num):
            if items[i] > items[i + 1]:
                items[i], items[i + 1] = items[i + 1], items[i]
                swapped = True
        if not swapped:        # already in order, stop early
            break
    return items`
    },
    {
      h: 'Insertion sort',
      code: `def insertion_sort(items):
    for i in range(1, len(items)):
        current = items[i]
        j = i - 1
        while j >= 0 and items[j] > current:
            items[j + 1] = items[j]
            j -= 1
        items[j + 1] = current
    return items`
    },
    {
      h: 'Totals, averages and counts over a list',
      code: `def summarise(scores):
    if len(scores) == 0:
        return None                     # guard against divide by zero
    total = 0
    for score in scores:
        total += score
    return {
        "total": total,
        "average": round(total / len(scores), 2),
        "highest": max(scores),
        "lowest": min(scores),
        "count": len(scores)
    }`
    },
    {
      h: 'pandas + matplotlib (ESP data analysis)',
      code: `import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_csv("sales.csv")
monthly = data.groupby("month")["amount"].sum()

print("Total sales:", data["amount"].sum())
print("Average sale:", round(data["amount"].mean(), 2))

monthly.plot(kind="bar", color="steelblue")
plt.title("Total sales by month")
plt.xlabel("Month")
plt.ylabel("Sales (£)")
plt.tight_layout()
plt.show()`
    },
    {
      h: 'match / case menu (Python 3.10+)',
      code: `def menu():
    while True:
        print("1 Add  2 View  3 Report  4 Quit")
        choice = input("Choose: ").strip()
        match choice:
            case "1":
                add_record()
            case "2":
                view_records()
            case "3":
                show_report()
            case "4":
                print("Goodbye.")
                break
            case _:
                print("Enter 1, 2, 3 or 4.")`
    }
  ],
  traces: [
    {
      q: 'What is printed?',
      code: `total = 0
for i in range(1, 6):
    if i % 2 == 0:
        total = total + i
print(total)`,
      a: '6 — the loop runs for i = 1,2,3,4,5 and adds only the even values 2 and 4.'
    },
    {
      q: 'What is printed?',
      code: `word = "REVISION"
count = 0
for letter in word:
    if letter in "AEIOU":
        count += 1
print(count)`,
      a: '4 — the vowels are E, I, I and O.'
    },
    {
      q: 'What is printed?',
      code: `x = 10
y = 3
print(x // y, x % y, x / y)`,
      a: '3 1 3.3333333333333335 — integer division, remainder, then true division which returns a float.'
    },
    {
      q: 'What is the value of items afterwards?',
      code: `items = [4, 7, 2]
items.append(9)
items.insert(1, 5)
items.pop()
print(items)`,
      a: '[4, 5, 7, 2] — append adds 9 to the end, insert puts 5 at index 1, pop removes the last item (9).'
    },
    {
      q: 'How many times does the inner line run?',
      code: `for i in range(3):
    for j in range(4):
        print(i, j)`,
      a: '12 times — the inner loop completes all 4 iterations for each of the 3 outer iterations.'
    },
    {
      q: 'Spot the defect.',
      code: `total = 0
scores = [5, 8, 12]
for i in range(1, len(scores)):
    total += scores[i]
print(total)`,
      a: 'Off-by-one: range(1, len(scores)) starts at index 1 so the first score (5) is missed, printing 20 instead of 25. It should be range(len(scores)) or simply "for score in scores".'
    },
    {
      q: 'Spot the defect.',
      code: `age = input("Age: ")
if age > 17:
    print("Adult")`,
      a: 'input() returns a string, so comparing it with an integer raises a TypeError. Cast it first: age = int(input("Age: ")), inside a try/except to handle non-numeric input.'
    },
    {
      q: 'Spot the defect.',
      code: `count = 0
while count < 5:
    print(count)`,
      a: 'Infinite loop — nothing changes count, so the condition never becomes False. Add count += 1 inside the loop.'
    }
  ]
};

