let msg = "This is case sensitive Case";
let str = msg.match(/Case/); //null
let str1 = msg.match(/case/); //array
//match multiples
let str2 = msg.match(/case/g); //Array [ "case", "case" ]
//case insenstive with muliple matches
let str3 = msg.match(/case/gi); //Array [ "case", "Case" ]
console.log(str3);
