// ! Now here we are making a seperate function and this function use by making object as their method

// creating a function
let fullName = function () {
  console.log(this.firstName + " " + this.lastName);
};

//! now creating an object using literal
let name = {
  firstName: "Arafat",
  lastName: "Alim",
};
// ! creaing an another object using literal
let name2 = {
  firstName: "MS",
  lastName: "Dhoni",
};

// want to use my function fullName to print my my name object

let see = fullName.call(name);
console.log(see); // Arafat ALim

let see2 = fullName.call(name2);
console.log(see2); // MS Dhoni

// ! Please see the callEx3 for more deep - function reusablity plus passing an argument
