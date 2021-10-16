let cSq = (n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n * n);
    }, 2000);
  });
};
cSq(4)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Finishes");
  });
//! output
// 16
// finishes
