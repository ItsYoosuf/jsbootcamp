//Homework 1
const task1Lines = `
Code
----
const user = {
    name : "Yoosuf",
    greet: function (){
        console.log(this.name);
    }
}
user.greet(); 
const fn = user.greet;
fn(); //undefined.name hence no output
user.greet.call({name:"X"}); 

Output
------
Yoosuf

X
`;
document.querySelector("#task1Output").textContent = task1Lines;

const task2Lines = `
Code
----
//BUG: lost this in callback
class Timer {
    constructor() {
        this.sec = 0;
    }
    tick() {
        this.sec++;
        console.log(this.sec);
    }
}
const t1 = new Timer();
setInterval(t1.tick, 1000);

// =====================================================
// FIX 1: Using bind
// =====================================================

class TimerBind {
    constructor() {
        this.sec = 0;
        this.tick = this.tick.bind(this);
    }
    tick() {
        this.sec++;
        console.log(this.sec);
    }
}

const t2 = new TimerBind();
setInterval(t2.tick, 1000);

// =====================================================
// FIX 2: Arrow wrapper
// =====================================================

class TimerWrapper {
    constructor() {
        this.sec = 0;
    }
    tick() {
        this.sec++;
        console.log(this.sec);
    }
}

const t3 = new TimerWrapper();
setInterval(() => t3.tick(), 1000);

// =====================================================
// FIX 3: Class field arrow
// =====================================================

class TimerArrow {
    sec = 0;
    tick = () => {
        this.sec++;
        console.log(this.sec);
    };
}

const t4 = new TimerArrow();
setInterval(t4.tick, 1000);

// =====================================================
// OUTPUT
// =====================================================
// For all three fixes (after 1 second intervals):
// 1
// 2
// 3
// 4
// 5
// ...
`;
document.querySelector("#task2Output").textContent = task2Lines;
const task3Lines = `
Code
----
function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}

// apply passes array as arguments list
console.log(sum.apply(null, [1, 2, 3, 4, 5])); // 15

/*
Why apply?
- sum expects individual args (1,2,3,4,5)
- we only have an array
- apply spreads array into arguments list
*/

Output
------
15
`;
document.querySelector("#task3Output").textContent = task3Lines;
const task4Lines = `
Code
----
const f = () => console.log(this);
f.bind({x:1})();

Output
------
undefined
`;
document.querySelector("#task4Output").textContent = task4Lines;