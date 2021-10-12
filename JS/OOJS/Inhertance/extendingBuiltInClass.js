class Child extends String {
  //child can have own property and method
  noc(str) {
    console.log(str.length);
  }
}

let obj = new Child("Hello String");
console.log(obj); //String { "Hello String" }
console.log(obj.toLowerCase()); //hello string
obj.noc("Mini Meee"); //9
