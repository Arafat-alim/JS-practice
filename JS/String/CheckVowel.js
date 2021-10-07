//! this is the program ask the user to enter a string
//! And according to the string we can say a given string is vowel or consonant.

let ch;
function getVal() {
  ch = prompt("ENter a string - ").toLowerCase();
  if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
    console.log("Character is vowel");
  } else {
    console.log("Character is consonant");
  }
}

getVal();
