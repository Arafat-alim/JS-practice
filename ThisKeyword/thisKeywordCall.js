//call() method
//without passing any data
function eat() {
  console.log(this); //pointing to window
  console.log("Helloo user");
}

//call function
eat.call({ city: "Kolkata" }); //jaha pe this keywrd call hoga wahi pe add hoga

//call functin with passing data values
function walk(msg, name) {
  console.log(this); //pointing to window
  console.log(msg);
  console.log(name);
  console.log("Helloo user");
}
walk.call({ city: "Chennai" }, "I am very much happy", "Arafat");
