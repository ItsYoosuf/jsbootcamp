"use strict";
document.querySelector("#task1Output").textContent =
  "Listen to keydown; if e.ctrlKey && e.key==='s' then e.preventDefault() to block save.";
document.querySelector("#task2Output").textContent =
  "{once:true} auto-removes listener after first call — handy for onboarding highlights.";
document.querySelector("#task3Output").textContent =
  "passive:true promises the handler won't call preventDefault so the browser can scroll smoothly.";
