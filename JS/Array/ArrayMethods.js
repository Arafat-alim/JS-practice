// ! reverse method - updated the existed array
let arr = [1, 2, 3, 64, 5];
let arr1 = ["A", "B", "C", "D"];
console.log("Before - ", arr);
console.log("Before -", arr1);
console.log(arr.reverse()); // [5, 46, 3, 2, 1]
console.log(arr1.reverse()); // ["D", "C", "B", "A"];
console.log("After - ", arr); // [5, 46, 3, 2, 1]
console.log("After -", arr1);

// ! sort method

console.log("Before - ", arr);
console.log(arr.sort()); // [5, 46, 3, 2, 1]
console.log(arr1.sort()); // ["D", "C", "B", "A"];
console.log("After - ", arr); // [5, 46, 3, 2, 1]
