// Test Case 1
let num = 9; // "009"
if (num < 10) {
  console.log("00" + num);
}
// Test Case 2
num = 20; // "020"
if (num > 10 && num < 100) {
  console.log("0" + num);
}
// Test Case 3
num = 110; // "110"
if (num >= 100) {
  console.log(num);
}

let number = 9;
let str = "9";
let str2 = "20";

// Output
("{number} Is The Same Value As {str}");
("{number} Is The Same Value As {str} But Not The Same Type");
("{number} Is Not The Same Value Or The Same Type As {str2}");
("{str} Is The Same Type As {str2} But Not The Same Value");

if (number == str) {
  console.log(`${number} Is The Same Value As ${str}`);
} else if (number == str && typeof number != typeof str) {
  console.log(`
  ${number} Is The Same Value As ${str} But Not The Same Type`);
} else if (number != str || typeof number == typeof str) {
  console.log(`${number} Is Not The Same Value Or The Same Type As ${str2}`);
} else if (number != str && typeof number == typeof str) {
  console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
}

let num1 = 10;
let num2 = 30;
let num3 = "30";

if (+num3 >= num1 && typeof num3 !== typeof num2) {
  console.log(
    "30 Is Larger Than 10 And Type string Not The Same Type As number"
  );
}
if (+num3 > num1 && +num3 == num2 && typeof num3 !== typeof num2) {
  console.log(
    "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
  );
}
if (num3 !== num1 && typeof num3 !== typeof num2) {
  console.log(
    `${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}`
  );
}

// Needed Output
("30 Is Larger Than 10 And Type string Not The Same Type As number");
("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");

// Edit What You Want Here

let number1 = 11;
let number2 = 10;
let number3 = 11;
let number4 = 33;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (number1 > number2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (number1 > number2 && number1 < number4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (number1 > number2 && number1 === number3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if (number1 + number2 < number4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if (number1 + number3 < number4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if (number1 + number2 + number3 < number4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (number4 - (number1 + number3) + number2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
