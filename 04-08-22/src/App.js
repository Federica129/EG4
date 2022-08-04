import "./App.css";
import ColorCard from "./Components/ColorCard";
import ColorList from "./Components/ColorList";
import MainContent from "./Components/MainContent";

const color = ["#411530", "#D1512D", "#F5C7A9"];

function App() {
  return (
    <div className="App">
      <MainContent>
        <h1>Children di MainContent</h1>
        <ColorList color={color} />
      </MainContent>
    </div>
  );
}

export default App;
