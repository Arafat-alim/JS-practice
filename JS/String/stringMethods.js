// //! How do you check if a string starts with another string?
// let strng = "good Morning!";

// console.log(strng.startsWith("good")); // true
// console.log(strng.startsWith("Morning")); //false
// console.log(strng.startsWith("Good")); //false "case sensitive"

// //! String.prototype.trim()
// let strng2 = "hello world";
// let trimmed = strng2.trim();
// console.log(trimmed);

// //! Multi Line string
// let str = "hello everyone \
// how are you? \
// i hope you are fine?";
// console.log(str);

// // ! How do you trim a string at the beginning or ending
// let strng3 = "    hello Boss    ";
// console.log(strng3);
// console.log(strng3.trimStart()); //hello Boss   "
// console.log(strng3.trimLeft()); //hello Boss    "

// console.log(strng3.trimEnd()); //"    hello Boss"
// console.log(strng3.trimRight()); //"    hello Boss";

// ! Q. How do you check whether a string contains a substring - 3 ways to do this
//! 1st way - string.prototype.includes()
let mainstring = "hello Everyone!",
  substring = "hell";

let ans = mainstring.includes(substring);
console.log(ans); // true

//! 2nd way - Array.prototype.indexOf()
let string = "hello boss!",
  subString = "hell";

let ans1 = string.indexOf(subString);
console.log(ans1); // 0 means true

// ! Q. Slice Methods
let arr = [];
