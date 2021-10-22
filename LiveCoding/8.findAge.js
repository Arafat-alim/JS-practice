function age(n) {
  let currentFullDate = new Date();
  let curryear = currentFullDate.getFullYear();
  let age = curryear - n;
  console.log(age);
}

let n = parseInt(prompt("Enter an age "));
age(n);
