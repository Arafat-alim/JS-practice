//! here we study the time methods

//! get methods
const d1 = new Date();
console.log(d1.getTime()); //1633793469263
console.log(d1.getHours()); //21
console.log(d1.getMinutes()); //1
console.log(d1.getSeconds()); //29
console.log(d1.getMilliseconds()); //219

//! set Methods
const d2 = new Date();
console.log(d2);
console.log(d2.setTime(0));
console.log(d2); //Date Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)
d2.setHours(12);
console.log(d2); // Date Thu Jan 01 1970 12:30:00 GMT+0530 (India Standard Time)
d2.setMinutes(30);
console.log(d2); //Date Thu Jan 01 1970 12:30:00 GMT+0530 (India Standard Time)
d2.setSeconds(45);
console.log(d2); // Date Thu Jan 01 1970 12:30:45 GMT+0530 (India Standard Time)
d2.setMilliseconds(115);
console.log(d2); //Thu Jan 01 1970 12:30:45 GMT+0530 (India Standard Time)
