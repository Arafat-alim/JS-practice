//! let is a scope  or block statement or expression variable
let counter = 1;
function count() {
  counter = 2;
  console.log("Value is -", counter); // 2
}
console.log("Value is -", counter); //1

count();
