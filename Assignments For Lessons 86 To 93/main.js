// let element4 = document.getElementById("elzero");
// let element1 = document.getElementsByClassName("element");
// let element2 = document.getElementsByName("js");
// let element3 = document.getElementsByTagName(`div`);
// let element5 = document.querySelector("#elzero");
// let element6 = document.querySelector(".element");
// let element7 = document.querySelector("[name='js']");
// let element8 = document.querySelector("div");
// let element9 = document.querySelectorAll("#elzero")[0];
// let element10 = document.querySelectorAll(".element")[0];
// let element11 = document.querySelectorAll("[name='js']")[0];
// let element12 = document.querySelectorAll("div")[0];
// let element13 = document.body.childNodes[1];
// let element14 = document.body.children[0];

// let imgs = document.getElementsByTagName("img");

// for (const img of imgs) {
//   img.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//   img.alt = "Elzero Logo";
// }

// let input = document.querySelector("input[type='number']");

// let div = document.getElementsByClassName("result")[0];

// input.addEventListener("input", () => {
//   div.textContent = `${+input.value} USD Dollar = ${
//     +input.value * 15.6
//   } Egyptian Pound`;
// });

// let one = document.querySelector(".one");
// let two = document.querySelector(".two");

// one.setAttribute("title", "one");

// two.setAttribute("title", "two");

// one.innerHTML = "one";
// two.innerHTML = "Two 2";

// let imgs = document.getElementsByTagName("img");

// for (const img of imgs) {
//   if (img.hasAttribute("alt")) {
//     img.setAttribute("alt", "old");
//   } else {
//     img.setAttribute("alt", "Elzero New");
//   }
// }

let form = document.querySelector("form");
let inputNum = document.querySelector("input[type='number']");
let inputText = document.querySelector("input[type='text']");
let select = document.querySelector("select");
let submit = document.querySelector("input[type='submit']");

let container = document.createElement("div");
container.className = "container";

container.style.cssText =
  "display: grid;grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));";

document.body.appendChild(container);

form.style.display = "flex";
form.style.gap = "10px";
form.style.flexDirection = "column";
form.style.width = "200px";

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputNum.value !== "" && inputText.value !== "") {
    container.textContent = "";
    for (let index = 0; index < +inputNum.value; index++) {
      let newEle = document.createElement(`${select.value.toLowerCase()}`);
      let text = document.createTextNode(`${inputText.value}`);
      newEle.appendChild(text);
      newEle.style.cssText =
        "background-color:orange; text-align:center; margin:20px; padding:10px";
      container.appendChild(newEle);
    }
  } else {
    let newele = document.createElement("p");
    newele.innerHTML = "Please Enter Valid Data";
    newele.style.color = "red";
    document.body.appendChild(newele);
    setTimeout(() => {
      newele.remove();
    }, 2000);
  }
});
