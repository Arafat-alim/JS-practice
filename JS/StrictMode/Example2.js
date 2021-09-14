//! Write this at the top of the whole script to apply strict mode globally.
//! Or write it inside functions to apply it to a particular function only.
// "use strict"; // globally strict mode
var box = document.getElementById("box");
var clickCount = document.getElementById("click-count");
count = 0; //removing var -> global variable
box.addEventListener("click", () => {
  "use strict";
  count++;
  demo = 100; // global variable
  clickCount.innerHTML = `${count}`;
});
