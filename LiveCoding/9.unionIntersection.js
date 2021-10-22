let arrOne = [1, 2, 3, 7, 5, 6, 9];
let arrTwo = [1, 2, 3, 12, 32, 15];

//! Intersection - take common from two arrays
let intersection = arrOne.filter((v) => {
  return arrTwo.includes(v);
});

console.log(intersection); //! Array(3) [ 1, 2, 3 ]

//! Union - merge the array without repeatation
//! Not Repeated
let union = [...arrOne, ...arrTwo];
console.log(union); //not repeated

let union2 = [...new Set([...arrOne, ...arrTwo])];
//! set is called unique value collection
console.log(union2); //! Array(10) [ 1, 2, 3, 7, 5, 6, 9, 12, 32, 15 ]
