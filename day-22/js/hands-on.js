const task1Lines = `
Code
----
const prices = new Map([
  ["pen", 50],
  ["book", 200],
  ["bag", 800],
]);
for (const [item, p] of prices) {
  console.log(\`\${item}: ₹\${p}\`);
}
console.log("has book?", prices.has("book"), "get pen", prices.get("pen"));
prices.delete("pen");
console.log("size after delete pen", prices.size);
const obj = Object.fromEntries(prices);
const back = new Map(Object.entries(obj));
console.log("round-trip keys", [...back.keys()]);

Output
------
pen: ₹50
book: ₹200
bag: ₹800
has book? true get pen 50
size after delete pen 2
round-trip keys [ 'book', 'bag' ]
`;

const task2Lines = `
Code
----
const ids = [101, 102, 103, 101, 104, 102, 105];
const unique = [...new Set(ids)];
console.log("unique", unique, "count", unique.length);

const mixed = [1, "1", 1, true, 1n];
const mset = new Set(mixed);
console.log("mixed size", mset.size, [...mset]);

Output
------
unique [ 101, 102, 103, 104, 105 ] count 5
mixed size 5 [ 1, '1', true, 1n ]
`;

const task3Lines = `
Code
----
function memoize(fn) {
  const cache = new Map();
  function wrapped(...args) {
    const key = args[0];
    if (cache.has(key)) return cache.get(key);
    const out = fn.apply(this, args);
    cache.set(key, out);
    return out;
  }
  wrapped.cache = cache;
  return wrapped;
}

function expensiveSquare(n) {
  console.log("computing...");
  return n * n;
}

const msq = memoize(expensiveSquare);
console.log(msq(5));
console.log(msq(5));
console.log("cache.size", msq.cache.size);

Output
------
computing...
25
25
cache.size 1
`;

const task4Lines = `
Code
----
const meta = new WeakMap();
function attach(obj, data) {
  meta.set(obj, data);
}
function get(obj) {
  return meta.get(obj);
}
const btnA = { tag: "button-A" };
const btnB = { tag: "button-B" };
attach(btnA, { lastClick: 111 });
attach(btnB, { lastClick: 222 });
console.log(get(btnA), get(btnB));

Output
------
{ lastClick: 111 } { lastClick: 222 }
`;

document.querySelector("#task1Output").textContent = task1Lines;
document.querySelector("#task2Output").textContent = task2Lines;
document.querySelector("#task3Output").textContent = task3Lines;
document.querySelector("#task4Output").textContent = task4Lines;
