console.log("Script Loaded");
function myfun() {
  //   alert("OOPS");
  let numb = document.getElementById("num").value;
  console.log(numb);
  isEven = 0;
  if (numb) {
    // alert("Woah its a number", numb);
    //! logic Part
    isEven = parseInt(numb / 2, 10) * 2 == numb; //! Important to note
    console.log(isEven);
    if (isEven) {
      alert("Number is Even");
    } else {
      alert("number is odd");
    }
    document.getElementById("num").value = "";
  } else {
    alert("Please enter a valid Number");
    document.getElementById("num").value = "";
  }
}

//! html Work
//  <label for="number">Enter a Number to check</label>
//     <input type="number" placeholder="Enter a number" id="num" />
//     <button onclick="myfun()">Submit</button>
//     <script src="./primeOrNotParseInt.js"></script>
