//! using spread we can change the object into an array, because genFunction return an iterable object

const genFunction = function* () {
  console.log("hello");
  yield "yield Value"; //Here pause the function
  console.log("World");
  yield;
  console.log("Galaxy");
};
const gObj = [...genFunction()];
console.log(gObj);
// ! Output
// hello;
// World;
// Galaxy;
// Array[("yield Value", undefined)];
