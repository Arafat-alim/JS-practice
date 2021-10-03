//! Convert the object into a iterable

//! here we want to iterate them from 10 to 15 - 10, 11, 13, 14, 15
let obj = {
  start: 10,
  end: 15,
};

//defining the method seperately
obj[Symbol.iterator] = function () {
  let itr = {
    next() {
      if (obj.start <= obj.end) {
        return { value: obj.start++, done: false };
      } else {
        return { done: true };
      }
    },
  };
  return itr;
};

for (let i of obj) {
  console.log(i); //Uncaught TypeError: obj is not iterable
}
