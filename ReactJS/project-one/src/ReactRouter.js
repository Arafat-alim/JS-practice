import React from "react";
import About from "./Router/About";
import Home from "./Router/Home";
import Product from "./Router/Product";
import { Route, Link, Switch } from "react-router-dom";

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
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default ReactRouter;
