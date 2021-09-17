// ! There are 4 main things during execution of Aynschronous programming
//! 1. Call Stack , 2. Web APi, 3. Callback queue, and 4. Event Loop

console.log(1);
setTimeout(() => {
  console.log(2);
}, 2000);
console.log(3);

// console.log(1);
// ! CallStack

// setTimeout(), 2000;
// ! Web Api

// callback();
// ! Callback  Queue

// ! Event Loop -> Event loop always check whether my call stack is empty or not.
// ! if event loop found my call stack is empty then it will run my callback queue.
