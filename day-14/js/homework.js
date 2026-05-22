const task1Lines = `
Code
----
function multiplier(factor) {
  return function (n) {
    return n * factor;
  };
}
const double = multiplier(2);
const triple = multiplier(3);
console.log(double(5), triple(5));

Output
------
10 15
`;

const task2Lines = `
Code
----
// for...of + let + setTimeout — logs 10, 20, 30 in order
for (let v of [10, 20, 30]) {
  setTimeout(() => console.log(v), 50);
}

Output
------
10
20
30
`;

const task3Lines = `
Code
----
function createAccount(initial) {
  let balance = initial;
  let transactionCount = 0;
  return {
    deposit(amt) {
      transactionCount++;
      balance += amt;
    },
    withdraw(amt) {
      transactionCount++;
      balance -= amt;
    },
    getBalance() {
      return balance;
    },
    getTransactionCount() {
      return transactionCount;
    },
  };
}
const a = createAccount(0);
a.deposit(10);
a.withdraw(3);
console.log(a.getBalance(), a.getTransactionCount());

Output
------
7 2
`;

const task4Lines = `
Code
----
function once(fn) {
  let done = false;
  let result;
  return function () {
    if (!done) {
      done = true;
      result = fn();
    }
    return result;
  };
}
const greet = once(() => ({ msg: "hi" }));
console.log(greet(), greet());

Output
------
{ msg: 'hi' } { msg: 'hi' }
`;

document.querySelector("#task1Output").textContent = task1Lines;
document.querySelector("#task2Output").textContent = task2Lines;
document.querySelector("#task3Output").textContent = task3Lines;
document.querySelector("#task4Output").textContent = task4Lines;
