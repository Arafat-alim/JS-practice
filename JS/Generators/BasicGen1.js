//Marathon Js
const genFunction = function* () {
  console.log("hello");
  yield "yield Value"; //Here pause the function
  console.log("World");
  yield;
  console.log("Galaxy");
};
// call the function
const gObj = genFunction(); //it return the generator object
console.log(gObj); //Generator {  }
//! now we called the next() -  it will start the execution till the yield operator
//YIeld itself capable of returning any value
gObj.next(); //"Hello"
// next() returns an object which have two keys.
// 1. The Value
// 2. Boolean (Shows next Status)
// console.log(o); //{value: undefined, done: false}
// console.log(gObj.next());
// console.log(gObj.next());

//! Generator are iterable - means we can print the value using for..of loop

for (let ob of gObj) {
  console.log(ob);
}
