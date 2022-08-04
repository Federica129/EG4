import "./index.css";

function ColorCard({ color }) {
  return (
    <div className="ColorCard">
      <div className="Color" style={{ backgroundColor: color }}></div>
      <div className="Parag">
        <p style={{ color: color }}>{color}</p>
      </div>
    </div>
  );
}

export default ColorCard;
