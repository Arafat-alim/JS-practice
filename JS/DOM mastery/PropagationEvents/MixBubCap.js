//Event Propagation - Capturing and Bubbling
// ! capturing
var gparent = document.querySelector(".grandParent");
gparent.addEventListener(
  "click",
  () => {
    console.log("Grand Parent");
  },
  true
);

var parent = document.querySelector(".parent");
parent.addEventListener(
  "click",
  () => {
    console.log("Parent");
  },
  false
);

var child = document.querySelector(".child");
child.addEventListener(
  "click",
  () => {
    console.log("child");
  },
  true
);
