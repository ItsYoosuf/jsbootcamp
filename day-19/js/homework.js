const task1Lines = `
Code
----
// Same flow as homework Day 18, rewritten with async/await

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function twoWaits() {
  try {
    await wait(500);
    await wait(500);
    console.log("1s");
  } catch (e) {
    console.error(e);
  }
}

twoWaits();

Output
------
1s
`;

const task2Lines = `
Code
----
function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: "User-" + id }), 400);
  });
}

async function fetchAllUsersSequential(ids) {
  const out = [];
  const t0 = Date.now();
  for (const id of ids) {
    out.push(await fetchUser(id));
  }
  console.log("sequential ms", Date.now() - t0);
  return out;
}

async function fetchAllUsersParallel(ids) {
  const t0 = Date.now();
  const out = await Promise.all(ids.map((id) => fetchUser(id)));
  console.log("parallel ms", Date.now() - t0);
  return out;
}

(async () => {
  const ids = [1, 2, 3];
  await fetchAllUsersSequential(ids);
  await fetchAllUsersParallel(ids);
})();

Output
------
sequential ms ≈ 1200
parallel ms ≈ 400
`;

const task3Lines = `
Code
----
function withTimeout(promise, ms) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("timeout")), ms)
  );
  return Promise.race([promise, timeout]);
}

function slowOk() {
  return new Promise((resolve) => setTimeout(() => resolve("done"), 100));
}

withTimeout(slowOk(), 500).then(console.log).catch(console.log);

Output
------
done
`;

const task4Lines = `
Code
----
async function orderedDelays() {
  for (const ms of [300, 100, 200]) {
    await new Promise((r) => setTimeout(r, ms));
    console.log("finished", ms);
  }
}

orderedDelays();

Output
------
finished 300
finished 100
finished 200   (same order as the array)
`;

document.querySelector("#task1Output").textContent = task1Lines;
document.querySelector("#task2Output").textContent = task2Lines;
document.querySelector("#task3Output").textContent = task3Lines;
document.querySelector("#task4Output").textContent = task4Lines;
