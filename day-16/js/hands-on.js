// —— Task 1 ——
const task1Lines = `
const arr = [1,2,3];
console.log(Object.getPrototypeOf(arr)); //Got Array(0) and all the functions of array
console.log(Object.getPrototypeOf(Object.getPrototypeOf(arr))); //logged built in methods and accessors of Object.getPrototypeOf
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(arr)))); //Printed null because it moved up the protoype chain and reached end (If you do once more you will get error)
// arr -> Object.prototype -> null
 Console Output
 
//[at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object

 {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}

 null
`;

const task2Lines = `
const vehicle = {
    start : function (name) {
        console.log(\`${this.name} starting\`);
    }
}

const car = Object.create(vehicle);
car.name = "Tata Nexon";

const bike = Object.create(vehicle);
bike.name = "RE";

car.start();
bike.start();

console.log(car.hasOwnProperty("name"));
console.log(car.hasOwnProperty("start"));
console.log("start" in car);

//Output
Tata Nexon starting
RE starting
true
false
true
`;
document.querySelector("#task1Output").textContent = task1Lines;

document.querySelector("#task2Output").textContent = task2Lines;

/*

*/