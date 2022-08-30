import "./App.css";
import AddList from "./components/AddList";
import ToDoList from "./components/ToDoList";
import { BsStars } from "react-icons/bs";
import { WiStars } from "react-icons/wi";
import { useState } from "react";

function App() {
  const [list, setList] = useState([
    "Studiare",
    "Leggere la documentazione",
    "Imparare useState",
  ]);
  const [value, setValue] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setList([...list, value]);
    setValue("");
  };

  const onDeleteBtn = (index) => {
    console.log(index);
    setList(list.filter((e, i, a) => e !== a[index]));
  };

  return (
    <div className="App">
      <ToDoList>
        <div className="title">
          <WiStars className="stars" />
          <BsStars className="stars" />
          <h1>To-do-list</h1>
          <BsStars className="stars" />
          <WiStars className="stars" />
        </div>
        <AddList
          list={list}
          onSubmit={onHandleSubmit}
          value={value}
          setValue={setValue}
          onDeleteBtn={onDeleteBtn}
        />
      </ToDoList>
    </div>
  );
}

export default App;
