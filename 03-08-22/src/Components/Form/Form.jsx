import "./index.css";
import Button from "../Button";
import TodoList from "../TodoList";
import { useReducer } from "react";
import Input from "../Input";

const initState = {
  tasks: [
    { id: 1, title: "imparare React" },
    { id: 2, title: "imparare gli state" },
    { id: 3, title: "imparare i componenti funzionali" },
  ],
  counter: 4,
};

// console.log(init.taskDefault);

const reducer = (state, action) => {
  let { type, payload } = action;
  let { tasks, counter } = state;

  switch (type) {
    case "AddTask":
      {
        let id = counter;
        counter++;
        tasks = [...tasks, { id, ...taskNew }];
        console.log(state);
      }
      break;

    case "DeleteTask":
      tasks = tasks.filter((obj) => obj.id !== payload);

      break;

    default:
  }
  return { ...state, tasks, counter };
};

const taskNew = {};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  const onChangeTask = (e) => {
    taskNew.title = e.target.value;
    console.log(taskNew);
  };

  const handleAddDispatch = () => {
    dispatch({ type: "AddTask" });
  };

  const handleDeleteDispatch = (id) => {
    dispatch({
      type: "DeleteTask",
      payload: id,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (task.trim() === "") return;

  //   setTodos([...todos, { id: todos.length + 1, title: task }]);
  //   setTask("");
  //   console.log(todos);
  // };

  return (
    <div className="Form">
      <form className="Form__input">
        <label>Aggiungi todo:</label>
        <Input
          // value={task}
          type="text"
          placeholder="Aggiungi todo"
          name="Todo"
          onChange={onChangeTask}
        />
        <br />
      </form>
      <div className="Button">
        <Button textContent={"Aggiungi"} onClick={handleAddDispatch} />
      </div>
      <div className="list">
        <TodoList
          todos={state.tasks}
          handleDeleteDispatch={handleDeleteDispatch}
        />
      </div>
    </div>
  );
};

export default Form;
