//! Promise chaining ko solve krne k liye promise.all() method

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1");
  }, 2000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 2");
  });
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3");
  }, 5000);
});
Promise.all([p1, p2, p3])
  .then((msg) => {
    console.log(msg);
  })
  .catch((msg) => {
    console.log(msg); //Promise 2
  });

//order of promises is imp
