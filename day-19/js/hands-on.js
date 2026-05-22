const task1Lines = `
Code
----
function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: "Priya" }), 300);
  });
}

function fetchOrders(userId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve([{ id: 1 }, { id: 2 }]), 300);
  });
}

async function showOrders(id) {
  try {
    const user = await fetchUser(id);
    const orders = await fetchOrders(user.id);
    console.log("orders count:", orders.length);
  } catch (e) {
    console.error(e);
  }
}

showOrders(7);

Output
------
orders count: 2
`;

const task2Lines = `
Code
----
function fetchPrice(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, price: 100 }), 500);
  });
}

async function slow() {
  const t0 = Date.now();
  await fetchPrice(1);
  await fetchPrice(2);
  await fetchPrice(3);
  console.log("slow ms", Date.now() - t0);
}

async function fast() {
  const t0 = Date.now();
  await Promise.all([fetchPrice(1), fetchPrice(2), fetchPrice(3)]);
  console.log("fast ms", Date.now() - t0);
}

slow().then(fast);

Output
------
slow ms ≈ 1500
fast ms ≈ 500
`;

const task3Lines = `
Code
----
function fetchPrice(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, price: 100 }), 500);
  });
}

const ids = [1, 2, 3];

async function broken() {
  const t0 = Date.now();
  ids.forEach(async (id) => {
    const p = await fetchPrice(id);
    console.log("price", id, p.price);
  });
  console.log("forEach returned after ms", Date.now() - t0);
}

async function fixedForOf() {
  for (const id of ids) {
    const p = await fetchPrice(id);
    console.log("forOf price", id, p.price);
  }
}

async function fixedAll() {
  const results = await Promise.all(ids.map((id) => fetchPrice(id)));
  console.log("all prices", results.map((r) => r.price));
}

Output
------
forEach returned after ms ≈ 0   (logs happen later)
forOf / Promise.all patterns wait correctly
`;

const task4Lines = `
Code
----
async function retry(fn, attempts) {
  let lastErr;
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr;
}

async function flaky() {
  if (Math.random() < 0.5) throw new Error("nope");
  return "ok";
}

retry(flaky, 3)
  .then(console.log)
  .catch((e) => console.log("gave up:", e.message));

Output
------
ok   OR   gave up: nope
`;

document.querySelector("#task1Output").textContent = task1Lines;
document.querySelector("#task2Output").textContent = task2Lines;
document.querySelector("#task3Output").textContent = task3Lines;
document.querySelector("#task4Output").textContent = task4Lines;
