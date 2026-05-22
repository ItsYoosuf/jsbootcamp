# Day 6 — Day6_Student_Doc.html

SPEC = {
    "topic_line": "Day 6 — Functions",
    "topic_titles": [
        "Function declarations",
        "return vs side effects",
        "Function expressions",
        "Arrow functions",
        "Parameters and defaults",
        "Scope: global vs local",
        "Pure vs impure (intro)",
    ],
    "topic_snippets": [
        """function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Priya");""",
        """function double(n) {
  return n * 2;
}
console.log(double(5));""",
        """const square = function (x) {
  return x * x;
};
console.log(square(4));""",
        """const add = (a, b) => a + b;
const sq = (x) => x * x;
console.log(add(2, 3), sq(5));""",
        """function greet(name = "Guest") {
  return "Hello, " + name + "!";
}
console.log(greet("Priya"), greet());""",
        """const globalA = 1;
function outer() {
  const b = 2;
  function inner() {
    const c = 3;
    console.log(globalA, b, c);
  }
  inner();
}
outer();""",
        """function pureDouble(n) {
  return n * 2;
}
let total = 0;
function impureAdd(n) {
  total += n;
  return total;
}
console.log(pureDouble(3), impureAdd(5), impureAdd(5));""",
    ],
    "hands_label": "Day 6 · Functions",
    "hands_blocks": [
        (
            "Task 1",
            "Rectangle area",
            [
                r"Write <code>area(length, width)</code> returning the area; call it three times with different arguments.",
                r"Bonus: rewrite as an arrow with implicit return.",
            ],
            True,
        ),
        (
            "Task 2",
            "Greeting with default",
            [
                r"Implement <code>greet(name = \"Guest\")</code> returning <code>\"Hello, &lt;name&gt;!\"</code>.",
                r"Call with <code>\"Priya\"</code>, <code>\"Aarav\"</code>, and no argument. Try <code>greet(null)</code> — does default apply?",
            ],
            False,
        ),
        (
            "Task 3",
            "Temperature converter",
            [
                r"Arrow <code>cToF(c)</code> with implicit return: <code>F = C * 9/5 + 32</code>.",
                r"Test <code>0</code>, <code>100</code>, <code>37</code>, <code>45</code>.",
            ],
            False,
        ),
        (
            "Bonus",
            "Pure vs impure",
            [
                r"Implement pure <code>double(n)</code> and impure <code>addToTotal(n)</code> using outer <code>let total = 0</code>.",
                r"Call each three times and comment which is easier to reason about.",
            ],
            False,
        ),
    ],
    "hands_js": r""""use strict";
const area = (length, width) => length * width;
document.querySelector("#task1Output").textContent = [area(2, 3), area(4, 5), area(1, 10)].join(" | ");

function greet(name = "Guest") {
  return "Hello, " + name + "!";
}
document.querySelector("#task2Output").textContent = [greet("Priya"), greet("Aarav"), greet(), greet(null)].join(" | ");

const cToF = (c) => (c * 9) / 5 + 32;
document.querySelector("#task3Output").textContent = [0, 100, 37, 45].map(cToF).join(" | ");

function double(n) {
  return n * 2;
}
let total = 0;
function addToTotal(n) {
  total += n;
  return total;
}
total = 0;
const imp = [addToTotal(1), addToTotal(2), addToTotal(3)];
document.querySelector("#task4Output").textContent =
  "pure " + [double(2), double(2), double(2)].join(",") + " | impure " + imp.join(",");
""",
    "hw_label": "Day 6 · Functions",
    "hw_blocks": [
        (
            "Task 1",
            "Higher-order preview",
            [
                r"Write <code>repeat(n, fn)</code> that calls <code>fn()</code> exactly <code>n</code> times.",
            ],
            True,
        ),
        (
            "Task 2",
            "Rest parameters",
            [
                r"Write <code>maxOf(...nums)</code> returning the largest number (assume non-empty).",
            ],
            False,
        ),
        (
            "Task 3",
            "IIFE scope",
            [
                r"Wrap a snippet in an IIFE that declares <code>const secret = 42;</code> and logs it — explain why <code>secret</code> is not global.",
            ],
            False,
        ),
    ],
    "hw_js": r""""use strict";
function repeat(n, fn) {
  for (let i = 0; i < n; i++) fn();
}
let c = 0;
repeat(4, () => c++);
document.querySelector("#task1Output").textContent = "called " + c;
const maxOf = (...nums) => Math.max(...nums);
document.querySelector("#task2Output").textContent = String(maxOf(3, 9, 2));
document.querySelector("#task3Output").textContent = (function () {
  const secret = 42;
  return "secret=" + secret;
})() + " (IIFE hides secret from global scope)";
""",
}
