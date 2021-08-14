//! Hoisting - automatically declaration hojyga if we dont declare

//! Two ways to define function.
//! 1. Function declaration syntax
sayHello(); //call kr pa rhe hai q ke hoisting hai
sayGoodbye(); //call nh kr skte q ke hoisting nh hota isme -> declaration nh hua hai
console.log(pop); //error because const doesnt support hoisiing

function sayHello() {} //it support hoisting -> code kachra
//! 2. function expression
const sayGoodbye = function () {}; //it doesnt support hoisting (suprb)

//________________
const pop = 4;
