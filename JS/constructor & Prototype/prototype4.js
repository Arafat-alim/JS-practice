//! Here we learn more prototypes

function Vehicle(name, price) {
  this.name = name;
  this.price = price;
}

Vehicle.prototype.getPrice = function () {
  return this.price;
};

// creating an object
var obj1 = new Vehicle("BMW", 600000);
var obj2 = new Vehicle("Audi", 7000000);

// ! first - __proto__ (dunder) which is now depreciated.
console.log(obj1.__proto__ == Vehicle.prototype); //! True
//! uske jagah Object.getProtoTypeOf(obj1)
console.log(Object.getPrototypeOf(obj1) === Vehicle.prototype); //! true

//! Check Vehicle obj is the prototype of Vehicle or not ?
console.log(Vehicle.prototype.isPrototypeOf(obj1)); //! true

//! Check Object have “price” property or it is sharing the “price” property from the prototype?
console.log(obj1.hasOwnProperty("price")); //! True

obj1.color = "white"; //present in object itself
Vehicle.prototype.color = "black"; //present in Vehicle prototype
