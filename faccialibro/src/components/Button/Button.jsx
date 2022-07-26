import "./index.css";

const Button = ({ textContent, color, type, onClickPippo }) => {
  return (
    <button
      onClick={onClickPippo}
      type={type}
      className="Button"
      style={{ backgroundColor: color }}
    >
      {textContent}
    </button>
  );
};

export default Button;
