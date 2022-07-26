import AddMessage from "./components/AddMessage";
import MessageCardList from "./components/MessageCardList";
import FriendCardList from "./components/FriendCardList";
import { useState } from "react";

import "./App.css";

function App() {
  const [filterValue, setFilterValue] = useState();
  const [isRenderedList, setIsRenderedList] = useState(false);

  return (
    <div className="App">
      <div className="App__friends">
        <FriendCardList setFilterValue={setFilterValue} />
      </div>
      <div className="App__messages">
        <AddMessage
          isRenderedList={isRenderedList}
          setIsRenderedList={setIsRenderedList}
        />
        <input
          type="text"
          placeholder="Filtra"
          onChange={(e) => setFilterValue(e.target.value)}
        ></input>
        <MessageCardList
          isRenderedList={isRenderedList}
          setIsRenderedList={setIsRenderedList}
          filterValue={filterValue}
        />
      </div>
    </div>
  );
}

export default App;
