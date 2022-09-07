import styles from "./index.module.scss";
import {
  AiFillYoutube,
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.contact}>
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
      <div className={styles.copyright}>Made by Federica.</div>
    </div>
  );
};

export default Footer;
