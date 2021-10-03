//Traditional function - function declaration
function test() {
  function test2() {
    console.log("Traditional inner called");
  }
  test2();
}
test();

//function expression
const outer = function () {
  const inner = function () {
    console.log("Function Expression 1 - inner called");
  };
  return inner;
};
const cl1 = outer();
console.log(cl1());

function test1() {
  return function () {
    console.log("Function Expression 2 - Inner Called");
  };
}
const c = test1();
console.log(c());

//Arrow function
const inter = () => {
  return () => {
    console.log("Arrow Inner called");
  };
};

const c2 = inter();
console.log(c2());
