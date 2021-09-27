// script loaded
//basic thing
// let numb = document.getElementById("num").value;

function fibo(numb) {
  //   console.log(numb);
  //   if (numb === 1) {
  //     return 1;
  //   }
  //   if (numb === 0) {
  //     return 0;
  //   }
  let num1 = 0;
  let num2 = 1;
  let sum = 0;
  for (let i = 1; i <= numb; i++) {
    console.log(num1);
    sum = num1 + num2;
    console.log(sum);
    num1 = num2;
    num2 = sum;
  }
  //   return num2;
}

let ans = fibo(10);
console.log(ans);
