//basics syntax
/* let obj = {
  pCode,
  pName,
  price,
};
function product(obj) {} */

let obj = {}; //object literal created

obj.pCOde = 1001; //properties
obj.pName = "Apple"; //properties
obj.getData = function () {
  //methods
  console.log(obj.pCOde, obj.pName);
};
console.log(obj);

//object MOre Basic and right way
let obj1 = {
  pCOde: { id: 1, sp: "ABC" }, //properties
  pName: "Apple", //properties
  getData() {
    //methods
    console.log(obj1.pCOde, obj1.pName);
  },
};

console.log(obj1);
obj1.getData();
