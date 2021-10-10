//static member in javascrpt
class Home {
  static test() {
    console.log(this);
    console.log("Static method is called");
  }
}

Home.test();
