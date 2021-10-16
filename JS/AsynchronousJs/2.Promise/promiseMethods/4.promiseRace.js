let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1");
  }, 5000);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2");
  }, 3000);
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3");
  }, 2000);
});

Promise.race([p1, p2, p3]).then((msg) => {
  console.log(msg); //Promise 3
});
