//! Without any string function only arithmatic operations.
let n = parseInt(prompt("Enter a Number - "));

let rev = 0;
let rem = 0;

while (n > 0) {
  rem = n % 10;
  rev = rev * 10 + rem;
  n = parseInt(n / 10);
}

console.log(rev);
