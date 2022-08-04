import "./index.css";

function ColorCard({ color }) {
  return (
    <div className="ColorCard">
      <div className="Color" style={{ backgroundColor: color }}></div>
      <div className="Parag">
        <p>#001AFF</p>
      </div>
    </div>
  );
}

export default ColorCard;
