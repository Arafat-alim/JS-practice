function cSq(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n * n);
    }, 2000);
  });
}

/* let res = await cSqr(2);
console.log(res);*/ //!await is only valid in async functions
//! 1st method
async function showRes() {
  let res = await cSq(2);
  console.log(res);
}

showRes(); //4

//! 2nd method

(async function show() {
  let res = await cSq(4);
  console.log(res); //16
})();

//! want res ka bhi square
(async function showing() {
  let res = await cSq(5);
  console.log(res); //25
  let res1 = await cSq(res); //625
  console.log(res1);
  let res2 = await cSq(res1); //390625
  console.log(res2);
})();
