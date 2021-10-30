import "./App.css";
import About from "./Router/About";
import Home from "./Router/Home";
import Product from "./Router/Product";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/product">
        <Product />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </div>
  );
}

export default App;
