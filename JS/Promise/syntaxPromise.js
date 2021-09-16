//! basic Syntax of a promise
// var promise = new Promise(function (resolve, reject) {});
// var promise1 = new Promise((resolve, reject) => {});

//codes
var isUserLoggedIn = true;
var promise = new Promise((resolve, reject) => {
  // wait for 1 sec
  setTimeout(() => {
    // if my task is successful
    if (isUserLoggedIn) {
      resolve(); // we can pass an arguement also.
    } else {
      reject(); // we can pass an arguement also.
    }
  }, 1000);
});

// if user is logged out after 5miliseconds
setTimeout(() => {
  isUserLoggedIn = false;
}, 500);
promise
  .then(() => console.log("User Logged In"))
  .catch(() => console.log("User Logged Out"));
