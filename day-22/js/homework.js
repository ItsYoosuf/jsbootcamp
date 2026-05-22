const task1Lines = `
Code
----
function tagCounter(posts) {
  const counts = new Map();
  for (const p of posts) {
    for (const t of p.tags) {
      counts.set(t, (counts.get(t) ?? 0) + 1);
    }
  }
  return counts;
}

const posts = [
  { id: 1, tags: ["js", "web"] },
  { id: 2, tags: ["js", "node"] },
  { id: 3, tags: ["web", "css"] },
];
console.log([...tagCounter(posts)]);

Output
------
[ [ 'js', 2 ], [ 'web', 2 ], [ 'node', 1 ], [ 'css', 1 ] ]
`;

const task2Lines = `
Code
----
function union(a, b) {
  return [...new Set([...a, ...b])];
}
function intersection(a, b) {
  const sb = new Set(b);
  return [...new Set(a)].filter((x) => sb.has(x));
}
function difference(a, b) {
  const sb = new Set(b);
  return [...new Set(a)].filter((x) => !sb.has(x));
}

console.log(union([1, 2], [2, 3]));
console.log(intersection([1, 2, 3], [2, 3, 4]));
console.log(difference([1, 2, 3], [2, 3, 4]));

Output
------
[ 1, 2, 3 ]
[ 2, 3 ]
[ 1 ]
`;

const task3Lines = `
Code
----
const ages = new Map([
  ["Priya", 28],
  ["Ravi", 22],
  ["Neha", 31],
]);
const sortedPairs = [...ages.entries()].sort((a, b) => a[1] - b[1]);
console.log(sortedPairs);

Output
------
[ [ 'Ravi', 22 ], [ 'Priya', 28 ], [ 'Neha', 31 ] ]
`;

const task4Lines = `
Code + notes
--------------
// WeakMap: keys are objects (e.g. DOM nodes). When the node is removed and
// nothing else references it, the WeakMap entry can be collected — avoids
// leaking memory vs a Map that would keep detached nodes alive.

// Read: https://javascript.info/map-set
//       https://javascript.info/weakmap-weakset
// Optional: MDN on iteration order for Map / Set / Object

Output
------
(sketch + reading — no console output required)
`;

document.querySelector("#task1Output").textContent = task1Lines;
document.querySelector("#task2Output").textContent = task2Lines;
document.querySelector("#task3Output").textContent = task3Lines;
document.querySelector("#task4Output").textContent = task4Lines;
