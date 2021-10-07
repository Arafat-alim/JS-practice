let str = "Hello World";
console.log(str.slice(-5, -2)); // Wor

let str1 = "THis is a test";
console.log(str1.substring(-5)); //THis is a test

let str2 = "This is a test";
// console.log(str2.substring(3, 3)); //empty string
console.log(str2.slice(3, 3)); //empty string
//! both slice and substring() give nothing

//charAt()
str2 = "This is a test";
console.log(str2.charAt()); //t
