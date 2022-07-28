import "./index.css";

const Button = ({
  textContent,
  color,
  type,
  onClickPippo,
  paddingSize,
  classe,
}) => {
  return (
    <button
      onClick={onClickPippo}
      type={type}
      className={classe}
      style={{ backgroundColor: color }}
      style1={{ padding: paddingSize }}
    >
      {textContent}
    </button>
  );
};

export default Button;
