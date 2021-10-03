const add = () => {
  let counter = 0;
  return () => {
    counter++;
    return counter;
  };
};

const cl1 = add();
console.log(cl1()); //1
console.log(cl1()); //2
console.log(cl1()); //3
console.log(cl1()); //4
