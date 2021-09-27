console.log("Script Loaded");
function myfun() {
  //   alert("OOPS");
  let numb = document.getElementById("num").value;
  console.log(numb);
  if (numb) {
    // alert("Woah its a number", numb);
    if (numb % 2 === 0) {
      alert("Number is Even", numb);
    } else {
      alert("The input number is Odd", numb);
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
