//Find the avg of an given array of flatten my array
let arr = [2, 4, 6, 4, 10];

let result = arr.reduce((accumulator, current, index, array) => {
  accumulator += current;
  if (index === array.length - 1) {
    return accumulator / array.length;
  }
  return accumulator;
});

console.log(result);

//Addition perform in the array
let arr1 = [2, 5, 6, 7, 89, 10];
let sum = arr1.reduce((accumulator, current) => {
  return (accumulator += current);
});

console.log(sum); //119
