let car = {
  name: "AudiQ7",
  sayName() {
    console.log(this.name);
  },
};

let sayName = car.sayName;
sayName("name");

// function greet(person) {
//   if (person == { name: "Arafat" }) {
//     console.log("Newton School");
//   } else {
//     console.log("hey School");
//   }
//   console.log(person);
// }

// greet({ name: "Arafat" });
