const names = ["Priya", "Aarav", "Riya"];
const greetings = names.map((name) => `Hello, ${name}`);

document.querySelector("#homeworkOut1").textContent =
    "1) map → greetings:\n" + JSON.stringify(greetings);

const numbers = [3, 8, 4, 11, 6, 9, 2];
const evens = numbers.filter((n) => n % 2 === 0);
const evenSum = evens.reduce((sum, n) => sum + n, 0);

document.querySelector("#homeworkOut2").textContent =
    "2) numbers: " +
    JSON.stringify(numbers) +
    "\n   filter (even) → " +
    JSON.stringify(evens) +
    "\n   reduce (sum) → " +
    evenSum;

console.log(greetings);
console.log(evenSum);
