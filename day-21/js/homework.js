const task1Lines = `
Code
----
const state = {
  title: "App",
  ui: { theme: "light" },
  data: { count: 1 },
};
const next = {
  ...state,
  ui: { ...state.ui, theme: "dark" },
};
console.log("data branch shared?", next.data === state.data);
console.log("ui branch shared?", next.ui === state.ui);

Output
------
data branch shared? true
ui branch shared? false
`;

const task2Lines = `
Code
----
function deepFreeze(obj) {
  Object.freeze(obj);
  for (const key of Object.keys(obj)) {
    const v = obj[key];
    if (v && typeof v === "object" && !Object.isFrozen(v)) {
      deepFreeze(v);
    }
  }
  return obj;
}

const nested = { x: { y: { z: 1 } } };
deepFreeze(nested);
nested.x.y.z = 9; // ignored in strict? silent in sloppy
console.log(Object.isFrozen(nested.x.y));

Output
------
true
`;

const task3Lines = `
Notes — structuredClone vs JSON
--------------------------------
1. Keeps Date objects as Date (JSON turns them into strings).
2. Can clone Map, Set, ArrayBuffer (JSON cannot).
3. Preserves undefined inside objects (JSON drops undefined keys).
`;

const task4Lines = `
Code
----
function pick(obj, keys) {
  return keys.reduce((acc, k) => {
    if (k in obj) acc[k] = obj[k];
    return acc;
  }, {});
}

const user = { name: "Priya", city: "Jaipur", age: 20 };
console.log(pick(user, ["name", "age"]));

Output
------
{ name: 'Priya', age: 20 }
`;

document.querySelector("#task1Output").textContent = task1Lines;
document.querySelector("#task2Output").textContent = task2Lines;
document.querySelector("#task3Output").textContent = task3Lines;
document.querySelector("#task4Output").textContent = task4Lines;
