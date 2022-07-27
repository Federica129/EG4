import "./index.css";
import logo from "./logoipsum-logo-35.svg";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="ullist">
        <ul>
          <li>
            <a href="#">Mex</a>
          </li>
          <li>
            <a href="#">Friends</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
