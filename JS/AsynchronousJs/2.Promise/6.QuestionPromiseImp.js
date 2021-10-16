const pr = new Promise((resolve, reject) => {
  resolve("Over");
  setTimeout(() => {
    resolve("Again");
  }, 2000);
});

pr.then((msg) => {
  console.log(msg);
  return pr;
})
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });

//!output
//   over
//   over
