let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice("", num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.splice("", num)); // ["Ahmed", "Elham", "Osama"];

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

console.log(friends.splice(friends.indexOf("Eman"), friends.indexOf("Osama"))); // ["Eman", "Osama"]

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(finalArr.concat(arrOne, arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(
  words
    .slice(words.indexOf("Facebook") + true)[0][0]
    .slice(website.length)
    .toUpperCase()
); // ZERO

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

if (haystack.find((i) => (i === needle ? true : false))) {
  console.log("found");
}

console.log(haystack.includes(needle) ? "found" : "not found");

haystack.forEach((element) => console.log(element === needle ? "found" : ""));

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs.push(arr2[arr1.indexOf("X")]);
allArrs.push(arr1[arr1.indexOf("X")]);
allArrs.push(arr2[arr2.indexOf("Y")]);

console.log(allArrs.join("").toLowerCase()); // fxy
