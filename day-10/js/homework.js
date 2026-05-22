"use strict";
const b = document.createElement("button");
b.dataset.action = "save";
document.querySelector("#task1Output").textContent = b.dataset.action;
const lab = document.getElementById("dom10-lab");
const items = lab ? lab.querySelectorAll(".name-item") : [];
document.querySelector("#task2Output").textContent = lab
  ? Array.from(items)
      .map((n) => n.textContent)
      .join(" | ")
  : "(Open Day 10 Hands-on once to create the practice lab, or ignore.)";
document.querySelector("#task3Output").textContent =
  "textContent treats content as plain text; innerHTML parses HTML and can execute a script if untrusted input is inserted.";
