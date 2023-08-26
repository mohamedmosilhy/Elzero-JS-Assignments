// let p = document.querySelector(".our-element").nextElementSibling.remove();
// let div = document.querySelector(".our-element");

// let newP1 = document.createElement("p");
// newP1.textContent = "new Paragraph1";

// let newP2 = document.createElement("p");
// newP2.textContent = "new Paragraph2";

// div.before(newP1);
// div.after(newP2);

// let div = document.querySelector("div");
// let child = div.childNodes[4];
// console.log(child.textContent.trim());

// let elements = document.body.children;
// for (const ele of elements) {
//   ele.addEventListener("click", () => {
//     console.log("This is " + ele.localName);
//   });
// }

let assignDiv = document.createElement("div");
let currentElement = document.createElement("div");
let classList = document.createElement("div");
let addClass = document.createElement("input");
let removeClass = document.createElement("input");
let classDiv = document.createElement("div");
let inputDiv = document.createElement("div");

assignDiv.className = "assign";

currentElement.className = "current-ele";

let currentElementText = document.createTextNode("Current Element");
currentElement.append(currentElementText);

classList.className = "class-list";

let classListText = document.createElement("h5");
classListText.textContent = "Current Element Class List";
classList.append(classListText);

addClass.className = "add";
addClass.placeholder = "Add Classes";
addClass.type = "text";

removeClass.className = "remove";
removeClass.placeholder = "Remove Classes";
removeClass.type = "text";

classDiv.className = "show-classes";

if (currentElement.classList.length === 0) {
  let span = document.createElement("span");
  span.textContent = "No Classes To Show";
  classDiv.append(span);
} else {
  for (const i of currentElement.classList) {
    let span = document.createElement("span");
    span.textContent = i;
    classDiv.append(span);
  }
}
inputDiv.className = "input";

assignDiv.append(inputDiv, currentElement, classList);
classList.append(classDiv);
inputDiv.append(addClass, removeClass);
document.body.appendChild(assignDiv);

addClass.addEventListener("blur", () => {
  if (addClass.value !== "") {
    classDiv.innerHTML = "";
    if (addClass.value.includes(" ")) {
      let newValue = addClass.value.split(" ");
      for (const cl of newValue) {
        currentElement.classList.add(cl.toLowerCase());
      }
      addClass.value = "";
    } else {
      currentElement.classList.add(addClass.value.toLowerCase());
      addClass.value = "";
    }
    for (const i of currentElement.classList) {
      let span = document.createElement("span");
      span.textContent = i;
      classDiv.append(span);
    }
  }
});

removeClass.addEventListener("blur", () => {
  if (removeClass.value !== "") {
    if (removeClass.value.includes(" ")) {
      let newValue = removeClass.value.split(" ");
      for (const cl of newValue) {
        currentElement.classList.remove(cl.toLowerCase());
        let span;
        for (const i of document.querySelectorAll("span")) {
          if (i.textContent === cl.toLowerCase()) {
            i.remove();
          }
        }
      }
      removeClass.value = "";
    } else {
      for (const i of document.querySelectorAll("span")) {
        if (i.textContent === removeClass.value.toLowerCase()) {
          i.remove();
        }
      }
      currentElement.classList.remove(removeClass.value.toLowerCase());
      removeClass.value = "";
    }
  }
  if (currentElement.classList.length === 0) {
    let span = document.createElement("span");
    span.textContent = "No Classes To Show";
    classDiv.append(span);
  }
});
