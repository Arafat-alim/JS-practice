let timerId = setInterval(() => {
  console.log("hello I am back");
}, 2000);

setTimeout(() => {
  clearInterval(timerId);
  alert("End of this timerid");
}, 5000);
