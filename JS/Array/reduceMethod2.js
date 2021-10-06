//! flatten my array = 2D to Single DImensional Array
let arr = [
  [2, 4],
  [7, 6],
  [14, 21],
  [78, 9],
];

let fArr = arr.reduce((accumulator, current) => {
  return accumulator.concat(current);
}, []);
console.log(fArr); //Array(8) [ 2, 4, 7, 6, 14, 21, 78, 9 ]

//! find the salary of an object
let employee = [
  { eNo: 1001, salary: 3000 },
  { eNo: 1002, salary: 3500 },
  { eNo: 1003, salary: 4000 },
  { eNo: 1004, salary: 3600 },
  { eNo: 1005, salary: 5000 },
];

let totalSalary = employee.reduce((accumulator, current) => {
  return accumulator + current.salary;
}, 0);

console.log(totalSalary); //19100
