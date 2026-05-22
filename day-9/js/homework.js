"use strict";
document.querySelector("#task1Output").textContent =
  "Tagged templates let you parse template literal parts with a function — useful for i18n or DSLs.";
let a = 1,
  b = 2;
[a, b] = [b, a];
document.querySelector("#task2Output").textContent = "swapped " + a + " " + b;
const add5 = (n) => n + 5;
document.querySelector("#task3Output").textContent = String(add5(10));
