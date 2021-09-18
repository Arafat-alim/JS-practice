//! Passing a second argument in the call() method

//! creating a resuable function with a parameter
let getFullName = function (homeTown) {
  console.log(this.firstName + " " + this.lastName + " " + homeTown);
};

// creating an object using object literal
let name = {
  firstName: "Arafat",
  lastName: "Alim",
};
// creating another object using object literal
let name2 = {
  firstName: "MS",
  lastName: "Dhoni",
};

// borrowing function
let see = getFullName.call(name, "Kolkata");
console.log(see); //Arafat Alim Kolkata

let see2 = getFullName.call(name2, "Jharkhand");
console.log(see2);

// ! Please see the callBindEx4 for more deep - multiple arguments using call and bind both
