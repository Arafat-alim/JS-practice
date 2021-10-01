// ! normal function
function sum(...numbs) {
  console.log(numbs);
}

sum(1, 2, 3, 45, 6, 4, 8); //Array(7) [ 1, 2, 3, 45, 6, 4, 8 ]

function sum1(a, ...nums) {
  console.log(a);
  console.log(nums);
}

sum1(1, 2, 3, 45, 476, 7);
// //! Output
// 1;
// Array(5)[(2, 3, 45, 476, 7)];

//! arrow function
const sum2 = (...nums) => {
  console.log(nums);
};
sum2(1, 3, 4, 6, 4, 78, 9); //Array(7) [ 1, 3, 4, 6, 4, 78, 9 ]
