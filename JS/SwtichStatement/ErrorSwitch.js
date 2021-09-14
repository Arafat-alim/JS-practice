let counter = 1;
switch (counter) {
  case 1:
    let name = "Arafat";
    document.write(`Welcome ${name}`);
    break;
  case 2:
    let name = "Aman"; // error redeclaration
  default:
    break;
}
