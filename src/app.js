let who = ["The dog", "My grandma", "The mailman", "My bird", "An allien"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car", "my key"];
let when = [
  "before the class",
  "before the class",
  "while I was exercising",
  "during my lunch"
];
window.onload = function ExcuseGenerator() {
  let randomwho = who[Math.floor(Math.random() * who.length)];
  let randomaction = action[Math.floor(Math.random() * action.length)];
  let randomwhat = what[Math.floor(Math.random() * what.length)];
  let randomwhen = when[Math.floor(Math.random() * when.length)];
  const excuse = ` ${randomwho} ${randomaction} ${randomwhat} ${randomwhen}`;
  document.getElementById("excuse").innerHTML = excuse;
};
