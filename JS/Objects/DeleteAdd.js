//! ADDING AND DELETING THE METHOD AND PROPERTY FROM THE OBJECT
const object = {
  radius: 10,
};
console.log(object);

// Adding a property
object.location = 1;
// Adding a method
object.getname = function () {
  console.log("getting cool");
};
console.log(object);

// Deleting a property
delete object.location;
// Deleting a Method
delete object.getname;

console.log(object);
