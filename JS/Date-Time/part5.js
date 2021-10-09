//! TIme method question
let d1 = new Date(2021, 03, 23);
let d2 = new Date(2022, 03, 23);
console.log(d1);

let n = d1.getTime() - d2.getTime();
n = n / 1000 / 3600; //hour me convert hogya
console.log(n); //-8760
n = n / 24;
console.log(n); //365

//How can you change hours or minutes in time
const d3 = new Date();
d3.setHours(12);
d3.setMinutes(30);
console.log(d3); //Date Sat Oct 09 2021 12:30:43 GMT+0530 (India Standard Time)
