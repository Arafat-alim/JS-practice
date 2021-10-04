//tryCatch can fixed the compile time error
try {
  let a = 10;
  console.log(`value of a - ${a}`);
  letb = 50;
  console.log(`value of b - ${b}`);
} catch (err) {
  console.log("error");
  console.log("Error name - ", err.name);
  console.log("Error msg - ", err.message);
  console.log("Error Stack - ", err.stack);
}

//  ! output
// value of a - 10
// tryCatch2.js:8 error
// tryCatch2.js:9 Error name -  ReferenceError
// tryCatch2.js:10 Error msg -  b is not defined
// tryCatch2.js:11 Error Type -  ReferenceError: b is not defined
//     at http://127.0.0.1:5500/JS/ErrorHandling/tryCatch2.js:6:31
