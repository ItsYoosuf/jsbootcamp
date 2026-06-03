const topic1Snippet = `function debounce(fn, ms) { let t; return (...a)=>{ clearTimeout(t); t=setTimeout(()=>fn(...a),ms); }; }`;

const topic2Snippet = `function throttle(fn, ms) { let last=0; return (...a)=>{ const n=Date.now(); if(n-last<ms)return; last=n; fn(...a); }; }`;

const topic3Snippet = `// leaks: globals, timers, DOM listeners, fat closures`;

const topic4Snippet = `performance.mark("a"); /* ... */ performance.measure("m","a","b");`;

const topic5Snippet = `el.textContent = userInput; // not innerHTML`;

const topic6Snippet = `// eslint + prettier on save`;

const topic7Snippet = `// const default, === , immutable updates, modules, try/catch await`;

document.querySelector("#topic1Code code").textContent = topic1Snippet;
document.querySelector("#topic2Code code").textContent = topic2Snippet;
document.querySelector("#topic3Code code").textContent = topic3Snippet;
document.querySelector("#topic4Code code").textContent = topic4Snippet;
document.querySelector("#topic5Code code").textContent = topic5Snippet;
document.querySelector("#topic6Code code").textContent = topic6Snippet;
document.querySelector("#topic7Code code").textContent = topic7Snippet;
