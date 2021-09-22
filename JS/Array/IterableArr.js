const arr = [
  { name: "Arafat", price: 100 },
  { name: "Biswas", price: 10 },
  { name: "Dhoni", price: 190 },
  { name: "Curran", price: 90 },
  { name: "Tom", price: 10 },
  { name: "sam", price: 200 },
];

// ! Using a filter function - get price which is greater than 100
let filteredArray = arr.filter((item) => {
  return item.price >= 100;
});

// ! Using a map function to print the names
let printNames = filteredArray.map((item) => {
  return item.name;
});

// ! we want to find dhoni is present in filteredArray or not?
let findDhoni = filteredArray.find((item) => {
  return item.name === "Dhoni";
});

// ! Print all the array name part using forEach loop
// forEach wont return same as forlOOp just taking a callback function
arr.forEach((item) => {
  console.log(`Name is ${item.name} with price is  ${item.price} `);
});

// ! Say true or false my array item has less than price 100 using some method
// ! some() return just only true or false on some condition we provided
let priceLessThan100 = arr.some((item) => {
  return item.price <= 100;
});

//! EveryItem in the array has price less than 1000
let EveryPriceLessThan1000 = arr.every((item) => {
  return item.price <= 1000;
});

//! suppose we want to know the total price of my array using reduce method
//! Reduce method learn by seperately
let totalprice = arr.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0); //! here "0" is starting value(currentTotal)

console.log(filteredArray);
console.log(printNames);
console.log(findDhoni);
console.log(priceLessThan100); //true
console.log(EveryPriceLessThan1000); //true
console.log(totalprice); //600

let arr1 = [1, 6, 4, 78, 9, 41, 6, 6];
// ! includes() method - it return my array pressent that value or not - it return true/false
let valuePresent = arr1.includes(78);

// ! for...in loop

console.log("Yes boss", valuePresent);
