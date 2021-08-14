var i = 10;
function outer() {
  console.log("Outer Called");
  var j = 20;
  console.log(i, j);
  var inner = function inner() {
    console.log("inner");
    var k = 30;
    console.log(j, k);
  };
  return inner;
}

var inner = outer();
inner(); //inner function diminish nh hua . value garbage collector nh khaya javascript mein
