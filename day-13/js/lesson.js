const topic1Snippet = `// Global Execution Context runs your whole script once.
// Each function call creates a new Function Execution Context.

let x = 1;
function demo() {
  let y = 2;
  console.log(x + y);
}
demo();`;

const topic2Snippet = `// Creation phase: declare variables (var → undefined, let/const in TDZ)
// Execution phase: run line by line

console.log(typeof a); // "undefined" (var exists, not assigned yet)
var a = 5;
console.log(a);`;

const topic3Snippet = `function first() {
  second();
}
function second() {
  third();
}
function third() {
  console.trace("stack");
}
first();`;

const topic4Snippet = `// Hoisting = declarations registered during creation phase
// var and function declarations are hoisted; assignments are not

console.log(typeof hoistMe); // "function"
function hoistMe() {}
console.log(typeof later); // "undefined"
var later = function () {};`;

const topic5Snippet = `// TDZ: cannot read let/const before its line
// console.log(b); let b = 1; // ReferenceError

var v = 1;
let l = 2;
console.log(v, l);`;

const topic6Snippet = `sayHi(); // OK — declaration hoisted

function sayHi() {
  console.log("Hi");
}

// greet(); // TypeError if called here — var greet is undefined
var greet = function () {
  console.log("Hello");
};
greet();`;

const topic7Snippet = `// Knowing hoisting helps you read:
// - Interview questions
// - Legacy var code
// - Why let/const + modules are preferred today`;

document.querySelector("#topic1Code code").textContent = topic1Snippet;
document.querySelector("#topic2Code code").textContent = topic2Snippet;
document.querySelector("#topic3Code code").textContent = topic3Snippet;
document.querySelector("#topic4Code code").textContent = topic4Snippet;
document.querySelector("#topic5Code code").textContent = topic5Snippet;
document.querySelector("#topic6Code code").textContent = topic6Snippet;
document.querySelector("#topic7Code code").textContent = topic7Snippet;
