// call, apply and bind method
let getFullName = function (location, state) {
  console.log(
    `My name is ${this.firstName} ${this.lastName}. And i lived in ${location} in ${state}`
  );
};
// creaing a object
const name = {
  firstName: "Arafat",
  lastName: "Alim",
};

// ! call method
const see = getFullName.call(name, "Kolkata", "Wb");
console.log(see);

// creaing an object
const name2 = {
  firstName: "MS",
  lastName: "Dhoni",
};
// ! apply method
const see2 = getFullName.call(name2, ["Ranchi", "Jharkhand"]);

// creating one more object
const name3 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};
//! bind method return the copy of an
const see3 = getFullName.bind(name3, "Mumbai", "Maharashtra"); // see3 is a function now
see3(); //My name is Sachin Tendulkar. And i lived in Mumbai in Maharashtra
