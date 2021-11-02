import React from "react";
import { useParams, useHistory, Prompt } from "react-router";

function Tdetails() {
  const params = useParams();
  const history = useHistory();
  console.log(history);
  console.log(params);
  const dataEntered = false;
  return (
    <div>
      {/* <Prompt when={!dataEntered} message="Do you want to leave this page" /> */}
      <Prompt
        when={!dataEntered}
        message={(location, action) => {
          if (location.pathname === "/about") {
            return false;
          } else {
            return true;
          }
        }}
      />
      <h1>Tutorial Details {params.title}</h1>
      <button onClick={() => history.goBack()}>Go Back!</button>
      <button onClick={() => history.push("/home")}>Home</button>
      <button onClick={() => history.replace("/tutorial/regex")}>Regex</button>
    </div>
  );
}

export default Tdetails;
