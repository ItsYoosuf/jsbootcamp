# Day 10 — Day10_Student_Doc.html (DOM basics)

SPEC = {
    "topic_line": "Day 10 — DOM Manipulation Basics",
    "topic_titles": [
        "What is the DOM?",
        "Selecting elements (querySelector)",
        "textContent vs innerHTML",
        "Attributes, styles, and classes",
        "Creating and appending nodes",
        "Removing and clearing content",
    ],
    "topic_snippets": [
        """const el = document.querySelector("#app");
console.log(el);""",
        """const title = document.querySelector("h1");
title.textContent = "Hello";
title.style.color = "crimson";""",
        """const box = document.querySelector(".box");
box.classList.add("active");
box.classList.toggle("dark");""",
        """const li = document.createElement("li");
li.textContent = "New";
document.querySelector("ul").appendChild(li);""",
        """parent.removeChild(child);
list.innerHTML = "";""",
        """// Prefer textContent for plain text to avoid XSS with innerHTML""",
    ],
    "hands_label": "Day 10 · DOM Manipulation Basics",
    "hands_blocks": [
        (
            "Task 1",
            "Select and change text",
            [
                r"Mount the sample markup in a hidden lab div (ids prefixed <code>d10-</code> instead of <code>#title</code> to avoid collisions).",
                r"Select <code>#d10-title</code>, set <code>textContent</code> to your name, set <code>style.color</code> to <code>crimson</code>, optional <code>style.fontFamily</code>.",
            ],
            True,
        ),
        (
            "Task 2",
            "Toggle dark class",
            [
                r"Grab <code>#d10-theme-btn</code> and run <code>document.body.classList.toggle(\"dark\")</code> twice; log <code>classList.contains(\"dark\")</code> result.",
            ],
            False,
        ),
        (
            "Task 3",
            "Build a list dynamically",
            [
                r"Append <code>&lt;li&gt;</code> elements for each name in <code>[\"Priya\",\"Aarav\",\"Riya\",\"Kabir\"]</code> to <code>#d10-names</code> with class <code>name-item</code>.",
            ],
            False,
        ),
        (
            "Bonus",
            "Build a card",
            [
                r"Append a card under <code>#d10-cards</code> for <code>product</code> object from student doc using <code>createElement</code> and <code>textContent</code>.",
            ],
            False,
        ),
    ],
    "hands_js": r""""use strict";
function lab10() {
  let root = document.getElementById("dom10-lab");
  if (!root) {
    root = document.createElement("div");
    root.id = "dom10-lab";
    root.style.position = "fixed";
    root.style.left = "-9999px";
    root.style.top = "0";
    document.body.appendChild(root);
  }
  root.innerHTML =
    '<h1 id="d10-title">JS Training</h1><button id="d10-theme-btn">Toggle Theme</button><ul id="d10-names"></ul><button id="d10-add">Add Name</button><div id="d10-cards"></div>';
  return root;
}
const root = lab10();
const title = root.querySelector("#d10-title");
title.textContent = "Hello, Priya!";
title.style.color = "crimson";
title.style.fontFamily = "Georgia, serif";
document.querySelector("#task1Output").textContent = title.textContent + " | " + title.style.color;

document.body.classList.toggle("dark");
document.body.classList.toggle("dark");
document.querySelector("#task2Output").textContent = "dark? " + document.body.classList.contains("dark");

const list = root.querySelector("#d10-names");
["Priya", "Aarav", "Riya", "Kabir"].forEach((name, i) => {
  const li = document.createElement("li");
  li.textContent = i + 1 + ". " + name;
  li.className = "name-item";
  list.appendChild(li);
});
document.querySelector("#task3Output").textContent = "li count=" + list.children.length;

const cards = root.querySelector("#d10-cards");
const product = { name: "Laptop", price: 60000, brand: "Dell" };
const card = document.createElement("div");
card.textContent = `${product.brand} ${product.name} ₹${product.price}`;
cards.appendChild(card);
document.querySelector("#task4Output").textContent = cards.textContent;
""",
    "hw_label": "Day 10 · DOM Manipulation Basics",
    "hw_blocks": [
        (
            "Task 1",
            "data-* attributes",
            [
                r"Create a button with <code>data-action=\"save\"</code> in your lab; log <code>dataset.action</code>.",
            ],
            True,
        ),
        (
            "Task 2",
            "querySelectorAll loop",
            [
                r"Select all <code>.name-item</code> elements and log their text in one string.",
            ],
            False,
        ),
        (
            "Task 3",
            "Accessibility note",
            [
                r"In one sentence in the output, explain why <code>textContent</code> is safer than <code>innerHTML</code> for user-provided strings.",
            ],
            False,
        ),
    ],
    "hw_js": r""""use strict";
const b = document.createElement("button");
b.dataset.action = "save";
document.querySelector("#task1Output").textContent = b.dataset.action;
const lab = document.getElementById("dom10-lab");
const items = lab ? lab.querySelectorAll(".name-item") : [];
document.querySelector("#task2Output").textContent = lab
  ? Array.from(items)
      .map((n) => n.textContent)
      .join(" | ")
  : "(Open Day 10 Hands-on once to create the practice lab, or ignore.)";
document.querySelector("#task3Output").textContent =
  "textContent treats content as plain text; innerHTML parses HTML and can execute a script if untrusted input is inserted.";
""",
}
