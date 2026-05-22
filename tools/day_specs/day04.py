# Day 4 — Day4_Student_Doc.html (Control Flow)

SPEC = {
    "topic_line": "Day 4 — Control Flow",
    "topic_titles": [
        "if / else if / else",
        "switch and fall-through",
        "Truthy and falsy values",
        "Guard clauses",
        "Ternary refresher",
        "Choosing the right tool",
    ],
    "topic_snippets": [
        """const marks = 72;
if (marks >= 90) console.log("A");
else if (marks >= 75) console.log("B");
else if (marks >= 60) console.log("C");
else console.log("F");""",
        """const day = "Wednesday";
switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("Weekday");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;
  default:
    console.log("Invalid day");
}""",
        """const values = [0, "0", "", " ", null, undefined, NaN, [], {}, "false"];
values.forEach((v) => {
  if (v) console.log(JSON.stringify(v), "truthy");
  else console.log(JSON.stringify(v), "falsy");
});""",
        """function check(user) {
  if (!user) return;
  if (!user.isActive) return;
  if (user.age < 18) return;
  console.log("Access granted");
}""",
        """const score = 40;
const label = score >= 50 ? "pass" : "fail";
console.log(label);""",
        """// Many branches -> if/else if or switch
// Many returns from nesting -> guard clauses""",
    ],
    "hands_label": "Day 4 · Control Flow",
    "hands_blocks": [
        (
            "Task 1",
            "Grading system",
            [
                r"Declare <code>const marks = 72;</code> and map ranges to grades (90+ A, 75–89 B, 60–74 C, else F).",
                r"Bonus: reject negative or &gt;100 with <code>Invalid marks</code>.",
            ],
            True,
        ),
        (
            "Task 2",
            "Day type with switch",
            [
                r"Use <code>const day = \"Wednesday\";</code> and <code>switch</code> with fall-through for weekdays vs weekend.",
                r"Test <code>Monday</code>, <code>Saturday</code>, and an invalid string.",
            ],
            False,
        ),
        (
            "Task 3",
            "Truthy / falsy detective",
            [
                r"Predict then branch with <code>if (value)</code> for: <code>0</code>, <code>\"0\"</code>, <code>\"\"</code>, <code>\" \"</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>, <code>[]</code>, <code>{}</code>, <code>\"false\"</code>.",
                r"Comment the six falsy values you memorise.",
            ],
            False,
        ),
        (
            "Bonus",
            "Guard clauses refactor",
            [
                r"Refactor nested <code>canComment(user)</code> from the student doc using early <code>return</code>s.",
                r"Test valid user, banned user, and <code>null</code>.",
            ],
            False,
        ),
    ],
    "hands_js": r""""use strict";
function grade(m) {
  if (m < 0 || m > 100) return "Invalid marks";
  if (m >= 90) return "A";
  if (m >= 75) return "B";
  if (m >= 60) return "C";
  return "F";
}
document.querySelector("#task1Output").textContent = [72, 95, 50, 75, -1, 101].map((m) => m + "->" + grade(m)).join("\n");

function dayKind(day) {
  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      return "Weekday";
    case "Saturday":
    case "Sunday":
      return "Weekend";
    default:
      return "Invalid day";
  }
}
document.querySelector("#task2Output").textContent = ["Monday", "Saturday", "Holiday"].map(dayKind).join("\n");

const vals = [0, "0", "", " ", null, undefined, NaN, [], {}, "false"];
document.querySelector("#task3Output").textContent = vals
  .map((v) => {
    const label = v ? "truthy" : "falsy";
    return JSON.stringify(v) + " -> " + label;
  })
  .join("\n");

function canComment(user) {
  if (!user) return "no user";
  if (user.isBanned) return "banned";
  if (user.age < 13) return "too young";
  return "Comment allowed";
}
document.querySelector("#task4Output").textContent = [
  canComment({ age: 14, isBanned: false }),
  canComment({ age: 20, isBanned: true }),
  canComment(null),
].join("\n");
""",
    "hw_label": "Day 4 · Control Flow",
    "hw_blocks": [
        (
            "Task 1",
            "Menu router",
            [
                r"Build a <code>switch</code> on a command string: <code>\"add\"</code>, <code>\"list\"</code>, <code>\"quit\"</code> — log a different message per command and a default for unknown.",
            ],
            True,
        ),
        (
            "Task 2",
            "Nested ternary (once)",
            [
                r"Convert a small <code>if/else if</code> chain for temperature (&lt;0 cold, 0–25 mild, else hot) into a single nested ternary — then comment why an if-chain is clearer.",
            ],
            False,
        ),
        (
            "Task 3",
            "Guard clause practice",
            [
                r"Write <code>pay(amount)</code> that returns early if amount is not a finite positive number, else logs <code>Paid</code>.",
            ],
            False,
        ),
    ],
    "hw_js": r""""use strict";
function route(cmd) {
  switch (cmd) {
    case "add":
      return "adding";
    case "list":
      return "listing";
    case "quit":
      return "bye";
    default:
      return "unknown";
  }
}
document.querySelector("#task1Output").textContent = ["add", "x", "quit"].map(route).join(" | ");
const t = 30;
document.querySelector("#task2Output").textContent = t < 0 ? "cold" : t <= 25 ? "mild" : "hot";
function pay(amount) {
  if (typeof amount !== "number" || !Number.isFinite(amount) || amount <= 0) return "skip";
  return "Paid " + amount;
}
document.querySelector("#task3Output").textContent = [pay(10), pay(-3), pay(NaN)].join(" | ");
""",
}
