function btnClick() {
  /* console.log(document.documentElement); //content of html from beginnign to end //top most node below the document
  console.log(document.head);
  console.log(document.body);
  console.log(document.body.childNodes); //inclding empty space
  console.log(document.body.children); //excluding empty space, regular element
  console.log(document.body.children.length); //length of children node */
  //loop throught the dom
  for (let i = 0; i < document.body.children.length; i++) {
    console.log(document.body.children[i]);
  }
  //   for (let i = 0; i < document.body.childNodes.length; i++) {
  //     console.log(document.body.childNodes[i]);
  //   }
}
