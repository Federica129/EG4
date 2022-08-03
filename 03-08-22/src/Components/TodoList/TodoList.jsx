import "./index.css";
import Todo from "../Todo";

const TodoList = ({ todos, handleDeleteDispatch }) => {
  return (
    <ul>
      {todos.map((item) => (
        <Todo key={item.id} todo={item} onClickPippo={handleDeleteDispatch} />
      ))}
    </ul>
  );
};

export default TodoList;
