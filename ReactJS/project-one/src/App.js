import "./App.css";
// import PersInfo from "./components/PersInfo";
import CounterWithState2 from "./components/CounterWithState2";
import LazyInitialization3 from "./components/LazyInitialization3";

function App() {
  return (
    <div className="App">
      {/* <PersInfo name="Arafat" age="24" /> */}
      <LazyInitialization3 />
    </div>
  );
}

export default App;
