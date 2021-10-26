import React, { useState } from "react";
import ChangeState from "./ChangeState";
import DisplayCounter from "./DisplayCounter";
import DisplayFlag from "./DisplayFlag";
import Footer from "./Footer";
import Header from "./Header";

function IndexFile() {
  //! making states
  const [cnt, setCount] = useState(0);
  const [mflag, setFlag] = useState(true);
  //! function calls to update the state
  const handleCounter = () => {
    setCount(cnt + 1);
  };
  const handleFlag = () => {
    setFlag(!mflag);
  };

  return (
    <div>
      <Header />
      <DisplayCounter Counter={cnt} />
      <DisplayFlag flag={mflag} />
      <ChangeState caption={"Counter"} click={handleCounter} />
      <ChangeState caption={"Flag"} click={handleFlag} />
      <Footer />
    </div>
  );
}

export default IndexFile;
