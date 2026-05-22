"use strict";
function grade(m) {
  if (m < 0 || m > 100) return "Invalid marks";
  if (m >= 90) return "A";
  if (m >= 75) return "B";
  if (m >= 60) return "C";
  return "F";
}
document.querySelector("#task1Output").textContent = [72, 95, 50, 75, -1, 101].map((m) => m + "->" + grade(m)).join("\n");

function dayKind(day) {
  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      return "Weekday";
    case "Saturday":
    case "Sunday":
      return "Weekend";
    default:
      return "Invalid day";
  }
}
document.querySelector("#task2Output").textContent = ["Monday", "Saturday", "Holiday"].map(dayKind).join("\n");

const vals = [0, "0", "", " ", null, undefined, NaN, [], {}, "false"];
document.querySelector("#task3Output").textContent = vals
  .map((v) => {
    const label = v ? "truthy" : "falsy";
    return JSON.stringify(v) + " -> " + label;
  })
  .join("\n");

function canComment(user) {
  if (!user) return "no user";
  if (user.isBanned) return "banned";
  if (user.age < 13) return "too young";
  return "Comment allowed";
}
document.querySelector("#task4Output").textContent = [
  canComment({ age: 14, isBanned: false }),
  canComment({ age: 20, isBanned: true }),
  canComment(null),
].join("\n");
