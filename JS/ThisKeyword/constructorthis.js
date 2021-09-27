"use Strict";

function bike() {
  console.log(this.name); //empty string
}
var obj1 = {
  name: "Pulsar",
  bike: bike,
};

obj1.bike(); //Pulsar
