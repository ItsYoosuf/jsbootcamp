const task1Lines = `
Predict then run:
console.log(typeof age);
var age = 25;

Output
------
undefined
25

Why: var age is hoisted; typeof on an uninitialized var binding is "undefined".
`;

const task2Lines = `
TDZ exercise (concept):
console.log(city);
let city = "Jaipur";

Output
------
ReferenceError: Cannot access 'city' before initialization

Fix: declare let city before console.log.
`;

const task3Lines = `
Three styles — calling BEFORE the line:

1) function declaration sayHi() {}
   sayHi(); // works (hoisted whole function)

2) var greet = function () {};
   greet(); // TypeError / not callable before assignment (var is undefined)

3) const hi = () => {};
   hi(); // ReferenceError before line (TDZ)

Summary: only function declarations are safe to call early.
`;

const task4Lines = `
Add console.trace() inside any function you own, run it, and read the stack:
top frame = where you paused, below = callers.

This maps each row to an execution context on the call stack.
`;

document.querySelector("#task1Output").textContent = task1Lines;
document.querySelector("#task2Output").textContent = task2Lines;
document.querySelector("#task3Output").textContent = task3Lines;
document.querySelector("#task4Output").textContent = task4Lines;
