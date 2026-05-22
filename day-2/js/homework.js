"use strict";
const falsy = [false, 0, "", null, undefined, NaN];
document.querySelector("#task1Output").textContent =
  "Boolean checks: " + falsy.map((v) => String(v) + "->" + Boolean(v)).join(", ");
document.querySelector("#task2Output").textContent = "raw -> " + "  JS-302  ".trim().toLowerCase();
document.querySelector("#task3Output").textContent =
  "max safe int: " +
  Number.MAX_SAFE_INTEGER +
  " | +2 as number: " +
  (Number.MAX_SAFE_INTEGER + 2) +
  " | bigint +2: " +
  (BigInt(Number.MAX_SAFE_INTEGER) + 2n);
