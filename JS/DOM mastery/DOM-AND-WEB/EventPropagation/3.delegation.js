//! get the value of each cell
function myTable() {
  //   console.log(event.target);
  //   console.log(event.target.tagName);

  if (event.target.tagName === "TD") {
    console.log(event.target.innerHTML);
  } else {
    console.log(event.target.value);
  }
}
