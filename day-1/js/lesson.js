const user = {
    name: "Priya",
    age: 24,
    city: "Jaipur",
    isActive: true,
    hobbies: ["reading", "trekking"],
    address: {
        street: "MI Road",
        pincode: "302001"
    }
};

const topic1Snippet = `const user = ${JSON.stringify(user, null, 2)};

console.log(user);`;

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
