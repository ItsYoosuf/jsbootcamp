const topic1Snippet = `// Call stack runs synchronous code first
console.log("sync 1");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => console.log("microtask"));

console.log("sync 2");
// Typical: sync 1, sync 2, microtask, timeout`;

const topic2Snippet = `// Microtasks: Promise.then, queueMicrotask, await continuation
// Macrotasks: setTimeout, setInterval, DOM events

queueMicrotask(() => console.log("micro A"));
setTimeout(() => console.log("macro B"), 0);
queueMicrotask(() => console.log("micro C"));`;

const topic3Snippet = `// After the stack is empty:
// 1) Run all microtasks until the queue is empty
// 2) Run one macrotask
// 3) Repeat

async function demo() {
  console.log("a");
  await Promise.resolve();
  console.log("b");
}
demo();
console.log("c");`;

const topic4Snippet = `const slow = new Promise((resolve) => setTimeout(() => resolve("slow wins"), 500));
const fast = new Promise((resolve) => setTimeout(() => resolve("never first"), 0));

Promise.race([slow, fast]).then(console.log);`;

const topic5Snippet = `Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
]).then(console.log);

Promise.allSettled([
  Promise.resolve("ok"),
  Promise.reject(new Error("bad")),
]).then((r) => console.log(r[1].status));`;

const topic6Snippet = `// await schedules the rest of the function as a microtask
async function step() {
  console.log(1);
  await null;
  console.log(2);
}
step();
console.log(3);`;

const topic7Snippet = `// fetch().then() — response handling is async
// UI stays responsive because long work goes through tasks/microtasks

// Read: javascript.info/event-loop`;

document.querySelector("#topic1Code code").textContent = topic1Snippet;
document.querySelector("#topic2Code code").textContent = topic2Snippet;
document.querySelector("#topic3Code code").textContent = topic3Snippet;
document.querySelector("#topic4Code code").textContent = topic4Snippet;
document.querySelector("#topic5Code code").textContent = topic5Snippet;
document.querySelector("#topic6Code code").textContent = topic6Snippet;
document.querySelector("#topic7Code code").textContent = topic7Snippet;
