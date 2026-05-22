"use strict";
function safeParse(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return null;
  }
}
document.querySelector("#task1Output").textContent =
  "valid -> " + JSON.stringify(safeParse('{"name":"Priya"}')) + "\nbroken -> " + String(safeParse('{"name":"Priya"'));

function setAge(age) {
  if (typeof age !== "number") throw new Error("Age must be a number");
  if (age < 0 || age > 120) throw new Error("Age must be 0–120");
  return age;
}
const ages = [];
function tryAge(a) {
  try {
    ages.push(String(setAge(a)));
  } catch (e) {
    ages.push(e.message);
  }
}
tryAge(25);
tryAge("twenty");
tryAge(200);
document.querySelector("#task2Output").textContent = ages.join(" | ");

class ValidationError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "ValidationError";
  }
}
function validateEmail(email) {
  if (!email.includes("@")) throw new ValidationError("bad email");
  return "ok";
}
let mailOut = [];
for (const m of ["priya@example.com", "priya-no-at"]) {
  try {
    mailOut.push(validateEmail(m));
  } catch (err) {
    mailOut.push(err instanceof ValidationError ? "ValidationError: " + err.message : String(err));
  }
}
document.querySelector("#task3Output").textContent = mailOut.join(" | ");

document.querySelector("#task4Output").textContent =
  "Use mathUtils.js for named exports; use a different filename (e.g. formatUtils.js) for default export of formatPrice — avoid duplicate names.";
