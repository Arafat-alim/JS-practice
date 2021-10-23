//Given - loop will move on to 100 times and make Fizz Buzz Question
let n = 100;
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 === 0) {
    console.log("FIZZBUZZ", i);
  }
  if (i % 3 === 0) {
    console.log("Fizz", i);
  } else if (i % 5 === 0) {
    console.log("buzz", i);
  }
}
