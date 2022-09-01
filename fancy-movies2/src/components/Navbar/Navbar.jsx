import "./index.css";
import { BsLightningChargeFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="title">
        <div className="logo">
          <BsLightningChargeFill />
        </div>
        <h1>Lorem</h1>
      </div>
      <div className="listNav">
        <ul>
          <li>Tasto1</li>
          <li>Tasto2</li>
          <li>Tasto3</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
