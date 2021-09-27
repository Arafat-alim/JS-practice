// ! this keyword - strict mode
"use Strict";
// 1) Normal function
function demo1() {
  console.log(this); //undefined
}
demo1();

var fun = function demo2() {
  console.log(this); // undefined
};
fun();

// 2 Object
var obj = {
  name: "Arafat",
  person: function () {
    console.log(this); // point to the curren object that is obj
  },
};
obj.person();
