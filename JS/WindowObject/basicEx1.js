// ! window object - var is resposible for creating a function or variable in a window object

var key = 1; //global scope
function keyVal() {
  key1 = 2; //function scope
  console.log(key1);
}

console.log(key);
console.log(window.key);
console.log(window.keyVal());
