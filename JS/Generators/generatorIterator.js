//! generator also support iterator. - just onvert the code into function *() generator
let obj = {
  start: 10,
  end: 15,
  [Symbol.iterator]: function* () {
    for (let ctr = this.start; ctr <= this.end; ctr++) {
      yield ctr;
    }
  },
};

//if the above code is iterator then it follows the for..of loop
for (let i of obj) {
  console.log(i);
}
//! Output
// 10
// 11
// 12
// 13
// 14
// 15
