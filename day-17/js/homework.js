//Homework 1
const task1Lines = `
Code
----
class Vehicle
    {
        constructor(brand)
        {
            this.brand = brand;
        }
        start()
            {
                console.log(\`\${this.brand}'s car is starting\`);
            }
    }
class Car extends Vehicle
    {
        constructor(brand,doors){
            super(brand);
            this.doors = doors;
            super.start();
            console.log(\`\${this.brand} cars generally have \${this.doors} doors\`);
        }
    }
class Bike extends Vehicle
    {
        constructor(brand)
            {
                super(brand);
            }
    }
const car1 = new Car("Tata",5);

Output
------
Tata's car is starting
Tata's car generally have 5 doors
`;
document.querySelector("#task1Output").textContent = task1Lines;

const task2Lines = `
Code
----
class Counter {
    static count=0;
    constructor()
        {
            Counter.count++;
        }
    }
const c1 = new Counter;
const c2 = new Counter;
const c3 = new Counter;
console.log(Counter.count);
Output
------
3
`;
document.querySelector("#task2Output").textContent = task2Lines;
const task3Lines = `
Code
----


Output
------

`;
document.querySelector("#task3Output").textContent = task3Lines;
const task4Lines = `
Code
----

Output
------

`;
document.querySelector("#task4Output").textContent = task4Lines;
