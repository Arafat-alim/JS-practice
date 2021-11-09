//WE want number or digit from the string
let str = "Hello HTML5, CSS3, React 16.7, Angular 8";
let pattern = /\d/g; //! Array(6) [ "5", "3", "1", "6", "7", "8" ]
//WE dont want any number or digit from the string
let pattern1 = /\D/g;
console.log(str.match(pattern1));

//we want all the character in my string including both the character ,digit and symbol(Except some)
let str2 = "Yes! One1 _Two ?Kaisa &Bhai";
let pattern2 = /\w/g; //! Array(20) [ "Y", "e", "s", "O", "n", "e", "1", "_", "T", "w", … ]
//! Except & ! .(Dot) and

//! Now we want all the indiviual words
let pattern3 = /\w\w+/g; //! Array(5) [ "Yes", "One1", "_Two", "Kaisa", "Bhai" ]
console.log(str2.match(pattern3));

//! Now we want to get all symbol including everything and spaces (not any characters)
let pattern4 = /\W/g;
console.log(str2.match(pattern4));

//! Now we want to get all the spaces including tabs
let str3 = "Yes! 1I do\t know & 10\n timees i_say";
let pattern5 = /\s/g; //! Array(9) [ " ", " ", "\t", " ", " ", " ", "\n", " ", " " ]
console.log(str3.match(pattern5));

//! Now dont want \t \n etc just want everythimng string number and symbol
let patter6 = /\S/g; //! Array(25) [ "Y", "e", "s", "!", "I", "d", "o", "k", "n", "o", … ]
console.log(str3.match(patter6));
