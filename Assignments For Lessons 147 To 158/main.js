class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }

  run() {
    console.log("Car Is Running Now");
  }

  stop() {
    console.log(" Car Is Stopped");
  }
}

let bmw = new Car("BMW", "X6", 6000000);
let MG = new Car("MG", "2022", 420000);
let nissan = new Car("nissan", "2021", 60000);

console.log(
  `Car One Name Is ${MG.n} And Model Is ${MG.m} And Price Is ${MG.p}`
);
MG.run();
// -------------------------------------------------------------------
class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

// Write Tablet Class Here

class Tablet extends Phone {
  constructor(name, serial, price, size) {
    super(name, serial, price);
    this.size = size || "Unknown";
  }

  fullDetails() {
    return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`;
  }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown

// --------------------------------------------------------------------------------------------

// Edit The Class
class User {
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = card;
  }

  get showData() {
    return `Hello ${this.u} Your Credit Card Number Is ${this.updateCard()}`;
  }

  //   updateCard() {
  //     let card = this.#c.toString();
  //     let newCard = [];
  //     let valid = true;

  //     for (let index = 4; index < card.length; index += 5) {
  //       if (card[index] !== "-") {
  //         valid = false;
  //         break;
  //       }
  //     }

  //     if (valid) {
  //       return card;
  //     } else {
  //       for (let index = 4; index <= card.length; index += 4) {
  //         let start = index - 4;
  //         newCard.push(card.slice(start, index));
  //       }
  //       return newCard.join("-");
  //     }
  //   }

  updateCard() {
    let card = this.#c.toString();

    // Regular expression to match valid credit card format
    const cardFormat = /^\d{4}-\d{4}-\d{4}-\d{4}$/;

    if (!cardFormat.test(card)) {
      card = card.replace(/\D/g, ""); // Remove non-digit characters
      card = card.replace(/(\d{4})(?=\d)/g, "$1-"); // Add hyphens after every four digits
    }

    return card;
  }
}

// 4 9 14
// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined

// ---------------------------------------------------------------------

// Write Your Code Here

String.prototype.addLove = function () {
  return `I Love ${this} Web School`;
};

// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School.

// --------------------------------------------------------------------

const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

// Write Your Code Here

Object.defineProperties(myObj, {
  score: {
    writable: false,
  },
  id: {
    enumerable: false,
  },
  country: {
    enumerable: false,
    configurable: true,
  },
});

delete myObj.country;

myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}
