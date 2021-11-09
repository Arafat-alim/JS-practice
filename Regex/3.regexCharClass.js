let str = "I wonder why its windy";
let pttrn = /w.n/g; //Array [ "won", "win" ]
//! We want entire word
let pttrn2 = /w.n\w+/g; //Array [ "wonder", "windy" ]

//! The (.)dot searches all characters except for the new line.
let str2 = "I w\nnder why its windy";
let pattrn3 = /w.n\w+/g; //! Array [ "windy" ]

let pattrn4 = /w.n\w+/gs; //! Array [ "w\nnder", "windy" ]
console.log(str2.match(pattrn4));

//! First character can be any character, Second character should be “h” and then rest of letters.

let str3 = "This is what that is ";
let pattern4 = /.h\w+/g; //! Array(3) [ "This", "what", "that" ]
console.log(str3.match(pattern4));
