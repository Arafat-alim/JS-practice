//! indexOf() and LastIndexOf()
let str = "This is a test";
console.log(str.indexOf("is", 5)); //start searching from 5index from left to right
console.log(str.lastIndexOf("is", 4)); // start searching from index 4 from right to left

// ! search()
let str1 = "This is a test";
console.log(str.search("is")); //2

//What will be the output
let string = "this is a test";
console.log(string.indexOf("is", 5)); // 5 searching from 5 position
console.log(string.lastIndexOf("is", 1)); // -1 - searching from 1st index and move to the left direction so it cannot find
