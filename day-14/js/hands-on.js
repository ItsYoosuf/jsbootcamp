// Task 1 — makeCounter (two independent counters)
const task1Lines = [];
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const a = makeCounter();
const b = makeCounter();
task1Lines.push("a(): " + a() + ", a(): " + a());
task1Lines.push("b(): " + b() + ", b(): " + b());
task1Lines.push("// count lives in a closure — one closed-over variable per makeCounter() call");
document.querySelector("#task1Output").textContent = task1Lines.join("\n");

// Task 2 — var in loop, then let fix (no real timers in page — show predicted + fixed pattern)
const task2Lines = `
Snippet (var):
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 100);
}
Predict: 3, 3, 3 (one shared i when callbacks run)

Fix — change var → let:
for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 100);
}
Predict: 1, 2, 3 (fresh i each iteration)

Why: var is function-scoped so every callback shares the same i.
let is block-scoped so each iteration gets its own i.
`;
document.querySelector("#task2Output").textContent = task2Lines;

// Task 3 — private bank account
const task3Lines = [];
function createAccount(initial) {
  let balance = initial;
  return {
    deposit(amount) {
      balance += amount;
    },
    withdraw(amount) {
      balance -= amount;
    },
    getBalance() {
      return balance;
    },
  };
}
const acc = createAccount(1000);
acc.deposit(500);
acc.withdraw(200);
task3Lines.push("balance after deposit 500, withdraw 200: " + acc.getBalance());
task3Lines.push("acc.balance is: " + acc.balance);
document.querySelector("#task3Output").textContent = task3Lines.join("\n");

// Bonus — memoize
const task4Lines = [];
function memoize(fn) {
  const cache = {};
  return function (n) {
    if (n in cache) return cache[n];
    cache[n] = fn(n);
    return cache[n];
  };
}
const expensiveSquare = (n) => {
  task4Lines.push("computing... for " + n);
  return n * n;
};
const fastSquare = memoize(expensiveSquare);
task4Lines.push("first 5: " + fastSquare(5));
task4Lines.push("second 5: " + fastSquare(5));
task4Lines.push("10: " + fastSquare(10));
task4Lines.push("// cache object lives in the closure created by memoize");
document.querySelector("#task4Output").textContent = task4Lines.join("\n");
