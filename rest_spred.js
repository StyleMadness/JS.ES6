// Rest

// function average(a, b, ...args) {
// Array.from(arguments)
//   return args.reduce((acc, i) => (acc += i), 0) / args.length;
// }
// console.log(average([10, 23, 44, 21]));
// console.log(average(10, 23, 44, 21));

// Spread

// console.log(...array);

// console.log(Math.max(...array));
// console.log(Math.min(...array));
// console.log(Math.mix.apply(null, array));

// const fib = [1, ...array];
// console.log(fib);

// Destructuring

// const array = [1, undefined, 3, 5, 8, 13];

// const a = array[0]
// const a = array[1]
// const [a, b = 42, ...c] = array;
// console.log(a, b);

// console.log(a, b, c);

// const [a, , c] = array;

// console.log(a, c);

// // Object
// const address = {
//   country: "Russia",
//   city: "Ekb",
//   street: "Lenina",
//   concat: function () {
//     return `${this.country} ${this.city} ${this.street}`;
//   },
// };

// const { city, country, street = "Tverskaya", concat: addressConcat } = address;

// console.log(addressConcat.call(address));

// console.log(address.concat());

// const { city, ...rest } = address;
// console.log(city);
// console.log(rest);

// const newAddress = { ...address, street: "tverskaya", code: 123 };
// console.log(newAddress);
