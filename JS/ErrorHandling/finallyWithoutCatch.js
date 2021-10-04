//! Finally block without having catch block
let a = 8;

try {
  if (a < 18) {
    // throw new TypeError("invalid Age");
  } else {
    console.log("valid age");
  }
} finally {
  console.log("Finally code");
}

//jab bhi error counter hoga wo finally block ko invoked karega

//! output - Finally code
