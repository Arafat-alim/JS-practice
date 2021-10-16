const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1");
  }, 2000);
});
const p2 = "New String";
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3");
  }, 2000);
});

Promise.all([p1, p2, p3])
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });

//! Output
//["Promise 1", "New String", "Promise 3"];
