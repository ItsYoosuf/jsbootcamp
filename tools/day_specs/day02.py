# Day 2 — Day2_Student_Doc.pdf (Data Types & the Type System)

SPEC = {
    "topic_line": "Day 2 — Data Types &amp; the Type System",
    "topic_titles": [
        "Seven primitive types",
        "The typeof operator",
        "Implicit type coercion",
        "Explicit conversion (Number, String, Boolean)",
        "Common string methods",
    ],
    "topic_snippets": [
        """// string, number, boolean, undefined, null, symbol, bigint
const name = "Priya";
const age = 21;
const score = 98.5;
const isPassed = true;
let city; // undefined until assigned
const selected = null;
const id = Symbol("user");
const big = 9007199254740991n;
console.log(name, age, score, isPassed, city, selected, id, big);""",
        """console.log(typeof "Hello");   // "string"
console.log(typeof 42);        // "number"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (historical bug)
console.log(typeof Symbol());  // "symbol"
console.log(typeof 10n);       // "bigint\"""",
        """console.log(5 + "3");   // "53" — + with string joins
console.log("10" - 4);  // 6  — math tries Number
console.log(true + 1);  // 2  — true coerces to 1""",
        """console.log(Number("42"));     // 42
console.log(Number("hello"));    // NaN
console.log(parseInt("42px"));  // 42
console.log(String(99));        // "99"
console.log(Boolean(0));         // false
console.log(Boolean("0"));      // true — any non-empty string is truthy""",
        """const greeting = "  Hello, JavaScript!  ";
console.log(greeting.length);
console.log(greeting.trim());
console.log(greeting.trim().toUpperCase());
console.log(greeting.includes("JavaScript"));
console.log(greeting.trim().slice(0, 5));""",
    ],
    "hands_label": "Day 2 · Variables &amp; Data Types",
    "hands_blocks": [
        (
            "Task 1",
            "Primitive lineup",
            [
                r"Recreate the instructor block: <code>const</code> for name, age, score, isPassed, selected, id, big; <code>let</code> for <code>city</code> (unassigned).",
                r"Log all values in one <code>console.log</code> and note what prints for <code>city</code> and <code>selected</code>.",
            ],
            True,
        ),
        (
            "Task 2",
            "typeof quiz",
            [
                r"Log <code>typeof</code> for: <code>&quot;Hello&quot;</code>, <code>42</code>, <code>true</code>, <code>undefined</code>, <code>null</code>, <code>Symbol()</code>, <code>10n</code>.",
                r"In a comment, memorise why <code>typeof null === &quot;object&quot;</code>.",
            ],
            False,
        ),
        (
            "Task 3",
            "Coercion lab",
            [
                r"Predict then log: <code>5 + &quot;3&quot;</code>, <code>&quot;10&quot; - 4</code>, <code>true + 1</code>, <code>Number(&quot;hello&quot;)</code>.",
            ],
            False,
        ),
        (
            "Task 4",
            "String methods",
            [
                r"Start from <code>const greeting = &quot;  Hello, JavaScript!  &quot;;</code>",
                r"Log <code>.length</code>, <code>.trim()</code>, chained <code>.trim().toUpperCase()</code>, <code>.includes(&quot;JavaScript&quot;)</code>, and <code>.trim().slice(0, 5)</code>.",
            ],
            False,
        ),
    ],
    "hands_js": r""""use strict";
const lines = [];
const name = "Priya";
const age = 21;
const score = 98.5;
const isPassed = true;
let city;
const selected = null;
const id = Symbol("user");
const big = 9007199254740991n;
lines.push("primitives: " + [name, age, score, isPassed, city, selected, String(id), String(big)].join(" | "));
["Hello", 42, true, undefined, null, Symbol(), 10n].forEach((v, i) => {
  const kinds = ["string sample", "number", "boolean", "undefined", "null", "symbol", "bigint"];
  lines.push("typeof case " + i + " -> " + typeof v);
});
lines.push('5 + "3" => ' + (5 + "3"));
lines.push('"10" - 4 => ' + ("10" - 4));
lines.push("true + 1 => " + (true + 1));
const greeting = "  Hello, JavaScript!  ";
lines.push(
  ["len", greeting.length, "trim", greeting.trim(), "up", greeting.trim().toUpperCase(), "hasJS", greeting.includes("JavaScript"), "slice5", greeting.trim().slice(0, 5)].join(
    " | ",
  ),
);
document.querySelector("#task1Output").textContent = lines.slice(0, 2).join("\n");
document.querySelector("#task2Output").textContent = lines.slice(2, 9).join("\n");
document.querySelector("#task3Output").textContent = lines.slice(9, 12).join("\n");
document.querySelector("#task4Output").textContent = lines[12];
""",
    "hw_label": "Day 2 · Variables &amp; Data Types",
    "hw_blocks": [
        (
            "Task 1",
            "Falsy six-pack",
            [
                r"Without running, list the six falsy values; then verify with <code>Boolean(...)</code> on each.",
                r"Explain in a comment why <code>Boolean(&quot;0&quot;)</code> differs from <code>Boolean(0)</code>.",
            ],
            True,
        ),
        (
            "Task 2",
            "String drill",
            [
                r"Given <code>const raw = &quot;  JS-302  &quot;;</code> produce <code>js-302</code> using <code>trim</code>, <code>toLowerCase</code>, and <code>replaceAll</code> as needed — log the result.",
            ],
            False,
        ),
        (
            "Task 3",
            "BigInt safety",
            [
                r"Log <code>Number.MAX_SAFE_INTEGER</code> and <code>Number.MAX_SAFE_INTEGER + 2</code> vs the same math using <code>BigInt</code>.",
            ],
            False,
        ),
    ],
    "hw_js": r""""use strict";
const falsy = [false, 0, "", null, undefined, NaN];
document.querySelector("#task1Output").textContent =
  "Boolean checks: " + falsy.map((v) => String(v) + "->" + Boolean(v)).join(", ");
document.querySelector("#task2Output").textContent = "raw -> " + "  JS-302  ".trim().toLowerCase();
document.querySelector("#task3Output").textContent =
  "max safe int: " +
  Number.MAX_SAFE_INTEGER +
  " | +2 as number: " +
  (Number.MAX_SAFE_INTEGER + 2) +
  " | bigint +2: " +
  (BigInt(Number.MAX_SAFE_INTEGER) + 2n);
""",
}
