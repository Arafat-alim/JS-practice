//! Question
const obj = Promise.race([]);
console.log(obj); //Promise {<pending>}

setTimeout(() => {
  console.log(obj); //Promise {<pending>}
}, 2000);
