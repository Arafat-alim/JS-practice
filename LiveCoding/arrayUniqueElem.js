// find the unique element into a new array and i a single line
let arr = [1, 2, 2, 2, 3, 4, 3, 4, 5, 46, 7, 8, 7, 9];

// ! let unique = new Set(arr); //return a set array
//! Here i want a simple array not a set array
let unique = [...new Set(arr)]; //using spread operator
console.log(unique); //! Array(9)[(1, 2, 3, 4, 5, 46, 7, 8, 9)];
console.log(arr);
