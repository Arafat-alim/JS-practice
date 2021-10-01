// ! Arrow function does not support this keyword due to "new" keyword because "new" keyword is now the part of classes now

const test = () => {
  console.log(this); //pointing to global or window object
};

test(); //points to window object

// even we create this inside an object
const obj = {
  test2: () => {
    console.log(this); // still point to the window object
  },
};

obj.test2();

//! Earlier a function have a job of class
// if a function call a new keyword then it represent as a class depending on the way it is called
// arrow funcion just a function it does not behave like a class.
