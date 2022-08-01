import "./index.css";
import Button from "../Button";
import { useReducer } from "react";

const Use_Reducer = () => {
  const data = [
    {
      text: "#000000",
      id: 1,
    },
    {
      text: "#ffffff",
      id: 2,
    },
    {
      text: "#001100",
      id: 3,
    },
    {
      text: "#ffggff",
      id: 4,
    },
  ];

  const initialState = { count: 0 }; //Dichiarare prima del useReducer per init
  
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }
const [state, dispatch] = useReducer(reducer, initialState);
  let list = data[state.count];

  return (
    <div className="Use_Reducer">
      <h1>UseReducer</h1>
      {/* count: {state.count} */}
      <p>text: {list.text}</p>
      <p>id: {list.id}</p>
      <Button
        textContent={"-"}
        onClick={() => dispatch({ type: "decrement" })}
        disabled={state.count < 1}
      />
      <Button
        textContent={"+"}
        onClick={() => dispatch({ type: "increment" })}
        disabled={state.count >= data.length - 1}
      />
    </div>
  );
};

export default Use_Reducer;
