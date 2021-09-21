function* gen() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

// calling my function
const fun = gen(); // return a generator object
console.log(fun.next()); //value: 1 done: false
console.log(fun.next()); //value: 2 done: false
console.log(fun.next()); //value: 3 done: false
console.log(fun.next()); //value: 4 done: false
console.log(fun.next()); //value: undefined done: true
