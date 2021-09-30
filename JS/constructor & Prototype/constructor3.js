// ! One more example
function User(name) {
  this.name = name;
  this.isPresent = false;
  return;
}

var obj1 = new User("Akram");
console.log(obj1);
//! Object { name: "Akram", isPresent: false }

//! Dimag ka dahi
var obj = {};
function A() {
  return obj;
}

function B() {
  return obj;
}

console.log(new A() == new B()); //! True
