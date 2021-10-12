//function object destructuring

function test() {
  let obj = {
    pCode: 1001,
    pName: "Apple",
  };
  return obj;
}
let { pCode, pName } = test(); //array me bhi same hoga
