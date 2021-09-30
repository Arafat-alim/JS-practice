//! This is the continution of basic.js
//! Here we can create an object using constructor - same as function creation method

function createStudent(name, roll, marks) {
  //   var student = {};
  /*student.name = name;
  student.roll = roll;
  student.marks = marks; */
  this.name = name;
  this.roll = roll;
  this.marks = marks;
  //   return student;
}
// var obj1 = createStudent("Arafat", 1, 78);
var obj1 = new createStudent("Arafat", 12, 98);
console.log(obj1);

// constructor using "new" keyword
