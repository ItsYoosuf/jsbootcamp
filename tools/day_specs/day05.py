# Day 5 — Day5_Student_Doc.html

SPEC = {
    "topic_line": "Day 5 — Loops &amp; Iteration",
    "topic_titles": [
        "for loops",
        "while and do…while",
        "for…of vs for…in",
        "break and continue",
        "Avoiding infinite loops",
    ],
    "topic_snippets": [
        """for (let i = 1; i <= 3; i++) {
  console.log("tick", i);
}""",
        """let n = 3;
while (n > 0) {
  console.log(n);
  n--;
}""",
        """const arr = ["a", "b"];
for (const x of arr) console.log("of", x);
const obj = { x: 1, y: 2 };
for (const k in obj) console.log("in", k, obj[k]);""",
        """for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  if (i === 4) break;
  console.log(i);
}""",
        """// Always move counter toward exit condition
// Never leave while(true) without a break inside""",
    ],
    "hands_label": "Day 5 · Loops &amp; Iteration",
    "hands_blocks": [
        (
            "Task 1",
            "Multiplication table",
            [
                r"Use a <code>for</code> loop to print the table of <code>7</code> from <code>1</code> to <code>10</code> using template literals: <code>7 x 1 = 7</code>, …",
                r"Bonus: print only even multiples (use <code>continue</code> or adjust the loop).",
            ],
            True,
        ),
        (
            "Task 2",
            "Sum with while",
            [
                r"Use <code>while</code> to sum integers <code>1</code> through <code>100</code>. Log the total.",
                r"Bonus: sum only odd numbers.",
            ],
            False,
        ),
        (
            "Task 3",
            "for…of with names",
            [
                r"Given <code>const names = [\"Priya\", \"Aarav\", \"Riya\", \"Kabir\", \"Anaya\"];</code> log each name.",
                r"Second loop: count names longer than 4 characters.",
            ],
            False,
        ),
        (
            "Bonus",
            "Characters &amp; object keys",
            [
                r"Use <code>for...of</code> on <code>\"Jaipur\"</code> to log each character.",
                r"Declare <code>student</code> object from the doc; use <code>for...in</code> to log <code>key: value</code> lines and count properties.",
            ],
            False,
        ),
    ],
    "hands_js": r""""use strict";
const t1 = [];
for (let i = 1; i <= 10; i++) {
  t1.push(`7 x ${i} = ${7 * i}`);
}
const evens = [];
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) evens.push(`7 x ${i} = ${7 * i}`);
}
document.querySelector("#task1Output").textContent = t1.join("\n") + "\n--even multipliers--\n" + evens.join("\n");

let s = 0;
let j = 1;
while (j <= 100) {
  s += j;
  j++;
}
let odd = 0;
let k = 1;
while (k <= 100) {
  if (k % 2 === 1) odd += k;
  k++;
}
document.querySelector("#task2Output").textContent = "sum1-100=" + s + " oddSum=" + odd;

const names = ["Priya", "Aarav", "Riya", "Kabir", "Anaya"];
let long = 0;
const lines = [];
for (const n of names) lines.push(n);
for (const n of names) if (n.length > 4) long++;
document.querySelector("#task3Output").textContent = lines.join(",") + " | long>4: " + long;

let chars = [];
for (const ch of "Jaipur") chars.push(ch);
const student = { name: "Anaya", age: 21, city: "Jaipur", course: "B.Tech" };
const pairs = [];
let cnt = 0;
for (const key in student) {
  pairs.push(key + ": " + student[key]);
  cnt++;
}
document.querySelector("#task4Output").textContent = chars.join("") + "\n" + pairs.join("\n") + "\ncount=" + cnt;
""",
    "hw_label": "Day 5 · Loops &amp; Iteration",
    "hw_blocks": [
        (
            "Task 1",
            "FizzBuzz slice",
            [
                r"Print numbers <code>1..30</code>, but for multiples of 3 print <code>Fizz</code>, multiples of 5 <code>Buzz</code>, both <code>FizzBuzz</code>.",
            ],
            True,
        ),
        (
            "Task 2",
            "do…while once",
            [
                r"Use <code>do...while</code> to ask (simulate with an array of fake inputs) until the string <code>\"quit\"</code> appears — log each step.",
            ],
            False,
        ),
        (
            "Task 3",
            "Inventory scan",
            [
                r"Given <code>const stock = [2, 0, 5, 0, 1];</code> use a loop to count how many bins are empty.",
            ],
            False,
        ),
    ],
    "hw_js": r""""use strict";
const out = [];
for (let i = 1; i <= 30; i++) {
  let x = "";
  if (i % 3 === 0) x += "Fizz";
  if (i % 5 === 0) x += "Buzz";
  out.push(x || String(i));
}
document.querySelector("#task1Output").textContent = out.join(",");
const inputs = ["hi", "go", "quit"];
let idx = 0;
let steps = [];
do {
  steps.push(inputs[idx]);
  idx++;
} while (inputs[idx - 1] !== "quit");
document.querySelector("#task2Output").textContent = steps.join("->");
const stock = [2, 0, 5, 0, 1];
let z = 0;
for (const n of stock) if (n === 0) z++;
document.querySelector("#task3Output").textContent = "emptyBins=" + z;
""",
}
