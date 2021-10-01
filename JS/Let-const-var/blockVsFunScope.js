//! what is scope of a variable

/* function a() {
  //! Scope of a variable is limit to a function a only
  //! let x is the local variable of function a
  let x = 10;
}

function b() {
  console.log(x);
}
a();
b();*/ //! error

let x = 10; //global variable
function a() {
  x = x + 5;
}

function b() {
  console.log(x);
}
a();
b(); //15
