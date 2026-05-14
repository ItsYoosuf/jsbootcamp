//Hands-on
//Task 1
// const arr = [1,2,3];
// console.log(Object.getPrototypeOf(arr)); //Got Array(0) and all the functions of array
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(arr))); //logged built in methods and accessors of Object.getPrototypeOf
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(arr)))); //Printed null because it moved up the protoype chain and reached end (If you do once more you will get error)
// //arr -> Object.prototype -> null

//Task 2
// const vehicle = {
//     start : function (name) {
//         console.log(`${this.name} starting`);
//     }
// }

// const car = Object.create(vehicle);
// car.name = "Tata Nexon";

// const bike = Object.create(vehicle);
// bike.name = "RE";

// car.start();
// bike.start();

// console.log(car.hasOwnProperty("name"));
// console.log(car.hasOwnProperty("start"));
// console.log("start" in car);

//Task 3

//Homework
//Task 1

// const tool = {
//    show : () => {
//         console.log(`is a tool`);
//     }
// };
// const vehicle = Object.create(tool);
// vehicle.display = function()  {
//     console.log(`${this.name} is a vehicle`);
// };
// const car = Object.create(vehicle);
// car.name = "Tata Nexon";
// car.runn = () => {
//     console.log("is running");
// };
// car.runn();
// car.display();
// car.show();

//Task 2
// function Shape(name) //Shape Constructor
//     {
//         this.name = name;
//     }
// Shape.prototype.describe = function () { //Describe function ON PROTOTYPE
//     console.log(`This is a ${this.name}`);
// }
// function Circle(name,radius)
//     {
//         Shape.call(this,name);
//         this.radius = radius;
//     }

// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;

// Circle.prototype.area = function (){
//     console.log(`The area is ${3.14 * this.radius * this.radius}`);
// }
// const c1 = new Circle("Circle",5);
// c1.describe();
// c1.area();

//Task 3
// console.log(Array.prototype);
// //flat,flatMap,toReversed,toSorted,toLocaleString
// const arr = [1,3,2];
// const arr1 = arr.toSorted(); //sort(); will change the arr, but toSorted() will create a new array
// console.log(arr) //unsorted
// console.log(arr1);

// //Task 4
// const arr = [];
// // Level 4 (top base prototype)
// const baseObject = {
//     baseType: "Base Object",
//     baseInfo() {
//         console.log("I am the base object");
//     }
// };

// // Level 3
// const machine = Object.create(baseObject);
// machine.machineType = "Machine";
// machine.startMachine = function () {
//     console.log("Machine starting...");
// };

// // Level 2
// const vehicle = Object.create(machine);
// vehicle.vehicleType = "Vehicle";
// vehicle.move = function () {
//     console.log("Vehicle moving...");
// };

// // Level 1 (final object)
// const car = Object.create(vehicle);
// car.name = "BMW";
// car.drive = function () {
//     console.log("Car is driving");
// };
// let current = car;
// function chainObj(current) {
// while(Object.getPrototypeOf(current) != null)
//         {
//             arr.push(Object.getPrototypeOf(current));
//             current = Object.getPrototypeOf(current);
//         }
// console.log(arr);
//     }
// chainObj(vehicle);

/*Output 
0 : {machineType: 'Machine', startMachine: ƒ}
1: {baseType: 'Base Object', baseInfo: ƒ}
2: {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …} */

