//! String method VS ().toString

console.log("String method VS ().toString");
// ! String
console.log(String(13)); //13
console.log(String(true)); // true
console.log(String(undefined)); // undefined
console.log(String(null)); // null
console.log(String("")); // empty string
console.log(String([1, 2.3, 4, 5])); // 1, 2.3, 4,5
console.log(String({ obj: 123 })); // object object
console.log(String("String End")); // string end

// ! .toString
console.log("----------------.toString--------------------");
console.log((13).toString());
console.log(true.toString());
console.log(false.toString());
//console.log(undefined.toString()); //!Type Error
//console.log(null.toString()); //! Type Error
console.log("".toString()); // empty string
console.log([1, 2, 3].toString()); //1,2,3
console.log({ obj: 123 }.toString()); // object object
