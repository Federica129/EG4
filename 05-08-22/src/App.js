import "./App.css";
import Card from "./Components/Card";
import ColorList from "./Components/ColorList";
import MainContent from "./Components/MainContent";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({});
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [count]); //SENZA [] dependency, useEffect esegue all'infinito.

  return (
    <div className="App">
      <MainContent>
        {/* <h6 className="h6App">Children di MainContent</h6> */}
        <ColorList>
          {/* <h6>Children di List</h6> */}
          <Card data={data} setCount={setCount} count={count} />
        </ColorList>
      </MainContent>
    </div>
  );
}

export default App;
