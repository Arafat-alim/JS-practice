//INstread of creating an object, we can directly use the theow statement

//! creating a TypeError
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
}
//! TypeError is a js error so we got both the name and message.
//! output  -
// TypeError
// throw3.js:14 invalid Age
