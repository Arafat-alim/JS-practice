//! numeric value sorted.
//without compare function
let arr = [4, 6, 1, 2, 36, 8, 4];

//ascending order
console.log(arr.sort()); //[ 1, 2, 36, 4, 4, 6, 8 ]

// so you can see the ascending order not correct on double digit
//using compare funciton
let asc = arr.sort((a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  if (a === b) {
    return 0;
  }
});
console.log(asc); //Array(7) [ 1, 2, 4, 4, 6, 8, 36 ]

//descenging order
let des = arr.sort((a, b) => {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
  if (a === b) {
    return 0;
  }
});

console.log(des); //Array(7)[(36, 8, 6, 4, 4, 2, 1)];
