// —— Task 1 — reference solution ——
const cart = ["bread", "milk", "eggs"];

cart.push("butter");
cart.unshift("rice");

const lines1 = [];
lines1.push('After push("butter") + unshift("rice"):');
lines1.push(JSON.stringify(cart));

const removed = cart.pop();
lines1.push("");
lines1.push("pop() removed → " + JSON.stringify(removed));
lines1.push("cart after pop → " + JSON.stringify(cart));

cart.splice(1, 1);
lines1.push("");
lines1.push("After splice(1, 1) → " + JSON.stringify(cart));

document.querySelector("#task1Output").textContent = lines1.join("\n");

// —— Task 2 — reference solution ——
const scores = [88, 42, 75, 60, 91, 39, 55, 70];

const passing = scores.filter((s) => s >= 60);
const firstFail = scores.find((s) => s < 60);
const allPass = scores.every((s) => s >= 60);
const anyAbove90 = scores.some((s) => s > 90);

console.log(passing);
console.log(firstFail);
console.log(allPass);
console.log(anyAbove90);

const lines2 = [];
lines2.push("filter (>= 60) → " + JSON.stringify(passing));
lines2.push("find (first failing) → " + firstFail);
lines2.push("every (all passing?) → " + allPass);
lines2.push("Bonus: some (> 90?) → " + anyAbove90);

document.querySelector("#task2Output").textContent = lines2.join("\n");
