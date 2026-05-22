"use strict";
let cart = ["bread", "milk", "eggs"];
cart.push("butter");
cart.unshift("rice");
const removed = cart.pop();
const afterSplice = cart.slice();
afterSplice.splice(1, 1);
document.querySelector("#task1Output").textContent =
  "cart=" + JSON.stringify(cart) + " removed=" + removed + " splice1=" + JSON.stringify(afterSplice);

const scores = [88, 42, 75, 60, 91, 39, 55, 70];
const pass = scores.filter((s) => s >= 60);
const failFirst = scores.find((s) => s < 60);
document.querySelector("#task2Output").textContent =
  "pass " +
  JSON.stringify(pass) +
  " firstFail " +
  failFirst +
  " allPass " +
  scores.every((s) => s >= 60) +
  " some>90 " +
  scores.some((s) => s > 90);

const prices = [100, 250, 500, 1200, 80];
const gst = prices.map((p) => p * 1.18);
document.querySelector("#task3Output").textContent =
  "orig " + prices.join(",") + "\ngst " + gst.map((x) => x.toFixed(2)).join(",");

const expenses = [250, 800, 120, 50, 1500, 75];
const tot = expenses.reduce((a, b) => a + b, 0);
const hi = expenses.reduce((a, b) => (b > a ? b : a), expenses[0]);
const filt = expenses.filter((e) => e > 100).reduce((a, b) => a + b, 0);
document.querySelector("#task4Output").textContent = "sum=" + tot + " max=" + hi + " sum>100=" + filt;
