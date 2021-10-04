let obj = {
  start: 10,
  end: 15,
  *[Symbol.iterator]() {
    for (let ctr = this.start; ctr <= this.end; ctr++) {
      console.log(ctr);
    }
  },
};

//now the object is iterable then we can also use spead
console.log([...obj]);
