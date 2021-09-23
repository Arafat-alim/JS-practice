var i = 10;
function outer() {
  var j = 20;
  console.log(i, j);
  var inner = function () {
    var k = 30;
    console.log(i, j, k);
    i++;
    j++;
    k++;
  };
  return inner;
}

// calling
var inner = outer(); //10 20
inner(); // 10 20 30

inner = outer(); //11 20
inner(); // 11 20 30
