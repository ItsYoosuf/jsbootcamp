"use strict";
document.querySelector("#task1Output").textContent =
  String("Hi" && "Priya") + " | " + String(0 || "fallback");
document.querySelector("#task2Output").textContent = String(
  ({ name: "Riya" }).address?.city ?? "unknown",
);
document.querySelector("#task3Output").textContent = 1 + 2 * 3 + " vs " + (1 + 2) * 3;
