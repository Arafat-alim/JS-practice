// ! PROTOYPES
function Vehicle(name, price) {
  this.name = name;
  this.price = price;
  //   creating a method
  /*  this.getPrice = function () {
    return this.price;
  }; */
}

Vehicle.prototype.getPrice = function () {
  return this.price;
};
// creating an object
var obj1 = new Vehicle("BMW", 600000);
var obj2 = new Vehicle("Audi", 7000000);
//! Now we can add my own property in the prototype
// ! Whenever i create any object then prototype already have my method getPrice.

obj1.getPrice(); // 600000
