import { NavLink } from "react-router-dom";
import LocalityBar from "../localityBar/LocalityBar";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        Социальный
        <br />
        навигатор
        <div className="img_logo" />
      </div>

      <div className="navbar__center">
        <NavLink className="links" to="/map">
          Карта
        </NavLink>
        <NavLink className="links" to="/add">
          Добавить организацию
        </NavLink>
      </div>

      <div className="navbar__right">
        <LocalityBar />
      </div>
    </div>
  );
};

export default Navbar;
