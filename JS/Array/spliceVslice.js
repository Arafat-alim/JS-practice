// ! Slice Methods - returns a new copy of an array (Removing )
let arr = [1, 2, 3, 4, 5, 6];
// Array.prototype.slice

console.log(arr.slice(1)); //[ 2, 3, 4, 5, 6];
console.log(arr.slice(1, 5)); //[ 2, 3, 4, 5];
console.log(arr.slice(-1)); //[6];
console.log(arr.slice(-3, 6)); //[ 4, 5, 6];
console.log(arr.slice(2, -1)); //[ 3, 4, 5];
console.log(arr); //[1, 2, 3, 4, 5, 6];
console.log("---------------------------------");
//! Array.prototype.splice (Adding or Removing or Replacing) - return same array(modify)
// ! Modify Array - ["angel"]
// let myFish = ["angel", "clown", "mandarin", "sturgeon"];
//! last three  element removed
// let removed = myFish.splice(1); //["clown", "mandarin", "sturgeon"];

// ! Modify Array - ["angel", "clown", "mandarin"]
// let myFish = ["angel", "clown", "mandarin", "sturgeon"];
//! first element removed
// let removed = myFish.splice(3); //["sturgeon"];

// console.log(myFish.splice(2)); // ["mandarin", "sturgeon"];
//console.log(myFish); //! deleted element return karta hai

// ! Add elements into the first element
// let myFish = ["angel", "clown", "mandarin", "sturgeon"];
// let removed = myFish.splice(0, 0, "drum"); //["drum", "angel", "clown", "mandarin", "sturgeon"];

// ! Replace an element sturgeon at last element and add Happy on it
// let myFish = ["angel", "clown", "mandarin", "sturgeon"];
// let removed = myFish.splice(3, 1, "Happy"); //["sturgeon"];
// ! Happy replaced ["angel", "clown", "mandarin", "Happy"];

// ! Add multiple values at the end of an array
// let myFish = ["angel", "clown", "mandarin", "sturgeon"];
// let removed = myFish.splice(3, 1, "Happy", "MAggi"); //["sturgeon"];
//! 'Happy', 'MAggi'added ['angel', 'clown', 'mandarin', 'Happy', 'MAggi']

// !Delete last two elements
// let myFish = ["angel", "clown", "mandarin", "sturgeon"];
// let removed = myFish.splice(2); //[" mandarin","sturgeon"];

// let myFish = ["angel", "clown", "mandarin", "sturgeon"];
// let removed = myFish.splice(-2); //[" mandarin","sturgeon"];
//! same operation = splice(2) === splice(-2) === splice(-2, 2)

//! 2th index delete
// let myFish = ["angel", "clown", "mandarin", "sturgeon"];
// let removed = myFish.splice(2, 1); //![" mandarin"];

let myFish = ["angel", "clown", "mandarin", "sturgeon"];
let removed = myFish.splice(0, 0, "Maggi"); //[" mandarin"];

console.log(myFish);
console.log(removed);
