//!Event Propagation - Capturing and Bubbling
// ! Bubbling
var gparent = document.querySelector(".grandParent");
gparent.addEventListener(
  "click",
  () => {
    console.log("Grand Parent");
  },
  false
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
  (e) => {
    console.log("child");
    e.stopPropagation();
  },

  false
);
