import "./index.scss";
import {
  AiFillYoutube,
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__contact">
        <span>
          <AiFillYoutube />
        </span>
        <span>
          <AiFillInstagram />
        </span>
        <span>
          <AiFillGithub />
        </span>{" "}
        <span>
          <AiFillFacebook />
        </span>
      </div>
      <div className="Footer__copyright">Made by Federica.</div>
    </div>
  );
};

export default Footer;
