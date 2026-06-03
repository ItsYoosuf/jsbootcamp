const h1 = `chunked([1,2,3,4,5],2) → [[1,2],[3,4],[5]]
take(primes(),10) → first ten primes
zip + fib + read javascript.info/iterable

Output
------
(sketch in your editor)`;
document.querySelector("#task1Output").textContent = h1;
document.querySelector("#task2Output").textContent = "Task 2: primes + take — implement generator.";
document.querySelector("#task3Output").textContent = "Task 3: zip two iterables — unequal lengths stop early.";
document.querySelector("#task4Output").textContent = "Task 4: fib generator + take + read generators doc.";
