//tryCatch can fixed the compile time error
try {
  let a = 10;
  console.log(`value of a - ${a}`);
  letb = 50;
  console.log(`value of b - ${b}`);
} catch (err) {
  console.log("error");
}
// //output
// value of a - 10
// tryCatch.js:8 error
