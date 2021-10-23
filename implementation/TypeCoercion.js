console.log(1 + 1); //2 - number
console.log(1 + "1"); // "11" = concat
console.log("1" + "1"); // "11" = concat

let obj = {
  a: "foo",
};
console.log(obj + 1); // [object object]1 = concat
//Array
console.log([1] + [1]); // "11" = concat
console.log([1] + ""); // "1" = concat
console.log([1] - [1]); // 0 - number
console.log([3, 1] + [1, 2]); // "3,11,2" = concat
console.log([3, 1] - [4, 1]); // NaN (string - string)
console.log(1 + +"1"); // 2 - number - including space
console.log("1" + +"1"); //11 - concat
console.log(-"1" + +"1"); //0 - number

console.log(1 + -+(+(+-+-(-"1")))); //right to left - 2 number

//! Falsy - 0, NaN, undefined, null, "". -0, +0
if (+0) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

console.log(false == 0); //true
console.log(false === 0); //false
console.log(false == NaN); //false
console.log(false === NaN); //false
console.log(NaN == NaN); //false not equal to anyone but itself only

const a = {
  x: "hello",
};

const b = {
  y: "hello",
};

console.log(a == b); //false - because both the object are pointing different memeory location

const c = {
  z: "Magg",
};
const d = {
  z: "Magg",
};
const e = c;
//left hand side reference and right hand side memory location
console.log(c == e); //true
console.log(e); // Object { z: "Magg" }
