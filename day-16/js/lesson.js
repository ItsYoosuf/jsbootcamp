
const topic1Snippet = `const user = { name: "Priya" };
// Every object literal's prototype is Object.prototype
console.log(Object.getPrototypeOf(user) === Object.prototype);  // true
// user has no .toString() of its own — but it can call one!
console.log(user.toString());  // "[object Object]"
// Why? toString lives on Object.prototype.
console.log(Object.prototype.hasOwnProperty("toString"));  // true
// At the END of the chain: null
console.log(Object.getPrototypeOf(Object.prototype)); //null`;

const topic2Snippet = `const animal = {
eat() { console.log(\`\${this.name} is eating\`); },
sleep() { console.log(\`\${this.name} is sleeping\`); },
};

// dog inherits from animal
const dog = Object.create(animal);
dog.name = "Bruno";

dog.eat();      
dog.sleep();    

// "Bruno is eating"     
// "Bruno is sleeping"   ← same path

// Confirm the link
console.log(Object.getPrototypeOf(dog) === animal);   // true

// Own properties vs inherited
console.log(dog.hasOwnProperty("name"));    // true
console.log(dog.hasOwnProperty("eat"));     // false

// FOLLOW ALONG
// Explicit prototype linking
// ← method found on animal (the prototype)
`;

const topic3Snippet = `const grandparent = { lastName: "Sharma" };
const parent        = Object.create(grandparent);
parent.firstName    = "Priya";
const child         = Object.create(parent);
child.age           = 5;
// READ — walks up
console.log(child.age);        // 5 ← own
console.log(child.firstName);  // "Priya"   ← from parent
console.log(child.lastName);   // "Sharma"  ← from grandparent
console.log(child.toString);   // ƒ         ← from Object.prototype (one more step)
// WRITE — creates an own property; the prototype is untouched
child.firstName = "Anaya";
console.log(child.firstName);  // "Anaya"  ← own property now shadows parent's        
console.log(parent.firstName); // "Priya"  ← prototype unchanged`;

const topic4Snippet = `const animal = { eat() {} };
const dog = Object.create(animal);
dog.bark = () => console.log("woof");
console.log(dog.hasOwnProperty("bark")); // true   — dog has its own bark
console.log(dog.hasOwnProperty("eat")); // false  — eat is inherited   
console.log("bark" in dog);  // true   — found on dog              
console.log("eat"  in dog); // true   — found on animal (chain)               
console.log("toString" in dog); `;

const topic5Snippet =`
// Constructor function (capitalised by convention)
function User(name, city) {
this.name = name;       
// own property on the new object
this.city = city;
}
// Methods go on the SHARED prototype — not duplicated per instance
User.prototype.greet = function () {
console.log(\`Hi, I'm ${this.name} from ${this.city}\`\);
};
const a = new User("Priya", "Jaipur");
const b = new User("Aarav", "Mumbai");
a.greet();   
b.greet();   
// "Hi, I'm Priya from Jaipur"
// "Hi, I'm Aarav from Mumbai"
// Both share the SAME greet function reference
console.log(a.greet === b.greet);             
// true
console.log(Object.getPrototypeOf(a) === User.prototype);  // true
// Inheritance — Admin extends User
function Admin(name, city, level) {
User.call(this, name, city);                
this.level = level;
}
Admin.prototype = Object.create(User.prototype);   // chain Admin → User
Admin.prototype.constructor = Admin;               
Admin.prototype.power = function () {
console.log(\`${this.name} has level ${this.level}\`);
};
const ad = new Admin("Riya", "Bangalore", 5);
ad.greet();    
// inherited from User.prototype
ad.power();
`;

const topic6Snippet =`
// DON'T do this (in real code)
Array.prototype.last = function () {
return this[this.length - 1];
};
const fruits = ["apple", "mango", "banana"];
console.log(fruits.last());   // "banana"
// Looks neat, but...
// 1. Every Array everywhere now has .last — including in libraries you import
// 2. ECMAScript may add a real .last in future and clash with yours
// 3. for...in over an array now includes 'last' as a key in some traversal patterns
// SAFER alternative — a free function or a utility
function last(arr) { return arr[arr.length - 1]; }
console.log(last(fruits));    // "banana"
`;

document.querySelector("#topic1Code code").textContent = topic1Snippet;
document.querySelector("#topic2Code code").textContent = topic2Snippet;
document.querySelector("#topic3Code code").textContent = topic3Snippet;
document.querySelector("#topic4Code code").textContent = topic4Snippet;
document.querySelector("#topic5Code code").textContent = topic5Snippet;
document.querySelector("#topic6Code code").textContent = topic6Snippet;