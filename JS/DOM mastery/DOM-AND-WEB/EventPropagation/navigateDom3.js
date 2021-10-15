function btnClick() {
  const div1 = document.getElementById("div1");
  /* console.log(div1.firstChild); //empty space
  console.log(div1.firstElementChild); */
  console.log(div1.firstElementChild.nodeName); //HI
  console.log(div1.firstElementChild.nodeType); //1
  /* console.log(div1.lastChild);
  console.log(div1.lastElementChild); */
  console.log(div1.nextSibling); //empty text
  console.log(div1.nextElementSibling); //new div got
  console.log(div1.parentNode); //body
  console.log(div1.parentElement); //body
}
