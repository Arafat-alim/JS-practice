//! call back - if these callback carry upto 4 times it will be more difficult to handle
function cSquare(n, cb) {
  setTimeout(() => {
    cb(n * n);
  }, 2000);
}

cSquare(4, function (res) {
  console.log(res);
  cSquare(res, function (res1) {
    console.log(res1);
  });
});

//! output
//4
//16
