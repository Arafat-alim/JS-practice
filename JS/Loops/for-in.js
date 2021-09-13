//! for...in Loops - most helpful to iterate in an Object

// ! objects
const person = {
  name: "Arafat",
  age: 20,
};

for (let key in person) {
  console.log(key);
  //name age -> only key name not value
  console.log(key, person[key]);
  //   name Arafat
  // age 20
}

// ! Arrays
const arr = [4, 2, 4, 6];

for (let index in arr) {
  console.log(index); // giving only index
  console.log(index, arr[index]);
}
