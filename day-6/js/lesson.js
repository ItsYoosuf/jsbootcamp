const topic1Snippet = `function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Priya");   // Hello, Priya!
greet("Aarav");   // Hello, Aarav!`;

const topic2Snippet = `function add(a, b) {
    return a + b;
}

const result = add(5, 3);
console.log(result);        // 8

// Use the return value directly
console.log(add(10, 20));   // 30

// Compose — one function's output feeds another
console.log(add(add(1, 2), add(3, 4)));   // 10

// Functions without return give back undefined
function silent() {
    console.log("doing stuff");
}
const x = silent();
console.log(x);   // undefined`;

document.querySelector("#topic1Code code").textContent = topic1Snippet;
document.querySelector("#topic2Code code").textContent = topic2Snippet;
