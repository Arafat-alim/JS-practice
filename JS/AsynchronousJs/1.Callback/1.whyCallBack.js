let data;
function fetchData() {
  setTimeout(() => {
    data = { pCode: 10001, pname: "Arafat" };
  }, 2000);
}

function displayData() {
  console.log(data);
  console.log("Ends Here");
}
console.log("Starts here");

fetchData();
displayData();

// ! output
// starts here
// undefined
// ends here
