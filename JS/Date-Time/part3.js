// ! Methods get and set

//! get Methodsa
const dt = new Date();
console.log(dt.getFullYear()); //2021
console.log(dt.getMonth()); //9
console.log(dt.getDate()); //9
console.log(dt.getTime()); //1633791535734
console.log(dt.getDay()); //6

//! set methods

const d2 = new Date();
console.log(d2.setFullYear(2022));
console.log(d2); //Sun Oct 09 2022 20:35:58 GMT+0530 (India Standard Time)
d2.setMonth(10);
console.log(d2); //Wed Nov 09 2022 20:36:58 GMT+0530 (India Standard Time)
d2.setDate(21);
console.log(d2); //Date Tue Nov 21 2022 20:37:40 GMT+0530 (India Standard Time)

//! date.parse()
const d3 = Date.parse("2020-07-24");
console.log(d3); //return miliseconds - 1595548800000

//! new Date()
const d4 = new Date();
console.log(d4); //Date Sat Oct 09 2021 20:40:17 GMT+0530 (India Standard Time)
