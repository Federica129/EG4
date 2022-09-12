import styles from "./index.module.scss";
import {
  AiFillYoutube,
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.contact}>
        <a href="https://www.youtube.com/" target="_blank">
          <AiFillYoutube />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/Federica129" target="_blank">
          <AiFillGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/federica-schillaci/"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
      </div>
      <div className={styles.copyright}>Made by Federica.</div>
    </div>
  );
};

export default Footer;
