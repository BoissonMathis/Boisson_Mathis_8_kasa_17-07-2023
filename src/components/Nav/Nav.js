import { NavLink } from "react-router-dom";
import logo from "../../assets/desktop/logo.png";
import "../Nav/Nav.scss";
import { about, home } from "../../Routes/Routes";

function Nav() {
  return (
    <div className="nav">
      <NavLink to={home}>
        <img src={logo} alt="kasa" />
      </NavLink>
      <ul className="kasa-nav">
        <NavLink
          to={home}
          className={({ isActive }) => `font24 ${isActive ? "underline" : ""}`}
        >
          Accueil
        </NavLink>
        <NavLink
          to={about}
          className={({ isActive }) => `font24 ${isActive ? "underline" : ""}`}
        >
          A propos
        </NavLink>
      </ul>
    </div>
  );
}

export default Nav;
