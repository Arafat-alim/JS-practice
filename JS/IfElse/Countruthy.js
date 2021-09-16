// count truthy value
const arr = ["", "a", null, false, undefined, 0, 1, 2, 3, 4, 5];
let count = 0;
let res = countTruthy(arr);
console.log(res);

function countTruthy(arr) {
  for (let key of arr) {
    if (key) {
      count++;
    }
  }
  return count;
}

// // falsy value
// "", //empty string
//   null,
//   false,
//   undefined,
//   NaN,
//   0;
