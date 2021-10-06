//!sorting string in ascending order
//! no need of comparing function
let stng = ["one", "two", "Five", "Ten"];

// console.log(stng.sort()); /[ "Five", "Ten", "one", "two" ]
//! if we want my string into an descending order then we have to use compare funciton
stng.sort((a, b) => {
  console.log(a, b);
});

//output
// one two
// two Five .
// Five Ten

//! Decending order
let descending = stng.sort((a, b) => {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
  if ((a = b)) {
    return 0;
  }
});
console.log(descending); //Array(4) [ "two", "one", "Ten", "Five" ]
