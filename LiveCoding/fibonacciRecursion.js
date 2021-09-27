// ! Fibonacci series - Recursion

function myfun() {
  let input = document.getElementById("num").value;

  if (input) {
    let ans = fibo(input);
    document.getElementById("msg").innerText = ans;
    document.getElementById("num").value = "";
  } else {
    alert("Please enter a valid input");
    document.getElementById("num").value = "";
  }
}

function fibo(number) {
  if (number === 1) {
    return 1;
  }
  if (number === 0) {
    return 0;
  }
  for (let i = 1; i <= number; i++) {
    return fibo(number - 1) + fibo(number - 2);
  }
}

//  <label for="number">Enter a Number to check</label>
//     <input type="number" placeholder="Enter a number" id="num" />
//     <button onclick="myfun()">Submit</button>
//     <p id="msg"></p>
//     <script src="./fibonacciRecursion.js"></script>
