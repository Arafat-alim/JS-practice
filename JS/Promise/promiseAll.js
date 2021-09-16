// ! Basic of Promise all
let p1 = Promise.resolve(1);
let p2 = 15;
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Successfully");
  }, 1000);
});

// promise.all() method
Promise.all([p1, p2, p3])
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));
//   Array(3)[(1, 15, "Successfully")];
