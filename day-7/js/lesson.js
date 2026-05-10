const topic1Snippet = `const fruits = ["apple", "banana", "mango"];

console.log(fruits[0]);                   // apple
console.log(fruits[2]);                   // mango
console.log(fruits.length);               // 3
console.log(fruits[fruits.length - 1]);   // mango (last)

// Modify an element
fruits[1] = "cherry";
console.log(fruits);                      // ["apple", "cherry", "mango"]

// Negative index? No — undefined
console.log(fruits[-1]);                  // undefined  (use .at(-1) instead)
console.log(fruits.at(-1));               // mango`;

const topic2Snippet = `const cart = ["apple", "banana"];

cart.push("mango");        // ["apple", "banana", "mango"]
cart.pop();                // ["apple", "banana"], returns "mango"
cart.unshift("orange");    // ["orange", "apple", "banana"]
cart.shift();              // ["apple", "banana"], returns "orange"

// splice(start, deleteCount, ...itemsToInsert)
const items = ["a", "b", "c", "d"];
items.splice(1, 2);        // remove 2 items starting at index 1
console.log(items);        // ["a", "d"]

const more = ["a", "b", "c"];
more.splice(1, 0, "X", "Y");   // insert at 1, delete 0
console.log(more);             // ["a", "X", "Y", "b", "c"]`;

document.querySelector("#topic1Code code").textContent = topic1Snippet;
document.querySelector("#topic2Code code").textContent = topic2Snippet;
