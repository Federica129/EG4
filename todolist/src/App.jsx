import "./App.css";
import AddList from "./components/AddList";
import ToDoList from "./components/ToDoList";
import { useState } from "react";

function App() {
  const [list, setList] = useState([
    "Studiare",
    "Leggere la documentazione",
    "imparare lo useState",
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
        <h1>To do list</h1>
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
