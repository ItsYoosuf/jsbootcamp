// Task 1 — var hoist (student doc exact idea)
const task1 = [];
task1.push("// console.log(name); var name = 'Priya'; console.log(name);");
task1.push("first line prints: undefined");
task1.push("second line prints: Priya");
task1.push("// var is hoisted to top of scope as undefined, so no ReferenceError");
document.querySelector("#task1Output").textContent = task1.join("\n");

// Task 2 — TDZ
const task2 = [];
try {
  const f = new Function(`"use strict"; console.log(city); let city = "Jaipur";`);
  f();
} catch (e) {
  task2.push("console.log(city); let city = 'Jaipur';");
  task2.push("Error: " + e.name);
  task2.push(e.message);
}
task2.push("// TDZ = Temporal Dead Zone — let/const cannot be read before their line");
document.querySelector("#task2Output").textContent = task2.join("\n");

// Task 3 — declaration vs expression order
const task3 = [];
function sayHi() {
  task3.push("Hi");
}
sayHi();
try {
  greet();
} catch (e) {
  task3.push("greet() → " + e.name + ": " + e.message);
}
var greet = function () {
  task3.push("Hello");
};
greet();
task3.push("// sayHi is fully hoisted; greet is var (undefined) until assignment → TypeError if called early");
document.querySelector("#task3Output").textContent = task3.join("\n");

// Bonus — stack / multiply
const task4 = [];
function multiply(a, b) {
  task4.push("inside multiply — see DevTools console.trace for full stack");
  return a * b;
}
function square(n) {
  return multiply(n, n);
}
function printSquare(n) {
  task4.push("square(" + n + ") = " + square(n));
}
printSquare(5);
document.querySelector("#task4Output").textContent = task4.join("\n");
