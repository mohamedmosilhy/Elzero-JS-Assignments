// #23a96e  #fff  #ececec

// heading
let header = document.createElement("div");
let logo = document.createElement("div");
let links = document.createElement("ul");
let homeLink = document.createElement("li");
let aboutLink = document.createElement("li");
let serviceLink = document.createElement("li");
let contactLink = document.createElement("li");
let homeA = document.createElement("a");
let aboutA = document.createElement("a");
let serviceA = document.createElement("a");
let contactA = document.createElement("a");

header.append(logo, links);
links.append(homeLink, aboutLink, serviceLink, contactLink);
document.body.append(header);
homeLink.append(homeA);
aboutLink.append(aboutA);
serviceLink.append(serviceA);
contactLink.append(contactA);

logo.className = "logo";
header.className = "header";
links.className = "links";

logo.textContent = "Mosilhy";
homeA.textContent = "Home";
aboutA.textContent = "About";
serviceA.textContent = "Service";
contactA.textContent = "Contact";

// content

let content = document.createElement("div");

for (let index = 0; index < 15; index++) {
  let numSpan = document.createElement("span");
  let product = document.createElement("span");
  let box = document.createElement("div");
  content.append(box);
  box.append(numSpan, product);

  box.className = "box";

  numSpan.textContent = `${index}`;
  product.textContent = `product`;
}

content.className = "content";

document.body.append(content);

// footer
let footer = document.createElement("div");

footer.className = "footer";

document.body.append(footer);

footer.textContent = "Coptright 2023";
