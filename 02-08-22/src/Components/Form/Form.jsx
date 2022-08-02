import "./index.css";
import Button from "../Button";
import TodoList from "../TodoList";
import { useState } from "react";
import Input from "../Input";

const Form = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "imparare React" },
    { id: 2, title: "imparare gli state" },
    { id: 3, title: "imparare i componenti funzionali" },
  ]);

  const [task, setTask] = useState("");

  const onChangeTask = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;

    setTodos([...todos, { id: todos.length + 1, title: task }]);
    setTask("");
    console.log(todos);
  };

  return (
    <div className="Form">
      <form className="Form__input">
        <label>Aggiungi todo:</label>
        <Input
          value={task}
          type="text"
          placeholder="Aggiungi todo"
          name="Todo"
          onChange={onChangeTask}
        />
        <br />
      </form>
      <div className="Button">
        <Button textContent={"Aggiungi"} onClick={handleSubmit} />
      </div>
      <div className="list">
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default Form;
