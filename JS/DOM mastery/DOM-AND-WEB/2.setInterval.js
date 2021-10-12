//! usage of setInterval()
let cnt = 0;
let tObj;
function tryTimer() {
  tObj = setInterval(() => {
    document.getElementById("text").innerHTML = cnt;
    cnt++;
  }, 1000);
}
function stopTimer() {
  clearInterval(tObj);
}
