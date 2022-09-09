import styles from "./index.module.scss";
import { MdLocalMovies } from "react-icons/md";

const Navbar = ({ children, allRef }) => {
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
          <li onClick={() => window.scroll({ top: 0 })}>Home</li>
          <li
            onClick={() =>
              window.scrollTo({ top: allRef.refMovie.current.offsetTop - 50 })
            }
          >
            Film
          </li>
          <li
            onClick={() =>
              window.scrollTo({ top: allRef.refPopular.current.offsetTop - 50 })
            }
          >
            Popular
          </li>
          <li
            onClick={() =>
              window.scrollTo({ top: allRef.refContact.current.offsetTop - 50 })
            }
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
