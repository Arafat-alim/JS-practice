//! Here **msg
//! forEach()

let arr = ["ES6", "ES7", "ES8", "ES9"];
arr.forEach((elem, index) => {
  console.log(elem, index);
  if(index==2){
      break;
  }
});


// ! Output 
// Uncaught SyntaxError: Illegal break statement