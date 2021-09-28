//! very basic

// in js we can create an object directly

let person1 = {
  name: "Arafat",
  role: "developers",
  salary: "20k",
};
// calling an object
console.log(person1);

//!  creating an object usigng function - teen way hai - but single hee bolenge
// 1)
function creatingStudent(name, rol, marks) {
  var student1 = {};

  (student1.name = name), (student1.rol = rol), (student1.marks = marks);

  return student1;
}

var obj1 = creatingStudent("Aquib", 27, 45);
console.log(obj1);
//2)
function createStudent(name, rol, marks) {
  var student = {
    this.student = name,
    this.rol,
    this.marks,
  };
}
var obj2 = createStudent("Ahmed", 45, 98);
console.log(obj2);
