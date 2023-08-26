let selectColor = document.createElement("select");
selectColor.className = "select-color";
let colorOption1 = document.createElement("option");
let colorOption2 = document.createElement("option");
let colorOption3 = document.createElement("option");
let colorOption4 = document.createElement("option");
let colorOption5 = document.createElement("option");
let colorOption6 = document.createElement("option");

colorOption1.textContent = "red";
colorOption2.textContent = "blue";
colorOption3.textContent = "orange";
colorOption4.textContent = "grey";
colorOption5.textContent = "yellow";
colorOption6.textContent = "green";

selectColor.append(
  colorOption1,
  colorOption2,
  colorOption3,
  colorOption4,
  colorOption5,
  colorOption6
);

let selectFont = document.createElement("select");
selectFont.className = "select-font";
let fontOption1 = document.createElement("option");
let fontOption2 = document.createElement("option");
let fontOption3 = document.createElement("option");

fontOption1.textContent = "Open";
fontOption2.textContent = "Cairo";
fontOption3.textContent = "Roboto";

selectFont.append(fontOption1, fontOption2, fontOption3);

let selectSize = document.createElement("select");
selectSize.className = "select-size";
let sizeOption1 = document.createElement("option");
let sizeOption2 = document.createElement("option");
let sizeOption3 = document.createElement("option");
let sizeOption4 = document.createElement("option");
let sizeOption5 = document.createElement("option");
let sizeOption6 = document.createElement("option");
let sizeOption7 = document.createElement("option");
let sizeOption8 = document.createElement("option");
let sizeOption9 = document.createElement("option");
let sizeOption10 = document.createElement("option");
let sizeOption11 = document.createElement("option");
let sizeOption12 = document.createElement("option");
let sizeOption13 = document.createElement("option");
let sizeOption14 = document.createElement("option");
let sizeOption15 = document.createElement("option");

sizeOption1.textContent = "16";
sizeOption2.textContent = "17";
sizeOption3.textContent = "18";
sizeOption4.textContent = "19";
sizeOption5.textContent = "20";
sizeOption6.textContent = "21";
sizeOption7.textContent = "22";
sizeOption8.textContent = "23";
sizeOption9.textContent = "24";
sizeOption10.textContent = "25";
sizeOption11.textContent = "26";
sizeOption12.textContent = "27";
sizeOption13.textContent = "28";
sizeOption14.textContent = "29";
sizeOption15.textContent = "30";

selectSize.append(
  sizeOption1,
  sizeOption2,
  sizeOption3,
  sizeOption4,
  sizeOption5,
  sizeOption6,
  sizeOption7,
  sizeOption8,
  sizeOption9,
  sizeOption10,
  sizeOption11,
  sizeOption12,
  sizeOption13,
  sizeOption14,
  sizeOption15
);

let content = document.createElement("div");
content.className = "content";
let selectors = document.createElement("div");
selectors.className = "selectors";
let div = document.createElement("div");
div.className = "text";
selectors.append(selectColor, selectFont, selectSize);
div.textContent = "Welcome To My World";
content.append(selectors, div);

document.body.append(content);

if (window.localStorage.getItem("color") !== null) {
  document.querySelector(".select-color").value =
    window.localStorage.getItem("color");
  div.style.backgroundColor = window.localStorage.getItem("color");
} else {
  document.querySelector(".select-color").value = "red";
  div.style.backgroundColor = document.querySelector(".select-color").value;
  window.localStorage.setItem(
    "color",
    document.querySelector(".select-color").value
  );
}

if (window.localStorage.getItem("size") !== null) {
  document.querySelector(".select-size").value =
    window.localStorage.getItem("size");
  div.style.fontSize = `${window.localStorage.getItem("size")}px`;
} else {
  document.querySelector(".select-size").value = "16";
  div.style.fontSize = document.querySelector(".select-size").value;
  window.localStorage.setItem(
    "size",
    document.querySelector(".select-size").value
  );
}

if (window.localStorage.getItem("family") !== null) {
  document.querySelector(".select-font").value = window.localStorage
    .getItem("family")
    .split(",")[0];
  div.style.fontFamily = window.localStorage.getItem("family");
} else {
  document.querySelector(".select-font").value = "Open";
  div.style.fontFamily = `${
    document.querySelector(".select-font").value
  }, sans-serif`;
  window.localStorage.setItem(
    "family",
    `${document.querySelector(".select-font").value}, sans-serif`
  );
}

document.querySelector(".select-color").addEventListener("change", (event) => {
  const selectedColor = event.target.value; // Get the selected value from the select element

  div.style.backgroundColor = selectedColor;

  window.localStorage.setItem(
    "color",
    document.querySelector(".select-color").value
  );
});

document.querySelector(".select-size").addEventListener("change", (event) => {
  const selectedSize = event.target.value; // Get the selected value from the select element
  div.style.fontSize = `${selectedSize}px`;

  window.localStorage.setItem(
    "size",
    document.querySelector(".select-size").value
  );
});

document.querySelector(".select-font").addEventListener("change", (event) => {
  const selectedFont = event.target.value; // Get the selected value from the select element

  div.style.fontFamily = `${selectedFont}, sans-serif`;

  window.localStorage.setItem(
    "family",
    `${document.querySelector(".select-font").value}, sans-serif`
  );
});

// ----------------------------------------------------------------------------------------------------------

let box = document.createElement("div");
document.body.append(box);
box.className = "box";

let input1 = document.createElement("input");
let input2 = document.createElement("input");
let input3 = document.createElement("input");

input1.type = "text";
input2.type = "number";
input3.type = "email";

input1.className = "text1";
input2.className = "number";
input3.className = "email";

input1.placeholder = "text";
input2.placeholder = "number";
input3.placeholder = "email";

let select = document.createElement("select");
select.className = "select";
let Option1 = document.createElement("option");
let Option2 = document.createElement("option");
let Option3 = document.createElement("option");
let Option4 = document.createElement("option");
let Option5 = document.createElement("option");

Option1.textContent = "Giza";
Option2.textContent = "Cairo";
Option3.textContent = "Alexanderia";
Option4.textContent = "Aswan";
Option5.textContent = "Luxor";

select.append(Option1, Option2, Option3, Option4, Option5);

box.append(input1, input2, input3, select);

if (window.sessionStorage.getItem("text") !== null) {
  document.querySelector(".text").value = window.sessionStorage.getItem("text");
  input1.value = window.sessionStorage.getItem("text");
} else {
  document.querySelector(".text").value = "";
  input1.value = document.querySelector(".text").value;
  window.sessionStorage.setItem("text", document.querySelector(".text").value);
}

if (window.sessionStorage.getItem("number") !== null) {
  document.querySelector(".number").value =
    window.sessionStorage.getItem("number");
  input2.value = window.sessionStorage.getItem("number");
} else {
  document.querySelector(".number").value = "";
  input2.value = document.querySelector(".number").value;
  window.sessionStorage.setItem(
    "number",
    document.querySelector(".number").value
  );
}

if (window.sessionStorage.getItem("email") !== null) {
  document.querySelector(".email").value =
    window.sessionStorage.getItem("email");
  input3.value = window.sessionStorage.getItem("email");
} else {
  document.querySelector(".email").value = "";
  input3.value = document.querySelector(".email").value;
  window.sessionStorage.setItem(
    "email",
    document.querySelector(".email").value
  );
}

if (window.sessionStorage.getItem("select") !== null) {
  document.querySelector(".select").value =
    window.sessionStorage.getItem("select");
  select.value = window.sessionStorage.getItem("select");
} else {
  document.querySelector(".select").value = "Giza";
  select.value = document.querySelector(".select").value;
  window.sessionStorage.setItem(
    "select",
    document.querySelector(".select").value
  );
}

document.querySelector(".text1").addEventListener("change", (event) => {
  const text = event.target.value; // Get the selected value from the select element

  window.sessionStorage.setItem("text", text);
});

document.querySelector(".number").addEventListener("change", (event) => {
  const number = event.target.value; // Get the selected value from the select element

  window.sessionStorage.setItem("number", number);
});

document.querySelector(".email").addEventListener("change", (event) => {
  const email = event.target.value; // Get the selected value from the select element

  window.sessionStorage.setItem("email", email);
});

document.querySelector(".select").addEventListener("change", (event) => {
  const select = event.target.value; // Get the selected value from the select element

  window.sessionStorage.setItem("select", select);
});
