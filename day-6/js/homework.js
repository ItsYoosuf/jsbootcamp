"use strict";
function repeat(n, fn) {
  for (let i = 0; i < n; i++) fn();
}
let c = 0;
repeat(4, () => c++);
document.querySelector("#task1Output").textContent = "called " + c;
const maxOf = (...nums) => Math.max(...nums);
document.querySelector("#task2Output").textContent = String(maxOf(3, 9, 2));
document.querySelector("#task3Output").textContent = (function () {
  const secret = 42;
  return "secret=" + secret;
})() + " (IIFE hides secret from global scope)";
