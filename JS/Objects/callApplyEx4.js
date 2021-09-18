// Call and bind both
//creating a funciton
let getFullName = function (location, state) {
  console.log(
    `My name is ${this.firstName} ${this.lastName}. And i lived in ${location} in ${state}`
  );
};

//creating an object
let name = {
  firstName: "Arafat",
  lastName: "Alim",
};

let see = getFullName.call(name, "kolkata", "West Bengal"); //call with multiple arguemnts
// call(obj, arg1,arg2)
console.log(see);

//! apply method
//create an object using literals
let name2 = {
  firstName: "MS",
  lastName: "Dhoni",
};

// apply method do same thing but it pass an argument as a array
let see2 = getFullName.apply(name2, ["Ranchi", "Jharkhand"]);
console.log(see2);

// ! please see Exercise - callBindapply.js for more  deep knowledge about this
