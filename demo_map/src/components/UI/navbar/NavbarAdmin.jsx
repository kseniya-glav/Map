import { NavLink } from "react-router-dom";
import "./Navbar.css";
import React, { useContext } from "react";
import { Context } from "../../../index";

const NavbarAdmin = () => {
  const { user } = useContext(Context);
  const role = user.user.role;

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.clear();
  };

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
        {role !== "user" && (
          <NavLink className="links" to="/organization">
            Организации
          </NavLink>
        )}
        {role === "admin" && (
          <NavLink className="links" to="/user">
            Пользователи
          </NavLink>
        )}
      </div>
      <div
        className="exit-button"
        data-tooltip="Выйти из аккаунта"
        onClick={() => logOut()}
      />
    </div>
  );
};

export default NavbarAdmin;
