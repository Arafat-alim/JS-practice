//! ForEach - it has callback function which contains 4 parameters but if we use arrow function then only three parameter can have (last one you know this keyword, which arrow function wont support)

let arr = ["arafat", "Aquib", "Ali"];

arr.forEach((elem, index) => {
  console.log(elem, index);
});

//output -
// arafat 0
// forEach.js:6 Aquib 1
// forEach.js:6 Ali 2

// Important it wont support break statment****
