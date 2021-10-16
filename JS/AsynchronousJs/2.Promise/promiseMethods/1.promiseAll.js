//! Promise chaining ko solve krne k liye promise.all() method

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1");
  }, 2000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2");
  });
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3");
  }, 5000);
});
Promise.all([p1, p2, p3]).then((msg) => {
  console.log(msg); //Array(3) [ "Promise 1", "Promise 2", "Promise 3" ]
}, 2000);

//order or promises is imp
