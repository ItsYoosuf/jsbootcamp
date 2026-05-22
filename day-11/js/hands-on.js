"use strict";
function mount11() {
  let r = document.getElementById("dom11-lab");
  if (!r) {
    r = document.createElement("div");
    r.id = "dom11-lab";
    r.style.position = "fixed";
    r.style.left = "-9999px";
    document.body.appendChild(r);
  }
  r.innerHTML = `
<button id="d11-counter-btn">Click me</button>
<p>Clicks: <span id="d11-count">0</span></p>
<input id="d11-live-input" placeholder="Type..." />
<p id="d11-preview"></p>
<form id="d11-form"><input id="d11-name" placeholder="Your name" /><button type="submit">Submit</button></form>
<p id="d11-welcome"></p>
<ul id="d11-todo-list"><li>Buy milk</li><li>Walk dog</li><li>Pay bills</li></ul>
<style>#d11-todo-list .done{opacity:.5;text-decoration:line-through}</style>`;
  return r;
}
const box = mount11();
let clicks = 0;
box.querySelector("#d11-counter-btn").addEventListener("click", () => {
  clicks++;
  box.querySelector("#d11-count").textContent = String(clicks);
});
document.querySelector("#task1Output").textContent = "counter wired (click in real page to test)";

box.querySelector("#d11-live-input").addEventListener("input", (e) => {
  box.querySelector("#d11-preview").textContent = e.target.value;
});
box.querySelector("#d11-live-input").dispatchEvent(new Event("input", { bubbles: true }));
document.querySelector("#task2Output").textContent = box.querySelector("#d11-preview").textContent;

box.querySelector("#d11-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const n = box.querySelector("#d11-name").value || "friend";
  box.querySelector("#d11-welcome").textContent = "Welcome " + n;
});
box.querySelector("#d11-name").value = "Anaya";
box.querySelector("#d11-welcome").textContent =
  "Welcome " + (box.querySelector("#d11-name").value || "friend");
document.querySelector("#task3Output").textContent = box.querySelector("#d11-welcome").textContent;

box.querySelector("#d11-todo-list").addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;
  li.classList.toggle("done");
});
const first = box.querySelector("#d11-todo-list li");
first.click();
document.querySelector("#task4Output").textContent = "first li done? " + first.classList.contains("done");
