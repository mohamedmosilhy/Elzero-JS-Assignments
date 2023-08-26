let req = new XMLHttpRequest();
req.open("GET", "./articles.json");
req.send();
let mainData;

let div = document.createElement("div");
div.setAttribute("id", "data");
document.body.appendChild(div);

req.onload = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this);
    mainData = JSON.parse(this.responseText);
    console.log("mainData loaded");
    console.log(mainData);
    // for (const key in mainData) {
    //   mainData[key]["category"] = "All";
    // }
    // let UpdatedData = mainData;
    // console.log(UpdatedData);
    for (const key in mainData) {
      let innerDiv = document.createElement("div");
      let h2 = document.createElement("h2");
      h2.textContent = `${mainData[key]["title"]}`;
      let p1 = document.createElement("p");
      p1.textContent = `${mainData[key]["content"]}`;
      let p2 = document.createElement("p");
      p2.textContent = `Author: ${mainData[key]["writer"]}`;
      let p3 = document.createElement("p");
      p3.textContent = `Category: ${mainData[key]["category"]}`;
      innerDiv.append(h2, p1, p2, p3);
      div.append(innerDiv);
    }
  }
};
