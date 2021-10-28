//! Q.1
/* function foo() {
  let a = (b = 0);
  a++;
  return a;
}
console.log(typeof a); //undefined
console.log(typeof b); // 0 (b becomes a global variable) */

//! Q.2
/*  const clothes = ["jacket", "Sweater"];
clothes.length = 0;
console.log(clothes); //[] empty array */

//! Q.3
/*  for (let i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
} */
//ouput - 0 1 3
//! Due to different i in memory we got three different value of i

//! Q.3
/*  for (var i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
} */
//ouput - 3 run for 3times
//! First run forloop and then run setTImeout

//! Q.4

/*  for (var i = 0; i < 3; i++) {
  (function (y) {
    const log = () => {
      console.log(y);
    };
    setTimeout(log, 100);
  })(i);
} */
//ouput - 0 1 3

//! Q.5
/*
var a = 10;
function a() {
  console.log("20");
}
a(); //Type error ; a is not a function */

//! Q.6
/* let a = [1, 2, 3, 4];
console.log(...[1, 2, 3, 4]); // spread operator
console.log(...a); //using spread operator - 1 2 3 4 */

//! Q. 7
/* const myPromise = (a) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise Resolve"); //Promise Resolve
      resolve(a);
    }, 2000);
  });
};
myPromise("123").then((val) => {
  console.log("My Promise got resolved", val); //My Promise got resolved 123
});
*/
//! Q. 8
/* let myFun = (function () {
  let a = 10;
  return function () {
    return a;
  };
})();

console.log(myFun());*/ //10

//! Q. 9

/* let a = { name: "Arafat" };
let b = Object.create(a); //object ke andar ek or ek object
delete b.name; //delete to kar rhe hai but inherit kar rha h wo a se isliye show ho raha hai

console.log(b.name); */ //Arafat

//! Q. 10
/* console.log(1 + true); //2
console.log(1 + undefined); //NaN
console.log(1 + "one"); //1one */

//! Q. 11
/* let a = []; //standard array
a.foo = 12; //associate array
console.log(a.length); // 0 -> standard array
console.log(a.foo); */ //12 => Associative array

//! Q. 12
var a = 10;
b(21);
function b(x) {
  a(20);
  a = 50;
  function a() {
    console.log("Inside Fun call - ", x);
  }
  console.log("After function call - ", a);
}
console.log(a);
//! output
/* Inside Fun call -  21 
After function call -  50 
10 */
