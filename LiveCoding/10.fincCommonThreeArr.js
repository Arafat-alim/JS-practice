//! Find the common between three arrays

let arrOne = [1, 2, 3, 5, 7];
let arrTwo = [1, 2, 3, 51, 17];
let arrThree = [1, 2, 3, 5, 17];

//! Put all element into one elment first
let arrMain = [arrOne, arrTwo, arrThree];

let result = arrMain.shift().filter((e) => {
  return arrMain.every((v) => {
    return v.indexOf(e) !== -1;
  });
});
console.log(result);
