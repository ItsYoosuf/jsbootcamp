"use strict";
let student = { name: "Anaya", age: 21, city: "Jaipur", course: "B.Tech", marks: [82, 76, 91] };
const t1 = [];
t1.push(JSON.stringify(student));
t1.push([student.name, student.age, student.marks[0]].join(" "));
student.email = "anaya@example.com";
student.age = 22;
delete student.city;
t1.push(JSON.stringify(student));
document.querySelector("#task1Output").textContent = t1.join("\n");

const bankAccount = {
  holder: "Aarav",
  balance: 5000,
  deposit(amount) {
    this.balance += amount;
    return this.balance;
  },
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      return this.balance;
    }
    return "Insufficient funds";
  },
};
document.querySelector("#task2Output").textContent = [
  bankAccount.deposit(1000),
  bankAccount.withdraw(2000),
  bankAccount.withdraw(10000),
  bankAccount.balance,
].join(" | ");

const product = { id: 101, name: "Laptop", price: 60000, brand: "Dell", stock: 5 };
const { name, price, brand: make, warranty = "1 year" } = product;
document.querySelector("#task3Output").textContent = [name, price, make, warranty].join(" | ");

document.querySelector("#task4Output").textContent =
  "keys=" + Object.keys(student).length + " -> " + Object.keys(student).join(",");
