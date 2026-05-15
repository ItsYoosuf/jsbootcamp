// // —— Task 1 ——
const task1Lines = `
Code
----
class Rectangle {
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    get area(){
        return this.width*this.height;}

    set scale(factor)
    {
        this.width *= factor;
        this.height *= factor;
    }
}
const rect = new Rectangle(2,3);
console.log(rect.area);
rect.scale= 2;
console.log(rect.area);

Output
------
6
24
// `;

const task2Lines = `
Code
----
class Employee {
    constructor(name,salary)
        {
            this.name = name;
            this.salary = salary;
        }
    describe() {
        console.log(\`\${this.name} earns $ \${this.salary}\`);
    }
}

class Manager extends Employee {
    constructor(name,salary,team)
        {
            super(name,salary);
            this.team = team;
            super.describe(); //Should log Name earns salary
            console.log(\`Leads team of \${team.length}\`);
        }
}

const Riya = new Manager("Riya",80000,["Priya","Aarav","Anaya"]);

Output
------
Riya earns $ 80000
Leads team of 3
 `;
const task3Lines = `
Code
----
class Counter {
    #count=0;
    inc(){
        return this.#count++;
    }
    dec(){
        if(this.#count-1<0)
        {
            console.log(this.#count);
            throw new CountError("Count cannot go negative","NEGATIVE_ERROR");
        }
        else{
        return this.#count--;
        }
    }
    get value(){
        return this.#count;
    }
}
class CountError extends Error {
    constructor(message,code){
        super(message);
        this.name =this.constructor.name;
        this.code = code;
    }
}
const c1 = new Counter();
for(let i = 0;i<4;i++){
    c1.inc();
}
c1.dec();
console.log(c1.value);
for(let i=0;i<5;i++)
{
    try {
        c1.dec();
    }
    catch(e)
        {
            console.log(e.name,e.code,e.message);
            break;
        }
}

Output
------
3
CountError NEGATIVE_ERROR Count cannot go negative
 `;

document.querySelector("#task1Output").textContent = task1Lines;
document.querySelector("#task2Output").textContent = task2Lines;
document.querySelector("#task3Output").textContent = task3Lines;