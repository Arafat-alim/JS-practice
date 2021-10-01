//! ES5, we have array like object called arguments
function sum() {
  console.log(arguments);
}

sum(1, 2, 3, 4, 5, 6, 4);
sum(123);

//! But if we try to do the same thing in arrow function it gives an error, so we avoid it
const sum1 = () => {
  console.log(arguments); //! Reference error - arguments
};

sum1(1, 2, 3, 4, 5);

("use Strict");
function sum3() {
  console.log(arguments);
}

sum3(1, 2, 3, 45); //running well
