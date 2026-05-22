const task1Lines = `
Code
----
console.log("1");
queueMicrotask(() => console.log("micro"));
setTimeout(() => console.log("timeout"), 0);
console.log("2");

Output
------
1
2
micro
timeout
`;

const task2Lines = `
Code
----
Promise.resolve()
  .then(() => console.log("then 1"))
  .then(() => console.log("then 2"));

setTimeout(() => console.log("timeout"), 0);

console.log("sync");

Output
------
sync
then 1
then 2
timeout
`;

const task3Lines = `
Code
----
// Microtasks drain fully before the next macrotask
setTimeout(() => console.log("A"), 0);
Promise.resolve().then(() => {
  console.log("B");
  return Promise.resolve();
}).then(() => console.log("C"));

Output
------
B
C
A
`;

const task4Lines = `
Notes
-----
- Microtasks = Promise.then/catch/finally, queueMicrotask, await tails.
- Macrotasks = setTimeout, setInterval, I/O callbacks.
- The engine drains microtasks between macrotasks.
`;

document.querySelector("#task1Output").textContent = task1Lines;
document.querySelector("#task2Output").textContent = task2Lines;
document.querySelector("#task3Output").textContent = task3Lines;
document.querySelector("#task4Output").textContent = task4Lines;
