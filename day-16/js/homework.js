//Homework 1
const task1Lines = `
Code
----
const tool = {
   show : function ()  {
        console.log(\`${this.name} is a tool\`);
    }
};
const vehicle = Object.create(tool);
vehicle.display = function()  {
    console.log(\`${this.name} is a vehicle\`);
};
const car = Object.create(vehicle);
car.name = "Tata Nexon";
car.runn = function() {
    console.log(\`${this.name} is running\`);
};
car.runn();
car.display();
car.show();

Output
------
Tata Nexon is running
Tata Nexon is a vehicle
Tata Nexon is a tool
`;
document.querySelector("#task1Output").textContent = task1Lines;

const task2Lines = `
Code
----
function Shape(name) //Shape Constructor
    {
        this.name = name;
    }
Shape.prototype.describe = function () { //Describe function ON PROTOTYPE
    console.log(\`This is a ${this.name}\`);
}
function Circle(name,radius)
    {
        Shape.call(this,name);
        this.radius = radius;
    }

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function (){
    console.log(\`The area is \${3.14 * this.radius * this.radius}\`);
}
const c1 = new Circle("Circle",5);
c1.describe();
c1.area();

Output
------
This is a Circle
The area is 78.5
`;
document.querySelector("#task2Output").textContent = task2Lines;
const task3Lines = `
Code
----
console.log(Array.prototype);
//flat,flatMap,toReversed,toSorted,toLocaleString
const arr = [1,3,2];
const arr1 = arr.toSorted(); //sort(); will change the arr, but toSorted() will create a new array
console.log(arr) //unsorted
console.log(arr1);

Output
------
at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}
[[Prototype]]: Object
(3) [1, 3, 2]
length: 3
[[Prototype]]: Array(0)
(3) [1, 2, 3]
length: 3
[[Prototype]]: Array(0)
`;
document.querySelector("#task3Output").textContent = task3Lines;
const task4Lines = `
Code
----
const arr = [];
// Level 4 (top base prototype)
const baseObject = {
    baseType: "Base Object",
    baseInfo() {
        console.log("I am the base object");
    }
};

// Level 3
const machine = Object.create(baseObject);
machine.machineType = "Machine";
machine.startMachine = function () {
    console.log("Machine starting...");
};

// Level 2
const vehicle = Object.create(machine);
vehicle.vehicleType = "Vehicle";
vehicle.move = function () {
    console.log("Vehicle moving...");
};

// Level 1 (final object)
const car = Object.create(vehicle);
car.name = "BMW";
car.drive = function () {
    console.log("Car is driving");
};
let current = car;
function chainObj(current) {
while(Object.getPrototypeOf(current) != null)
        {
            arr.push(Object.getPrototypeOf(current));
            current = Object.getPrototypeOf(current);
        }
console.log(arr);
    }
chainObj(vehicle);

Output
------

Array(3)
0: {machineType: 'Machine', startMachine: ƒ}
1: {baseType: 'Base Object', baseInfo: ƒ}
2: {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
length: 3
[[Prototype]]: Array(0)
`;
document.querySelector("#task4Output").textContent = task4Lines;
