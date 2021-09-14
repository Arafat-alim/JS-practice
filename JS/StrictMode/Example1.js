//! In this code all the variable can be access without declaring var types
// var box = document.getElementById("box");
// var clickCount = document.getElementById("click-count");
// count = 0; //removing var -> global variable
// box.addEventListener("click", () => {
//   count++;
//   demo = 100; // global variable
//   clickCount.innerHTML = `${count}`;
// });
//! Here i am using "use Strict" to avoid such things - error got
"use strict"; // global strict mode
var box = document.getElementById("box");
var clickCount = document.getElementById("click-count");
count = 0; //removing var -> global variable
box.addEventListener("click", () => {
  count++;
  demo = 100; // global variable
  clickCount.innerHTML = `${count}`;
});
