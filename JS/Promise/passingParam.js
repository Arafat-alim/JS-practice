// check user is logged in or not ?

var isUserLoggedIn = false;
var promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isUserLoggedIn) {
      resolve("User Logged in Successfully!");
    } else {
      reject("User Logged Out");
    }
  }, 1000);
});

promise.then((msg) => console.log(msg)).catch((error) => console.log(error));
