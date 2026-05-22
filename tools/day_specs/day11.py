# Day 11 — Day11_Student_Doc.html

SPEC = {
    "topic_line": "Day 11 — Events &amp; Event Handling",
    "topic_titles": [
        "What is an event?",
        "addEventListener basics",
        "The event object",
        "preventDefault and stopPropagation",
        "Event delegation pattern",
        "Common DOM events",
    ],
    "topic_snippets": [
        """btn.addEventListener("click", () => {
  console.log("clicked");
});""",
        """input.addEventListener("input", (e) => {
  console.log(e.target.value);
});""",
        """form.addEventListener("submit", (e) => {
  e.preventDefault();
});""",
        """list.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;
  li.classList.toggle("done");
});""",
        """// Delegation: one listener on parent for many children""",
        """// mouseenter, keydown, change, focus, blur — pick per UX need""",
    ],
    "hands_label": "Day 11 · Events &amp; Event Handling",
    "hands_blocks": [
        (
            "Task 1",
            "Click counter",
            [
                r"Mount lab markup with <code>#d11-counter-btn</code> and <code>#d11-count</code>; wire click to increment count text.",
            ],
            True,
        ),
        (
            "Task 2",
            "Live input preview",
            [
                r"Wire <code>#d11-live-input</code> to update <code>#d11-preview</code> text on <code>input</code> events.",
            ],
            False,
        ),
        (
            "Task 3",
            "Form submit",
            [
                r"Prevent real navigation: on <code>#d11-form</code> submit, <code>preventDefault</code> and set <code>#d11-welcome</code> from name field.",
            ],
            False,
        ),
        (
            "Bonus",
            "Delegated todos",
            [
                r"Use one listener on <code>#d11-todo-list</code> to toggle <code>.done</code> class on clicked <code>li</code> via <code>closest</code>.",
            ],
            False,
        ),
    ],
    "hands_js": r""""use strict";
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
""",
    "hw_label": "Day 11 · Events &amp; Event Handling",
    "hw_blocks": [
        (
            "Task 1",
            "keydown combo",
            [
                r"Describe (in output text) how you would listen for <code>Ctrl+S</code> and call <code>preventDefault</code> to avoid browser save dialog.",
            ],
            True,
        ),
        (
            "Task 2",
            "once: true",
            [
                r"Explain when <code>{ once: true }</code> on <code>addEventListener</code> is useful.",
            ],
            False,
        ),
        (
            "Task 3",
            "Passive listeners",
            [
                r"One sentence: why touch/wheel listeners sometimes use <code>{ passive: true }</code>.",
            ],
            False,
        ),
    ],
    "hw_js": r""""use strict";
document.querySelector("#task1Output").textContent =
  "Listen to keydown; if e.ctrlKey && e.key==='s' then e.preventDefault() to block save.";
document.querySelector("#task2Output").textContent =
  "{once:true} auto-removes listener after first call — handy for onboarding highlights.";
document.querySelector("#task3Output").textContent =
  "passive:true promises the handler won't call preventDefault so the browser can scroll smoothly.";
""",
}
