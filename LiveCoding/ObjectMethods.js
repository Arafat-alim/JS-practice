//! Object.seal Vs Object.Freeze Vs Object.defineProperty

let obj = {
  name: "Arafat",
};

obj.age = 22;
console.log(obj); //added to my obj

//! Object.freeze()
let obj1 = {
  name: "Alim",
};
Object.freeze(obj1);
obj1.age = 24; // cannot to add any more property
obj1.name = "Alim"; //Also cant able to modify the property

console.log(obj1); //! Object { name: "Alim" }

//! Object.seal()
let obj2 = {
  name: "Ahmed",
};
Object.seal(obj2);
obj2.name = "Rohan"; // Yes we can modify/Update the property
obj2.age = 24; //No, cant able to add any property to my object

//! Object.defineProperty()
//! Q - i want to modify name but cant able to modify age property
let obj3 = {
  name: "Mahmood",
};

Object.defineProperty(obj3, "age", {
  value: 3,
  writable: false,
});

obj3.name = "Risky Baba"; //name can be changable
obj3.age = 5; // age cannot be changed
console.log(obj3);
