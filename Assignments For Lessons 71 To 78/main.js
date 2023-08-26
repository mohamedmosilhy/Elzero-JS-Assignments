let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero

let result = mix
  .map((ele) => {
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .reduce((prev, curr) => prev + curr);

console.log(result);

// -----------------------------------------------------------------------------------------

let myString = "EElllzzzzzzzeroo";
let result1;

result1 = myString.split("");

result1 = result1
  .filter((ch, index, array) => {
    return array.indexOf(ch) === index;
  })
  .join("");

console.log(result1); // Output: Elzero

// -----------------------------------------------------------------------------------------

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let newArr = [].concat(...myArray);

newArr = newArr.reduce((prev, curr) => prev + curr);

console.log(newArr);

// Elzero

// -----------------------------------------------------------------------------------------

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let res = numsAndStrings
  .filter((ele) => !isNaN(parseInt(ele)))
  .map((ele) => -ele);

console.log(res);

// [-1, -10, 10, 20, -5, -3]
// -------------------------------------------------------------------------

let nums = [2, 12, 11, 5, 10, 1, 99];
let res1 = nums.reduce((prev, curr) => {
  if (curr % 2 != 0) {
    return curr + prev;
  } else {
    return curr * prev;
  }
}, 1);

console.log(res1);
// 500
