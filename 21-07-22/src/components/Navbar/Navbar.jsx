import "./index.css";
import Button from "../Button";

const Navbar = ({ setBtn, toggle }) => {
  return (
    <div className="Navbar">
      <Button
        btnTextCont={toggle ? "Hide" : "Show"}
        onHandleClick={() => setBtn(!toggle)}
      />
    </div>
  );
};

export default Navbar;
