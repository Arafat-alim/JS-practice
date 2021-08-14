let person1 = {
  name: "Arafat",
};

let person2 = {
  city: "kolkata",
};

//inheritance prototype
person1.__proto__ = person2; //now person1 access person2 property

console.log(person1.city);
