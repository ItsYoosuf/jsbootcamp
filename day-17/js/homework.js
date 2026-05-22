const task1Lines = `
Code
----
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
  start() {
    console.log(\`\${this.brand} is starting\`);
  }
}

class Car extends Vehicle {
  constructor(brand, doors) {
    super(brand);
    this.doors = doors;
  }
  start() {
    super.start();
    console.log("Car-specific check");
  }
}

class Bike extends Vehicle {
  constructor(brand) {
    super(brand);
  }
}

const car = new Car("Tata", 5);
const bike = new Bike("Hero");
car.start();
bike.start();

Output
------
Tata is starting
Car-specific check
Hero is starting
`;

const task2Lines = `
Code
----
class Counter {
  static count = 0;
  constructor() {
    Counter.count++;
  }
}

const c1 = new Counter();
const c2 = new Counter();
const c3 = new Counter();
console.log(Counter.count);

Output
------
3
`;

const task3Lines = `
Code
----
// Five methods on String.prototype (examples):
// - at(index)        → character at index (supports negative indexes)
// - padStart / padEnd → add padding until a length
// - replaceAll      → replace every match (not just the first)
// - trimStart / trimEnd → remove whitespace from one side
// - repeat(n)       → repeat the string n times

const title = "hello";
console.log(title.at(-1));
console.log(title.padStart(10, "."));
console.log("a-a-a".replaceAll("a", "b"));

Output
------
l
.....hello
b-b-b
`;

const task4Lines = `
Code
----
function chainOf(obj) {
  const protos = [];
  let cur = Object.getPrototypeOf(obj);
  while (cur !== null) {
    protos.push(cur);
    cur = Object.getPrototypeOf(cur);
  }
  return protos;
}

const mine = { x: 1 };
console.log(chainOf(mine).length >= 1);

Output
------
true
`;

document.querySelector("#task1Output").textContent = task1Lines;
document.querySelector("#task2Output").textContent = task2Lines;
document.querySelector("#task3Output").textContent = task3Lines;
document.querySelector("#task4Output").textContent = task4Lines;
