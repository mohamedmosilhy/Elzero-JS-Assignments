function sayHello(theName, theGender) {
  if (theGender === "Male") {
    console.log(`Hello Mr ${theName}`);
  } else if (theGender === "Female") {
    console.log(`Hello Miss ${theName}`);
  } else {
    console.log(`Hello ${theName}`);
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

function calculate(firstNum, secondNum, operation) {
  if (secondNum === undefined) {
    console.log("Second Number Not Found");
  } else if (operation === undefined || operation === "add") {
    console.log(firstNum + secondNum);
  } else if (operation === "subtract") {
    console.log(firstNum - secondNum);
  } else if (operation === "multiply") {
    console.log(firstNum * secondNum);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

function ageInTime(theAge) {
  if (theAge > 100 || theAge < 10) {
    console.log("Age Out Of Range");
    return;
  }
  console.log(`Months:${theAge * 12}
Weeks: ${theAge * 12 * 4}
Days: ${theAge * 12 * 4 * 7}
Hours: ${theAge * 12 * 4 * 7 * 24}
Minutes: ${theAge * 12 * 4 * 7 * 24 * 60}
Seconds: ${theAge * 12 * 4 * 7 * 24 * 60 * 60}`);
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

function checkStatus(a, b, c) {
  let arr = [a, b, c];
  let typesArr = [typeof a, typeof b, typeof c];
  let result1 = `Hello ${arr[typesArr.indexOf("string")]},`;
  let result2 = ` Your Age Is ${arr[typesArr.indexOf("number")]}, `;
  let result3 =
    arr[typesArr.indexOf("boolean")] === true
      ? `You Are Available For Hire`
      : `You Are Not Available For Hire`;

  console.log(result1 + result2 + result3);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (let index = startYear; index <= endYear; index++) {
    document.write(`<option value="${index}">${index}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);

function multiply(...numbers) {
  let result = 1;
  for (let index = 0; index < numbers.length; index++) {
    let element = numbers[index];
    if (typeof element === "string") {
      continue;
    }

    result = result * Math.trunc(numbers[index]);
  }
  console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
