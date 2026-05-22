"use strict";
const item = "Laptop";
const price = 60000;
const tax = 0.18;
const gst = price * tax;
document.querySelector("#task1Output").textContent =
  `The ${item} costs ₹${price} + ₹${gst} GST = ₹${price + gst}` +
  "\n" +
  `line1\nline2 total ₹${price + gst}`;

const scores = [88, 75, 92, 60, 45];
const [top, second, ...others] = scores;
const user = { name: "Anaya", age: 21, address: { city: "Jaipur", pincode: "302001" } };
const { name, age: userAge, address: { city } } = user;
document.querySelector("#task2Output").textContent = [top, second, JSON.stringify(others), name, userAge, city].join(
  " | ",
);

function sumAll(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
function joinNames(separator, ...names) {
  return names.join(separator);
}
document.querySelector("#task3Output").textContent =
  sumAll(1, 2, 3) +
  " | " +
  sumAll(10, 20, 30, 40) +
  " | " +
  sumAll() +
  " | " +
  joinNames(", ", "Priya", "Aarav", "Riya");

const defaults = { theme: "light", lang: "en", notifications: true };
const userPrefs = { theme: "dark", fontSize: 16 };
document.querySelector("#task4Output").textContent = JSON.stringify({ ...defaults, ...userPrefs });
