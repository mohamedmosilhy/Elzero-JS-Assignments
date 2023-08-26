// Replace ? With Arithmetic Operators

console.log(10 * 20 + (15 % 3) + 190 + 10 - 400); // 0

let num = 3;

// Solution One
console.log(+true + num + +true + +true); // 6

// Solution Two
console.log(+true + num * +true + +true + +true); // 6

// Soultion Three
console.log(num * (+true + +true)); // 6

// Soultion Four
console.log(num * (+false + +true + +true)); // 6

// Solution Five
console.log(+false + +false + num * (+false + +true + +true)); // 6

// Solution Six
console.log(num + num + num * (+false + +true - +true)); // 6

let num1 = "10";

// Solution One
console.log(num1 * (+true + +true)); // 20

// Solution Two
console.log(num1 * (+true + +true + +false + +false)); // 20

// Solution Three
console.log(
  num1 * true +
    true +
    true +
    true +
    true +
    true +
    true +
    true +
    true +
    true +
    true
); // 20

// Solution Four
console.log(num1 * (true + false + true)); // 20

let points = 10;

// Write Your Code Here

console.log(points + true + true + true); // 13

// Write Your Code Here

console.log(points - true - true); // 8;
