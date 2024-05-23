import React, { useContext, useState, useEffect } from "react";
import { observer } from "mobx-react-lite";

import MyButton from "../myButton/MyButton";
import "./Users.css";
import Modal from "../modal/modal";
import { fetchAllUsers, registration } from "../../../http/userAPI";
import { Context } from "../../../index";

const Users = observer(() => {
  const { user } = useContext(Context);

  useEffect(() => {
    fetchAllUsers().then((data) => user.setAllUsers(data));
  }, [user]);

  const [fio, setFio] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  const [modalActive, setModalActive] = useState(false);
  const addUser = async () => {
    try {
      await registration(fio, email, phone, role, password);
      setModalActive(false);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  const access = [
    { name: "Уведомления", role: "user" },
    { name: "Уведомления + организации", role: "editor" },
    { name: "Уведомления + организации + пользователи", role: "admin" },
  ];

  return (
    <div className="users">
      <div className="org_left">
        <div className="list_org_users">
          {user.allUsers?.map((item, index) => (
            <MyButton style={{ margin: "4px 0" }} key={index}>
              {item.email}
            </MyButton>
          ))}
        </div>
        <div className="btn_add">
          <MyButton onClick={() => setModalActive(true)}>
            Добавить пользователя
          </MyButton>
        </div>
      </div>
      <div className="org_rigth">
        <div className="name_text">Карточка пользователя</div>
        <div className="org_cart_users">
          <div className="name_text mini_text">
            ФИО
            <input type="text"></input>
          </div>

          <div className="stroka">
            <div className="stroka_2 name_text mini_text">
              Электронная почта
              <input type="email"></input>
            </div>

            <div className="stroka_2 name_text mini_text">
              Телефон
              <input type="tel"></input>
            </div>
          </div>

          <div className="name_text mini_text">
            Пароль
            <input type="text"></input>
          </div>

          <div className="add_type name_text mini_text">
            Доступ
            {access.map((dostup, index) => (
              <label style={{ fontSize: "16px" }} key={index}>
                <input
                  type="radio"
                  className="check_type"
                  name="a"
                  value={dostup.role}
                />
                {dostup.name}
              </label>
            ))}
          </div>

          <div className="stroka" style={{ marginTop: "30px" }}>
            <div className="stroka_2">
              <MyButton>Удалить</MyButton>
            </div>
            <div className="stroka_2">
              <MyButton>Сохранить</MyButton>
            </div>
          </div>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <div>
          <form>
            <div className="name_text center">Добавить пользователя</div>
            <div className="name_text mini_text">ФИО</div>
            <input
              type="text"
              value={fio}
              onChange={(e) => setFio(e.target.value)}
            />

            <div className="stroka_2 name_text mini_text">
              Электронная почта
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="stroka_2 name_text mini_text">Телефон</div>
            <input
              type="number"
              min="0"
              max="99999999999"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <div className="stroka_2 name_text mini_text">Пароль</div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div
              className="flex_column"
              onChange={(e) => setRole(e.target.value)}
            >
              Доступ
              {access.map((item, index) => (
                <label style={{ fontSize: "16px" }} key={index}>
                  <input
                    className="check_type"
                    type="radio"
                    name="access"
                    value={item.role}
                  />
                  {item.name}
                </label>
              ))}
            </div>
          </form>

          <div className="stroka" style={{ marginTop: "30px" }}>
            <div className="stroka_2">
              <MyButton onClick={() => setModalActive(false)}>
                Отменить
              </MyButton>
            </div>
            <div className="stroka_2">
              <MyButton onClick={addUser}>Добавить</MyButton>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
});

export default Users;
