import React from "react";
import { useParams, useHistory } from "react-router";

function Tdetails() {
  const params = useParams();
  const history = useHistory();
  console.log(history);
  console.log(params);
  return (
    <div>
      <h1>Tutorial Details {params.title}</h1>
      <button onClick={() => history.goBack()}>Go Back!</button>
      <button onClick={() => history.push("/home")}>Home</button>
      <button onClick={() => history.replace("/tutorial/regex")}>Regex</button>
    </div>
  );
}

export default Tdetails;
