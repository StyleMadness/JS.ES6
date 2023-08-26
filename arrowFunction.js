//Arrow Functions
// function sum(a, b) {
//   return a + b;
// }

// function cube(a) {
//   return a ** 3;
// }
// const sum = (a, b) => {
//   return a + b;
// };

// console.log(sum(41, 2));

// const cube = (a) => a ** 3;
// console.log(cube(2));

// setTimeout(() => console.log("after 1sec"), 1000);

// Context
function log() {
  console.log(this);
}

const arrowLog = () => console.log(this);

const person = {
  name: "Elena",
  age: 22,
  log: log,
  arrowLog: arrowLog,
  delayLog: function () {
    // const self = this
    setTimeout(() => {
      console.log(this.name + " " + this.age);
    }, 500);
  },
};

// person.log();
// person.arrowLog(); // global,window

person.delayLog();
