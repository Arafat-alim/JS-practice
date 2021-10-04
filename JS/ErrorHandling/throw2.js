//! Here we can create our own error message using "throw" operator
let a = 8;
let ageErr = new Error("invalid age"); //passing a message here
try {
  if (a < 18) {
    throw ageErr;
  } else {
    console.log("valid age");
  }
} catch (err) {
  console.log(err.message);
}

//output - invalid age
