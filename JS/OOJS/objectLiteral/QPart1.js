//! codes
let obj = { a: "first" };
let obj1 = obj;
console.log(obj1); //address pointed to the same obj
obj1.a = "Second";
console.log(obj.a); //Yes it will updated the value
//! Output - second

//! Clone of an object

let objOld = { a: "Pehla" };
let objNew = Object.assign({}, objOld);
console.log(objNew); //"Pehla"
objNew.a = "Google";
console.log(objNew); //"google"
console.log(objOld); //pehla
