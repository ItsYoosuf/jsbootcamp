const topic1Snippet = `function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Priya");   // Hello, Priya!
greet("Aarav");   // Hello, Aarav!`;

const topic2Snippet = `const a = "global a";
function outer() {
const b = "outer b";
function inner() {
const c = "inner c";
console.log(a); // "global a" ← walked up: inner → outer → global ✓
console.log(b); // "outer b" ← walked up: inner → outer ✓
console.log(c); // "inner c" ← found in current scope ✓
}
inner();
// console.log(c); // ReferenceError ← outer scope cannot see inner's variables
}
outer();`;

document.querySelector("#topic1Code code").textContent = topic1Snippet;
document.querySelector("#topic2Code code").textContent = topic2Snippet;
