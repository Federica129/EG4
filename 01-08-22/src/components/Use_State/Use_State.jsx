import "./index.css";
import Button from "../Button";
import { useState } from "react";

const Use_State = () => {
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

  const [value, setValue] = useState(0);

  let list = data[value];

  return (
    <div className="Use_Reducer">
      <h1>UseState</h1>
      <p>text: {list.text}</p>
      <p>id: {list.id}</p>
      {/* <p>count: {value}</p> ho voluto provare col count normale.*/}
      <Button
        textContent={"-"}
        onClick={() => setValue(value - 1)}
        disabled={value === 0 ? true : false}
      />
      <Button
        textContent={"+"}
        onClick={() => setValue(value + 1)}
        disabled={value >= data.length - 1}
      />
    </div>
  );
};

export default Use_State;
