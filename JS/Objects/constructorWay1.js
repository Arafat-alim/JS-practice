// ! There are two way to create an object - 1) Factory Function and 2) Constructor
//! 2) Constructor

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw my Circle");
  };
}

// creating an instance of my circle object
const c1 = new Circle(1);

console.log(c1);
