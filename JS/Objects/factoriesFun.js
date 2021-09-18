// ! Two ways to create an object - Factories function and construction function
// factory Function
function createCircle() {
  let circle = {
    name: "Arafat",
    location: {
      address: "india",
    },
    draw: function () {
      console.log("Draw");
    },
    create() {
      console.log("Creating a circle");
    },
  };
  return circle; // important to return
}

let circle1 = createCircle(); //create many object as we want
let circle2 = createCircle();
console.log(circle1);

// ! ***Please watch out atleast once to factoryFunArg.js - more deep
