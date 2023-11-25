import React from "react";
import MyButton from "../myButton/MyButton";
import "./EntryAdmin.css";

const EntryAdmin = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 160px - 40px)",
      }}
    >
      <div style={{ display: "flex" }}>
        <div className="entryAdmin">
          <div
            className="name_text"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Администратор
          </div>
          <div className="name_text mini_text">Логин</div>
          <input type="text"></input>
          <div className="name_text mini_text">Пароль</div>
          <input type="password"></input>
        </div>
        <MyButton style={{ alignSelf: "flex-end" }}>Войти</MyButton>
      </div>
    </div>
  );
};

export default EntryAdmin;
