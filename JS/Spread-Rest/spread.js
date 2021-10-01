let arr1 = [1, 2, 3, 4, 5];
let arr2 = [...arr1, 6.7, 8];

console.log(arr2); //Array(7) [ 1, 2, 3, 4, 5, 6.7, 8 ]

// ! want to find out the max of array
let arrmax = [54, 67, 4451, 44, 554, 1564, 79859];

console.log(Math.max(arrmax)); //NaN
console.log(Math.max(...arrmax)); //79859
