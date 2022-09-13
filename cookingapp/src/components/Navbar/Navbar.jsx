import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";

function Navbar() {
  const links = [
    { href: "/", label: "Home", title: "Home" },
    { href: "/catalogo", label: "Catalogo", title: "Catalogo" },
  ];

  return (
    <div className={styles.Navbar}>
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
