let limit = parseInt(prompt("Enter a number - "));
let a = 0;
let b = 1;
let fn = a + b;
console.log(a);

do {
  console.log(fn);
  fn = a + b;
  a = b;
  b = fn;
} while (fn < limit);
