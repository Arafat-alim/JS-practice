import React from "react";
import { useParams } from "react-router";

function Tdetails() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>Tutorial Details {params.title}</h1>
    </div>
  );
}

export default Tdetails;
