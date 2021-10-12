// ! same method name child and parent - method overriding
class Parent {
  constructor(a) {
    this.a = a;
    console.log("Parent", a);
  }
  pMethod() {
    console.log("Parents Method", this.a);
  }
}

class Child extends Parent {
  constructor(a) {
    super(a); //parent class constructor called
    console.log("Child", a);
  }
  pMethod() {
    super.pMethod(); //over-riding the method
  }
}

//creating a new object
let obj = new Child(12); //Parent
obj.pMethod();
