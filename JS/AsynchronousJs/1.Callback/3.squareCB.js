//! Example - square of two numbers

function cSqure(n, cb) {
  setTimeout(() => {
    cb(n * n); //calling a cb function over here
  }, 2000);
}

cSqure(4, function (res) {
  console.log(res);
});
