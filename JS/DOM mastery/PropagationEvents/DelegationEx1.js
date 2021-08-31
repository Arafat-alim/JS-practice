var element = document.querySelector("#category");
element.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.tagName == "LI") {
    window.location.href = "/" + e.target.id;
  }
});
// console.log(element);
