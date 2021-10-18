//! We are removing duplicate elements from my array
//! filter() and indexOf()
//! set and [...] spread operator.

let arr = [1, 2, 3, 4, 5, 3, 4, 5];
/*arr.filter((elem, i) => {
  return console.log(`${elem} - ${arr.indexOf(elem)} - ${i}`);
});

1 - 0 - 0;
2 - 1 - 1;
3 - 2 - 2;
4 - 3 - 3;
5 - 4 - 4;
3 - 2 - 5;
4 - 3 - 6;
5 - 4 - 7; */

let newArr = arr.filter((ele, i) => {
  return arr.indexOf(ele) === i;
});

console.log(newArr); //! Array(5) [ 1, 2, 3, 4, 5 ]
