const obj = {
  pCode: 1001,
  pName: "Apple",
};

// let pCode = obj.pCode;
// let pName = obj.pName;
// console.log(pCode, pName); //1001 Apple

// now object desturcturing
let { pCode, pName } = obj;
console.log(pCode, pName); //1001, Apple
