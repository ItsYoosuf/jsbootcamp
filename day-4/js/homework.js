"use strict";
function route(cmd) {
  switch (cmd) {
    case "add":
      return "adding";
    case "list":
      return "listing";
    case "quit":
      return "bye";
    default:
      return "unknown";
  }
}
document.querySelector("#task1Output").textContent = ["add", "x", "quit"].map(route).join(" | ");
const t = 30;
document.querySelector("#task2Output").textContent = t < 0 ? "cold" : t <= 25 ? "mild" : "hot";
function pay(amount) {
  if (typeof amount !== "number" || !Number.isFinite(amount) || amount <= 0) return "skip";
  return "Paid " + amount;
}
document.querySelector("#task3Output").textContent = [pay(10), pay(-3), pay(NaN)].join(" | ");
