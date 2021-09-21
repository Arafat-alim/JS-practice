//! 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …

//! wrting a code fibonacci
function fib(n) {
  if (n <= 2) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

console.log(fib(20));

// fib(n-1) = first number = 0
// fib(n-2) = second number = 1
