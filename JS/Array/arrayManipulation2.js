//Array manipulation - using splice()

let arr = ["one", "two", "three"];

//splice() - it can help us to insert delete in any postion in my array

// syntax
// arrName.splice(startIndex,deleteCount,elem1ADD,elem2ADD...elemNAdd)
//! Empty my array
/* console.log("Delete item(s) -",arr.splice(0)); // return the deleted items - Array(3) [ "one", "two", "three" ]
console.log("Updated Array - ", arr); //[] - empty array */
//! Replacing elements in 2nd index
/* console.log("Delete item(s) -", arr.splice(1, 1, "NEw", "Testing")); // Array [ "two" ]
console.log("Updated Array - ", arr); //Array(4) [ "one", "NEw", "Testing", "three" ] */
//! Adding elements in 2 index
/* console.log("Delete item(s) -", arr.splice(1, 0, "NEw", "Testing")); //  Array []
console.log("Updated Array - ", arr); //Array(5) [ "one", "NEw", "Testing", "two", "three" ] */
//! Delete at 2nd index
console.log("Delete item(s) -", arr.splice(1, 1)); //  Array [ "two" ]
console.log("Updated Array - ", arr); //Array [ "one", "three" ]
