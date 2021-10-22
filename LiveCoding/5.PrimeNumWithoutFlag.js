//! Get  a number
//! Display output
//! 1st Method Without using a Flag
let n = parseInt(prompt("Enter a number - "));

for (let cnt = 2; cnt < n; cnt++) {
  if (n % cnt == 0) {
    console.log("Not a Prime Number");
  } else {
    console.log("Prime Number");
  }
}
