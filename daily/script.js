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
function settingTime()
  {
    let i = 0;
    while(i<5)
    {
      console.log(i);
      setTimeout(() => console.log(i), 0);
      if(i==4)
          {
            Promise.resolve()
            .then(()=>{console.log("1");})
            .then(()=>{console.log("2");})
            .then(()=>{console.log("3");});
          }
    i++;
    }

  }
  settingTime();