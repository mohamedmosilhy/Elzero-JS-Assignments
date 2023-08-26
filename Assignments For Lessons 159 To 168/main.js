// let date = new Date("2002-05-19"); // Note: Month should be zero-padded to two digits

// console.log((Date.now() - date.getTime()) / 1000 + " seconds");
// console.log((Date.now() - date.getTime()) / 1000 / 60 + " minutes");
// console.log((Date.now() - date.getTime()) / 1000 / 60 / 60 + " hours");
// console.log((Date.now() - date.getTime()) / 1000 / 60 / 60 / 24 + " days");
// console.log(
//   (Date.now() - date.getTime()) / 1000 / 60 / 60 / 24 / 30 + " months"
// );
// console.log(
//   (Date.now() - date.getTime()) / 1000 / 60 / 60 / 24 / 365 + " years"
// );

// let date = new Date(0);

// date.setSeconds(1);
// date.setFullYear(1980);
// date.setHours(0);

// console.log(date);

// let date = new Date();
// date.setDate(-1);
// date.setMonth(date.getMonth());

// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// console.log(date);

// console.log(
//   `Previous Month Is ${
//     months[date.getMonth()]
//   } And Last Day Is ${date.getDate()}`
// );

// let date1 = new Date("2002-05-19");
// let date2 = new Date(2002, 4, 19, 0, 0, 0);
// let date3 = new Date("may 19 2002");

// console.log(date1);
// console.log(date2);
// console.log(date3);

// let start = performance.now();

// for (let index = 0; index < 100000; index++) {
//   console.log(index);
// }
// let end = performance.now();

// console.log(end - start);

// Write Your Generator Function Here
function* gen() {
  let value = 14;
  let step = 140;
  while (true) {
    yield value;
    value += step;
    step += 200;
  }
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}

// function* genNumbers() {
//   yield* [1, 2, 2, 2, 3, 4, 5];
// }
// function* genLetters() {
//   yield* ["A", "B", "B", "B", "C", "D"];
// }

// // Write Your Generator Function Here

// function* genAll() {
//   yield* [...new Set(genNumbers())];
//   yield* [...new Set(genLetters())];
// }

// let generator = genAll();

// console.log(generator.next()); // {value: 1, done: false}
// console.log(generator.next()); // {value: 2, done: false}
// console.log(generator.next()); // {value: 3, done: false}
// console.log(generator.next()); // {value: 4, done: false}
// console.log(generator.next()); // {value: 5, done: false}
// console.log(generator.next()); // {value: "A", done: false}
// console.log(generator.next()); // {value: "B", done: false}
// console.log(generator.next()); // {value: "C", done: false}
// console.log(generator.next()); // {value: "D", done: false}

import * as modOne from "./modOne.js";

function calc(x, y, z) {
  return x + y + z;
}

console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60
