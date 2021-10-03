//! iterable data structures are Maps, Strings, Arrays, Sets,etc
let arr = [1, 5, 4, 6];

//! using for...of
for (let elem of arr) {
  console.log(elem); //1 5 4 6 4 78 9
}

//do the same array code usign an Symbol.iterator

//! Object literal are not iterable. we convert the object lteral into iterable using Symbol.iterable, using this we can make any data structure which are not iterable

//! Symbol.iterator returns iterable object

let itr = arr[Symbol.iterator]();
console.log(itr); //! Array Iterator {  } ... iterable object
console.log(itr.next()); //Object { value: 1, done: false }
console.log(itr.next()); //Object { value: 5, done: false }
console.log(itr.next()); //Object { value: 4, done: false }
console.log(itr.next()); //Object { value: 6, done: false }
console.log(itr.next()); //Object { value: undefined, done: true }
