// Task 1 — method vs extracted method (this binding)
const t1 = (function () {
  "use strict";
  const user = {
    name: "Priya",
    greet() {
      return this && this.name ? this.name : "(lost this)";
    },
  };
  const lines = [];
  lines.push("user.greet(): " + user.greet());
  const g = user.greet;
  lines.push("g(): " + g());
  lines.push("// Second call is a plain function call — no object left of the dot, so this is not user.");
  return lines.join("\n");
})();
document.querySelector("#task1Output").textContent = t1;

// Task 2 — Timer fixes (text only — never start setInterval on this page)
const t2 = `
Problem: setInterval(t.tick, 1000) passes t.tick without receiver → this is wrong → TypeError.

Fix 1 — bind:
setInterval(t.tick.bind(t), 1000);

Fix 2 — arrow wrapper:
setInterval(() => t.tick(), 1000);

Fix 3 — class field arrow:
class TimerArrow {
  sec = 0;
  tick = () => { this.sec++; console.log(this.sec); };
}
`;
document.querySelector("#task2Output").textContent = t2;

// Task 3 — call / apply / bind
function describe(role, city) {
  return this.name + " is a " + role + " from " + city;
}
const u = { name: "Aarav" };
const t3 = [];
t3.push("call: " + describe.call(u, "developer", "Jaipur"));
t3.push("apply: " + describe.apply(u, ["developer", "Jaipur"]));
const bound = describe.bind(u, "developer");
t3.push("bind then call: " + bound("Mumbai"));
t3.push("// .call/.apply run now; .bind returns a new function with fixed this (and partial args)");
document.querySelector("#task3Output").textContent = t3.join("\n");

// Bonus — forEach + this (strict for predictable behavior)
const t4 = (function () {
  "use strict";
  const lines = [];
  const team = {
    members: ["Priya", "Aarav", "Riya"],
    printRegular() {
      try {
        this.members.forEach(function () {
          return this.members.length;
        });
        lines.push("regular: did not throw (unexpected)");
      } catch (e) {
        lines.push("regular forEach: " + e.name);
      }
    },
    printArrow() {
      const bits = [];
      this.members.forEach((m) => {
        bits.push(this.members.length + ":" + m);
      });
      lines.push("arrow forEach: " + bits.join(", "));
    },
  };
  team.printRegular();
  team.printArrow();
  return lines.join("\n");
})();
document.querySelector("#task4Output").textContent = t4;
