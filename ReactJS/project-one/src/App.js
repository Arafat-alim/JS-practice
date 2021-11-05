import "./App.css";
import Purchased from "./Redux/Purchased";
import Cart from "./Redux/Cart";
import Total from "./Redux/Total";
import Login from "./Redux/Login";

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
