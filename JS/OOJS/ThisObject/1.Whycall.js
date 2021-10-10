//! Why we use or need of  call, apply ond bind method

function test(obj) {
  console.log(obj);
  //! this=obj; //syntax errror aise nahi kar skte hai
  console.log(this); //still poiting to window object
}

let obj = {
  a: "Apple",
};

test(obj);

//! Thats why we need a call method to fix this

function name(a, b) {
  console.log(this); // Object { naming: "Arafat" }
  console.log(this.naming, a, b); //Arafat 5 7
}

let obj1 = {
  naming: "Arafat",
};

name.call(obj1, 5, 7);
