"""
Generate lesson / hands-on / homework HTML + JS for days 1–12.
Run from repo root: python tools/build_curriculum.py
"""
from __future__ import annotations

import importlib.util
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TOOLS = Path(__file__).resolve().parent


def load_emit():
    spec = importlib.util.spec_from_file_location("ce", TOOLS / "curriculum_emit.py")
    mod = importlib.util.module_from_spec(spec)
    assert spec.loader
    spec.loader.exec_module(mod)
    return mod.emit_day


emit_day = load_emit()


def load_spec(day: int) -> dict:
    path = TOOLS / "day_specs" / f"day{day:02d}.py"
    spec = importlib.util.spec_from_file_location(f"day{day:02d}", path)
    mod = importlib.util.module_from_spec(spec)
    assert spec.loader
    spec.loader.exec_module(mod)
    return mod.SPEC


# Day 1 — PDF handout (no separate hands-on section)
D1_TOPICS = [
    "What is JavaScript?",
    "Where JavaScript runs (browser vs Node.js)",
    "console.log — your first tool",
    "Variables: const, let, and var",
    "Naming, comments, and strict mode",
]
D1_SNIP = [
    """// HTML = structure, CSS = style, JavaScript = behaviour (interactivity)
console.log("JS runs after HTML & CSS in the browser");""",
    """// Browser: V8 (Chrome), SpiderMonkey (Firefox), JavaScriptCore (Safari)
//   Can touch: DOM, window.  Cannot: arbitrary file system.
// Node.js (2009+): V8 on the server — file system yes, browser DOM no.
console.log(typeof window); // "object" in browser; undefined in pure Node REPL""",
    """console.log("Hello JS!");
console.log("Priya");
console.log(42);
console.log(true);
const name = "Priya";
console.log(name);""",
    """const course = "B.Tech"; // cannot reassign course = "M.Tech"
let score = 0;
score = 10; // let can be reassigned
// var x = 5; // legacy — avoid in new code
// Rule: default to const; use let when the value will change.""",
    """// camelCase for variables, PascalCase for classes, SCREAMING_SNAKE for true constants
const maxRetries = 3;
// Explain WHY in comments, not only WHAT
const tax = 0.18; // 18% GST
/* Multi-line comment when you need a short story */
"use strict"; // catches common mistakes — use in real files/modules""",
]

D1_HANDS_JS = r'''"use strict";
const t1 = ["Hello JS!", "Priya", 42, true].map((v) => String(v)).join(" | ");
document.querySelector("#task1Output").textContent = t1;

let score = 0;
score += 5;
const t2 = ["const name = Priya (fixed binding)", "let score after +=5 => " + score].join("\n");
document.querySelector("#task2Output").textContent = t2;

const t3 = [
  "// Single-line // and multi-line /* */",
  '"use strict"; at top of file enables strict mode globally',
].join("\n");
document.querySelector("#task3Output").textContent = t3;
'''

D1_HW_JS = r'''"use strict";
const t1 = [
  "Chrome uses the V8 engine (same family as Node).",
  "console.log('Favorite site:', 'https://example.com');",
].join("\n");
document.querySelector("#task1Output").textContent = t1;

const t2 = ["const pi = 3.14159;", "let count = 0; count++;", "log count => 1"].join("\n");
document.querySelector("#task2Output").textContent = t2;

document.querySelector("#task3Output").textContent =
  "Read MDN: var — understand hoisting and why let/const replaced var for most code.";
'''


def main() -> None:
    sys.path.insert(0, str(TOOLS))

    emit_day(
        1,
        topic_line="Day 1 — JavaScript Fundamentals",
        topic_titles=D1_TOPICS,
        topic_snippets=D1_SNIP,
        hands_label="Day 1 · Introduction to JavaScript",
        hands_blocks=[
            (
                "Task 1",
                "console.log practice",
                [
                    r'Use <code>console.log</code> to print a greeting, a string name, a number, and a boolean.',
                    "Run in DevTools or this page’s script and compare with the solution output.",
                ],
                True,
            ),
            (
                "Task 2",
                "const vs let",
                [
                    r"Declare <code>const course = \"B.Tech\";</code> and <code>let score = 0;</code>.",
                    r"Increase <code>score</code> by <code>5</code> and log the new value.",
                    r"In a comment, explain why <code>course = \"M.Tech\"</code> would fail.",
                ],
                False,
            ),
            (
                "Task 3",
                "Comments and strict mode",
                [
                    r"Add a single-line comment and a multi-line comment in your file.",
                    r"Add <code>\"use strict\";</code> as the first statement and note what it is for.",
                ],
                False,
            ),
        ],
        hands_js=D1_HANDS_JS,
        hw_label="Day 1 · Introduction to JavaScript",
        hw_blocks=[
            (
                "Task 1",
                "Engines and the web",
                [
                    "In two sentences, contrast what browser JS can access vs what Node.js can access.",
                    r"Log your favorite HTTPS URL with a label using <code>console.log</code>.",
                ],
                True,
            ),
            (
                "Task 2",
                "Bindings",
                [
                    r"Declare <code>const pi = 3.14159</code> and <code>let count = 0</code>; increment <code>count</code> once; log both.",
                ],
                False,
            ),
            (
                "Task 3",
                "Reading",
                [
                    r"Skim MDN’s <code>var</code> page — in one paragraph, note one hazard of <code>var</code> compared to <code>let</code>/<code>const</code>.",
                ],
                False,
            ),
        ],
        hw_js=D1_HW_JS,
    )

    for day in range(2, 13):
        spec = load_spec(day)
        emit_day(day, **spec)

    from adv_specs import ADV_SPECS

    for day in range(13, 22):
        spec = dict(ADV_SPECS[day])
        preserve = spec.pop("preserve_all_js", False)
        emit_day(day, preserve_all_js=preserve, **spec)

    print("Built days 1–21 (lesson + hands-on + homework HTML; days 13–21 preserve existing JS).")


if __name__ == "__main__":
    main()
