// ! Q.1
// let car = {
//   name: "AudiQ7",
//   sayName() {
//     console.log(this.name);
//   },
// };

// let sayName = car.sayName;
// sayName("name");

// ! Q.2
// function greet(person) {
//   if (person == { name: "Arafat" }) {
//     console.log("Newton School");
//   } else {
//     console.log("hey School");
//   }
//   console.log(person);
// }

// greet({ name: "Arafat" });

//! Q.3
// var car = new Vehicle("Honda", "white", "2010", "UK");
// console.log(car);

// function Vehicle(model, color, year, country) {
//   this.model = model;

//   this.color = color;

//   this.year = year;

//   this.country = country;
// }

//! Q.4
// function foo() {
//   let x = (y = 0);

//   x++;

//   y++;

//   return x;
// }

// console.log(foo(), typeof x, typeof y); //! ●	1: 1, undefined and undefined

// ! Q.5
// function main() {
//   console.log("A");

//   setTimeout(
//     function print() {
//       console.log("B");
//     },

//     0
//   );

//   console.log("C");
// }

// main(); //!●	4: A, C and B

// ! Q.6
// var y = 1;

// if (function f() {}) {
//   y += typeof f;
// }

// console.log(y); //! ●	4: 1undefined

// // ! Q.7
// var myChars = ["a", "b", "c", "d"];

// delete myChars[0];

// console.log(myChars);

// console.log(myChars[0]);

// console.log(myChars.length);

// ! ●	3: [empty, 'b', 'c', 'd'], undefined, 4

// ! Q.8
// console.log(1 < 2 < 3); //true
//!Explaintation
// 1<2 = true
// true < 3 = true
// ! true < n = always true

// console.log(3 > 2 > 1); // false
// ! Explaination -
// 3 > 2 = true
// true > 1 = false
// ! True > n = always false

// ! Q. 10
// function printNumbers(first, second, first) {
//   console.log(first, second, first);
// }

// printNumbers(1, 2, 3); //! 3 2 3

// ! Q. 10
// const arrowFunc = () => arguments.length;
// console.log(arrowFunc(1, 2, 3));
// ! ●	1: ReferenceError: arguments is not defined

// ! Q.11
// const arrowFunc = (arguments) => arguments.length;
// console.log(arrowFunc(1, 2, 3));  //! undefined

// ! Q.12
// console.log(10 == [10]); //! true
// console.log(10 == [[[[[[[10]]]]]]]); //! True
// ! explaination
// Array Ho ya nested Array value same hoga to wo true dega

// ! Q. 13
// console.log([0] == false); // true

// if ([0]) {
//   console.log("I'm True"); //! This is a correct answer
// } else {
//   console.log("I'm False");
// }

// ! Q. 14
// [0] == false; // true
// [] == false; // true
// [1] == false; // false

// ! Q. 15
// async function func() {
//   return 10;
// }

// console.log(func()); //! ●	1: Promise {<fulfilled>: 10}

//! Q.16
// async function func() {
//   await 10;
// }

// console.log(func()); //! ●	4: Promise {<resolved>: undefined}

//! Q.17
// let myNumber = 100;

// let myString = "100";

// if (!typeof myNumber === "string") {
//   // false
//   console.log("It is not a string!");
// } else {
//   console.log("It is a string!");
// }

// if (!typeof myString === "number") {
//   //false
//   console.log("It is not a number!");
// } else {
//   console.log("It is a number!");
// }
// ! ●	4: It is a string!, It is a number!

// ! Q.18
// class A {
//   constructor() {
//     console.log(new.target.name);
//   }
// }

// class B extends A {
//   constructor() {
//     super();
//   }
// }

// new A(); //! A

// new B(); //! B

// ! Q. 19
// const [x, ...y,] = [1, 2, 3, 4];

// console.log(x, y); //! 4:	SyntaxError

// ! Q. 20
// const { a: x = 10, b: y = 20 } = { a: 30 };

// console.log(x); //! 30

// console.log(y); //! 20

// !. 21
// function area({ length = 10, width = 20 }) {
//   console.log(length * width);
// }

// area(); //! 2:	Error Desturcturing

//! Q.22
// function area(length = 10, width = 20) {
//   console.log(length * width);
// }

// area(); //! 200

// ! Q.23
// const props = [
//   { id: 1, name: "John" },

//   { id: 2, name: "Jack" },

//   { id: 3, name: "Tom" },
// ];

// const [, , { name }] = props;

// console.log(name); //! Tom

// ! Q.24
// const props = [
//   { id: 1, name: "John" },

//   { id: 2, name: "Jack" },

//   { id: 3, name: "Tom" },
// ];

// const [, { name }] = props;

// console.log(name); //! Jack

// ! Q.25
const props = [
  { id: 1, name: "John" },

  { id: 2, name: "Jack" },

  { id: 3, name: "Tom" },
];

const [{ name }] = props;

console.log(name); //! John
