import "./App.css";
import Purchased from "./Redux/Purchased";
import Cart from "./Redux/Cart";
import Total from "./Redux/Total";

function App() {
  return (
    <div className="App">
      <Purchased />
      <Cart />
      <Total />
    </div>
  );
}

export default App;
