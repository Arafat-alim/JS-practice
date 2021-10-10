console.log(this); //window object
function go() {
  console.log(this); //window object
}
go();

//object literal
let obj = {
  getName() {
    console.log(this); //this point ot obj
  },
};

let obj2 = {
  getName: function () {
    console.log(this); // this point to the current obj
  },
};

let obj3 = {
  getRock: () => {
    console.log(this); //point to the window  object
  },
};

//! we already have a class for these thing so arrow function dont have such ability to do
