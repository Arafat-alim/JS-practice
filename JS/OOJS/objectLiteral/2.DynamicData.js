let tv = "pCode";
let obj = {
  [tv]: 1000, //dynamic
  pName: "Apple",
  ["get" + "Data"]() {
    //dynamic
    console.log(obj.pCode, obj.pName);
  },
};

console.log(obj);
obj.getData(); // 1000 Apple
