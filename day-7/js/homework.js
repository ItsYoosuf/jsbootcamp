"use strict";
const base = [1, 2, 3];
const extended = [0, ...base];
document.querySelector("#task1Output").textContent = JSON.stringify(extended);
const nums = [5, 1, 4, 2];
document.querySelector("#task2Output").textContent = JSON.stringify([...nums].sort((a, b) => a - b)) + " orig " + JSON.stringify(nums);
const sents = ["a b", "c"];
const words = sents.flatMap((s) => s.split(" "));
document.querySelector("#task3Output").textContent = "words=" + words.length + " " + words.join(",");
