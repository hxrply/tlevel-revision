"""Generate data/esp.js and data/os.js from the Python content modules.

    python tools/build_content.py

Why generate instead of hand-writing the JS: the content is full of code
samples containing quotes, backslashes and newlines. json.dumps escapes all of
them correctly every time, whereas hand-escaping them inside JS string literals
is exactly how this project once shipped a syntax error that blanked the whole
site.

The script also checks the content before writing anything:
  * every block uses a known block type, every page has its required fields;
  * every marks table whose header has a "Marks" column adds up to the total in
    its footer, and the per-task totals add up to the qualification total.
A wrong number fails the build instead of reaching the site.
"""
import io
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, HERE)

from esp_content import ESP  # noqa: E402
from os_content import OS    # noqa: E402

BLOCK_TYPES = {"p", "ul", "ol", "table", "code", "callout", "check", "kw"}
PAGE_FIELDS = ("id", "code", "title", "summary", "parts")

errors = []


def fail(msg):
    errors.append(msg)


def check_blocks(where, parts):
    for part in parts:
        if "h" not in part or "blocks" not in part:
            fail(f"{where}: part missing h or blocks: {part.get('h')}")
            continue
        for block in part["blocks"]:
            keys = set(block)
            if len(keys) != 1 or not keys <= BLOCK_TYPES:
                fail(f"{where} / {part['h']}: bad block keys {sorted(keys)}")
            if "code" in block and not block["code"].get("src", "").strip():
                fail(f"{where} / {part['h']}: empty code block")
            if "check" in block and not block["check"].get("key"):
                fail(f"{where} / {part['h']}: checklist without a storage key")


def marks_tables(parts):
    """Yield (heading, rows, foot, marks_col) for every table with a Marks column and a footer total."""
    for part in parts:
        for block in part["blocks"]:
            t = block.get("table")
            if not t or "foot" not in t:
                continue
            cols = [c.lower() for c in t["cols"]]
            if "marks" not in cols:
                continue
            yield part["h"], t["rows"], t["foot"], cols.index("marks")


def check_marks(where, parts):
    for heading, rows, foot, col in marks_tables(parts):
        try:
            total = sum(int(r[col]) for r in rows)
            stated = int(foot[col])
        except ValueError:
            fail(f"{where} / {heading}: non-numeric marks")
            continue
        if total != stated:
            fail(f"{where} / {heading}: rows add up to {total} but footer says {stated}")


def check_spec(name, spec, page_lists, expected_total):
    check_blocks(name + " hub", spec["hub"])
    check_marks(name + " hub", spec["hub"])
    seen = set()
    for pages in page_lists:
        for page in pages:
            for f in PAGE_FIELDS:
                if f not in page:
                    fail(f"{name}: page {page.get('id')} missing {f}")
            if page["id"] in seen:
                fail(f"{name}: duplicate page id {page['id']}")
            seen.add(page["id"])
            check_blocks(f"{name} {page['id']}", page["parts"])
            check_marks(f"{name} {page['id']}", page["parts"])

    # the hub's own time-and-marks table must match the qualification total
    for heading, rows, foot, col in marks_tables(spec["hub"]):
        if heading == "Time and marks" and int(foot[col]) != expected_total:
            fail(f"{name}: overall total is {foot[col]}, expected {expected_total}")


check_spec("ESP", ESP, [ESP["pages"]], 100)
check_spec("OS", OS, [OS["tasks"], OS["skills"]], 145)

# The per-task mark breakdowns must agree with the hub table.
def task_totals(spec, pages):
    out = {}
    for page in pages:
        for heading, rows, foot, col in marks_tables(page["parts"]):
            out.setdefault(page["id"], 0)
            out[page["id"]] += int(foot[col])
    return out

esp_pages = task_totals(ESP, ESP["pages"])
for pid, expect in {"t1": 19, "t2": 21, "t3": 17, "t4a": 34, "t4b": 9}.items():
    if esp_pages.get(pid) != expect:
        fail(f"ESP {pid}: breakdown totals {esp_pages.get(pid)}, expected {expect}")

os_pages = task_totals(OS, OS["tasks"])
for pid, expect in {"t1": 58, "t2": 48, "t3a": 24, "t3b": 15}.items():
    if os_pages.get(pid) != expect:
        fail(f"OS {pid}: breakdown totals {os_pages.get(pid)}, expected {expect}")

if errors:
    print("Content check FAILED:")
    for e in errors:
        print("  -", e)
    sys.exit(1)


HEADER = """/* GENERATED FILE — do not edit by hand.
   Source: tools/{src}. Regenerate with: python tools/build_content.py
   {desc} */

window.TLDATA = window.TLDATA || {{}};

"""


def emit(filename, varname, obj, src, desc):
    body = json.dumps(obj, ensure_ascii=False, indent=1)
    js = HEADER.format(src=src, desc=desc) + f"window.TLDATA.{varname} = " + body + ";\n"
    path = os.path.join(ROOT, "data", filename)
    with io.open(path, "w", encoding="utf-8", newline="\n") as f:
        f.write(js)
    return path, len(js)


for args in (
    ("esp.js", "esp", ESP, "esp_content.py", "Employer Set Project, paper 19538."),
    ("os.js", "os", OS, "os_content.py", "Occupational Specialism, paper 19540."),
):
    path, size = emit(*args)
    print(f"wrote {os.path.relpath(path, ROOT)}  ({size:,} bytes)")

print("Content checks passed: ESP 100 marks, OS 145 marks, every breakdown reconciles.")
