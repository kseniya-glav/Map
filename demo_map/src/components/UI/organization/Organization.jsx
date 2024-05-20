import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import MyButton from "../myButton/MyButton";
import "./Organization.css";
import { Context } from "../../../index";
import BtnForListOrg from "../buttonForList/BtnForListOrg";
import InfOrg from "./inf/InfOrg";

const Organization = observer(() => {

  const { admin_organization } = useContext(Context);
  const [editMode, setEditMode] = useState(false);

  const setMode = () => {
    setEditMode((editMode) => !editMode);
  }

  const day = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];

  return (
    <div className="organization">
      <div className="org_left">
        <div className="org_filter">
          <div className="stroka poisk">
            <input
              className="stroka_2"
              type="text"
              placeholder="Поиск по названию..."
            ></input>
            <input
              className="stroka_2"
              type="text"
              placeholder="Населённый пункт..."
            ></input>
          </div>
          <div className="stroka poisk">
            <select className="stroka_2">
              <option value="">Любая категория услуги</option>
              {admin_organization.category.map((cat) => (
                <option value={cat.name} key={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
            <select className="stroka_2">
              <option value="">Любой тип организации</option>
              {admin_organization.type.map((type) => (
                <option value={type.name} key={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="list_org">
          {admin_organization.org.map((org) => (
            <BtnForListOrg 
              style={{ margin: "4px 0" }} 
              key={org.id} 
              org={org} 
              >
            </BtnForListOrg>
          ))}
        </div>
        <div className="btn_add">
          <MyButton>Добавить организацию</MyButton>
        </div>
      </div>
      <div className="org_rigth">
        <div className="name_text">Карточка организации</div>

        <InfOrg editMode={editMode}/>

        <div className="edit_inf">
          <div className="btn_add">
            <MyButton>Сохранить</MyButton>
          </div>
          <div className="btn_add">
            <MyButton onClick={() => setMode()}>Редактировать</MyButton>
          </div>
          <div className="btn_add">
            <MyButton>Удалить</MyButton>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Organization;
