# Day 7 — Day7_Student_Doc.html

SPEC = {
    "topic_line": "Day 7 — Arrays",
    "topic_titles": [
        "Array basics and indexing",
        "Mutating methods (push, pop, splice)",
        "Iteration: for, for…of, forEach",
        "map, filter, reduce",
        "find, some, every",
        "Spread and concat",
    ],
    "topic_snippets": [
        """const nums = [1, 2, 3];
console.log(nums[0], nums.at(-1));""",
        """const cart = ["bread"];
cart.push("milk");
cart.unshift("rice");
const last = cart.pop();
console.log(cart, last);""",
        """const arr = [10, 20, 30];
for (const v of arr) console.log(v);
arr.forEach((v, i) => console.log(i, v));""",
        """const scores = [40, 82, 55];
const passers = scores.filter((s) => s >= 60);
const curved = scores.map((s) => s + 5);
const sum = scores.reduce((a, b) => a + b, 0);
console.log(passers, curved, sum);""",
        """const ids = [2, 4, 6];
console.log(ids.find((x) => x > 3));
console.log(ids.some((x) => x % 2 === 1));
console.log(ids.every((x) => x % 2 === 0));""",
        """const a = [1, 2];
const b = [3, ...a];
console.log(b);""",
    ],
    "hands_label": "Day 7 · Arrays",
    "hands_blocks": [
        (
            "Task 1",
            "Cart manipulation",
            [
                r"Start <code>const cart = [\"bread\", \"milk\", \"eggs\"];</code> — <code>push</code> butter, <code>unshift</code> rice, log cart.",
                r"<code>pop</code> last item — log removed value and cart. <code>splice(1,1)</code> remove index 1 — log result.",
            ],
            True,
        ),
        (
            "Task 2",
            "Filter passing scores",
            [
                r"From <code>scores</code> in student doc: <code>filter</code> passing (&gt;=60), <code>find</code> first failing score, <code>every</code> all passing, bonus <code>some</code> &gt;90.",
            ],
            False,
        ),
        (
            "Task 3",
            "Map prices with GST",
            [
                r"<code>const prices = [100, 250, 500, 1200, 80];</code> — <code>map</code> to +18% GST; originals unchanged.",
                r"Bonus: show values with <code>.toFixed(2)</code>.",
            ],
            False,
        ),
        (
            "Bonus",
            "Reduce totals",
            [
                r"From <code>expenses</code> in doc: total with <code>reduce</code>, max single expense, then <code>filter</code>+ <code>reduce</code> for expenses &gt;100 only.",
            ],
            False,
        ),
    ],
    "hands_js": r""""use strict";
let cart = ["bread", "milk", "eggs"];
cart.push("butter");
cart.unshift("rice");
const removed = cart.pop();
const afterSplice = cart.slice();
afterSplice.splice(1, 1);
document.querySelector("#task1Output").textContent =
  "cart=" + JSON.stringify(cart) + " removed=" + removed + " splice1=" + JSON.stringify(afterSplice);

const scores = [88, 42, 75, 60, 91, 39, 55, 70];
const pass = scores.filter((s) => s >= 60);
const failFirst = scores.find((s) => s < 60);
document.querySelector("#task2Output").textContent =
  "pass " +
  JSON.stringify(pass) +
  " firstFail " +
  failFirst +
  " allPass " +
  scores.every((s) => s >= 60) +
  " some>90 " +
  scores.some((s) => s > 90);

const prices = [100, 250, 500, 1200, 80];
const gst = prices.map((p) => p * 1.18);
document.querySelector("#task3Output").textContent =
  "orig " + prices.join(",") + "\ngst " + gst.map((x) => x.toFixed(2)).join(",");

const expenses = [250, 800, 120, 50, 1500, 75];
const tot = expenses.reduce((a, b) => a + b, 0);
const hi = expenses.reduce((a, b) => (b > a ? b : a), expenses[0]);
const filt = expenses.filter((e) => e > 100).reduce((a, b) => a + b, 0);
document.querySelector("#task4Output").textContent = "sum=" + tot + " max=" + hi + " sum>100=" + filt;
""",
    "hw_label": "Day 7 · Arrays",
    "hw_blocks": [
        (
            "Task 1",
            "Immutable style",
            [
                r"Given <code>const base = [1, 2, 3];</code> produce <code>[0, 1, 2, 3]</code> using spread — do not mutate <code>base</code>.",
            ],
            True,
        ),
        (
            "Task 2",
            "sort copy",
            [
                r"Sort numbers ascending without mutating the original array.",
            ],
            False,
        ),
        (
            "Task 3",
            "flatMap teaser",
            [
                r"Given sentences array, use <code>flatMap</code> to split words and count total words (if supported) or describe plan in comment.",
            ],
            False,
        ),
    ],
    "hw_js": r""""use strict";
const base = [1, 2, 3];
const extended = [0, ...base];
document.querySelector("#task1Output").textContent = JSON.stringify(extended);
const nums = [5, 1, 4, 2];
document.querySelector("#task2Output").textContent = JSON.stringify([...nums].sort((a, b) => a - b)) + " orig " + JSON.stringify(nums);
const sents = ["a b", "c"];
const words = sents.flatMap((s) => s.split(" "));
document.querySelector("#task3Output").textContent = "words=" + words.length + " " + words.join(",");
""",
}
