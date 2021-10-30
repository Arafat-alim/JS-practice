import React from "react";
import About from "./Router/About";
import Home from "./Router/Home";
import Product from "./Router/Product";
import { Route, Link, Switch } from "react-router-dom";
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
      <Switch>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/tutorial">
          <Tutorial />
        </Route>
        <Route path="/tutorial/:title">
          <Tdetails />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default ReactRouter;
