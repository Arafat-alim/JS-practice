//function object destructuring
//default value
function test() {
  let obj = {
    // pCode: 1001,
    pName: "Apple",
  };
  return obj;
}
let { pCode = 0, pName } = test(); //array me bhi same hoga
console.log(pCode, pName); //0 Apple
