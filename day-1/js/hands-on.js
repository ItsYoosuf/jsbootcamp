"use strict";
const t1 = ["Hello JS!", "Priya", 42, true].map((v) => String(v)).join(" | ");
document.querySelector("#task1Output").textContent = t1;

let score = 0;
score += 5;
const t2 = ["const name = Priya (fixed binding)", "let score after +=5 => " + score].join("\n");
document.querySelector("#task2Output").textContent = t2;

const t3 = [
  "// Single-line // and multi-line /* */",
  '"use strict"; at top of file enables strict mode globally',
].join("\n");
document.querySelector("#task3Output").textContent = t3;
