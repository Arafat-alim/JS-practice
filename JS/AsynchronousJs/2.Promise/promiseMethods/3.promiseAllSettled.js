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
Promise.allSettled([p1, p2, p3])
  .then((msg) => {
    console.log(msg);
  })
  .catch((msg) => {
    console.log(msg);
  });

//order of promises is imp

// ! Output
/*
0: {status: 'fulfilled', value: 'Promise 1'}
1: {status: 'rejected', reason: 'Promise 2'}
2: {status: 'fulfilled', value: 'Promise 3'}
*/
