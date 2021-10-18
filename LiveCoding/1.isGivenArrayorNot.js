//! Array or not
let arr = [1, 2, 3, 4, 5];
// let arr = "test";

//! using typeof operator
console.log(typeof arr); // we cant do with typeof - object only

//! Using toString.call() method
console.log(Object.prototype.toString.call(arr));

if (toString.call(arr) === "[object Array]") {
  console.log("true");
} else {
  console.log("false");
}
