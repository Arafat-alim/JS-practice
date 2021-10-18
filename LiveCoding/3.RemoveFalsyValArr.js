//! Removing the falsy value from my array

let arr = [false, 0, 90, undefined, "", true, "Hi"];

/* arr.filter((ele, i) => {
  if (ele) {
    //true
    console.log(ele);
  }
});
//! Output
90;
true;
Hi; */
let nArr = arr.filter((e, i) => {
  return e;
});
console.log(nArr); //(3) [90, true, 'Hi']
