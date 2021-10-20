import "./App.css";
import PersInfo from "./components/PersInfo";

function App() {
  return (
    <div className="App">
      <PersInfo name="Arafat" age="24" />
      <PersInfo name="kashif" age="20" />
      <PersInfo name="Mehmood" age="21" />
    </div>
  );
}

export default App;
