const topic1Snippet = `const add = (a,b)=>a+b; // pure
const now = () => Date.now(); // impure`;

const topic2Snippet = `// pure core between async IO edges`;

const topic3Snippet = `[1,2,3].map(x=>x*2).filter(x=>x>2);`;

const topic4Snippet = `const pipe = (...fns) => (x) => fns.reduce((a,f)=>f(a),x);`;

const topic5Snippet = `const addC = (a)=>(b)=>(c)=>a+b+c;`;

const topic6Snippet = `const partial = (fn,...a)=>(...b)=>fn(...a,...b);`;

const topic7Snippet = `const orders = [{price:50,q:2}];
const line = (o)=>o.price*o.q;
const total = orders.map(line).reduce((a,b)=>a+b,0);`;

document.querySelector("#topic1Code code").textContent = topic1Snippet;
document.querySelector("#topic2Code code").textContent = topic2Snippet;
document.querySelector("#topic3Code code").textContent = topic3Snippet;
document.querySelector("#topic4Code code").textContent = topic4Snippet;
document.querySelector("#topic5Code code").textContent = topic5Snippet;
document.querySelector("#topic6Code code").textContent = topic6Snippet;
document.querySelector("#topic7Code code").textContent = topic7Snippet;
