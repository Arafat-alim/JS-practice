import React from "react";
import About from "./Router/About";
import Home from "./Router/Home";
import Product from "./Router/Product";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import Tutorial from "./Router/Tutorial";
import Tdetails from "./Router/Tdetails";

function ReactRouter() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/tutorial">Tutorial</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/tutorial">
          <Tutorial />
        </Route>
        <Route path="/tutorial/:title">
          <Tdetails />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default ReactRouter;
