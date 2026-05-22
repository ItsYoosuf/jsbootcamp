const topic1Snippet = `const city = "Jaipur";

function outer() {
  const language = "Hindi";
  function inner() {
    const greeting = "Namaste";
    console.log(greeting, language, city);
  }
  inner();
}

outer();
// Namaste Hindi Jaipur — scope is decided by where code is written`;

const topic2Snippet = `const a = "global a";

function outer() {
  const b = "outer b";
  function inner() {
    const c = "inner c";
    console.log(a, b, c);
  }
  inner();
}

outer();`;

const topic3Snippet = `function makeGreeter(name) {
  return function () {
    console.log(\`Namaste, \${name}!\`);
  };
}

const greetPriya = makeGreeter("Priya");
const greetAarav = makeGreeter("Aarav");
greetPriya();
greetAarav();`;

const topic4Snippet = `function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const c = makeCounter();
console.log(c(), c(), c());

function createAccount(initial) {
  let balance = initial;
  return {
    deposit: (amt) => (balance += amt),
    withdraw: (amt) => (balance -= amt),
    getBalance: () => balance,
  };
}

function memoize(fn) {
  const cache = {};
  return function (n) {
    if (n in cache) return cache[n];
    cache[n] = fn(n);
    return cache[n];
  };
}`;

const topic5Snippet = `// Bug: one shared i (var is function-scoped)
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 10);
}
// Often logs: 3, 3, 3

// Fix: fresh i each loop (let is block-scoped)
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 20);
}
// 0, 1, 2`;

const topic6Snippet = `(function () {
  const secret = "hidden";
  console.log("IIFE ran");
})();

(function (city) {
  console.log(\`Greetings from \${city}\`);
})("Jaipur");

(() => {
  const x = 42;
  console.log(x);
})();

const counterModule = (function () {
  let count = 0;
  return {
    inc: () => ++count,
    get: () => count,
  };
})();
counterModule.inc();
console.log(counterModule.get());`;

const topic7Snippet = `// Closures appear in:
// - React hooks (state across renders)
// - Event handlers that use outer variables
// - Debounce / throttle timers
// - Module pattern (private vars)`;

document.querySelector("#topic1Code code").textContent = topic1Snippet;
document.querySelector("#topic2Code code").textContent = topic2Snippet;
document.querySelector("#topic3Code code").textContent = topic3Snippet;
document.querySelector("#topic4Code code").textContent = topic4Snippet;
document.querySelector("#topic5Code code").textContent = topic5Snippet;
document.querySelector("#topic6Code code").textContent = topic6Snippet;
document.querySelector("#topic7Code code").textContent = topic7Snippet;
