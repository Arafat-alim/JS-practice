//! creating an object using prototype

const proto = Object.defineProperty({}, "pCode", {
  writable: false,
  configurable: true,
  value: 1001,
});
// ! creating an objec
const obj = Object.create(proto);
obj.pCode = 30000;
console.log(obj); //pCode
console.log(obj.pCode); //Object { pCode: 1001 }
