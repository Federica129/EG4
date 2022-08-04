import "./App.css";
import ColorCard from "./Components/ColorCard";
import ColorList from "./Components/ColorList";
import MainContent from "./Components/MainContent";

const color = ["red", "blue", "green"];

function App() {
  return (
    <div className="App">
      <MainContent {...color} />
    </div>
  );
}

export default App;
