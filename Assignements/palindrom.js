let text = document.getElementById("text");
let currentInput = "";
text.addEventListener("input", function (e) {
  currentInput = e.target.value;
  palindrom(currentInput);
});

function palindrom(str) {
  //   using methods
  // string to an array
  let arrayStr = str.split("");
  let reverseArr = arrayStr.reverse();

  let arrToStr = reverseArr.join("");
  console.log(arrToStr);
  //   checking
  if (str === arrToStr) {
    // console.log("It is a palindrom");
    document.write("It is a palindrom");
  } else {
    // console.log("Not a palindrom string");
    document.write("Not a palindrom string");
  }
}

// let str = prompt("Enter any String to check a palindrom");

// function fun() {
//   //   alert("Hello");
//   // taking input string from the user by using prompt mehtod

//   palindrom(currentInput);
// }
