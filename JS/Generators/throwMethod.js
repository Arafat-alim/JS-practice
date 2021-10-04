//! Throw method throws an exception at the location of yield which made the last suspension in the generator function

//! if/else statement is not satisfying then there we can use this throw method as an error

function* gen() {
  try {
    yield "One";
    yield "Two ";
  } catch (err) {
    console.log("Error: ", err);
  }
}
const gObj = gen();
console.log(gObj.next());
console.log(gObj.throw());
//! Output
// {value: 'One', done: false}
// Error:  undefined
// {value: undefined, done: true}
