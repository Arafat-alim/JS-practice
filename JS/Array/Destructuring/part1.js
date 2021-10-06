//! Destruturing
let arr = [12, 45, 789, 97];
/*let [a, b, c, d] = arr;

console.log(a, b, c, d); //12 45 789 97
console.log(a, b, d); //12 45 97 */

// using function
function test() {
  return [1, 26, 4, 87];
}
let [a, b, c, d] = test();
// console.log(a, b, c, d); /1 26 4 87
//! swapping
let num1 = 1;
let num2 = 2;

[num1, num2] = [num2, num1];
console.log(num1, num2); //2 1
