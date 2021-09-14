// Global variable - declare outside the function
msg = "hello";
document.write(msg);
console.log(msg);

var hel = "Bingo";
console.log(hel);
// !local variable
function local() {
  var name = "Arafat"; //local variable
  return name;
}
name = "Ahmed"; // global variable
var name = "King";
console.log(local());
