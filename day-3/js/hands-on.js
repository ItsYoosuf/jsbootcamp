"use strict";
const a = 17;
const b = 5;
const t1 = [a + b, a - b, a * b, a / b, a % b, a ** b].join(" | ") + " | 42 is " + (42 % 2 === 0 ? "even" : "odd");
document.querySelector("#task1Output").textContent = t1;
const t2 = [
  "5==\"5\" " + (5 == "5"),
  '5==="5" ' + (5 === "5"),
  "0==false " + (0 == false),
  "0===false " + (0 === false),
  "null==undefined " + (null == undefined),
].join("\n");
document.querySelector("#task2Output").textContent = t2;
const age = 19;
const hasLicense = true;
const hasCar = false;
document.querySelector("#task3Output").textContent =
  "drive " + (age >= 18 && hasLicense) + " | travel " + (hasLicense || hasCar);
const mood = age >= 18 ? "adult" : "minor";
let username = null;
const b1 = username ?? "Guest";
const b2 = username || "Guest";
let u2 = 0;
document.querySelector("#task4Output").textContent =
  [mood, b1, b2, "0 ?? 10 => " + (u2 ?? 10), "0 || 10 => " + (u2 || 10)].join("\n");
