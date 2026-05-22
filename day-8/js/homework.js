"use strict";
const user = { name: "Riya", address: { city: "Jaipur", pin: "302001" } };
document.querySelector("#task1Output").textContent = user.address?.city ?? "unknown";
const key = "id";
document.querySelector("#task2Output").textContent = JSON.stringify({ [key]: 7 });
document.querySelector("#task3Output").textContent =
  "Object.freeze is shallow: nested objects stay mutable unless frozen separately.";
