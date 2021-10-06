//! Q. What will be the output in case an array has “undefined” while sorting the values?

let arr = ["Apple", "banana", undefined, "cherry"];

console.log(arr.sort()); //Array(4) [ "Apple", "banana", "cherry", undefined ]

//! Q. How will you sort the object literal?
const employee = [
  { eNo: 1001, salary: 2000 },
  { eNo: 1002, salary: 3000 },
  { eNo: 1003, salary: 1000 },
  { eNo: 1004, salary: 1500 },
];
//we need to sort using compare function
employee.sort(function (a, b) {
  if (a.salary < b.salary) {
    return -1;
  }
  if (a.salary > b.salary) {
    return 1;
  }
  if (a.salary === b.salary) {
    return 0;
  }
}); //ascending order
console.log(employee);
//! output
// 0: Object { eNo: 1003, salary: 1000 }
// 1: Object { eNo: 1004, salary: 1500 }
// 2: Object { eNo: 1001, salary: 2000 }
// 3: Object { eNo: 1002, salary: 3000 }
