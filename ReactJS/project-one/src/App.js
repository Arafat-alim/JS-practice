import "./App.css";
import ReactRouter from "./ReactRouter";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ReactRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
