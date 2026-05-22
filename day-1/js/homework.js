"use strict";
const t1 = [
  "Chrome uses the V8 engine (same family as Node).",
  "console.log('Favorite site:', 'https://example.com');",
].join("\n");
document.querySelector("#task1Output").textContent = t1;

const t2 = ["const pi = 3.14159;", "let count = 0; count++;", "log count => 1"].join("\n");
document.querySelector("#task2Output").textContent = t2;

document.querySelector("#task3Output").textContent =
  "Read MDN: var — understand hoisting and why let/const replaced var for most code.";
