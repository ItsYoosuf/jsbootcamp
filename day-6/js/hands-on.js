"use strict";
const area = (length, width) => length * width;
document.querySelector("#task1Output").textContent = [area(2, 3), area(4, 5), area(1, 10)].join(" | ");

function greet(name = "Guest") {
  return "Hello, " + name + "!";
}
document.querySelector("#task2Output").textContent = [greet("Priya"), greet("Aarav"), greet(), greet(null)].join(" | ");

const cToF = (c) => (c * 9) / 5 + 32;
document.querySelector("#task3Output").textContent = [0, 100, 37, 45].map(cToF).join(" | ");

function double(n) {
  return n * 2;
}
let total = 0;
function addToTotal(n) {
  total += n;
  return total;
}
total = 0;
const imp = [addToTotal(1), addToTotal(2), addToTotal(3)];
document.querySelector("#task4Output").textContent =
  "pure " + [double(2), double(2), double(2)].join(",") + " | impure " + imp.join(",");
