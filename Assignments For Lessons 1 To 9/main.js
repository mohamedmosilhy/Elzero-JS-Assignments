// var h1 = document.createElement("h1");
// h1.textContent = "Hello, World!";
// h1.style.color = "blue";
// h1.style.fontSize = "80px";
// h1.style.fontWeight = "bold";
// h1.style.textAlign = "center";
// h1.style.fontFamily = "Arial";
// document.write(h1.outerHTML);

// -----------------------------------------------------------------------------------------------------------------------------------------------------
// console.log(
//   "%cElzero %cWeb %cSchool",
//   "color:red;font-size:40px",
//   "color:green; font-weight:bold;font-size:40px",
//   "background-color:blue;font-size:40px"
// );

// -----------------------------------------------------------------------------------------------------------------------------------------------------
// console.group("Group 1");
// console.log("Message One");
// console.log("Message Two");
// console.group("Group 2");
// console.log("Message One");
// console.log("Message Two");
// console.group("Group 3");
// console.log("Message One");
// console.log("Message Two");
// console.groupEnd();
// console.groupEnd();
// console.groupEnd();
// console.group("Group 4");
// console.log("Message One");
// console.log("Message Two");

// -----------------------------------------------------------------------------------------------------------------------------------------------------

// console.table(["mohamed", "sayed", "ahmed", "ali"]);

// window.close()
// i will comment the code so it will not be executed

// console.log("Iam In Console");
// document.write("Iam In Page");
// -----------------------------------------------------------------------------------------------------------------------------------------------------

// Variables And Concatenation Challenge

let titleVar, descriptionVar, dateVar;

titleVar = "Elzero";
descriptionVar = "Elzero Web School";
dateVar = "25/10";

let div = `
    <h3>${titleVar}</h3>
    <p>${descriptionVar}</p>
    <span>${dateVar}</span>
`;

document.write(div.repeat(4));
