// currying function

// Normal
function sum(a, b, c) {
  return a + b + c;
}

let add = sum(10, 24, 32);
console.log(add);

// Curryinh way
function currysum(f) {
  return function (a) {
    return function (b) {
      return function (c) {
        return f(a, b, c);
      };
    };
  };
}

let currying = currysum(sum);
console.log(currying(1)(2)(3)); //6
