//! Finally block with try...catch...finally
let a = 8;

try {
  if (a < 18) {
    throw new TypeError("invalid Age");
  } else {
    console.log("valid age");
  }
} catch (err) {
  console.log(err.name);
  console.log(err.message);
} finally {
  console.log("Finally code");
}
//! TypeError is a js error so we got both the name and message.
//! output  -
// TypeError
// invalid Age
// Finally code
