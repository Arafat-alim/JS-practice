//! Implementing a Clock
let tObj;
function tryTimer() {
  tObj = setInterval(() => {
    document.getElementById("text").innerHTML = new Date();
  }, 1000);
}
function stopTimer() {
  clearInterval(tObj);
}

//! output
// Wed Oct 13 2021 01:12:55 GMT+0530 (India Standard Time)
