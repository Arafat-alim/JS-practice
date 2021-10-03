const add = (a) => {
  return (b) => {
    return a + b;
  };
};

console.log(add(7)(9)); // 16
const child = add(5); //reuse
console.log(child(6));
