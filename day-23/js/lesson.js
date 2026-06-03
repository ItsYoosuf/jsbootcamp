const topic1Snippet = `const arr = ["a", "b"];
const it = arr[Symbol.iterator]();
console.log(it.next().value, it.next().done);`;

const topic2Snippet = `const range = { from: 1, to: 2,
  [Symbol.iterator]() {
    let c = this.from, last = this.to;
    return { next() { return c <= last ? { value: c++, done: false } : { done: true, value: undefined }; } };
  },
};
console.log([...range]);`;

const topic3Snippet = `function* gen() { yield 1; yield 2; }
console.log([...gen()]);`;

const topic4Snippet = `function* ids() { let n = 1; while (true) yield n++; }
const it = ids();
console.log(it.next().value, it.next().value);`;

const topic5Snippet = `function* inner() { yield 1; }
function* outer() { yield* inner(); yield 2; }
console.log([...outer()]);`;

const topic6Snippet = `function* g() { const x = yield 1; return x + 10; }
const it = g();
console.log(it.next().value, it.next(5).value);`;

const topic7Snippet = `async function* rows() { yield "a"; yield "b"; }
(async () => { for await (const r of rows()) console.log(r); })();`;

document.querySelector("#topic1Code code").textContent = topic1Snippet;
document.querySelector("#topic2Code code").textContent = topic2Snippet;
document.querySelector("#topic3Code code").textContent = topic3Snippet;
document.querySelector("#topic4Code code").textContent = topic4Snippet;
document.querySelector("#topic5Code code").textContent = topic5Snippet;
document.querySelector("#topic6Code code").textContent = topic6Snippet;
document.querySelector("#topic7Code code").textContent = topic7Snippet;
