//! Get  a number
//! Display output
//! 1st Method With using a Flag
let n = parseInt(prompt("Enter a number - "));
let isPrime = true;
for (let cnt = 2; cnt < n / 2; cnt++) {
  //! optimised form
  if (n === 1) {
    isPrime = false;
    break;
  } else if (n % cnt === 0) {
    isPrime = false;
    break;
  }
}
if (isPrime) {
  console.log(`${n} is a Prime Number`);
} else {
  console.log(`${n} is not a Prime Number`);
}
