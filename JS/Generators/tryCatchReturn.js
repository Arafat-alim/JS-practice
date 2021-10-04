//using try/finally When my method will be return() then finally block will run

function* gen() {
  try {
    yield "One", yield "Two";
  } finally {
    yield "Finally";
  }
}

const obj = gen();
console.log(obj.next());
console.log(obj.return());
console.log(obj.next());

//output
// {value: 'One', done: false}
// {value: 'Finally', done: false}
// {value: undefined, done: true}
