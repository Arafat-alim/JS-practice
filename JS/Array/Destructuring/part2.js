//! Destructuring - Rest Operator
let arr = [4, 5, 6];

let [a, ...b] = arr;

console.log(a, b); //4 Array [ 5, 6 ]

//undefined value
let arr2 = [7];
let [c, d] = arr2;
console.log(c, d); //7 undefined

//defautl value
let arr3 = [10];
let [e, f = 102] = arr3;
console.log(e, f); //10 102

let arr4 = [10, 1];
let [g, h = 102] = arr4;
console.log(g, h); //10 1
