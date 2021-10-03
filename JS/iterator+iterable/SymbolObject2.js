//Final Way
let obj = {
  start: 10,
  end: 15,
  [Symbol.iterator]() {
    return this;
  },
  next() {
    if (obj.start <= obj.end) {
      return { value: obj.start++, done: false };
    } else {
      return { done: true };
    }
  },
};

//now we can use for...of to the above object
for (let elm of obj) {
  console.log(elm);
}
//output
// 10;
// 11;
// 12;
// 13;
// 14;
// 15;
