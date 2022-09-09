import styles from "./index.module.scss";
import {
  AiFillYoutube,
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = ({ allRef }) => {
  return (
    <div ref={allRef.refContact} className={styles.Footer}>
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

        <a href="https://www.facebook.com/" target="_blank">
          <AiFillFacebook />
        </a>
      </div>
      <div className={styles.copyright}>Made by Federica.</div>
    </div>
  );
};

export default Footer;
