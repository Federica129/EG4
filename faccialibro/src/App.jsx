import AddMessage from "./components/AddMessage";
import AddFriend from "./components/AddFriend";
import MessageCardList from "./components/MessageCardList";
import FriendCardList from "./components/FriendCardList";
import { useState } from "react";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  const [filterValue, setFilterValue] = useState();
  const [isRenderedList, setIsRenderedList] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(true);

  return (
    <div className="App">
      <Navbar
        isLoginVisible={isLoginVisible}
        setIsLoginVisible={setIsLoginVisible}
      />
      <div className="main-content">
        <div className="App__friends">
          <FriendCardList
            isRenderedList={isRenderedList}
            setIsRenderedList={setIsRenderedList}
            setFilterValue={setFilterValue}
          />
          <AddFriend
            isRenderedList={isRenderedList}
            setIsRenderedList={setIsRenderedList}
          />
        </div>
        <div className="App__messages">
          <AddMessage
            isRenderedList={isRenderedList}
            setIsRenderedList={setIsRenderedList}
          />
          <div className="inputFilter">
            <input
              type="text"
              placeholder="Filtra"
              onChange={(e) => setFilterValue(e.target.value)}
            ></input>
          </div>
          <MessageCardList
            isRenderedList={isRenderedList}
            setIsRenderedList={setIsRenderedList}
            filterValue={filterValue}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
