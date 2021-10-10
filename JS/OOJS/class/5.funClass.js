//! Here we are using constructor function acts as a class
function Home(window) {
  console.log("called ....");
  console.log(this); //pointing to the current object due to new keyword
  this.windows = window;
}
var obj = new Home("Win11");
console.log(obj);

//new and function name acts as a class
