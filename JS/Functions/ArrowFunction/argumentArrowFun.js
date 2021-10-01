//! arguments in arrow function
const test = () => {
  console.log(arguments);
};
// test(1, 2, 3, 4, 5); //error will show - arguemnt is not defined

// ! we use rest operator for multiple arguments

const test2 = (...num) => {
  console.log(num);
};

console.log(test2(1, 2, 3, 45, 469, 7));
