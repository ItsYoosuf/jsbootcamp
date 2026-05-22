const topic1Snippet = `const m = new Map();
m.set("name", "Priya");
m.set(42, "the answer");
m.set(true, "a boolean key");
const userObj = { id: 1 };
m.set(userObj, "value for that object ref");
console.log(m.get("name"), m.size, m.has(42));
for (const [k, v] of m) console.log(k, "=>", v);`;

const topic2Snippet = `const obj = { name: "Priya", city: "Jaipur" };
const map = new Map(Object.entries(obj));
const back = Object.fromEntries(map);
map.forEach((value, key) => console.log(key, "=", value)); // value first!`;

const topic3Snippet = `const s = new Set();
s.add("a");
s.add("b");
s.add("a");
const tags = new Set(["js", "react", "js", "node", "react"]);
const uniq = [...new Set([1, 2, 2, 3, 4, 4, 5])];
const set = new Set();
set.add({ id: 1 });
set.add({ id: 1 }); // different object refs → size 2`;

const topic4Snippet = `const a = new Set([1, 2, 3]);
const b = new Set([2, 3, 4]);
const union = new Set([...a, ...b]);
const inter = new Set([...a].filter((x) => b.has(x)));
const diff = new Set([...a].filter((x) => !b.has(x)));`;

const topic5Snippet = `// String-key config → Object
// Ordered list → Array
// Any-key map / heavy churn → Map
// Dedup / membership → Set
const cache = new Map();
function fetchWithCache(req) {
  if (cache.has(req)) return cache.get(req);
  const result = /* ... */;
  cache.set(req, result);
  return result;
}`;

const topic6Snippet = `const wm = new WeakMap();
let user = { id: 1 };
wm.set(user, { lastSeen: Date.now() });
user = null; // entry may be collected — not observable
// DOM metadata: attach(el, data) without leaking removed nodes`;

const topic7Snippet = `// Map   : iterable, any keys, strong refs
// Set   : iterable, unique values
// WeakMap: object keys only, not iterable, GC-friendly metadata
// WeakSet: object membership, not iterable, "have I seen this ref?"`;

document.querySelector("#topic1Code code").textContent = topic1Snippet;
document.querySelector("#topic2Code code").textContent = topic2Snippet;
document.querySelector("#topic3Code code").textContent = topic3Snippet;
document.querySelector("#topic4Code code").textContent = topic4Snippet;
document.querySelector("#topic5Code code").textContent = topic5Snippet;
document.querySelector("#topic6Code code").textContent = topic6Snippet;
document.querySelector("#topic7Code code").textContent = topic7Snippet;
