//liek function expression, es6 also given a class expression
const Home = class {
  constructor() {
    console.log("Called");
  }
};

const obj = new Home(); //called
