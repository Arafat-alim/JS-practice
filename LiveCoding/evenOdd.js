//! Even/odd without using modulo operator
function isEven(n) {
  return parseInt(n / 2, 10) * 2 == n;
  //   parseInt(10/2, 10) = 5
  //   5 * 2 = 10 == 10
}

isEven(11888888) ? console.log("Even") : console.log("Odd");
console.log(isEven(10));
