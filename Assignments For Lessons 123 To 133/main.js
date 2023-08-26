let setOfNumbers = new Set([10]);
setOfNumbers.add(20);
setOfNumbers.add(setOfNumbers.size);

console.log(setOfNumbers);
console.log([...setOfNumbers][setOfNumbers.size - 1]); // Output: 2

// -------------------------------------------------------------------

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

let set = new Set(myFriends);

console.log(Array.from(set).sort());
// Needed Output
// (4)[("Ahmed", "Mahmoud", "Osama", "Sayed")];

// -------------------------------------------------------------------

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};
const { username, role, country } = myInfo;
let map = new Map([
  ["username", username],
  ["role", role],
  ["country", country],
]);

console.log(map);
console.log(map.size);
console.log(map.has("role"));
// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true

let theNumber = 100020003000;

console.log(+[...new Set(theNumber.toString())].sort().join(""));
// Needed Output
// 123;

let theName = "Elzero";

console.log(Array.from(theName));
console.log([...theName]);
console.log(theName.split(""));
let res1 = [];
let res2 = [];

for (const iterator of theName) {
  res1.push(iterator);
}
console.log(res1);

for (let index = 0; index < theName.length; index++) {
  res2.push(theName[index]);
}

console.log(res2);

// Needed Output
// ["E", "l", "z", "e", "r", "o"];

let chars1 = ["A", "B", "C", "D", "E", 10, 15, 6];

// Needed Output
// ["A", "B", "C", "A", "B", "C", "D", "E"];

console.log(chars1.sort().copyWithin(0, 3, 6));

let chars2 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

// Needed Output
// ["A", "B", "C", "D", "A", "B", "C", "D", "E"];
let c = chars2.copyWithin(7, 4, 6).copyWithin(3, 4, 5).copyWithin(4, 0, 3);
console.log(c);

let chars3 = ["Z", "Y", "A", "D", "E", 10, 1];

console.log(chars3.copyWithin(-3, 2, 5).copyWithin(2, 0, 2));
// Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"];

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne, ...numsTwo]);
// Needed Output
//   (1, 2, 3, 4, 5, 6)

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log([...n1, ...n2].sort().length * new Set(n2).keys().next().value);

// Needed Output
// 210;
