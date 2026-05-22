const topic1Snippet = `// Synchronous — runs top to bottom
console.log("1");
console.log("2");
console.log("3");

// Asynchronous — setTimeout does not pause the script
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
// Typical order: A, C, B`;

const topic2Snippet = `function fetchUser(id, callback) {
  console.log(\`Fetching user \${id}...\`);
  setTimeout(() => {
    const user = { id, name: "Priya" };
    callback(null, user);
  }, 1000);
}

fetchUser(7, (err, user) => {
  if (err) {
    console.error("Failed:", err);
    return;
  }
  console.log("Got user:", user);
});`;

const topic3Snippet = `// "Callback hell" — nested callbacks, repeated error checks
fetchUser(7, (err, user) => {
  if (err) { console.error(err); return; }
  fetchOrders(user.id, (err, orders) => {
    if (err) { console.error(err); return; }
    fetchItems(orders[0].id, (err, items) => {
      if (err) { console.error(err); return; }
      console.log(items);
    });
  });
});`;

const topic4Snippet = `const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) resolve("Done!");
    else reject(new Error("Oops"));
  }, 1000);
});

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(500).then(() => console.log("half a second passed"));`;

const topic5Snippet = `function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id < 0) reject(new Error("Bad id"));
      else resolve({ id, name: "Priya" });
    }, 500);
  });
}

fetchUser(7)
  .then((user) => {
    console.log("got user:", user);
    return user.id;
  })
  .then((id) => fetchUser(id + 1))
  .then((nextUser) => console.log("next user:", nextUser))
  .catch((err) => console.error("caught:", err.message))
  .finally(() => console.log("done"));`;

const topic6Snippet = `const p1 = Promise.resolve("user");
const p2 = Promise.resolve("orders");
const p3 = Promise.resolve("items");

Promise.all([p1, p2, p3]).then(([a, b, c]) => console.log(a, b, c));

Promise.allSettled([
  Promise.resolve("ok"),
  Promise.reject(new Error("no")),
]).then((results) => console.log(results[1].status));

Promise.race([
  delay(100).then(() => "fast"),
  delay(500).then(() => "slow"),
]).then((winner) => console.log("race winner:", winner));`;

const topic7Snippet = `const cached = Promise.resolve({ id: 1, name: "Priya" });
cached.then((u) => console.log(u));

const failed = Promise.reject(new Error("nope"));
failed.catch((e) => console.log("caught:", e.message));

function getUser(id, cache) {
  if (cache[id]) return Promise.resolve(cache[id]);
  return fetchUser(id);
}`;

document.querySelector("#topic1Code code").textContent = topic1Snippet;
document.querySelector("#topic2Code code").textContent = topic2Snippet;
document.querySelector("#topic3Code code").textContent = topic3Snippet;
document.querySelector("#topic4Code code").textContent = topic4Snippet;
document.querySelector("#topic5Code code").textContent = topic5Snippet;
document.querySelector("#topic6Code code").textContent = topic6Snippet;
document.querySelector("#topic7Code code").textContent = topic7Snippet;
