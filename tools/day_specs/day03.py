# Day 3 — Day3_Student_Doc.pdf

SPEC = {
    "topic_line": "Day 3 — Operators &amp; Expressions",
    "topic_titles": [
        "Arithmetic operators",
        "Assignment shortcuts",
        "Comparison: == vs ===",
        "Logical && || !",
        "Ternary and nullish coalescing",
        "Optional chaining ?.",
    ],
    "topic_snippets": [
        """console.log(10 + 3, 10 - 3, 10 * 3, 10 / 3, 10 % 3, 2 ** 8);
let x = 5;
x += 2; // 7""",
        """let score = 10;
score += 5;
score -= 3;
score *= 2;
score /= 4;
console.log(score);""",
        """console.log(5 == "5", 5 === "5");
console.log(0 == false, 0 === false);
console.log(null == undefined, null === undefined);""",
        """console.log(true && false);
console.log(true || false);
console.log(!true);""",
        """const age = 17;
const mood = age >= 18 ? "adult" : "minor";
let username = null;
const display = username ?? "Guest";
const display2 = username || "Guest";
console.log(mood, display, display2);""",
        """const user = { address: { city: "Jaipur" } };
console.log(user.address?.city);
console.log(user.profile?.bio); // undefined, no throw""",
    ],
    "hands_label": "Day 3 · Operators &amp; Expressions",
    "hands_blocks": [
        (
            "Task 1",
            "Arithmetic detective",
            [
                r"Declare <code>const a = 17</code> and <code>const b = 5</code>.",
                r"Log <code>a + b</code>, <code>a - b</code>, <code>a * b</code>, <code>a / b</code>, <code>a % b</code>, <code>a ** b</code> with comments predicting each.",
                r"Bonus: use <code>%</code> to log whether <code>42</code> is even or odd.",
            ],
            True,
        ),
        (
            "Task 2",
            "Equality trap",
            [
                r"Predict then log: <code>5 == \"5\"</code>, <code>5 === \"5\"</code>, <code>0 == false</code>, <code>0 === false</code>, <code>null == undefined</code>.",
                r"Comment: why prefer <code>===</code> over <code>==</code>?",
            ],
            False,
        ),
        (
            "Task 3",
            "Access control logic",
            [
                r"Use <code>const age = 19; const hasLicense = true; const hasCar = false;</code>",
                r"(a) Log whether the person can drive: <code>age &gt;= 18 &amp;&amp; hasLicense</code>.",
                r"(b) Log whether they can travel: <code>hasLicense || hasCar</code>. Flip <code>hasLicense</code> to <code>false</code> and observe.",
            ],
            False,
        ),
        (
            "Bonus",
            "Ternary &amp; nullish",
            [
                r"Set <code>const mood = age &gt;= 18 ? 'adult' : 'minor'</code> (reuse <code>age</code> from Task 3 or redeclare).",
                r"Let <code>username = null</code>; log <code>username ?? 'Guest'</code> vs <code>username || 'Guest'</code> when <code>username</code> is <code>0</code> instead — explain <code>??</code> vs <code>||</code> in a comment.",
            ],
            False,
        ),
    ],
    "hands_js": r""""use strict";
const a = 17;
const b = 5;
const t1 = [a + b, a - b, a * b, a / b, a % b, a ** b].join(" | ") + " | 42 is " + (42 % 2 === 0 ? "even" : "odd");
document.querySelector("#task1Output").textContent = t1;
const t2 = [
  "5==\"5\" " + (5 == "5"),
  '5==="5" ' + (5 === "5"),
  "0==false " + (0 == false),
  "0===false " + (0 === false),
  "null==undefined " + (null == undefined),
].join("\n");
document.querySelector("#task2Output").textContent = t2;
const age = 19;
const hasLicense = true;
const hasCar = false;
document.querySelector("#task3Output").textContent =
  "drive " + (age >= 18 && hasLicense) + " | travel " + (hasLicense || hasCar);
const mood = age >= 18 ? "adult" : "minor";
let username = null;
const b1 = username ?? "Guest";
const b2 = username || "Guest";
let u2 = 0;
document.querySelector("#task4Output").textContent =
  [mood, b1, b2, "0 ?? 10 => " + (u2 ?? 10), "0 || 10 => " + (u2 || 10)].join("\n");
""",
    "hw_label": "Day 3 · Operators &amp; Expressions",
    "hw_blocks": [
        (
            "Task 1",
            "Short-circuit practice",
            [
                r"Log <code>&quot;Hi&quot; &amp;&amp; &quot;Priya&quot;</code> and <code>0 || &quot;fallback&quot;</code> — explain the result using short-circuit rules.",
            ],
            True,
        ),
        (
            "Task 2",
            "Optional chaining",
            [
                r"Given <code>const u = { name: &quot;Riya&quot; };</code> safely log <code>u.address?.city ?? &quot;unknown&quot;</code>.",
            ],
            False,
        ),
        (
            "Task 3",
            "Precedence reading",
            [
                r"Add parentheses to make intent obvious: <code>1 + 2 * 3 === 7</code> vs <code>(1 + 2) * 3 === 9</code> — log both.",
            ],
            False,
        ),
    ],
    "hw_js": r""""use strict";
document.querySelector("#task1Output").textContent =
  String("Hi" && "Priya") + " | " + String(0 || "fallback");
document.querySelector("#task2Output").textContent = String(
  ({ name: "Riya" }).address?.city ?? "unknown",
);
document.querySelector("#task3Output").textContent = 1 + 2 * 3 + " vs " + (1 + 2) * 3;
""",
}
