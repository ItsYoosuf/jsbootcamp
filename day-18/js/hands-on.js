const task1Lines = `
Code
----
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
Promise.resolve().then(() => console.log("D"));

Predicted order
-----------------
A, C, D, B

Why D before B?
---------------
Promise callbacks are microtasks. setTimeout is a macrotask.
Microtasks run before the next macrotask, even when the timeout is 0 ms.
`;

const task2Lines = `
Code
----
function delayLog(msg, ms, cb) {
  setTimeout(() => {
    console.log(msg);
    cb(null);
  }, ms);
}

function delayLogPromise(msg, ms) {
  return new Promise((resolve, reject) => {
    delayLog(msg, ms, (err) => (err ? reject(err) : resolve()));
  });
}

delayLogPromise("1", 300)
  .then(() => delayLogPromise("2", 200))
  .then(() => delayLogPromise("3", 100));

Output
------
(about 600 ms total)
1
2
3
`;

const task3Lines = `
Code
----
function fetchPrice(item, ms) {
  const prices = { pen: 50, book: 200, bag: 800 };
  return new Promise((resolve) => {
    setTimeout(() => resolve({ item, price: prices[item] }), ms);
  });
}

const start = Date.now();
Promise.all([
  fetchPrice("pen", 300),
  fetchPrice("book", 400),
  fetchPrice("bag", 800),
]).then((rows) => {
  const total = rows.reduce((sum, r) => sum + r.price, 0);
  console.log("total", total);
  console.log("elapsed ms", Date.now() - start);
});

Output
------
total 1050
elapsed ms ≈ 800   (near the slowest call, not the sum)
`;

const task4Lines = `
Code
----
Promise.all([
  Promise.resolve("ok1"),
  Promise.reject(new Error("fail")),
  Promise.resolve("ok2"),
]).catch((e) => console.log("all failed:", e.message));

Promise.allSettled([
  Promise.resolve("ok1"),
  Promise.reject(new Error("fail")),
  Promise.resolve("ok2"),
]).then((results) => console.log("settled statuses:", results.map((r) => r.status)));

When to use which
-----------------
Promise.all — need every result; one failure should stop the flow.
Promise.allSettled — need every outcome (success or failure) for logging or dashboards.
`;

document.querySelector("#task1Output").textContent = task1Lines;
document.querySelector("#task2Output").textContent = task2Lines;
document.querySelector("#task3Output").textContent = task3Lines;
document.querySelector("#task4Output").textContent = task4Lines;
