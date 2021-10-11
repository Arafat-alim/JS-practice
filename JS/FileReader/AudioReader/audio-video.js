$(document).ready(function () {
  $("#fileInputControl").on("change", fileInputControlChangeEventHandler);
});

function fileInputControlChangeEventHandler(e) {
  console.log(e.target);
  let inputFIle = e.target;
  let files = inputFIle.files; //collecton of files found here
  let firstFile = files[0]; //selected single file for reading

  //now time to read the files
  let fileReader = new FileReader();
  //onloading my result get
  fileReader.onload = function (e) {
    let resultFile = e.target.result; //final uploaded file

    $("#preview").attr("src", `${resultFile}`);
  };
  fileReader.readAsDataURL(firstFile);
}
