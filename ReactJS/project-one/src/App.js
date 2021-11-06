import "./App.css";

import Login from "./Redux-Toolkit/Login";
import Cart from "./Redux-Toolkit/Cart";
import Purchased from "./Redux-Toolkit/Purchased";
import Total from "./Redux-Toolkit/Total";

function App() {
  return (
    <div className="App">
      <Login />
      <Purchased />
      <Cart />
      <Total />
    </div>
  );
}

export default App;
