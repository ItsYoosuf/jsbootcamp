# Day 9 — Day9_Student_Doc.html

SPEC = {
    "topic_line": "Day 9 — ES6+ Essentials",
    "topic_titles": [
        "Template literals",
        "Destructuring arrays and objects",
        "Rest parameters",
        "Spread with arrays and objects",
        "Default parameters",
        "Shorthand properties",
    ],
    "topic_snippets": [
        """const item = "Laptop";
const price = 60000;
const tax = 0.18;
console.log(`The ${item} costs ₹${price} + ₹${price * tax} GST = ₹${price + price * tax}`);""",
        """const scores = [88, 75, 92, 60, 45];
const [top, second, ...others] = scores;
console.log(top, second, others);""",
        """function sumAll(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sumAll(1, 2, 3));""",
        """const defaults = { theme: "light", lang: "en" };
const prefs = { theme: "dark", fontSize: 16 };
console.log({ ...defaults, ...prefs });""",
        """function greet(name = "Guest") {
  return `Hi ${name}`;
}
console.log(greet());""",
        """const name = "Priya";
const city = "Jaipur";
const user = { name, city };
console.log(user);""",
    ],
    "hands_label": "Day 9 · ES6+ Essentials",
    "hands_blocks": [
        (
            "Task 1",
            "Template literal sentence builder",
            [
                r"Use <code>item</code>, <code>price</code>, <code>tax</code> from doc to print the rupee sentence with GST computed inside the template.",
                r"Bonus: add a multiline version.",
            ],
            True,
        ),
        (
            "Task 2",
            "Array + object destructuring",
            [
                r"Destructure first two scores + rest; destructure nested <code>user</code> with rename and nested <code>city</code>.",
            ],
            False,
        ),
        (
            "Task 3",
            "Rest parameters",
            [
                r"Implement <code>sumAll(...numbers)</code> and <code>joinNames(separator, ...names)</code> per doc tests.",
            ],
            False,
        ),
        (
            "Bonus",
            "Spread merge",
            [
                r"Merge <code>defaults</code> and <code>userPrefs</code> with object spread; log merged object.",
            ],
            False,
        ),
    ],
    "hands_js": r""""use strict";
const item = "Laptop";
const price = 60000;
const tax = 0.18;
const gst = price * tax;
document.querySelector("#task1Output").textContent =
  `The ${item} costs ₹${price} + ₹${gst} GST = ₹${price + gst}` +
  "\n" +
  `line1\nline2 total ₹${price + gst}`;

const scores = [88, 75, 92, 60, 45];
const [top, second, ...others] = scores;
const user = { name: "Anaya", age: 21, address: { city: "Jaipur", pincode: "302001" } };
const { name, age: userAge, address: { city } } = user;
document.querySelector("#task2Output").textContent = [top, second, JSON.stringify(others), name, userAge, city].join(
  " | ",
);

function sumAll(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
function joinNames(separator, ...names) {
  return names.join(separator);
}
document.querySelector("#task3Output").textContent =
  sumAll(1, 2, 3) +
  " | " +
  sumAll(10, 20, 30, 40) +
  " | " +
  sumAll() +
  " | " +
  joinNames(", ", "Priya", "Aarav", "Riya");

const defaults = { theme: "light", lang: "en", notifications: true };
const userPrefs = { theme: "dark", fontSize: 16 };
document.querySelector("#task4Output").textContent = JSON.stringify({ ...defaults, ...userPrefs });
""",
    "hw_label": "Day 9 · ES6+ Essentials",
    "hw_blocks": [
        (
            "Task 1",
            "Tagged template (read)",
            [
                r"Read MDN on tagged templates — write a one-paragraph summary of one use case (no code required in solution output).",
            ],
            True,
        ),
        (
            "Task 2",
            "Swap with destructuring",
            [
                r"Swap two variables using array destructuring without a temp variable — log before/after.",
            ],
            False,
        ),
        (
            "Task 3",
            "Partial application (manual)",
            [
                r"Create <code>const add5 = (n) => n + 5;</code> and log <code>add5(10)</code> — relate to future bind/curry topics in a comment.",
            ],
            False,
        ),
    ],
    "hw_js": r""""use strict";
document.querySelector("#task1Output").textContent =
  "Tagged templates let you parse template literal parts with a function — useful for i18n or DSLs.";
let a = 1,
  b = 2;
[a, b] = [b, a];
document.querySelector("#task2Output").textContent = "swapped " + a + " " + b;
const add5 = (n) => n + 5;
document.querySelector("#task3Output").textContent = String(add5(10));
""",
}
