// PROTOTYPE
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

var obj1 = new Person("joy");
var obj2 = new Person("Julie");

console.log(obj1.getName()); // joy
console.log(obj1.getName() + " is with " + obj2.getName()); //joy is with Julie
