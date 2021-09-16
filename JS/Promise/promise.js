//!Promise

//user LogginSYsytem
var userLoggin = true;
//create a promise object using new Promise constructor
var promise = new Promise((resolve, reject) => {
  //Promise is successfully
  if (userLoggin) {
    setTimeout(() => {
      resolve();
    }, 1000);
  } else {
    reject();
  }
});

setTimeout(() => {
  userLoggin = false;
}, 5000);

promise
  .then(() => {
    //if my promise is success then
    console.log("Promise is successfully filled");
  })
  .catch(() => {
    console.log("Ooops successful nahi hua mera promse  :(");
  });
