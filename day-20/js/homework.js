const task1Lines = `
Code
----
// Label each line as microtask vs macrotask vs sync stack

const order = [];
order.push("sync-start");
setTimeout(() => order.push("timeout"), 0);
Promise.resolve().then(() => order.push("micro"));
order.push("sync-end");
setTimeout(() => console.log(order.join(" ")), 10);

Output
------
sync-start sync-end micro timeout
`;

const task2Lines = `
Code
----
// Predict output before running:
async function f() {
  console.log("a");
  await Promise.resolve();
  console.log("b");
}
f();
console.log("c");

Output
------
a
c
b
`;

const task3Lines = `
Reading (MDN / javascript.info)
--------------------------------
1. Microtasks always finish before the next rendering or macrotask.
2. await splits a function: code after await resumes as a microtask.
3. Avoid starving the UI with an infinite microtask loop.
`;

const task4Lines = `
Self-check
-----------
Explain in one sentence: why can Promise.resolve().then(...) run before setTimeout(..., 0)?
Answer: microtask queue is drained before the timer macrotask runs.
`;

document.querySelector("#task1Output").textContent = task1Lines;
document.querySelector("#task2Output").textContent = task2Lines;
document.querySelector("#task3Output").textContent = task3Lines;
document.querySelector("#task4Output").textContent = task4Lines;
