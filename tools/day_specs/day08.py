# Day 8 — Day8_Student_Doc.html

SPEC = {
    "topic_line": "Day 8 — Objects",
    "topic_titles": [
        "Object literals and property shorthand",
        "Dot vs bracket notation",
        "Methods and this",
        "Destructuring objects",
        "Spread and Object.assign",
        "Object.keys / values / entries",
    ],
    "topic_snippets": [
        """const name = "Priya";
const user = { name, age: 24 };
console.log(user);""",
        """const u = { "fav color": "blue" };
console.log(u.name, u["fav color"]);""",
        """const acc = {
  balance: 100,
  deposit(n) {
    this.balance += n;
    return this.balance;
  },
};
console.log(acc.deposit(50));""",
        """const p = { id: 1, title: "Pen", price: 10 };
const { title, price } = p;
console.log(title, price);""",
        """const a = { x: 1 };
const b = { y: 2, ...a };
console.log(b);""",
        """const o = { a: 1, b: 2 };
console.log(Object.keys(o));
console.log(Object.values(o));""",
    ],
    "hands_label": "Day 8 · Objects",
    "hands_blocks": [
        (
            "Task 1",
            "Build a student object",
            [
                r"Create <code>student</code> with <code>name, age, city, course, marks[3]</code>.",
                r"Log student; log name, age, first mark; add email; update age; delete city; log again.",
            ],
            True,
        ),
        (
            "Task 2",
            "Method with this",
            [
                r"Build <code>bankAccount</code> with <code>deposit</code> / <code>withdraw</code> as in student doc.",
            ],
            False,
        ),
        (
            "Task 3",
            "Destructuring",
            [
                r"From <code>product</code> in doc: destructure <code>name, price</code>; rename brand→make; default <code>warranty</code> to <code>\"1 year\"</code>.",
            ],
            False,
        ),
        (
            "Bonus",
            "Object keys",
            [
                r"Use <code>Object.keys</code> on the final student object and log how many own properties exist.",
            ],
            False,
        ),
    ],
    "hands_js": r""""use strict";
let student = { name: "Anaya", age: 21, city: "Jaipur", course: "B.Tech", marks: [82, 76, 91] };
const t1 = [];
t1.push(JSON.stringify(student));
t1.push([student.name, student.age, student.marks[0]].join(" "));
student.email = "anaya@example.com";
student.age = 22;
delete student.city;
t1.push(JSON.stringify(student));
document.querySelector("#task1Output").textContent = t1.join("\n");

const bankAccount = {
  holder: "Aarav",
  balance: 5000,
  deposit(amount) {
    this.balance += amount;
    return this.balance;
  },
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      return this.balance;
    }
    return "Insufficient funds";
  },
};
document.querySelector("#task2Output").textContent = [
  bankAccount.deposit(1000),
  bankAccount.withdraw(2000),
  bankAccount.withdraw(10000),
  bankAccount.balance,
].join(" | ");

const product = { id: 101, name: "Laptop", price: 60000, brand: "Dell", stock: 5 };
const { name, price, brand: make, warranty = "1 year" } = product;
document.querySelector("#task3Output").textContent = [name, price, make, warranty].join(" | ");

document.querySelector("#task4Output").textContent =
  "keys=" + Object.keys(student).length + " -> " + Object.keys(student).join(",");
""",
    "hw_label": "Day 8 · Objects",
    "hw_blocks": [
        (
            "Task 1",
            "Nested address",
            [
                r"Create <code>user</code> with nested <code>address: { city, pin }</code>; log city using optional chaining style (<code>user.address.city</code> guarded by checks or <code>?.</code>).",
            ],
            True,
        ),
        (
            "Task 2",
            "Computed property",
            [
                r"Build an object using a computed property name from a variable <code>const key = \"id\";</code>.",
            ],
            False,
        ),
        (
            "Task 3",
            "Freeze note",
            [
                r"In comments only: when would <code>Object.freeze</code> help, and what does it not freeze deeply?",
            ],
            False,
        ),
    ],
    "hw_js": r""""use strict";
const user = { name: "Riya", address: { city: "Jaipur", pin: "302001" } };
document.querySelector("#task1Output").textContent = user.address?.city ?? "unknown";
const key = "id";
document.querySelector("#task2Output").textContent = JSON.stringify({ [key]: 7 });
document.querySelector("#task3Output").textContent =
  "Object.freeze is shallow: nested objects stay mutable unless frozen separately.";
""",
}
