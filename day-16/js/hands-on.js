// Task 1 — Inspect prototype chain from an array
(function () {
  const arr = [1, 2, 3];
  const p1 = Object.getPrototypeOf(arr);
  const p2 = Object.getPrototypeOf(p1);
  const p3 = Object.getPrototypeOf(p2);
  const lines = [];
  lines.push("getPrototypeOf(arr) === Array.prototype → " + (p1 === Array.prototype));
  lines.push("next === Object.prototype → " + (p2 === Object.prototype));
  lines.push("next (end of chain) → " + p3);
  lines.push("// arr → Array.prototype → Object.prototype → null");
  document.querySelector("#task1Output").textContent = lines.join("\n");
})();

// Task 2 — Object.create + own vs inherited
(function () {
  const out = [];
  const vehicle = {
    start() {
      out.push(`${this.name} starting`);
    },
  };
  const car = Object.create(vehicle);
  car.name = "Tata Nexon";
  const bike = Object.create(vehicle);
  bike.name = "Royal Enfield";
  car.start();
  bike.start();
  out.push("car.hasOwnProperty('name') → " + car.hasOwnProperty("name"));
  out.push("car.hasOwnProperty('start') → " + car.hasOwnProperty("start"));
  out.push("'start' in car → " + ("start" in car));
  document.querySelector("#task2Output").textContent = out.join("\n");
})();

// Task 3 — Person / Student constructor inheritance
(function () {
  const out = [];
  function Person(name) {
    this.name = name;
  }
  Person.prototype.greet = function () {
    out.push("Hi, I'm " + this.name);
  };

  function Student(name, school) {
    Person.call(this, name);
    this.school = school;
  }
  Student.prototype = Object.create(Person.prototype);
  Student.prototype.constructor = Student;
  Student.prototype.study = function () {
    out.push(this.name + " studies at " + this.school);
  };

  const s = new Student("Riya", "IIT Delhi");
  s.greet();
  s.study();
  out.push(
    "Object.getPrototypeOf(s) === Student.prototype → " +
      (Object.getPrototypeOf(s) === Student.prototype),
  );
  out.push(
    "Object.getPrototypeOf(Student.prototype) === Person.prototype → " +
      (Object.getPrototypeOf(Student.prototype) === Person.prototype),
  );
  document.querySelector("#task3Output").textContent = out.join("\n");
})();

// Bonus — hasOwnProperty vs in
(function () {
  const dog = Object.create({ species: "Canis" });
  dog.name = "Bruno";
  const lines = [];
  lines.push('dog.hasOwnProperty("name") → ' + dog.hasOwnProperty("name"));
  lines.push('dog.hasOwnProperty("species") → ' + dog.hasOwnProperty("species"));
  lines.push('"name" in dog → ' + ("name" in dog));
  lines.push('"species" in dog → ' + ("species" in dog));
  lines.push('"toString" in dog → ' + ("toString" in dog));
  lines.push(
    "// hasOwnProperty / Object.hasOwn: only own keys. `in`: own or anywhere on the prototype chain.",
  );
  document.querySelector("#task4Output").textContent = lines.join("\n");
})();
