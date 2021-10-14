const btn1 = document.getElementById("btnClick");
const btn2 = document.getElementById("btnDiv");
window.onload = function () {
  btn1.addEventListener("click", btnClick, true);
  btn2.addEventListener("click", btnDiv, true);
};

/* true - capturing;
false - bubbling; */

function btnClick() {
  alert("BUtton click");
}
function btnDiv() {
  alert("Button div");
}
