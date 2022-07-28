import Button from "../Button";
import "./index.css";
import logo from "../../assets/logoipsum-logo-35.svg";
import Modal from "../Modal";

const Navbar = ({ isLoginVisible, setIsLoginVisible }) => {
  return (
    <div className="Navbar">
      <div className="logo">
        <img src={logo} alt="" />
        <h2>SocialFake</h2>
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
      <Button
        classe="Button"
        textContent={localStorage.getItem("username") ? "Log out" : "Login"}
        onClickPippo={
          localStorage.getItem("username")
            ? () => {
                localStorage.removeItem("username");
                window.location.reload();
              }
            : () => setIsLoginVisible(true)
        }
      />
      <Modal
        type="login"
        isModalVisible={isLoginVisible}
        setIsModalVisible={setIsLoginVisible}
        textContent="Accedi"
      />
    </div>
  );
};

export default Navbar;
