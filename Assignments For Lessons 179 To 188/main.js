let promise = new Promise((resolve, reject) => {
  let req = new XMLHttpRequest();
  req.open("GET", "./data.json");
  req.send();
  req.onload = () => {
    if (req.readyState === 4 && req.status === 200) {
      let data = JSON.parse(req.responseText);
      resolve(data);
    } else {
      reject(Error("There is no data"));
    }
  };
}).then(
  (res) => {
    for (let index = 0; index < 5; index++) {
      let innerDiv = document.createElement("div");
      let h3 = document.createElement("h3");
      h3.textContent = `${res[index]["title"]}`;
      let p1 = document.createElement("p");
      p1.textContent = `${res[index]["description"]}`;
      innerDiv.append(h3, p1);
      document.body.append(innerDiv);
    }
  },
  (reg) => {
    console.log(reg);
  }
);

// ------------------------------------------------------------------------

fetch("./data.json")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    for (let index = 0; index < 5; index++) {
      let innerDiv = document.createElement("div");
      let h3 = document.createElement("h3");
      h3.textContent = `${res[index]["title"]}`;
      let p1 = document.createElement("p");
      p1.textContent = `${res[index]["description"]}`;
      innerDiv.append(h3, p1);
      document.body.append(innerDiv);
    }
  });

// ------------------------------------------------------------------------------
