
const topic1Snippet = `class User {
  constructor(name, city) {
    this.name = name;
    this.city = city;
  }
  greet() {
    console.log(\`Hi, I'm \${this.name} from \${this.city}\`);
  }
}

const a = new User("Priya", "Jaipur");
const b = new User("Aarav", "Mumbai");
a.greet();
b.greet();

console.log(typeof User);
console.log(a.greet === b.greet);
console.log(Object.getPrototypeOf(a) === User.prototype);`;

const topic2Snippet = `class Product {
constructor(name, priceInPaise) {
this.name = name;
this._priceInPaise = priceInPaise;
}
// getter — called as p.priceInRupees (NO parentheses!)
get priceInRupees() {
return this._priceInPaise / 100;
}
// setter — called as p.priceInRupees = 50
get priceWithGST() {
return this.priceInRupees * 1.18;      
}
set priceInRupees(rupees) {
if (rupees < 0) throw new Error("Price cannot be negative");
this._priceInPaise = rupees * 100;
}
}
// convention: _ means "internal, please 
// 18% GST — derived, no storage
const p = new Product("Notebook", 5000);   // ₹50.00
console.log(p.priceInRupees);              // 50  ← getter 
console.log(p.priceWithGST);               // 59  ← derived
p.priceInRupees = 100;                     // setter
console.log(p.priceInRupees);              // 100
//p.priceInRupees = -10;                     // throws Validation in setter
`;

const topic3Snippet = `class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(\`${this.name} makes a sound\`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);                        
        this.breed = breed;                 
    }

    speak() {                             
        super.speak();                      
        console.log(\`${this.name} barks!\`);
    }
}

// prints?
// Chain set up automatically
// MUST call super before using \`this\`
// own to Dog instances
// override
// call parent's speak first (optional)

const d = new Dog("Bruno", "Labrador");

d.speak();

// "Bruno makes a sound"   ← from Animal via super.speak()
// "Bruno barks!"          ← from Dog's override

console.log(d instanceof Dog);          
console.log(d instanceof Animal);       

// true
// true — extends sets up the chain`;


const topic4Snippet = `class MathUtils {
    static gst(amount, rate = 18) {       
        return amount * (rate / 100);
    }

    static format(amount) {
        return \`₹\${amount.toFixed(2)}\`;
    }
}

console.log(MathUtils.gst(1000));                 
console.log(MathUtils.format(1180));              

// Static factory pattern — common
// call as MathUtils.gst(...)
// 180
// "₹1180.00"

class User {
    constructor(name) {
        this.name = name;
    }

    static fromEmail(email) {              
        const name = email.split("@")[0];
        return new User(name);
    }
}

const u = User.fromEmail("priya@example.com");

console.log(u.name);                              

// const m = new MathUtils();
// m.gst(100); // TypeError Static methods belong to class, not instances
`;

const topic5Snippet = `
class BankAccount {
    #balance;                            
    #transactions = [];                  

    // declared private field
    // can have a default
    // language-enforced

    constructor(initial) {
        this.#balance = initial;
    }

    deposit(amt) {
        this.#balance += amt;
        this.#transactions.push({ type: "deposit", amt });
    }

    withdraw(amt) {
        if (amt > this.#balance) {
            throw new Error("Insufficient funds");
        }

        this.#balance -= amt;
        this.#transactions.push({ type: "withdraw", amt });
    }

    get balance() {
        return this.#balance;
    }

    get history() {
        return [...this.#transactions]; // copy — don't expose internal array
    }
}

const acc = new BankAccount(1000);

acc.deposit(500);
acc.withdraw(200);

console.log(acc.balance);     
console.log(acc.history);     

// 1300
// [
//   { type: "deposit", amt: 500 },
//   { type: "withdraw", amt: 200 }
// ]

// console.log(acc.#balance); // SyntaxError — # fields are enforced by the language
`;

const topic6Snippet = `
class AppError extends Error {
    constructor(message, code) {
        super(message);                    
        this.name = this.constructor.name;
        this.code = code;
    }
}

class ValidationError extends AppError {
    constructor(field, message) {
        super(message, "VALIDATION_FAILED");
        this.field = field;
    }
}

class NotFoundError extends AppError {
    constructor(resource) {
        super(\`\${resource} not found\`, "NOT_FOUND");
    }
}

// Usage
// extends Error
// Error's own constructor handles message

function validateAge(age) {
    if (age < 0) {
        throw new ValidationError("age", "Must be non-negative");
    }

    if (age > 150) {
        throw new ValidationError("age", "Must be under 150");
    }
}

try {
    validateAge(-5);
} catch (e) {
    if (e instanceof ValidationError) {
        console.log(\`[\${e.code}] \${e.field}: \${e.message}\`);

        // "[VALIDATION_FAILED] age: Must be non-negative"
    }
}
`;
const topic7Snippet = `
// PRE-ES6 (yesterday)
function Person(name) { this.name = name; }
Person.prototype.greet = function () { console.log(this.name); };
// ES6 (today)
class Person {
constructor(name) { this.name = name; }
greet() { console.log(this.name); }
}
// Functionally identical — same prototype chain, same 'new', same \`this\` rules.
// typeof Person === "function" in BOTH cases.
`;

document.querySelector("#topic1Code code").textContent = topic1Snippet;
document.querySelector("#topic2Code code").textContent = topic2Snippet;
document.querySelector("#topic3Code code").textContent = topic3Snippet;
document.querySelector("#topic4Code code").textContent = topic4Snippet;
document.querySelector("#topic5Code code").textContent = topic5Snippet;
document.querySelector("#topic6Code code").textContent = topic6Snippet;
document.querySelector("#topic7Code code").textContent = topic7Snippet;
