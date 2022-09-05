import "./index.scss";
import { MdLocalMovies } from "react-icons/md";

const Navbar = ({ children }) => {
  return (
    <div className="Navbar">
      <div className="title">
        <div className="logo">
          <MdLocalMovies />
        </div>
        <h1>Lorem</h1>
      </div>
      {children}
      <div className="listNav">
        <ul>
          <li>Home</li>
          <li>Film</li>
          <li>Serie TV</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
