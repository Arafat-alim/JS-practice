console.log("Script Loaded");
$(document).ready(function () {
  $("#fileInputControl").on("change", fileInputControlChangeEventHandler);
});

//creaing my event handler
function fileInputControlChangeEventHandler(e) {
  console.log(e.target);
  let fileInput = e.target;
  let files = fileInput.files; //collection of files
  let firstFile = files[0]; //single FIle got it

  // Reading my files using API - new FileReader()
  let fileReader = new FileReader();
  fileReader.onload = function (e) {
    // event listener
    let dataUrl = e.target.result; //now files is ready to preview
    // console.log(dataurl);
    console.log(dataUrl);
    $("#preview").attr("src", `${dataUrl}`); //! for image tag
    // $("#preview").css("backgroundImage", `url(${dataUrl})`); //!for div tag
  };
  fileReader.readAsDataURL(firstFile);
}
