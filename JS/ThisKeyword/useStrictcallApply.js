//! "this" keyword - using call, apply

"use Strict";

// 1) Normal function
function demo1() {
  console.log(this); //undefined
}
demo1();

var fun = function demo2(a, b) {
  console.log(this); // undefined
  console.log(a, b); //1, 2
};
fun();

// 2 Object
var obj = {
  name: "Arafat",
  person: function () {
    console.log(this); // point to the current object that is obj
  },
};
obj.person();

demo1.call(window); // now it point to window object
demo1.call(obj); // now it is poitinh to obj
fun.call(obj, 1, 2); //passing an arguement, pointing to an object obj
fun.apply(obj, [1, 5]); //passing an array using apply method

syntax;
fun.call / bind({}, values);
