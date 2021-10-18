let obj = {
  a: 10,
  b: 20,
  [Symbol.asyncIterator]() {
    return {
      next() {
        const pr = new Promise((resolve) => setTimeout(resolve, 1000));
        if (obj.a < obj.b) {
          return { value: obj.a++, done: false };
        } else {
          return { done: true };
        }
        return pr;
      },
    };
  },
};

(async () => {
  for await (let i of obj) {
    console.log(i);
  }
})(); //running boss
