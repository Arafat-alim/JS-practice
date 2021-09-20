// ! Q 26.
// function add(item, items = []) {
//   items.push(item);

//   return items;
// }

// console.log(add("Orange")); //!Array [ "Orange" ]
// console.log(add("Apple")); //!Array [ "Apple" ]

// ! Q. 27
// function myFun(x, y, ...manyMoreArgs) {
//   console.log(manyMoreArgs);
// }

// myFun(1, 2, 3, 4, 5); //! 3:	[3, 4, 5],
// myFun(1, 2); //! []

//! Q. 28
//! generator
// function* myGenFunc() {
//   yield 1;

//   yield 2;

//   yield 3;
// }

// var myGenObj = new myGenFunc();
// console.log(myGenObj.next().value); //! 4:	TypeError

//! Q. 29
// let count = 10;
// (function innerFunc() {
//   if (count === 10) {
//     let count = 11;

//     console.log(count); //! 11
//   }

//   console.log(count); //! 10
// })();

//! Q. 30
// let zero = new Number(0);

// if (zero) {
//   console.log("If"); //! If
// } else {
//   console.log("Else");
// }

//! Q. 31
// class Vehicle {
//   constructor(name) {
//     this.name = name;
//   }

//   start() {
//     console.log(`${this.name} vehicle started`);
//   }
// }

// class Car extends Vehicle {
//   start() {
//     console.log(`${this.name} car started`);
//     super.start();
//   }
// }

// const car = new Car("BMW");

// console.log(car.start()); //! ●	2: BMW vehicle started, BMW car started

//! Q.31
// function Person() {}

// Person.prototype.walk = function () {
//   return this;
// };

// Person.run = function () {
//   return this;
// };

// let user = new Person();

// let walk = user.walk;

// console.log(walk()); //!Window

// let run = Person.run;

// console.log(run()); //! Window

//! Q. 32
// const squareObj = new Square(10);

// console.log(squareObj.area);

// class Square {
//   constructor(length) {
//     this.length = length;
//   }

//   get area() {
//     return this.length * this.length;
//   }

//   set area(value) {
//     this.area = value;
//   }
// }
//! ReferenceError

//! Q.33
// let arr = let arr = [2,'A',"B",true,[6,7,[9,0]]];
//! NO

//! Q. 34
// let a = new String("abc");

// let b = new Object("abc");

// if (a == b) {
//   console.log("yes");
// } else {
//   console.log("no");
// } //! NO

//! Q. 35
// let a = new String("abc");

// let b = new String("abc");

// if (a == b) {
//   console.log("yes");
// } else {
//   console.log("no");
// } //! No

//! Q. 36
// let a = new String("abc");

// let b = "abc";

// if (a == b) {
//   console.log("yes");
// } else {
//   console.log("no");
// } //! Yes

//! Q. 37
// console.log(1); //!1
// console.log(2); //! 2
// setTimeout(() => {
//   console.log(3);
// }, 0);

// console.log(4); //! 4

//! final Output - 1 2 4 3

//! Q. 38
// var num = 0;

// function run() {
//   console.log(num);

//   var num = 1;
// }

// run(); //! undefined

//! Q. 39
// var myObject = {
//   foo: "bar",

//   func: function () {
//     var self = this;

//     console.log("outer func: this.foo = " + this.foo); //!bar
//     console.log("outer func: self.foo = " + self.foo); //!bar
//     (function () {
//       console.log("inner func: this.foo = " + this.foo); //!undefined

//       console.log("inner func: self.foo = " + self.foo); //!bar
//     })();
//   },
// };

// myObject.func();

//! Q. 40

// (function () {
//   console.log(1);
//   setTimeout(function () {
//     console.log(2);
//   }, 1000);
//   setTimeout(function () {
//     console.log(3);
//   }, 0);

//   console.log(4);
// })();
//! The output - 1 4 3 2

//! Q. 41
// (function (x) {
//   return (function (y) {
//     console.log(x);
//   })(2);
// })(1);
//! the output is - 1

//! Q.42
// (function (x) {
//   return (function (y) {
//     console.log(x); //! 1
//     console.log(y); //! 2
//   })(2);
// })(1);
//! The output is - 1 2

//! Q. 43
// var length = 10;

// function fn() {
//   console.log(this.length);
// }

// var obj = {
//   length: 5,
//   method: function (fn) {
//     fn();
//     arguments[0]();
//   },
// };

// obj.method(fn, 1);
//! THe output is - 10  2

//! Q. 44
// var b = 1;

// function outer() {
//   var b = 2;

//   function inner() {
//     b++;

//     var b = 3;

//     console.log(b);
//   }

//   inner();
// }

// outer();
// ! The output is - 3
