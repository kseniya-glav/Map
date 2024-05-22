import React, { useContext, useState } from "react";
import MyButton from "../myButton/MyButton";
import "./EntryAdmin.css";

import { useNavigate } from "react-router-dom";
import { login } from "../../../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../../..";

const EntryAdmin = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = async () => {
    try {
      const data = await login(email, password);
      console.log(data);
      user.setUser(data);
      user.setIsAuth(true);
      navigate("/");
    } catch (e) {
      alert(e.response.data.message);
    }
  };

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
          <input
            type="text"
            placeholder="Введите ваш email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="name_text mini_text">Пароль</div>
          <input
            type="password"
            placeholder="Введите ваш пароль..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <MyButton style={{ alignSelf: "flex-end" }} onClick={click}>
          Войти
        </MyButton>
      </div>
    </div>
  );
});

export default EntryAdmin;
