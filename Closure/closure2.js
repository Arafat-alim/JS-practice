var i = 10;
function outer() {
  console.log("Outer Called");
  var j = 20;
  console.log(i, j);
  function inner() {
    console.log("inner");
    var k = 30;
    console.log(j, k);
  }
  inner();
}

outer();
