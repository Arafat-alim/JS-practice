//! Implementation Question on constructor
// ! Sloppy mode
function Student(name, marks, roll) {
  this.name = name;
  this.marks = marks;
  this.roll = roll;
  //   console.log(this); //"this" is pointing to the sloppy mode
}
// var obj1 = new Student("Aquib", 12, 98);
// console.log(obj1);
// var obj2 = new Student("Arafat", 12, 98);
// console.log(obj2);
var obj2 = Student("Arafat", 1, 78);
console.log(obj1); //undefined

//! Strict mode - not print anything****
("use Strict");
function Student2(name, marks, roll) {
  console.log(this);
  this.name = name;
  this.marks = marks;
  this.roll = roll;
  console.log(this); //"this" is pointing to the sloppy mode
}

var obj3 = Student("Arafat", 1, 78);
console.log(obj3); //! not print anything****

// more implmentation go to constructo3.js
