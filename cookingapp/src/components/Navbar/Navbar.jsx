import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";
import {
  AiFillYoutube,
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

function Navbar() {
  const links = [
    { href: "/", label: "Home", title: "Home" },
    { href: "/catalogo", label: "Catalogo", title: "Catalogo" },
  ];

  return (
    <div className={styles.Navbar}>
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
      <ul>
        {links.map(({ href, label, title }) => (
          <li key={href}>
            <NavLink
              to={href}
              title={title}
              style={({ isActive }) => ({
                pointerEvents: isActive ? "none" : "auto",
                borderBottom: isActive ? "1px solid white" : "none",
                color: isActive ? "#d8d8d8" : "white",
              })}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
