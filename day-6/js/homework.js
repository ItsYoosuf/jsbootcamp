function kmToMiles(km) {
    return km * 0.621;
}

function gstAmount(price, rate = 18) {
    return price * (rate / 100);
}

document.querySelector("#homeworkOut1").textContent =
    "kmToMiles(10)     → " +
    kmToMiles(10) +
    "\n" +
    "kmToMiles(100)    → " +
    kmToMiles(100);

document.querySelector("#homeworkOut2").textContent =
    "gstAmount(1000)       → " +
    gstAmount(1000) +
    "   (18% default)\n" +
    "gstAmount(1000, 12)   → " +
    gstAmount(1000, 12);

console.log(kmToMiles(10), kmToMiles(100));
console.log(gstAmount(1000), gstAmount(1000, 12));
