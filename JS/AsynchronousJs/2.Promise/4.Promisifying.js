//! MOre callback code is converting into promise

function fetchData(cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = { pCode: 1001, pName: "Arafat" };
      resolve(data);
    }, 2000);
  });
}
console.log("starts here");
//calling a promise
fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Ends Here");
  });

//! output
//   starts here
