// let start = 10;
// let end = 100;
// let exclude = 40;

// for (let index = start; index < end + start; index += start) {
//   if (index === exclude) {
//     continue;
//   }
//   console.log(index);
// }

// let start = 10;
// let end = 0;
// let stop = 3;

// for (let index = start; index >= stop; index--) {
//   if (index === start) {
//     console.log(index);
//   } else {
//     console.log("0" + index);
//   }
// }

// let start = 1;
// let end = 6;
// let breaker = 2;

// for (let index = start; index <= end; index++) {
//   console.log(`${index}\n-- ${breaker} \n-- ${end - breaker}`);
// }

// let index = 10;
// let jump = 2;

// for (let i = index; i >= index / jump - jump; i = i - jump) {
//   console.log(i);
// }

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";

// let j = +false;

// for (let index = +""; index < friends.length; index++) {
//   if (friends[index].includes(letter.toUpperCase())) {
//     continue; // Skip to the next iteration when the condition is true
//   }
//   console.log(`${++j} => ${friends[j]}`);
// }

// let start = 0;
// let swappedName = "elZerO";
// let newSwappedName = "";

// for (let index = start; index < swappedName.length; index++) {
//   const charCode = swappedName[index].charCodeAt();
//   if (charCode > 90) {
//     newSwappedName += swappedName[index].toUpperCase();
//   } else {
//     newSwappedName += swappedName[index].toLowerCase();
//   }
// }

// console.log(newSwappedName); // Output: "ELzERo"

let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let index = start; index < mix.length; index++) {
  if (
    mix[index].toString().charCodeAt() >= 50 &&
    mix[index].toString().charCodeAt() <= 57
  ) {
    console.log(+mix[index]);
  }
}
