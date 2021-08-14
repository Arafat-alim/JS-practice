//promise 2 example

var userLogin = true;
var promise = new Promise((resolve, reject) => {
  if (userLogin) {
    setTimeout(() => {
      resolve("Login success");
    }, 1000);
  } else {
    reject("loggin Failed");
  }
});

setTimeout(() => {
  userLogin = false;
}, 500);
promise
  .then((succesmsg) => console.log(succesmsg))
  .catch((errormsg) => console.log(errormsg));
