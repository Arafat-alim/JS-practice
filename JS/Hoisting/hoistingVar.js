//  "use strict";
// man(); //hoisting supported
// // function declaration -
// function man() {
//   demo = 0;
//   console.log(demo);
// }

// function expression

const fun = function () {
  console.log(demo);
  demo = 100;
  console.log(demo);
};
fun();
