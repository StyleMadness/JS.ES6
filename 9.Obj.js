const liveCity = "city";
const job = "Frontend";
const person = {
  age: 25,
  name: "Igor",
  job,
  country: "Russia",
  [liveCity + Date.now()]: "Ekb",
  print: () => "Person",
  toString() {
    return Object.keys(this)
      .filter((key) => key !== "toString")
      .map((key) => this[key])
      .join(" ");
  },
};

// console.log(person.toString());
// console.log(person.print());
// console.log(person);

// Methods

const first = { a: 1 };
const second = { b: 2 };
// console.log(Object.is(20, 10));

// console.log(Object.assign({}, first, second));
// console.log(first);

const obj = { a: 2, b: 3 };
console.log(Object.entries(obj));
console.log(Object.keys(obj));
console.log(Object.values(obj));
