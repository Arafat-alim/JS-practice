function* genNatural(n) {
  let index = 1;
  while (true) {
    yield index++;
  }
}

//caling a generator function
const genNum = genNatural(5);

// generated upto 10
for (let i = 0; i < 10; i++) {
  document.write(genNum.next().value);
  // New Line
  document.write("<br>");
  //   console.log(genNum.next().value);
}
