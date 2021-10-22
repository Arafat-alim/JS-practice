//! Get a number from the user
//! Display factorial

let n = prompt("Enter a number - ");
let factorial = 1;
for (; n >= 1; n--) {
  factorial = factorial * n;
}
console.log("Factorial - ", factorial); //! Factorial -  24
