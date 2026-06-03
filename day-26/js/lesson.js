const topic1Snippet = `Patterns = shared vocabulary for structure.`;

const topic2Snippet = `const counter = (() => { let n=0; return { inc:()=>n++, get:()=>n }; })();`;

const topic3Snippet = `function createEmitter() { const m=new Map(); return { on, off, emit }; }`;

const topic4Snippet = `function vehicleFactory(t) { /* return Car|Bike */ }`;

const topic5Snippet = `class L { static #i=null; constructor(){ if(L.#i) return L.#i; L.#i=this; } }`;

const topic6Snippet = `const p = new Proxy({},{ get(t,k){ return t[k] ?? "?"; } });`;

const topic7Snippet = `// pick: module | observer | factory | singleton | proxy`;

document.querySelector("#topic1Code code").textContent = topic1Snippet;
document.querySelector("#topic2Code code").textContent = topic2Snippet;
document.querySelector("#topic3Code code").textContent = topic3Snippet;
document.querySelector("#topic4Code code").textContent = topic4Snippet;
document.querySelector("#topic5Code code").textContent = topic5Snippet;
document.querySelector("#topic6Code code").textContent = topic6Snippet;
document.querySelector("#topic7Code code").textContent = topic7Snippet;
