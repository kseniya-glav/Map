import React, { useContext, useState, useEffect } from "react";
import { observer } from "mobx-react-lite";

import MyButton from "../myButton/MyButton";
import "./Users.css";
import Modal from "../modal/modal";
import { fetchAllUsers, registration, deleteUser } from "../../../http/userAPI";
import { Context } from "../../../index";
import BtnForListUsers from "../buttonForList/BtnForListUsers";

const Users = observer(() => {
  const { user } = useContext(Context);
  const [editMode, setEditMode] = useState(false);
  const selectedUser = user.selectedUser;

  useEffect(() => {
    fetchAllUsers().then((data) => user.setAllUsers(data));
  }, [user]);

  const setMode = () => {
    setEditMode((editMode) => !editMode);
  };

  const [fio, setFio] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  const [modalActive, setModalActive] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  const delUser = async () => {
    try {
      await deleteUser(selectedUser.email);
      user.removeUser(selectedUser.email);
      user.setSelectedUser("");
      setModalDelete(false);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

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
      <div className="org_left" disabled={editMode}>
        <div className="list_org_users">
          {user.allUsers?.map((item, index) => (
            <BtnForListUsers
              style={{ margin: "4px 0" }}
              key={index}
              item={item}
            ></BtnForListUsers>
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
          <div className="stroka_2 name_text mini_text">
            ФИО
            {editMode ? (
              <input
                type="text"
                name="fioUser"
                defaultValue={selectedUser ? selectedUser.fio : "-"}
                onChange={(e) => setFio(e.target.value)}
              />
            ) : (
              <label className="inf_bd">
                {selectedUser ? selectedUser.fio : "-"}
              </label>
            )}
          </div>

          <div className="stroka">
            <div className="stroka_2 name_text mini_text">
              Электронная почта
              {editMode ? (
                <input
                  type="email"
                  name="emailUser"
                  defaultValue={selectedUser ? selectedUser.email : "-"}
                  onChange={(e) => setEmail(e.target.value)}
                />
              ) : (
                <label className="inf_bd">
                  {selectedUser ? selectedUser.email : "-"}
                </label>
              )}
            </div>

            <div className="stroka_2 name_text mini_text">
              Телефон
              {editMode ? (
                <input
                  type="tel"
                  name="phoneUser"
                  defaultValue={selectedUser ? selectedUser.phone : "-"}
                  onChange={(e) => setPhone(e.target.value)}
                />
              ) : (
                <label className="inf_bd">
                  {selectedUser ? selectedUser.phone : "-"}
                </label>
              )}
            </div>
          </div>

          <div className="name_text mini_text">
            Пароль
            {editMode ? (
              <input
                type="text"
                name="passwordUser"
                defaultValue={selectedUser ? selectedUser.password : "-"}
                onChange={(e) => setPassword(e.target.value)}
              />
            ) : (
              <label className="inf_bd">{selectedUser ? "******" : "-"}</label>
            )}
          </div>

          <div className="add_type name_text mini_text">
            Доступ
            {editMode ? (
              access.map((dostup, index) => (
                <label style={{ fontSize: "16px" }} key={index}>
                  <input
                    type="radio"
                    className="check_type"
                    name="access"
                    defaultChecked={selectedUser?.roleName}
                    value={dostup.role}
                  />
                  {dostup.name}
                </label>
              ))
            ) : (
              <label className="inf_bd">
                {selectedUser
                  ? !selectedUser.roleName
                    ? "--"
                    : access.map((dostup) =>
                        dostup.role === selectedUser.roleName ? dostup.name : ""
                      )
                  : "--"}
              </label>
            )}
          </div>

          <div className="edit_inf">
            {editMode && (
              <div className="btn_add">
                <MyButton>Сохранить</MyButton>
              </div>
            )}
            {selectedUser && (
              <div className="btn_add">
                <MyButton onClick={() => setMode()}>
                  {!editMode ? "Редактировать" : "Отмена"}
                </MyButton>
              </div>
            )}
            {selectedUser && (
              <div className="btn_add">
                <MyButton onClick={() => setModalDelete(true)}>
                  Удалить
                </MyButton>
              </div>
            )}
          </div>
          <Modal active={modalDelete} setActive={setModalDelete} width={"45vw"}>
            <h1>
              Вы действительно хотите удалть пользователя <br />«
              {selectedUser.fio}»?
            </h1>
            <MyButton onClick={delUser}>Удалить</MyButton>
            <MyButton onClick={() => setModalDelete(false)}>Отменить</MyButton>
          </Modal>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive} width={"60vw"}>
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
