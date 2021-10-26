function x() {
  console.log(arguments);
}
x(123); //0: 123
x(1, 2, 3, 4, 5, 6, 7); //Arguments { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6, 6: 7, … }

//Arrow function rest operator
const arr = (...rest) => {
  console.log(rest);
};
arr(1, 2, 3, 4, 5, 6, 4);

//to find the maxium of an array
let arrMax = [1, 2, 4, 61, 2, 1, 4, 2, 14];
console.log(Math.max(arrMax)); //NaN
console.log(Math.max(...arrMax)); //61

const myObj = {
  myMethod: () => {
    console.log(this); //windows
  },
};
myObj.myMethod();

// IIFE, in arrow function IIAF
(() => {
  console.log("Hello"); //hello
})();

//for of -- gives back elment whereas for ..in gives back the index
let arr2 = [12, 21, 13, 454];
// using for..in
for (let index in arr2) {
  console.log(index);
}

for (let element of arr2) {
  console.log(element);
}

//! Humlg array me bhi iterator use kr skte hai.
let a1 = [1, 2, 3, 47, 45];
let itr = a1[Symbol.iterator]();
console.log(itr);
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());

//Closure
let i = 10;
function outer() {
  console.log("outer");
  let j = 15;
  console.log(i, j);
  var inner = function inner() {
    let k = 20;
    console.log(i, j, k);
  };
  return inner;
}

var inner = outer();
inner();

//hoisting
var x = 10;
function a() {
  x = 20;
  console.log(x);
}
console.log(x);
a();

//factory function
function createObj(arg) {
  let obj = {
    name: "Arafat",
    age: arg,
  };
  return obj;
}
//creating an object
let obj1 = createObj(12);
console.log(obj1);
let obj2 = createObj(21);
console.log(obj2);

//adding and deleting in the object
let obj3 = {
  name: "Aquib",
  getName: function () {
    console.log(this.name);
  },
};
console.log(obj3.getName());

//adding
obj3.age = "21";
console.log(obj3);
//deleting object
delete obj3.name;

// constructor way
function Person() {
  (this.name = "Arafat"), (this.age = 112);
  console.log(this);
}

//creaing an instance
const o1 = new Person();
console.log(o1);

//sort() method
let a2 = [12, 1, 5, 98, 2, 3];

//here double digit found - ascending order
let sorted = a2.sort((a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  if (a === b) {
    return 0;
  }
});
console.log(sorted);

//descending order
let desSAorted = a2.sort((a, b) => {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
  if (a === b) {
    return 0;
  }
});
console.log(desSAorted);

function Home(window) {
  console.log("called ....");
  console.log(this); //pointing to the current object due to new keyword
  this.windows = window; //adding property name and assinging the value
}
var obj = new Home("Win11");
console.log(obj);

//creating a  class
class Men {
  constructor() {
    console.log("constructor called");
    this.name = "Arafat"; //adding values
    this.getName = () => {
      console.log(this.name); //Arafat
    };
  }
  getNin() {
    console.log(this.name);
  }
}
//creaing an object using class
let c1 = new Men();
console.log("new", c1);
// console.log(c1.getName());
console.log("Methods", c1.getNin());

//useStrict mode
function walk(arr, name) {
  //arguement me bhi utna dena hoga jitna array hai q ke array elem ko indiviual string  le rha hai
  console.log(this); //pointing to window

  console.log(typeof arr);
  console.log(name);

  console.log("Helloo user");
}
walk.apply({ city: "Chennai" }, ["I am very much happy", "Arafat"]);

// What is asynchronous task
/* let data;
function fetchData() {
  setTimeout(() => {
    data = {
      pCode: 1001,
      pName: "Arafat",
    };
  });
}

function DisplayData() {
  console.log(data);
  console.log("Ends Here");
}
console.log("Starts Here");
fetchData();
DisplayData();
*/

//how to fix the above code- using cb

/*
function fetchData(cb) {
  setTimeout(() => {
    let data = {
      pCode: 1001,
      pName: "Arafat",
    };
    cb(data); //caling callback  and passing data
  }, 2000);
}

console.log("Starts here");
fetchData(function (data) {
  console.log(data);
  console.log("Ends here");
});
*/
//find square of number
/*
function cSquare(n, cb) {
  setTimeout(() => {
    cb(n * n); //calling a cb function over here
  }, 2000);
}

cSquare(2, function (res) {
  console.log(res);
  //   square of square number
  cSquare(res, function (res1) {
    console.log(res1);
  });
}); */

//Now square of a number using Promise
/*
let cSq = (n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n * n);
    }, 2000);
  });
};
cSq(2).then((res) => console.log(res));
 */
/*
function fetchData(cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = { pCode: 1001, pName: "Arafat" };
      resolve(data);
    }, 2000);
  });
}

console.log("starts Here");
fetchData()
  .then((data) => console.log(data))
  .finally(() => {
    console.log("Ends Here");
  });
*/
/*
let cSq = (n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n * n);
    }, 1000);
  });
};

cSq(2)
  .then((data) => {
    console.log(data);
    return cSq(data);
  })
  .then((data1) => {
    console.log(data1);
    return cSq(data1);
  })
  .then((data2) => {
    console.log(data2);
    return cSq(data2);
  })
  .then((data3) => console.log(data3));
*/
//   await function
// function cSq(n) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(n * n);
//     }, 2000);
//   });
// }

//async await
// async function showRes() {
//   let res = await cSq(2);
//   console.log(res);
// }
// showRes(); //4
// (async function showRes() {
//   let res = await cSq(2);
//   console.log(res);
//   let res1 = await cSq(res);
//   console.log(res1);
//   let res2 = await cSq(res1);
//   console.log(res2);
// })();

/* null.toString(); //Error - type Error
undefined.toString(); //Error - type Error
 */
//console.log(String(null)); //null
//console.log(String(undefined)); //undefined

let cSq = (n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n * n);
    }, 2000);
  });
};

//using promise way
// cSq(4)
//   .then((res) => {
//     console.log(res);
//     return cSq(res);
//   })
//   .then((res1) => {
//     console.log(res1);
//     return cSq(res1);
//   })
//   .then((res2) => {
//     console.log(res2);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Completed");
//   });

// using asyn await
async function showRes() {
  let ans = await cSq(4);
  console.log(ans);
}
showRes();
//! IIFE
// (async function showRes() {
//   let ans = await cSq(4);
//   console.log(ans);
//   let ans1 = await cSq(ans);
//   console.log(ans1);
//   let ans2 = await cSq(ans1);
//   console.log(ans2);
//   let ans3 = await cSq(ans2);
//   console.log(ans3);
// })();
