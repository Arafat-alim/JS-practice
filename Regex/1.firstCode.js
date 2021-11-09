let msg = "This is case sensitive";
let msg2 = "This is Case Sensitive";
let pos = msg.search("case"); //8
let pos1 = msg2.search("case"); //-1 not found
console.log(pos);
console.log(pos1);
//! If we want case insensitive

let msg3 = "This is CaSe sensitive";
let pos2 = msg3.search(/case/i); //8
console.log(pos2);

//! Now we are using RegEx() class
let msg4 = "This is case sensitive";
let pttn = RegExp("case", "i"); //! RegExp form
let pos3 = msg4.search(pttn);
console.log("Regex class Pattern =", pos3);
