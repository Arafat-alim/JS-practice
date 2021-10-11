console.log("script loaded");
$(document).ready(function () {
  $("#fileInputControl").on("change", fileInputControlChangeEventHandler);
});

function fileInputControlChangeEventHandler(e) {
  console.log(e.target);
  let fileInput = e.target;
  //select the file
  let files = fileInput.files; //collection of files

  let firstFile = files[0]; //single file for good practicing

  //!reading my files
  //creating an object using API
  let fileReader = new FileReader();
  //before reading the file we need a onload
  fileReader.onload = function (e) {
    //event listener
    // let fileContent = fileReader.result;
    let fileContent = e.target.result;
    // console.log(fileContent);
    $("#preview").text(fileContent);
  };
  //OR,
  //   fileReader.on("load", function () {});

  //now file Reader methods -
  fileReader.readAsText(firstFile);
}
