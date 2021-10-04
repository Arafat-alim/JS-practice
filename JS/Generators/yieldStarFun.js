// ! Yield star basic
function* gen() {
  console.log("Hi");
}
/* function* gen2() {
  const g = gen();
  g.next();
} */

function* gen2() {
  yield* gen(); //yieldstar yaha pe call kr rhe hai .
}
//caling the function
const g1 = gen2();
g1.next(); //Hi
//! We need to move the function pointer using the next() method.

// yield keyword does not allow to call outside the generator function but yield* can allow us to call it outside/another  generator function
