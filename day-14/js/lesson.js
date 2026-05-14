
const topic1Snippet = `const city = "Jaipur";              
function outer() {
const language = "Hindi";         
// lives in the OUTER (global) scope
// lives in outer's scope
function inner() {
const greeting = "Namaste";     
// lives in inner's scope
1 / 8
Day 14 Student Doc.md
2026-05-08
console.log(greeting, language, city);  // can see all three — looks outward
}
inner();
}
outer();   
// "Namaste Hindi Jaipur"
// inner() can reach OUT to language and city because of WHERE it is written —
// nested inside outer(), which is nested inside the global scope.`;

const topic2Snippet = `const user = { name: "Priya", age: 24, "favourite color": "blue" };

// Dot — clean
console.log(user.name);              // Priya
console.log(user.age);               // 24

// Bracket — when key is dynamic
const field = "name";
console.log(user[field]);            // Priya  ← variable

// Bracket — when key has spaces/special chars
console.log(user["favourite color"]); // blue   (can't do user.favourite color)

// Property doesn't exist? undefined — no error
console.log(user.email);             // undefined`;

document.querySelector("#topic1Code code").textContent = topic1Snippet;
document.querySelector("#topic2Code code").textContent = topic2Snippet;
