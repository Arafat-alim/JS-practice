//apply() method

//apply function with passing data values - array
function walk(arr, name) {
  //arguement me bhi utna dena hoga jitna array hai q ke array elem ko indiviual string  le rha hai
  console.log(this); //pointing to window

  console.log(typeof arr);
  console.log(name);

  console.log("Helloo user");
}
walk.apply({ city: "Chennai" }, ["I am very much happy", "Arafat"]);
