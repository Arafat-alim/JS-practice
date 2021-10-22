//! get a value from the
//! check whether a string is a vowel and consonant

let ch = String(prompt("Enter a String Character -")).toLowerCase();
if (isNaN(ch)) {
  if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
    console.log(`${ch} is a Vowel`);
  } else {
    console.log(`${ch} is a Consonant`);
  }
} else {
  alert("Please Enter a String Character");
}
