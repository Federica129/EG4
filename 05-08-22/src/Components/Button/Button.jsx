import "./index.css";

const Button = ({ textContent, color, onClick, classe, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={classe}
      style={{ backgroundColor: color }}
      disabled={disabled}
    >
      {textContent}
    </button>
  );
};

export default Button;
