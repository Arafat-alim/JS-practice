//! There are so many ways to search the element in an array -

let arr = ["one", "two", "one", "three", "four", "one", "Three", "Five"];

//! indexOf() - searching from left to right
console.log(arr.indexOf("three")); // return the index number of find element - 3
console.log(arr.indexOf("one", 1)); // 2
console.log(arr.indexOf("One")); //  case sensitive = -1
//! return single value
//! if we no element found then it return -1

//! lastIndexOf() - searching from right to left
console.log(arr.lastIndexOf("one")); //5
console.log(arr.lastIndexOf("one", 3)); //2
//! return single value
//!same as indexOf() just start searching from right to left

//! includes() - if element found then it return boolean value
//! return single value
console.log(arr.includes("one")); //true
console.log(arr.includes("Abcd")); //false
