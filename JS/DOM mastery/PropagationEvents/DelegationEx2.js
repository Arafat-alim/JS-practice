//Event Propagation - Delegation- it is a part of bubbling, acts similiar as bubbling
var element = document.querySelector("#category");
element.addEventListener("keyup", (e) => {
  if (e.target.dataset.uppercase != undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});
