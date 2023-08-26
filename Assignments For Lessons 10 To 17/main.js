// Add Variables Here
let numberOne, numberTwo;

numberOne = 10;
numberTwo = 20;

// Ouput
console.log(numberOne + "" + numberTwo); // Normal Concatenate => 1020
console.log(typeof (numberOne + "" + numberTwo)); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof `${numberOne}${numberTwo}`); // Template Literals Way => String

console.log(numberOne + "\n" + numberTwo);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numberOne}
${numberTwo}`);
/*
  Template Literals Way
  20
  10
*/

// -------------------------------------------------------------------------------------------------------------

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object
// -------------------------------------------------------------------------------------------------------------

console.log(
  '`I\'m In \\\\ Love \\\\ """ \'\'\' ++ with ++ \\"""\\""" ""javascript""``'
);

// -------------------------------------------------------------------------------------------------------------

let a = 21;
let b = 20;

console.log("_" + (a + "_" + b).repeat(4) + "_"); // _21_2021_2021_2021_20_
