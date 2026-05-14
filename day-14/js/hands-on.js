// —— Task 1 ——
const student = {
    name: "Anaya",
    age: 21,
    city: "Jaipur",
    course: "B.Tech",
    marks: [82, 76, 91]
};

const task1Lines = [];

console.log(student);
task1Lines.push("1) console.log(student)");
task1Lines.push(JSON.stringify(student, null, 2));

console.log(student.name, student.age, student.marks[0]);
task1Lines.push("");
task1Lines.push("2) console.log(name, age, first mark)");
task1Lines.push(`${student.name} ${student.age} ${student.marks[0]}`);

student.email = "anaya@example.com";
student.age = 22;
delete student.city;

console.log(student);
task1Lines.push("");
task1Lines.push("3) after email, age update, delete city — console.log(student)");
task1Lines.push(JSON.stringify(student, null, 2));

document.querySelector("#task1Output").textContent = task1Lines.join("\n");

// —— Task 2 ——
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
    }
};

const task2Lines = [];
task2Lines.push(`Start: holder = "${bankAccount.holder}", balance = ${bankAccount.balance}`);
task2Lines.push("");

const afterDeposit = bankAccount.deposit(1000);
console.log("deposit(1000) →", afterDeposit);
task2Lines.push(`deposit(1000) → ${afterDeposit}`);

const afterWithdraw1 = bankAccount.withdraw(2000);
console.log("withdraw(2000) →", afterWithdraw1);
task2Lines.push(`withdraw(2000) → ${afterWithdraw1}`);

const afterWithdraw2 = bankAccount.withdraw(10000);
console.log("withdraw(10000) →", afterWithdraw2);
task2Lines.push(`withdraw(10000) → ${JSON.stringify(afterWithdraw2)}`);

task2Lines.push("");
task2Lines.push(`Final balance: ${bankAccount.balance}`);

document.querySelector("#task2Output").textContent = task2Lines.join("\n");
