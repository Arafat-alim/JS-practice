// ! All three are predefined javascript methods

//! call()
// creating an object - lets print the my name and my location

let name = {
  firstName: "Arafat",
  lastName: "Alim",
  getName() {
    console.log(this.firstName + " " + this.lastName);
  },
};
console.log(name.getName()); // Arafat Alim

// creating another object
let name2 = {
  firstName: "MS",
  lastName: "Dhoni",
  // we cant copy that code again and again
  //   want to use getName method here -> so we are going to use call method for borrowing the function
};
//! function borrowing - getName ko borrow kr ke dusre naye object me show krwana hai
name.getName.call(name2); // MS DHONI

// ! Please see the callEx2 for more deep - function reusablity
