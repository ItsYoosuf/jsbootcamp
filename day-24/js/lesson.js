const topic1Snippet = `// utils.js
export const TAX = 18;
export function gst(p) { return p * TAX / 100; }`;

const topic2Snippet = `import { gst as g } from "./utils.js";
import * as u from "./utils.js";`;

const topic3Snippet = `const mod = await import("./heavy.js");
// dynamic import returns a Promise`;

const topic4Snippet = `export default new Map(); // singleton cache`;

const topic5Snippet = `import { count, inc } from "./counter.js";
// live binding: inc() updates imported count`;

const topic6Snippet = `// a.js ↔ b.js — avoid top-level cycles; extract shared module`;

const topic7Snippet = `// Vite / Webpack: walk graph, tree-shake, split at import()`;

document.querySelector("#topic1Code code").textContent = topic1Snippet;
document.querySelector("#topic2Code code").textContent = topic2Snippet;
document.querySelector("#topic3Code code").textContent = topic3Snippet;
document.querySelector("#topic4Code code").textContent = topic4Snippet;
document.querySelector("#topic5Code code").textContent = topic5Snippet;
document.querySelector("#topic6Code code").textContent = topic6Snippet;
document.querySelector("#topic7Code code").textContent = topic7Snippet;
