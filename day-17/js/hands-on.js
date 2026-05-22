const task1Lines = `
Code
----
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  get area() {
    return this.width * this.height;
  }
  scale(factor) {
    this.width *= factor;
    this.height *= factor;
  }
}
const rect = new Rectangle(2, 3);
console.log(rect.area);
rect.scale(2);
console.log(rect.area);

Output
------
6
24
`;

const task2Lines = `
Code
----
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  describe() {
    console.log(\`\${this.name} earns ₹\${this.salary}/month\`);
  }
}

class Manager extends Employee {
  constructor(name, salary, team) {
    super(name, salary);
    this.team = team;
  }
  describe() {
    super.describe();
    console.log(\`Leads team of \${this.team.length}\`);
  }
}

const Riya = new Manager("Riya", 80000, ["Priya", "Aarav", "Anaya"]);
Riya.describe();

Output
------
Riya earns ₹80000/month
Leads team of 3
`;

const task3Lines = `
Code
----
class Counter {
  #count = 0;
  inc() {
    this.#count++;
  }
  dec() {
    if (this.#count <= 0) {
      throw new Error("Count cannot go negative");
    }
    this.#count--;
  }
  get value() {
    return this.#count;
  }
}

const c1 = new Counter();
c1.inc();
c1.inc();
c1.inc();
c1.dec();
console.log(c1.value);
for (let i = 0; i < 4; i++) {
  try {
    c1.dec();
  } catch (e) {
    console.log(e.message);
    break;
  }
}

Output
------
2
Count cannot go negative
`;

const task4Lines = `
Bonus — ValidationError class
----
class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}
function validateUser({ name, age }) {
  if (!name) throw new ValidationError("name", "Name is required");
  if (age < 0) throw new ValidationError("age", "Age cannot be negative");
  return "ok";
}
try {
  validateUser({ name: "", age: 10 });
} catch (e) {
  console.log(e.field, e.message);
}
try {
  validateUser({ name: "Priya", age: -1 });
} catch (e) {
  console.log(e.field, e.message);
}

Output
------
name Name is required
age Age cannot be negative
`;

document.querySelector("#task1Output").textContent = task1Lines;
document.querySelector("#task2Output").textContent = task2Lines;
document.querySelector("#task3Output").textContent = task3Lines;
document.querySelector("#task4Output").textContent = task4Lines;
