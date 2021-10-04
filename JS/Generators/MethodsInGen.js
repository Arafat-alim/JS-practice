//Generator function also have two more method - return() and throw()

// return(),more or less is similiar to next() method
// return() method returns {value: val, done: true}
// return() is used to terminate the generator
//! return()
function* gen() {
  yield "one";
  yield "two";
}
const gObj = gen();
console.log(gObj.next());
console.log(gObj.return("Yahi pe final hai bhai")); //! terminate the generator
console.log(gObj.next());

//! Output
// {value: 'one', done: false}
// {value: 'Yahi pe final hai bhai', done: true}
// {value: undefined, done: true}

//return method jaha agya wahi pe generator ruk jyga bhale next agey ho ya nh ho.
