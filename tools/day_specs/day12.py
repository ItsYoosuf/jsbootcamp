# Day 12 — Day12_Student_Doc.html

SPEC = {
    "topic_line": "Day 12 — Error Handling &amp; Module Basics",
    "topic_titles": [
        "try / catch / finally",
        "throw and Error objects",
        "Custom errors",
        "What try/catch cannot catch",
        "ES modules: import / export",
        "Default vs named exports",
    ],
    "topic_snippets": [
        """try {
  JSON.parse("{");
} catch (e) {
  console.log("caught", e.name);
} finally {
  console.log("always");
}""",
        """function mustPositive(n) {
  if (n <= 0) throw new Error("n must be positive");
  return n;
}""",
        """class ValidationError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "ValidationError";
  }
}""",
        """// Syntax errors and many async errors need other tools""",
        """// mathUtils.js
export const PI = 3.14;
export function add(a, b) {
  return a + b;
}
// app.js
// import { PI, add } from "./mathUtils.js";""",
        """export default function formatPrice(n) {
  return "₹" + n;
}""",
    ],
    "hands_label": "Day 12 · Error Handling &amp; Module Basics",
    "hands_blocks": [
        (
            "Task 1",
            "Safe JSON parse",
            [
                r"Implement <code>safeParse(str)</code> with try/catch around <code>JSON.parse</code>; return object or <code>null</code> and log invalid JSON message.",
            ],
            True,
        ),
        (
            "Task 2",
            "Throw on bad age",
            [
                r"Implement <code>setAge(age)</code> throwing for non-number and out of 0–120; wrap calls in try/catch for tests in doc.",
            ],
            False,
        ),
        (
            "Task 3",
            "ValidationError email",
            [
                r"Subclass <code>ValidationError</code>; <code>validateEmail</code> throws if missing <code>@</code>; branch with <code>instanceof</code> in catch.",
            ],
            False,
        ),
        (
            "Bonus",
            "Two-file module plan",
            [
                r"Describe (text only) a <code>mathUtils.js</code> with named exports and an <code>app.js</code> type=\"module\" entry — note typo in student doc where two files share the same name.",
            ],
            False,
        ),
    ],
    "hands_js": r""""use strict";
function safeParse(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return null;
  }
}
document.querySelector("#task1Output").textContent =
  "valid -> " + JSON.stringify(safeParse('{"name":"Priya"}')) + "\nbroken -> " + String(safeParse('{"name":"Priya"'));

function setAge(age) {
  if (typeof age !== "number") throw new Error("Age must be a number");
  if (age < 0 || age > 120) throw new Error("Age must be 0–120");
  return age;
}
const ages = [];
function tryAge(a) {
  try {
    ages.push(String(setAge(a)));
  } catch (e) {
    ages.push(e.message);
  }
}
tryAge(25);
tryAge("twenty");
tryAge(200);
document.querySelector("#task2Output").textContent = ages.join(" | ");

class ValidationError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "ValidationError";
  }
}
function validateEmail(email) {
  if (!email.includes("@")) throw new ValidationError("bad email");
  return "ok";
}
let mailOut = [];
for (const m of ["priya@example.com", "priya-no-at"]) {
  try {
    mailOut.push(validateEmail(m));
  } catch (err) {
    mailOut.push(err instanceof ValidationError ? "ValidationError: " + err.message : String(err));
  }
}
document.querySelector("#task3Output").textContent = mailOut.join(" | ");

document.querySelector("#task4Output").textContent =
  "Use mathUtils.js for named exports; use a different filename (e.g. formatUtils.js) for default export of formatPrice — avoid duplicate names.";
""",
    "hw_label": "Day 12 · Error Handling &amp; Module Basics",
    "hw_blocks": [
        (
            "Task 1",
            "finally cleanup",
            [
                r"Write try/finally that always logs <code>cleanup</code> whether JSON.parse succeeds or fails.",
            ],
            True,
        ),
        (
            "Task 2",
            "Re-throw pattern",
            [
                r"Catch, log, then re-throw the same error — explain when this is used.",
            ],
            False,
        ),
        (
            "Task 3",
            "Dynamic import note",
            [
                r"One sentence on when <code>import()</code> dynamic import is preferable to static <code>import</code>.",
            ],
            False,
        ),
    ],
    "hw_js": r""""use strict";
let log = [];
try {
  JSON.parse("{");
} catch (e) {
  log.push("fail");
} finally {
  log.push("cleanup");
}
document.querySelector("#task1Output").textContent = log.join("->");
document.querySelector("#task2Output").textContent =
  "Re-throw after logging lets middleware handle while preserving stack.";
document.querySelector("#task3Output").textContent =
  "Dynamic import() loads code on demand (code splitting, conditional features).";
""",
}
