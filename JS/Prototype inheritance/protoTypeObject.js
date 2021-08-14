const Person = {
  name: "Arafat",
  show() {
    console.log(this);
  },
};
console.log(Person.__proto__);
console.log(Person.__proto__.__proto__);
//! Important
// Person.__proto__ === Object.prototype both are exactly same
// Person.__proto__.__proto__ === null; // null milega
