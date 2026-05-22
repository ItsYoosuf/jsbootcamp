const task1Lines = `
Code
----
const orig = { name: "Priya", addr: { city: "Jaipur" } };
const copy = { ...orig };
copy.addr.city = "Mumbai";
console.log("after shallow copy, orig.addr.city =", orig.addr.city);

const deep = structuredClone(orig);
deep.addr.city = "Delhi";
console.log("after structuredClone change, orig.addr.city =", orig.addr.city);

Output
------
after shallow copy, orig.addr.city = Mumbai
after structuredClone change, orig.addr.city = Mumbai
`;

const task2Lines = `
Code
----
const state = {
  user: { name: "Priya", prefs: { theme: "light", lang: "en" } },
};
const nextState = {
  ...state,
  user: {
    ...state.user,
    prefs: { ...state.user.prefs, theme: "dark" },
  },
};
console.log("old theme", state.user.prefs.theme);
console.log("new theme", nextState.user.prefs.theme);

Output
------
old theme light
new theme dark
`;

const task3Lines = `
Code
----
const tasks = [
  { id: 1, title: "Learn JS", done: false },
  { id: 2, title: "Build app", done: false },
];

function toggleDone(list, id) {
  return list.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
}

const once = toggleDone(tasks, 1);
const twice = toggleDone(tasks, 1);
console.log("original", tasks[0].done);
console.log("once", once[0].done);
console.log("twice", twice[0].done);

Output
------
original false
once true
twice true
`;

const task4Lines = `
Code
----
let data = { user: { name: "Priya", profile: { city: null } } };
const city = data.user?.profile?.city ?? "Unknown";
const bioLen = data.user?.profile?.bio?.length ?? 0;
console.log(city, bioLen);

data = {};
const city2 = data.user?.profile?.city ?? "Unknown";
const bioLen2 = data.user?.profile?.bio?.length ?? 0;
console.log(city2, bioLen2);

Output
------
Unknown 0
Unknown 0
`;

document.querySelector("#task1Output").textContent = task1Lines;
document.querySelector("#task2Output").textContent = task2Lines;
document.querySelector("#task3Output").textContent = task3Lines;
document.querySelector("#task4Output").textContent = task4Lines;
