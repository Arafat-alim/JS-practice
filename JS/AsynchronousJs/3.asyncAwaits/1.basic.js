//! async /await
//! normal function return undefined if we dont return anything
function test() {}
const fn = test();

console.log(fn); //undefined

//! now using with async
async function test1() {}
const fn1 = test1();
console.log(fn1); //Promise { <state>: "fulfilled", <value>: undefined }

//! now getting with Promise value if we return async function

async function test2() {
  return 0;
}
let fn2 = test2();
// console.log(fn2); /Promise { <state>: "fulfilled", <value>: 0 }

//! getting reject in async function

async function test3() {
  throw new Error("Error Mila boss");
}

let fn3 = test3();
console.log(fn3); //Uncaught (in promise) Error: Error Mila bos
