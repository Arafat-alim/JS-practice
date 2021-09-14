// ! What is the precedence order between local and global variables
//! local variable got more precendence than global variable

var msg = "Why king is ill?";
function show() {
  msg = "Dont know! King COmeback soon";
  console.log(msg);
}
show();
