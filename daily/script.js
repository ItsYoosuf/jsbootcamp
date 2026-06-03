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


//Day 18
//Lesson 1/2
// function fetchUser(id, callback) {
// console.log(`Fetching user ${id}...`);
// setTimeout(() => {
// const user = { id, name: "Priya" };
// callback(null, user);                
// }, 1000);
// }
// fetchUser(7, (err, user) => {
// if (err) {
// console.error("Failed:", err);
// return;
// }
// console.log("Got user:", user);
// });
// Logs:
//   
//   
//   
// Node-style: (err, data)
// Fetching user 7...
// (1 second later)
// Got user: { id: 7, name: "Priya" 

// fetchUser(7, (err, user) => {
// if (err) { console.error(err); return; }
// fetchOrders(user.id, (err, orders) => {
// if (err) { console.error(err); return; }
// fetchItems(orders[0].id, (err, items) => {
// if (err) { console.error(err); return; }
// console.log(items);                
// });
// });
// });
//Lesson 5
// function fetchUser(id) {
// return new Promise((resolve, reject) => {
// setTimeout(() => {
// if (id < 0) reject(new Error("Bad id"));
// else        
// resolve({ id, name: "Priya" });
// }, 500);
// });
// }
// Chain — flat, not nested
// fetchUser(7)
// .then((user) => {
// console.log("got user:", user);
// return user.id;                         
// })
// .then((id) => {
// return fetchUser(id + 1);                
// // value passed to next .then
// // returning a Promise — chain awaits it
// })
// .then((nextUser) => {
// console.log("next user:", nextUser);
// })
// .catch((err) => {
// console.error("any failure caught here:", err.message);
// })
// .finally(() => {
// console.log("done — runs whether success or fail");
// });
//Lesson 6
// function fakeFetch(name, delay, shouldFail = false) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldFail) {
//         reject(`${name} failed`);
//       } else {
//         resolve(`${name} success`);
//       }
//     }, delay);
//   });
// }

// const p1 = fakeFetch("user", 1000);
// const p2 = fakeFetch("orders", 2000);
// const p3 = fakeFetch("items", 1500);
// Promise.all([p1, p2, p3])
//   .then((results) => {
//     console.log("ALL DONE:", results);
//   })
//   .catch((err) => {
//     console.log("ONE FAILED:", err);
//   });

// Promise.allSettled([p1, p2, p3])
//   .then((results) => {
//     console.log(results);
//   });
  
// Promise.any([p1, p2, p3])
//   .then((result) => {
//     console.log("FIRST SUCCESS:", result);
//   });

// Promise.race([p1, p2, p3])
//   .then((winner) => {
//     console.log("FIRST:", winner);
//   });

//-----------------------------
//Day 18 - Hands on
//Hands on 1
// console.log("A"); setTimeout(() => console.log("B"), 0); console.log("C");
// Promise.resolve().then(() => console.log("D"));

// //Hands on 2
// function delayLog(msg, ms, cb) { setTimeout(() => {
// console.log(msg); cb(null); }, ms); }

// function delayLogPromise(msg,ms){
//     delayLog("1",300,null);
//     delayLog("2",200,null);
//     delayLog("3",100,null);
// }

// function delayLog(msg, ms, cb) {
//   setTimeout(() => {
//     console.log(msg);
//     cb(null);
//   }, ms);
// }

// function delayLogPromise(msg, ms) {
//   return new Promise((resolve, reject) => {
//     delayLog(msg, ms, (err) => {
//       if (err) reject(err);
//       else resolve();
//     });
//   });
// }

// delayLogPromise("1", 300)
//   .then(() => delayLogPromise("2", 200))
//   .then(() => delayLogPromise("3", 100))
//   .then(() => console.log("done"))
//   .catch((err) => console.error(err));

//   //Hands on 3
//   function printPrice(){

//   }
  // function fetchPrice(item ,ms){
  //   return new Promise((resolve,reject) => {
        
  //   });
  // }

// Fetch a single post using Promises
// function fetchPostWithPromise(id) {
//   fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(post => {
//       console.log('Post:', post.title);
//       console.log('Content:', post.body);
//     })
//     .catch(error => {
//       console.error('Error fetching post:', error.message);
//     });
// }
 
// fetchPostWithPromise(1);

//Day 19
//Topic 4  Lesson
// // function fetchProduct(id) {
// //   return new Promise((res) => setTimeout(() => res({ id, price: 100 }), 1000));
// // }

// // // SLOW — sequential (3 seconds total)
// // async function slow() {
// //   const t0 = Date.now();
// //   const a = await fetchProduct(1);     // wait 1s
// //   const b = await fetchProduct(2);     // then wait 1s more
// //   const c = await fetchProduct(3);     // then wait 1s more
// //   console.log(`Took ${Date.now() - t0}ms`);   // ~3000ms
// // }

// // // FAST — parallel (1 second total)
// // async function fast() {
// //   const t0 = Date.now();
// //   const [a, b, c] = await Promise.all([   // all three start IMMEDIATELY
// //     fetchProduct(1),
// //     fetchProduct(2),
// //     fetchProduct(3),
// //   ]);
// //   console.log(`Took ${Date.now() - t0}ms`);   // ~1000ms
// // }
// // //Topic 5 Lesson
// // const ids = [1, 2, 3];
// // // BUG — finishes before any fetch completes
// // async function bug() {
// //   console.log("start");
// //   ids.forEach(async (id) => {
// //     const p = await fetchProduct(id);     // Promise returned but ignored by forEach
//     console.log("got bug", p);
//   });
//   console.log("end");                     // logs BEFORE any "got"
// }

// // FIX 1 — for...of (sequential)
// async function sequential() {
//   console.log("start 1");
//   for (const id of ids) {
//     const p = await fetchProduct(id);
//     console.log("got 1", p);
//   }
//   console.log("end 1");                     // logs AFTER all "got"
// }

// // FIX 2 — Promise.all + map (parallel, preferred)
// async function parallel() {
//   console.log("start 2");
//   const results = await Promise.all(
//     ids.map((id) => fetchProduct(id)),    // each returns a Promise; map collects them
//   );
//   results.forEach((p) => console.log("got 2", p));
//   console.log("end 2");
// }
// bug();
// sequential();
// parallel();

//Task 1 Day 19 Handson
// Mock fetchUser with setTimeout (300ms)
// function fetchUser(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ id, name: "Priya" });
//     }, 300);
//   });
// }

// // Mock fetchOrders with setTimeout (300ms)
// function fetchOrders(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([
//         { id: 101 },
//         { id: 102 },
//         { id: 103 }
//       ]);
//     }, 300);
//   });
// }

/*
Original Promise chain:

fetchUser(7)
  .then(u => fetchOrders(u.id))
  .then(orders => console.log(orders.length))
  .catch(e => console.error(e));
*/

// Rewritten using async/await
// Mock fetchUser with setTimeout (300ms)

// Rewritten using async/await
// async function showOrders(id) {
//   try {
//     const user = await fetchUser(id);

//     const orders = await fetchOrders(user.id);
//     console.log(orders.length);

//   } catch (e) {
//     console.error(e);
//   }
// }

// // Function call
// showOrders(5);
//   function fetchPrice(item ,ms){
//     return new Promise((resolve,reject) => {
        
//     });
//   }

// Day 20 Hands on
// Task 1
// console.log("1");
// setTimeout(() => console.log("2"), 0);
// Promise.resolve().then(() => console.log("3"));
// console.log("4");

//Task 2
// console.log("A");
// setTimeout(() => console.log("B"), 0);
// Promise.resolve().then(() => console.log("C")).then(() => console.log("D"));
// queueMicrotask(() => console.log("E"));
// console.log("F");

//Task 3
// function blockFor(ms) {
//   const t0 = Date.now();
//   while(Date.now() - t0 < ms)
//       {

//       }
// }
// setTimeout(()=> console.log("timer"),100);
// blockFor(2000);
// console.log("After Block");

//Task 4
// function settingTime()
//   {
//     let i = 0;
//     while(i<5)
//     {
//       console.log(i);
//       setTimeout(() => console.log(i), 0);
//       if(i==4)
//           {
//             Promise.resolve()
//             .then(()=>{console.log("1");})
//             .then(()=>{console.log("2");})
//             .then(()=>{console.log("3");});
//           }
//     i++;
//     }

//   }
//   settingTime();
//Day 22 Lesson 1
// const m = new Map();

// m.set("name", "Priya");
// m.set(42, "the answer");
// m.set(true, "a boolean key");

// const userObj = { id: 1 };
// m.set(userObj, "value associated with userObj");   // OBJECT as key — Object can't!
// console.log(m.get("name"));     // "Priya"
// console.log(m.get(userObj));    // "value associated with userObj"
// console.log(m.size);            // 4
// console.log(m.has(42));         // true
// m.delete(42);

// // Initialise from an array of pairs
// const m2 = new Map([
//   ["a", 1],
//   ["b", 2],
// ]);
// console.log(m2.get("a"));       // 1

// // Iterate — preserves insertion order
// for (const [key, value] of m2) {
//   console.log(key, value);
//}
//Lesson 3
// const s = new Set();

// s.add("a");
// s.add("b");
// s.add("a");                      // duplicate — ignored

// console.log(s.size);             // 2
// console.log(s.has("a"));
// console.log(s);          // true
// s.delete("b");
// console.log(s); 
// // Initialise from an array
// const tags = new Set(["js", "react", "js", "node", "react"]);
// console.log(tags.size);          // 3   ← duplicates removed

// // Most common Set use: deduplicate an array
// const arr   = [1, 2, 2, 3, 4, 4, 5];
// const uniq  = [...new Set(arr)];
// console.log(uniq);               // [1, 2, 3, 4, 5]

// // Iterate
// for (const v of tags) console.log(v);

// // Object identity, not value equality
// const set = new Set();
// set.add({ id: 1 });
// set.add({ id: 1 });              // DIFFERENT object → both kept
//console.log(set.size);           // 2
//Lesson 4
// const a = new Set([1, 2, 3, 4]);
// const b = new Set([3, 4, 5, 6]);
 
// // 1. Union - all elements from both
// console.log(a.union(b));              // Set {1, 2, 3, 4, 5, 6}
 
// // 2. Intersection - common elements
// console.log(a.intersection(b));       // Set {3, 4}
 
// // 3. Difference - in A but not in B
// console.log(a.difference(b));         // Set {1, 2}
 
// // 4. Symmetric Difference - in either but not both
// console.log(a.symmetricDifference(b)); // Set {1, 2, 5, 6}
 
// // 5. Subset - all elements of A are in B
// console.log(a.isSubsetOf(b));         // false
 
// // 6. Superset - B contains all elements of A
// console.log(a.isSupersetOf(b));       // false
 
// // 7. Disjoint - no common elements
// console.log(a.isDisjointFrom(b));     // false
//Hands on 1
// const products = new Map([
//   ["pen", 50],
//   ["book", 200],
//   ["bag", 800],
// ]);

// // Iterate
// for (const [item, price] of products) {
//   console.log(`${item}: ₹${price}`);
// }

// // has
// console.log(products.has("book")); // true

// // get
// console.log(products.get("bag")); // 800

// // delete
// products.delete("pen");

// // size
// console.log(products.size); // 2

// // Map → Object
// const obj = Object.fromEntries(products);
// console.log(obj);

// // Object → Map
// const backToMap = new Map(Object.entries(obj));
// console.log(backToMap);

//Day 23 
//Lesson 1
// const arr = ["a", "b", "c"];
// const it  = arr[Symbol.iterator]();        // get the iterator object

// console.log(it.next());    // { value: "a", done: false }
// console.log(it.next());    // { value: "b", done: false }
// console.log(it.next());    // { value: "c", done: false }
// console.log(it.next());    // { value: undefined, done: true }

// // for...of is sugar over this protocol:
// for (const ch of arr) {
//   console.log(ch);
// }

//Lesson 2
// const range = {
//   from: 1,
//   to: 5,

//   [Symbol.iterator]() {
//     let current = this.from;
//     const last = this.to;

//     return {
//       next() {
//         if (current <= last) {
//           return { value: current++, done: false };
//         }
//         return { value: undefined, done: true };
//       },
//     };
//   },
// };

// // Now range works with for...of, spread, destructuring
// for (const n of range) console.log(n);    // 1, 2, 3, 4, 5
// console.log([...range]);                  // [1, 2, 3, 4, 5]
// const [first, ...rest] = range;
// console.log(first, rest);                 // 1 [2, 3, 4, 5]

//Lesson 3
// function* simple() {
//   yield 1;          // pause and return 1
//   yield 2;          // resume next time, then return 2
//   yield 3;
// }

// const g = simple();           // generator object — function NOT yet running
// console.log(g.next());        // { value: 1, done: false }
// console.log(g.next());        // { value: 2, done: false }
// console.log(g.next());        // { value: 3, done: false }
// console.log(g.next());        // { value: undefined, done: true }

// // Generators are iterables — for...of works directly
// for (const n of simple()) console.log(n);    // 1, 2, 3

// // Re-do range with a generator — much shorter than Topic 2!
// function* range(from, to) {
//   for (let i = from; i <= to; i++) {
//     yield i;
//   }
// }

// console.log([...range(1, 5)]);                // [1, 2, 3, 4, 5]

//Lesspm 7
// Simulated paged API
// function fetchPage(page) {
//   // Imagine an API call returning 3 items per page, up to page 4
//   const data = {
//     1: ["pen", "book", "bag"],
//     2: ["mug", "lamp", "fan"],
//     3: ["chair", "desk", "rug"],
//     4: ["plant", "vase"],
//   };
//   return Promise.resolve(data[page] || []);
// }

// async function* paginate() {
//   let page = 1;
//   while (true) {
//     const items = await fetchPage(page);
//     if (items.length === 0) return;     // no more pages
//     yield* items;                        // yield each item one by one
//     page++;
//   }
// }

// (async () => {
//   for await (const item of paginate()) {     // for-await-of — Day 7 callback
//     console.log(item);
//   }
//   // pen, book, bag, mug, lamp, fan, chair, desk, rug, plant, vase
// })();

//Hands on 1
// const range = {
//   from: 3,
//   to: 7,

//   [Symbol.iterator]() {
//     let current = this.from;
//     const last = this.to;

//     return {
//       next() {
//         if (current <= last) {
//           return { value: current++, done: false };
//         }
//         return { value: undefined, done: true };
//       },
//     };
//   },
// };

// // Now range works with for...of, spread, destructuring
// for (const n of range) console.log(n);    // 1, 2, 3, 4, 5
// console.log([...range]);                  // [1, 2, 3, 4, 5]
// const [first, ...rest] = range;
// console.log(first, rest);                 // 1 [2, 3, 4, 5]
// import { add, multiply, divide } from "./math/index.js";

// console.log(add(2, 3));

// console.log(multiply(4, 5));

// console.log(divide(10, 2));

//Day 25
//Lesson 1
// function add(a, b) { return a + b; }
// function double(x) { return x * 2; }
// function withGST(price, rate = 18) { return price * (1 + rate / 100); }

// // IMPURE — depends on external state
// let multiplier = 2;
// function impureDouble(x) { return x * multiplier; }   // multiplier could change

// // IMPURE — has side effect
// function logAndDouble(x) {
//   console.log(x);          // side effect: writes to console
//   return x * 2;
// }

// // IMPURE — mutates argument
// function addItem(arr, item) {
//   arr.push(item);          // mutates input!
//   return arr;
// }

// // PURE version
// function addItemPure(arr, item) {
//   return [...arr, item];   // returns NEW array
// }
// console.log(add(3,5));
// console.log(double(5));
// console.log(withGST(25));
// console.log(impureDouble(25));
// logAndDouble(20);
// console.log(logAndDouble(25));

//Lessson 4
// const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);
// const pipe    = (...fns) => (x) => fns.reduce     ((acc, fn) => fn(acc), x);
// // Some small pure functions
// const trim       = (s) => s.trim();
// const lower      = (s) => s.toLowerCase();
// const split      = (s) => s.split(/\s+/);
// const wordCount  = (arr) => arr.length;

// // Build the pipeline
// const countWords = pipe(trim, lower, split, wordCount);
// const countWords1 = compose(wordCount,split,lower,trim);
// console.log(countWords("  Hello World from Jaipur  "));   // 4
// console.log(countWords1("  Hello World from Kerala India  ")); 

//Lesson 5
// function multi(a,b,c){
//   return a*b*c;
// }
// function multiCurry(a)
//   {
//     return function(b)
//       {
//         return function(c){
//           return a*b*c;
//         }
//       }
//   }

//  console.log(multiCurry(1)(3)(3));

 // 1. Pure Function
// same input = same output

// function add(a, b) {
//   return a + b;
// }

// console.log(add(2, 3));



// // 2. Immutability + Side Effects at the Edges

// const nums = [1, 2, 3];

// // make new array instead of changing old one
// const newNums = [...nums, 4];

// console.log(nums);
// console.log(newNums);

// // side effect only here
// console.log("saved to screen");



// // 3. Higher-Order Function
// // function using another function

// function doMath(num, fn) {
//   return fn(num);
// }

// function double(x) {
//   return x * 2;
// }

// console.log(doMath(5, double));



// // 4. compose and pipe

// const addOne = x => x + 1;
// const square = x => x * x;

// const pipe = (...fns) => x =>
//   fns.reduce((v, fn) => fn(v), x);

// const compose = (...fns) => x =>
//   fns.reduceRight((v, fn) => fn(v), x);

// console.log(pipe(addOne, square)(2));     
// // (2 + 1)^2 = 9

// console.log(compose(square, addOne)(2)); 
// // same result



// // 5. Currying

// function multiply(a) {
//   return function(b) {
//     return a * b;
//   };
// }

// const doubleNum = multiply(2);

// console.log(doubleNum(5));



// // 6. Partial Application

// function greet(greeting, name) {
//   return greeting + " " + name;
// }

// const sayHi = name => greet("Hi", name);

// console.log(sayHi("Yoosuf"));



// // 7. Real-World Pipeline
// // clean shopping prices

// const prices = [100, 200, 300];

// const addTax = x => x + 20;
// const format = x => "₹" + x;

// const finalPrices = prices
//   .map(addTax)
//   .map(format);

// console.log(finalPrices);

//Day 27
//Hands on 1
function handleSearch(query) {
  console.log(
    `SEARCH FIRED: ${query} at ${Date.now() - start}ms`
  );
}

function debounce(fn, delay) {
  let timer;

  return function (...args) {
    // Cancel previous timer
    console.log(args);
    clearTimeout(timer);

    // Start a new timer
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const debouncedSearch = debounce(handleSearch, 200);

const start = Date.now();

// First burst: 5 keystrokes, 50ms apart
setTimeout(() => debouncedSearch("h"), 0);
setTimeout(() => debouncedSearch("he"), 50);
setTimeout(() => debouncedSearch("hel"), 100);
setTimeout(() => debouncedSearch("hell"), 150);
setTimeout(() => debouncedSearch("hello"), 200);

// 500ms gap, then 2 more keystrokes
setTimeout(() => debouncedSearch("hello!"), 700);
setTimeout(() => debouncedSearch("hello!!"), 750);