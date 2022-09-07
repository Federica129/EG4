import styles from "./index.module.scss";
import { MdLocalMovies } from "react-icons/md";

const Navbar = ({ children }) => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.title}>
        <div className={styles.logo}>
          <MdLocalMovies />
        </div>
        <h1>Lorem</h1>
      </div>
      {children}
      <div className={styles.listNav}>
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
