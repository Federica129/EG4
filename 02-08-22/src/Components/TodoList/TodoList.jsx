import "./index.css";
import Todo from "../Todo";

const TodoList = ({ todos, setTodos }) => {
  const onClickPippo = (pluto) => {
    setTodos(todos.filter((el) => el.id !== pluto));
  };

  return (
    <ul>
      {todos.map((item, i) => (
        <Todo key={i} todo={item} onClickPippo={onClickPippo} />
      ))}
    </ul>
  );
};

export default TodoList;
