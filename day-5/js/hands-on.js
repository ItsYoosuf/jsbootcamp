"use strict";
const t1 = [];
for (let i = 1; i <= 10; i++) {
  t1.push(`7 x ${i} = ${7 * i}`);
}
const evens = [];
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) evens.push(`7 x ${i} = ${7 * i}`);
}
document.querySelector("#task1Output").textContent = t1.join("\n") + "\n--even multipliers--\n" + evens.join("\n");

let s = 0;
let j = 1;
while (j <= 100) {
  s += j;
  j++;
}
let odd = 0;
let k = 1;
while (k <= 100) {
  if (k % 2 === 1) odd += k;
  k++;
}
document.querySelector("#task2Output").textContent = "sum1-100=" + s + " oddSum=" + odd;

const names = ["Priya", "Aarav", "Riya", "Kabir", "Anaya"];
let long = 0;
const lines = [];
for (const n of names) lines.push(n);
for (const n of names) if (n.length > 4) long++;
document.querySelector("#task3Output").textContent = lines.join(",") + " | long>4: " + long;

let chars = [];
for (const ch of "Jaipur") chars.push(ch);
const student = { name: "Anaya", age: 21, city: "Jaipur", course: "B.Tech" };
const pairs = [];
let cnt = 0;
for (const key in student) {
  pairs.push(key + ": " + student[key]);
  cnt++;
}
document.querySelector("#task4Output").textContent = chars.join("") + "\n" + pairs.join("\n") + "\ncount=" + cnt;
