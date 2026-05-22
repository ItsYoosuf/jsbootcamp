"use strict";
let log = [];
try {
  JSON.parse("{");
} catch (e) {
  log.push("fail");
} finally {
  log.push("cleanup");
}
document.querySelector("#task1Output").textContent = log.join("->");
document.querySelector("#task2Output").textContent =
  "Re-throw after logging lets middleware handle while preserving stack.";
document.querySelector("#task3Output").textContent =
  "Dynamic import() loads code on demand (code splitting, conditional features).";
