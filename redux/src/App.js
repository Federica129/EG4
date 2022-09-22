import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  //useSelector funge da context, prendi il value/store del provider

  const [username, setUsername] = useState("");
  const [task, setTask] = useState("");
  console.log(state.list.todo);

  return (
    <>
      <div className="App">
        <h1>{state.count.value}</h1>
        <button
          onClick={() => {
            dispatch({ type: "INCREMENT" });
            // console.log(state.count.value);
          }}
        >
          +
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
        <h1>{state.user.name}</h1>
        <input
          type="text"
          placeholder="Scrivi"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          onClick={() => {
            setUsername("");
            dispatch({ type: "NAME", payload: username });
          }}
        >
          Invio
        </button>
      </div>
      <div>
        <div className="box2">
          <div>
            <h1>To do</h1>
            <input
              type="text"
              placeholder="Scrivi"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button
              onClick={() => {
                setTask("");
                dispatch({ type: "ADD", payload: task });
              }}
            >
              Invio
            </button>
          </div>
          <div className="list">
            <ol key={1}>
              {state.list.todo.map((e, i) => (
                <div className="li">
                  <li>{e} </li>{" "}
                  <button
                    onClick={() => {
                      dispatch({ type: "DELETE", payload: i });
                    }}
                  >
                    x
                  </button>
                </div>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
