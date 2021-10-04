//! Here we can create our own error message using "throw" operator
let a = 8;
let ageErr = new Error(); //using class
try {
  if (a < 18) {
    throw ageErr;
  } else {
    console.log("valid age");
  }
} catch (err) {
  console.log("invalid age");
}
//output - invalid age
