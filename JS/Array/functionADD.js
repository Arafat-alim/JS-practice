// ! creating a function which can add element in the begining of an array

function add(arr, n) {
  //add element to the first element
  console.log(arr);
  console.log(n);
  arr.unshift(n);
  return arr;
}

console.log(add([1, 2, 34, 2], "25"));
