const topic1Snippet = `const orig = { name: "Priya", addr: { city: "Jaipur" } };
const shallow = { ...orig };
shallow.addr.city = "Mumbai";
// orig.addr.city is also "Mumbai" — nested object is shared`;

const topic2Snippet = `const orig = { d: new Date(2020, 0, 1) };
const copy = structuredClone(orig);
copy.d.setFullYear(2030);
// orig.d is unchanged`;

const topic3Snippet = `const cfg = Object.freeze({ theme: "dark" });
cfg.theme = "light"; // silent failure in non-strict mode
// nested objects are NOT frozen unless you freeze them too`;

const topic4Snippet = `const state = { user: { name: "Priya", prefs: { theme: "light" } } };
const next = {
  ...state,
  user: {
    ...state.user,
    prefs: { ...state.user.prefs, theme: "dark" },
  },
};`;

const topic5Snippet = `const user = { first: "Priya", last: "Sharma", city: "Jaipur" };
const { first: fname, city = "Unknown" } = user;`;

const topic6Snippet = `const key = "dynamic";
const obj = { [key]: 42 };
console.log(obj.dynamic);`;

const topic7Snippet = `const data = { user: { profile: { city: null } } };
const city = data.user?.profile?.city ?? "Unknown";
const len = data.user?.profile?.bio?.length ?? 0;`;

document.querySelector("#topic1Code code").textContent = topic1Snippet;
document.querySelector("#topic2Code code").textContent = topic2Snippet;
document.querySelector("#topic3Code code").textContent = topic3Snippet;
document.querySelector("#topic4Code code").textContent = topic4Snippet;
document.querySelector("#topic5Code code").textContent = topic5Snippet;
document.querySelector("#topic6Code code").textContent = topic6Snippet;
document.querySelector("#topic7Code code").textContent = topic7Snippet;
