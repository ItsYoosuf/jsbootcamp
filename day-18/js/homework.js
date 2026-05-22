const task1Lines = `
Code
----
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

wait(500)
  .then(() => wait(500))
  .then(() => console.log("1s"));

Output
------
1s
`;

const task2Lines = `
Code
----
function fetchData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) resolve({ id, ok: true });
      else reject(new Error("random fail"));
    }, 200);
  });
}

fetchData(1)
  .then((d) => {
    console.log("step1", d);
    return fetchData(2);
  })
  .then((d) => {
    console.log("step2", d);
    return fetchData(3);
  })
  .then((d) => console.log("step3", d))
  .catch((e) => console.log("caught:", e.message));

Output
------
(varies each run — either three steps or caught: random fail)
`;

const task3Lines = `
Code
----
function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: "Priya" }), 2500);
  });
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

Promise.race([
  fetchUser(7),
  wait(2000).then(() => Promise.reject(new Error("timeout"))),
]).catch((e) => console.log(e.message));

Output
------
timeout
`;

const task4Lines = `
Code
----
function flaky(label) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.7) reject(new Error(label + " fail"));
      else resolve(label + " ok");
    }, 100);
  });
}

Promise.any([
  flaky("A"),
  flaky("B"),
  flaky("C"),
])
  .then((first) => console.log("first success:", first))
  .catch((e) => console.log("all failed", e));

Output
------
first success: ...ok   (first fulfilled promise wins; rejects are ignored until all fail)
`;

document.querySelector("#task1Output").textContent = task1Lines;
document.querySelector("#task2Output").textContent = task2Lines;
document.querySelector("#task3Output").textContent = task3Lines;
document.querySelector("#task4Output").textContent = task4Lines;
