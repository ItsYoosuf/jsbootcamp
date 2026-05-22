const topic1Snippet = `async function addOne(x) {
  return x + 1;
}

addOne(5).then((v) => console.log(v));
// async always returns a Promise`;

const topic2Snippet = `function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  console.log("start");
  await delay(300);
  console.log("after 300ms");
}

run();`;

const topic3Snippet = `async function load() {
  try {
    const user = await fetchUser(7);
    console.log(user);
  } catch (e) {
    console.error("failed:", e.message);
  }
}`;

const topic4Snippet = `// Sequential — total time adds up
async function slow(ids) {
  const out = [];
  for (const id of ids) {
    out.push(await fetchPrice(id));
  }
  return out;
}

// Parallel — total time ≈ slowest single call
async function fast(ids) {
  return Promise.all(ids.map((id) => fetchPrice(id)));
}`;

const topic5Snippet = `// BAD: forEach does not await the async callback
ids.forEach(async (id) => {
  await fetchPrice(id);
});

// GOOD: for...of
for (const id of ids) {
  await fetchPrice(id);
}

// GOOD: Promise.all + map
await Promise.all(ids.map((id) => fetchPrice(id)));`;

const topic6Snippet = `// Top-level await only works in ES modules (type="module")
// const data = await fetch("/api.json");`;

const topic7Snippet = `async function getName(id) {
  const user = await fetchUser(id);
  return user.name;
}

getName(7).then((name) => console.log(name));

(async () => {
  const name = await getName(7);
  console.log(name);
})();`;

document.querySelector("#topic1Code code").textContent = topic1Snippet;
document.querySelector("#topic2Code code").textContent = topic2Snippet;
document.querySelector("#topic3Code code").textContent = topic3Snippet;
document.querySelector("#topic4Code code").textContent = topic4Snippet;
document.querySelector("#topic5Code code").textContent = topic5Snippet;
document.querySelector("#topic6Code code").textContent = topic6Snippet;
document.querySelector("#topic7Code code").textContent = topic7Snippet;
