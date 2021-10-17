//! want res ka bhi square
(async function showing() {
  try {
    let res = await cSq(5);
    console.log(res); //25
    let res1 = await cSq(res); //625
    console.log(res1);
    let res2 = await cSq(res1); //390625
    console.log(res2);
  } catch (Err) {
    console.log(Err);
  }
})();
