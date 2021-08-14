//! Everything in js is an object

//Array prototype

const city = ["Kol", "Hyd", "CHN"];

console.log(city.__proto__); //it will calls the array prototypes
console.log(Array.prototype);

console.log(city.__proto__.__proto__);
console.log(Object.prototype);
//! Important
// city.__proto__ === Array.prototype both are exactly same
// city.__proto__.__proto__ === Object.prototype; // both are exactly same
