console.log("Script loaded");
let list = document.getElementById("todo-list");
let inputBox = document.getElementById("input-todo");
// let firstItem = document.getElementById("item1");

var currentInput = "";
inputBox.addEventListener("input", function (e) {
  currentInput = e.target.value;
});
// click button add my node item
let addBtn = document.getElementById("add-item");
addBtn.addEventListener("click", function () {
  //   alert("hh");
  // adding textnode in the elem
  let newListElement = document.createElement("li");
  let textNode = document.createTextNode(currentInput);

  newListElement.appendChild(textNode);
  newListElement.id = "item" + (list.childElementCount + 1);
  //   list.appendChild(newListElement); //adding element in the last
  let firstItem = list.firstElementChild;
  list.insertBefore(newListElement, firstItem);
  inputBox.value = "";
  currentInput = "";
  console.log(list.childElementCount + 1);
});
