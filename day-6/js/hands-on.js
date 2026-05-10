// —— Task 1 — reference solution ——
function area(length, width) {
    return length * width;
}

const areaArrow = (length, width) => length * width;

const lines1 = [];
lines1.push("area(5, 3)  → " + area(5, 3));
lines1.push("area(10, 4) → " + area(10, 4));
lines1.push("area(7, 7)  → " + area(7, 7));
lines1.push("");
lines1.push("Bonus: areaArrow(8, 6) → " + areaArrow(8, 6));

console.log(area(5, 3));
console.log(area(10, 4));
console.log(area(7, 7));
console.log(areaArrow(8, 6));

document.querySelector("#task1Output").textContent = lines1.join("\n");

// —— Task 2 — reference solution ——
const greet = (name = "Guest") => `Hello, ${name}!`;

const lines2 = [];
lines2.push('greet("Priya") → ' + greet("Priya"));
lines2.push('greet("Aarav") → ' + greet("Aarav"));
lines2.push("greet()        → " + greet());
lines2.push("");
lines2.push("Bonus: greet(null) → " + greet(null));
lines2.push("(Default runs only for undefined, not null.)");

console.log(greet("Priya"));
console.log(greet("Aarav"));
console.log(greet());
console.log(greet(null));

document.querySelector("#task2Output").textContent = lines2.join("\n");
