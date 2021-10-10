//! Dynamic class
let showData = "getDetails"; //dynamic
class Home {
  constructor(nDoors, nWindows) {
    console.log("Constructor called");
    this.nDoors = nDoors;
    this.nWindows = nWindows;
  }
  //creating a  method
  [showData]() {
    console.log(this.nDoors, this.nWindows);
  }
}

//creating an object/instance of a class
let obj = new Home(7, 5);
let obj1 = new Home(11, 6);

obj.getDetails(); // 7, 5
obj1.getDetails(); // 11 6
