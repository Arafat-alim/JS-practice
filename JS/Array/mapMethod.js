//! Map method

//Find the length of each element
let arr = ["APple", "Mango", "Bean"];

let lenArr = arr.map((elme) => elme.length);
console.log(lenArr); //  Array(3) [ 5, 5, 4 ]

//Find the square root of the given element
let num = [25, 16, 144, 36];
let sqRt = num.map((elem) => Math.sqrt(elem));
console.log(sqRt); // Array(4) [ 5, 4, 12, 6 ]

//get all the prodcuct name from the given array
let products = [
  { pCode: 1, pName: "Apple" },
  { pCode: 1, pName: "Grapes" },
  { pCode: 1, pName: "Mango" },
  { pCode: 1, pName: "Banana" },
  { pCode: 1, pName: "Guava" },
];

let prodDetail = products.map((prod) => prod.pName);
console.log(prodDetail); //Array(5) [ "Apple", "Grapes", "Mango", "Banana", "Guava" ]
