//! searching element using find(), findIndex() and filter()

let salary = [400, 200, 3600, 4000];

//!find() - return only single value
// let val = arrName.find((elemSearch, index, arr, thisArg) => {});
// find salary getting less than 2000
let val = salary.find((element) => {
  return element < 2000;
});
console.log(val); //400

//! findIndex() - return single index number
//let val = arrName.findIndex((elemSearch, index, arr, thisArg) => {});
let indexVal = salary.findIndex((element) => {
  return element > 2000;
});

console.log(indexVal); //2

//! filter() - best it return an array
// let val = arrName.filter((elemSearch, index, arr, thisArg) => {});
let values = salary.filter((elem) => {
  return elem < 2000;
});
console.log(values); //Array [ 400, 200 ]
