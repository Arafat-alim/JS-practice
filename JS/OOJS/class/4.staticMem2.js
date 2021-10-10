//! Static method part 2

class Home {
  static appversion = 1.2;
  static test() {
    console.log("Static Method Called");
    console.log(this); //class home(), this point to the class
    this.test1(); //called the test1 method
  }
  static test1() {
    console.log("Test method called"); //important
  }
}

Home.test();
console.log(Home.appversion); //1.2
