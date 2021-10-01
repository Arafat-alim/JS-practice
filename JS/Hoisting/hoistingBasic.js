// ! What is hoisting? Bringing all the variable to the top but not assign any values.

//! Function scope
console.log(x); //undefined
var x = 10;
// showing undefined

var x = 10;
function a() {
  x = 20;
  console.log(x);
}
console.log(x);
a();

// ! Block scope
console.log(y); // error
let y = 10;

let z = 132;
function b() {
  let z;
  console.log(z); // undefined
}
console.log(z);
b();
