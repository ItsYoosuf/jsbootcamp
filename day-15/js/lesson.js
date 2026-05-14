
const topic1Snippet = `function whoAmI() {
console.log(this);
}
whoAmI(); // strict mode: undefined; non-strict:
window/global
const user = { name: "Priya", whoAmI };
user.whoAmI(); // logs the user object — called as a method
const other = { name: "Aarav", whoAmI };
other.whoAmI(); `;

const topic2Snippet = `// 1. Default — plain function call
function speak() { console.log(this); }
speak(); // undefined (strict mode)
// 2. Implicit — method call
const car = {
brand: "Tata",
show() { console.log(this.brand); },
};
car.show(); // "Tata" ← this = car
// 3. Explicit — call/apply/bind
function intro(city) { console.log(\`\${this.name} from \${city}\`); }
const u = { name: "Priya" };
intro.call(u, "Jaipur"); // "Priya from Jaipur" ← this = u
// 4. new — constructor binding
function User(name) { this.name = name; }
const p = new User("Anaya");
console.log(p.name); `;

const topic3Snippet = `function greet(city, lang) {
console.log(\`\${this.name} from \${city} speaks \${lang}\`);
}
const u = { name: "Priya" };
// call — invoke now, args listed
greet.call(u, "Jaipur", "Hindi"); // "Priya from Jaipur speaks Hindi"
// apply — invoke now, args as array
greet.apply(u, ["Jaipur", "Hindi"]); // same output
// bind — returns a new function for later
const greetPriya = greet.bind(u, "Jaipur"); // partially applied: city pre-set
greetPriya("English"); // "Priya from Jaipur speaks
English"
greetPriya("Marathi"); // "Priya from Jaipur speaks
Marathi"
// Once bound, this CANNOT be re-bound
greetPriya.call({ name: "Aarav" }, "Tamil"); // still "Priya from Jaipur speaks
Tamil" `;

const topic4Snippet = `const user = {
name: "Priya",
Explicit binding
No own this
Day 15 Student Doc.md 2026-05-08
3 / 8
// Regular function — has its own this
regular: function () {
console.log(this.name); // "Priya" ← implicit binding
},
// Arrow — no own this; inherits from enclosing scope (here: module/global)
arrow: () => {
console.log(this.name); // undefined ← arrow doesn't see user as this
},
};
user.regular(); // "Priya"
user.arrow(); // undefined ← surprise! arrow as a method is usually
wrong
// Where arrow shines: nested callbacks
const team = {
members: ["Priya", "Aarav", "Riya"],
greetAll() {
this.members.forEach((m) => {
// Arrow here inherits 'this' from greetAll → which is 'team'
console.log(\`Hi \${m}, from team \${this.members.length}\`);
});
},
};
team.greetAll();
// "Hi Priya, from team 3"
// "Hi Aarav, from team 3"
// "Hi Riya, from team 3"`;

const topic5Snippet =`
class User {
constructor(name) {
this.name = name; // this = the new instance
}
greet() {
console.log(\`Hi, I'm \${this.name}\`); // this = whichever instance .greet() was called on
}
}
const a = new User("Priya");
const b = new User("Aarav");
Same as implicit
Day 15 Student Doc.md 2026-05-08
4 / 8
a.greet(); // "Hi, I'm Priya"
b.greet(); // "Hi, I'm Aarav"
// Classic loss-of-this:
const greetFn = a.greet; // pulled off as a plain function
// greetFn(); // TypeError: cannot read 'name' of undefined
// (this is now undefined in strict mode)
`;

const topic6Snippet =`
class Counter {
constructor() { this.count = 0; }
inc() { this.count++; console.log(this.count); }
}
const c = new Counter();
// BUG — passed as plain function reference, this is lost
setTimeout(c.inc, 100); // TypeError: cannot read 'count' of
undefined
// FIX 1 — bind
setTimeout(c.inc.bind(c), 100); // works — this permanently bound to c
// FIX 2 — arrow wrapper (closes over c lexically)
setTimeout(() => c.inc(), 100); // works — c.inc() called as a method
// FIX 3 — class field as arrow (modern syntax)
class CounterArrow {
count = 0;
inc = () => { this.count++; console.log(this.count); }; // arrow → lexical this
}
const ca = new CounterArrow();
setTimeout(ca.inc, 100); // works — arrow's this is the instance`;

const topic7Snippet =``;
document.querySelector("#topic1Code code").textContent = topic1Snippet;
document.querySelector("#topic2Code code").textContent = topic2Snippet;
document.querySelector("#topic3Code code").textContent = topic3Snippet;
document.querySelector("#topic4Code code").textContent = topic4Snippet;
document.querySelector("#topic5Code code").textContent = topic5Snippet;
document.querySelector("#topic6Code code").textContent = topic6Snippet;