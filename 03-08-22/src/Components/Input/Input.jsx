import "./index.css";

const Input = ({ type, name, placeholder, onKeyUp, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onKeyUp={onKeyUp}
      value={value}
      onChange={onChange}
      required
    />
  );
};

export default Input;
