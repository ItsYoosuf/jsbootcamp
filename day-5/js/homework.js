"use strict";
const out = [];
for (let i = 1; i <= 30; i++) {
  let x = "";
  if (i % 3 === 0) x += "Fizz";
  if (i % 5 === 0) x += "Buzz";
  out.push(x || String(i));
}
document.querySelector("#task1Output").textContent = out.join(",");
const inputs = ["hi", "go", "quit"];
let idx = 0;
let steps = [];
do {
  steps.push(inputs[idx]);
  idx++;
} while (inputs[idx - 1] !== "quit");
document.querySelector("#task2Output").textContent = steps.join("->");
const stock = [2, 0, 5, 0, 1];
let z = 0;
for (const n of stock) if (n === 0) z++;
document.querySelector("#task3Output").textContent = "emptyBins=" + z;
