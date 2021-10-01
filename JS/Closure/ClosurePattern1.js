function test() {
  function test2() {
    console.log("inner called");
  }
  test2();
}
test();
