// ! PROTOYPES
function Vehicle(name, price) {
  this.name = name;
  this.price = price;
  //   creating a method
  this.getPrice = function () {
    return this.price;
  };
}

// creating an object
var obj1 = new Vehicle("BMW", 600000);
var obj2 = new Vehicle("Audi", 7000000);
console.log(obj1);
console.log(obj1);

//! Here, we are using prototype because when we call obj1.getPrice() then the object create a copy
//! And this is the individual copy when we create an object or call this. SO there is lots of useless copies
//! Here comes in the picture of a prototpe -
