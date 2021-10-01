const test = () => {
  console.log("Arrow Function");
};
test();

//shorter way if we have single argument
const test2 = (a) => {
  console.log("Single argument -", a);
};
test2();

//! More shorted if we a single return and single arguement
const test3 = (a) => console.log(a);
test3();
