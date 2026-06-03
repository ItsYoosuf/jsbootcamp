const t1 = `Code
----
Manual range(3,7) via Symbol.iterator → logs 3..7
[...range(1,3)] → [1,2,3]

Output
------
(see your DevTools console)`;
const t2 = `Code
----
function* range(a,b) { for (let i=a;i<=b;i++) yield i; }
[...range(1,3)] → [1,2,3]

Output
------
[1, 2, 3]`;
const t3 = `Code
----
take(naturals(),5) → [1,2,3,4,5] without infinite spread

Output
------
[1, 2, 3, 4, 5]`;
const t4 = `Code
----
walk(tree) with yield* → [1,2,3,4]

Output
------
[1, 2, 3, 4]`;
document.querySelector("#task1Output").textContent = t1;
document.querySelector("#task2Output").textContent = t2;
document.querySelector("#task3Output").textContent = t3;
document.querySelector("#task4Output").textContent = t4;
