//! Array of object
let arr = [
  { pId: 1, pName: "Apple", pPrice: 400 },
  { pId: 2, pName: "Banana", pPrice: 100 },
  { pId: 3, pName: "Guava", pPrice: 150 },
];
//accessing
console.log(arr);
console.log(arr[0]);
console.log(arr[1].pId);
console.log(arr[2].pName);
console.log(arr[2].pPrice);

//! output
// (3) [{…}, {…}, {…}]0: {pId: 1, pName: 'Apple', pPrice: 400}1:
// {pId: 2, pName: 'Banana', pPrice: 100}2: {pId: 3, pName: 'Guava', pPrice: 150}length: 3[[Prototype]]: Array(0)
// arrayOfObj.js:9 {pId: 1, pName: 'Apple', pPrice: 400}pId: 1pName: "Apple"pPrice: 400[[Prototype]]: Object
// 2
// Guava
// 150
