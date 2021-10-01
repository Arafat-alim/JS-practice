//! ALl in one NaN concept is here.
let a = 10;
let b = "10";

let ans = a * b;
console.log(ans); // NaN

//! valdiating the nan using isNaN()method

if (!isNaN(a * b)) {
  console.log("Valid");
} else {
  console.log("InValid");
}

//! valdiating the nan, infinity or regular expression
console.log(isFinite(a * b)); //TRUE
console.log(isFinite(Number.POSITIVE_INFINITY)); //FALSE
console.log(isFinite(Number.NEGATIVE_INFINITY)); //FALSE
console.log(isFinite(Number.MAX_VALUE * 2)); //FALSE
console.log(isFinite(9e400)); //FALSE
console.log(isFinite(-9e400)); //FALSE
console.log(isFinite(Infinity)); //FALSE
console.log(NaN == NaN); //false
console.log(NaN === NaN); //false
