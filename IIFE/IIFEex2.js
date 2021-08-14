//! IIFE example 2
var a = (function () {
  console.log("hello");
  return typeof arguments;
})(); //it will stop the function to run

console.log(a); //output will be the Object
