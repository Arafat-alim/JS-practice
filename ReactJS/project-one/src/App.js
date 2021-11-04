import "./App.css";
import Purchased from "./Redux/Purchased";
import Cart from "./Redux/Cart";
import Total from "./Redux/Total";
import PurchasedCl from "./Redux/PurchasedCL";

function App() {
  return (
    <div className="App">
      <Purchased />
      <PurchasedCl />
      <Cart />
      <Total />
    </div>
  );
}

export default App;
