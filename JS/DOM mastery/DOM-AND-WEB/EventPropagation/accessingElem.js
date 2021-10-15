function btnClicked() {
  const tDiv = document.getElementById("test");
  const e1 = document.getElementsByClassName("a"); //HTMLCollection { 0: h1.a
  const e2 = document.getElementsByName("para");
  const e3 = document.getElementsByTagName("p");
  const e4 = tDiv.getElementsByTagName("p");
  const e5 = tDiv.getElementById("test"); //we cant do like this
  console.log(e1);
  console.log(e2);
  console.log(e3);
  console.log(e4);
}
