"use strict";
function lab10() {
  let root = document.getElementById("dom10-lab");
  if (!root) {
    root = document.createElement("div");
    root.id = "dom10-lab";
    root.style.position = "fixed";
    root.style.left = "-9999px";
    root.style.top = "0";
    document.body.appendChild(root);
  }
  root.innerHTML =
    '<h1 id="d10-title">JS Training</h1><button id="d10-theme-btn">Toggle Theme</button><ul id="d10-names"></ul><button id="d10-add">Add Name</button><div id="d10-cards"></div>';
  return root;
}
const root = lab10();
const title = root.querySelector("#d10-title");
title.textContent = "Hello, Priya!";
title.style.color = "crimson";
title.style.fontFamily = "Georgia, serif";
document.querySelector("#task1Output").textContent = title.textContent + " | " + title.style.color;

document.body.classList.toggle("dark");
document.body.classList.toggle("dark");
document.querySelector("#task2Output").textContent = "dark? " + document.body.classList.contains("dark");

const list = root.querySelector("#d10-names");
["Priya", "Aarav", "Riya", "Kabir"].forEach((name, i) => {
  const li = document.createElement("li");
  li.textContent = i + 1 + ". " + name;
  li.className = "name-item";
  list.appendChild(li);
});
document.querySelector("#task3Output").textContent = "li count=" + list.children.length;

const cards = root.querySelector("#d10-cards");
const product = { name: "Laptop", price: 60000, brand: "Dell" };
const card = document.createElement("div");
card.textContent = `${product.brand} ${product.name} ₹${product.price}`;
cards.appendChild(card);
document.querySelector("#task4Output").textContent = cards.textContent;
