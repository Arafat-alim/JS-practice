function Solution(A, B) {
  //this is default OUTPUT. You can change it.
  var result = " ";
  //write your Logic here:
  //   result = 2019;
  console.log(A);

  console.log(result);
}

function processData(input) {
  //INPUT[uncomment & modify if required]
  //   var input = gets();
  var arr = input.split(/\n+/);
  var A = arr[0];
  var B = arr[1];
  //OUTPUT[uncomment & modify if required]
  Solution(A, B);
}

processData(
  "http://localhost:8000/Month.html?month=Decemebermonth&year=2019year"
);
