"use strict";
const lines = [];
const name = "Priya";
const age = 21;
const score = 98.5;
const isPassed = true;
let city;
const selected = null;
const id = Symbol("user");
const big = 9007199254740991n;
lines.push("primitives: " + [name, age, score, isPassed, city, selected, String(id), String(big)].join(" | "));
["Hello", 42, true, undefined, null, Symbol(), 10n].forEach((v, i) => {
  const kinds = ["string sample", "number", "boolean", "undefined", "null", "symbol", "bigint"];
  lines.push("typeof case " + i + " -> " + typeof v);
});
lines.push('5 + "3" => ' + (5 + "3"));
lines.push('"10" - 4 => ' + ("10" - 4));
lines.push("true + 1 => " + (true + 1));
const greeting = "  Hello, JavaScript!  ";
lines.push(
  ["len", greeting.length, "trim", greeting.trim(), "up", greeting.trim().toUpperCase(), "hasJS", greeting.includes("JavaScript"), "slice5", greeting.trim().slice(0, 5)].join(
    " | ",
  ),
);
document.querySelector("#task1Output").textContent = lines.slice(0, 2).join("\n");
document.querySelector("#task2Output").textContent = lines.slice(2, 9).join("\n");
document.querySelector("#task3Output").textContent = lines.slice(9, 12).join("\n");
document.querySelector("#task4Output").textContent = lines[12];
