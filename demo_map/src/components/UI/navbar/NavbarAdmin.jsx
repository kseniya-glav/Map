import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const NavbarAdmin = () => {
  return (
    <div className="navbar_admin">
      <div className="navbar__left">
        Социальный
        <br />
        навигатор
        <div className="img_logo" />
      </div>

      <div className="links_admin">
        <NavLink className="links" to="/map">
          Карта
        </NavLink>
        <NavLink className="links" to="/notice">
          Уведомления
        </NavLink>
        <NavLink className="links" to="/organization">
          Организации
        </NavLink>
        <NavLink className="links" to="/user">
          Пользователи
        </NavLink>
      </div>
    </div>
  );
};

export default NavbarAdmin;
