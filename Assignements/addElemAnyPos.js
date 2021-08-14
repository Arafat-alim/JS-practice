const arr1 = [1, 2, 3];

//1) add numbrt 4 element in the front
const arr2 = [4, ...arr1];
console.log("Added element in the front", arr2);
//2) add number 5 element at the end
const arr3 = [...arr1, 5];
console.log("Added element at the end", arr3);

//3 now adding element between 1 and 2

const index = arr1.indexOf(2);
const added = [...arr1.slice(0, index), 4, ...arr1.slice(index)];
console.log(added);
