//! palindrome without using string method

let n = parseInt(prompt("Enter a number"));
let oldValue = n;
let rev = 0;
let rem = 0;

while (n > 0) {
  rem = n % 10;
  rev = rev * 10 + rem;
  n = parseInt(n / 10);
}

if (oldValue === rev) {
  console.log("Palindrome hai mamu");
} else {
  console.log("Shit man");
}
console.log(rev);
