import Button from "../Button";
import "./index.css";

const Todo = ({ todo, onClickPippo }) => {
  return (
    <div className="todo">
      <li>
        {todo.title}
        {/* Pluto (todo.id)*/}
      </li>
      <Button textContent={"x"} onClick={() => onClickPippo(todo.id)} />
    </div>
  );
};

export default Todo;
