import React from "react";
import { Link, useRouteMatch, Route } from "react-router-dom";
import Tdetails from "./Tdetails";

function Tutorial() {
  //   const match = useRouteMatch();
  const { url, path } = useRouteMatch();
  //   console.log(match);

  return (
    <div>
      <ul>
        <h1>Tutorial List</h1>
        <li>
          <Link to={`${url}/js`}>JS</Link>
        </li>
        <li>
          <Link to={`${url}/regex`}>Regex</Link>
        </li>
        <li>
          <Link to={`${url}/react`}>React</Link>
        </li>
        <li>
          <Link to={`${url}/node`}>Node</Link>
        </li>
        <li>
          <Link to={`${url}/typescript`}>Typescript</Link>
        </li>
      </ul>
      <Route path={`${path}/:title`}>
        <Tdetails />
      </Route>
    </div>
  );
}

export default Tutorial;
