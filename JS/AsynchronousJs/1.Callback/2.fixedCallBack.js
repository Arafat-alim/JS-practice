function fetchData(cb) {
  setTimeout(() => {
    let data = { pCode: 1001, pName: "Arafat" };
    cb(data); //callback is calling
  }, 2000);
}
console.log("Starts here");
//calling fetchData
fetchData(function (data) {
  //anonymous
  console.log(data);
  console.log("Ends here");
});

/* function display(){
     (data) {
  console.log(data);
  console.log("Ends here")
} */

//! Output
// starts here
// object
// ends here
