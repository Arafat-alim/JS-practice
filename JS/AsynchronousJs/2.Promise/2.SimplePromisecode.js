let pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Successfully");
  }, 2000);
});

//promise is thenable so
pr.then((msg) => {
  console.log(msg);
})
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("FInishes all the promises");
  });

//! output
//   Successfully;
//   FInishes all the promises
