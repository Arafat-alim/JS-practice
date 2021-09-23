//! Example
var i = 10;
function outer() {
  var j = 20;
  console.log(i, j);
  var inner = function () {
    var k = 30;
    console.log(j, k, i);
  };
  return inner;
}

var inner = outer(); //! 10 20, but it is returning a another function
inner(); //! 20 30 10
