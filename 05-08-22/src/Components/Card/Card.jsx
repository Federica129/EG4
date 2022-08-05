import "./index.css";
import Button from "../Button";

function Card({ data, setCount, count }) {
  return (
    <div className="Card">
      <div className="Parag">
        <p>{data?.slip?.advice}</p>
      </div>
      <div className="BtnBox">
        <Button
          textContent={"Click me"}
          classe={"btn"}
          onClick={() => setCount(count + 1)}
        />
      </div>
    </div>
  );
}

export default Card;
