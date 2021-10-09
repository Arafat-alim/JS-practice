//question
const dt = new Date(2020, 08, 23);
console.log(dt);
//! Wed Sep 23 2020 00:00:00 GMT+0530 (India Standard Time)

//get the month
const d2 = new Date();
console.log(d2.getMonth()); //9

// ! Find the date before 50 days of the given date?
const d3 = new Date();
// ! get the current day
const currentDate = d3.getDate();
d3.setDate(currentDate - 50);
console.log(d3);

//! What will be the output if you add 35 as date in Date() constructor?

const d4 = new Date(2020, 08, 35); //it has a feature which is called autocorrection
console.log(d4); //Date Mon Oct 05 2020 00:00:00 GMT+0530 (India Standard Time)
