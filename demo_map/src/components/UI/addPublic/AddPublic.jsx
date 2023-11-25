import React, { useContext } from "react";
import { Context } from "../../../index";
import MyButton from "../myButton/MyButton";
import "./AddPublic.css";
import { observer } from "mobx-react-lite";

const AddPublic = observer(() => {
  const { organization } = useContext(Context);

  // const type_organization = [ 'Государственная', 'Некоммерческая']
  // const category = ['Бесплатные (или дешевле, чем в магазинах) одежда и предметы первой необходимости',
  //             'Бесплатные продукты или готовая еда',
  //             'Бесплатная юридическая консультация',
  //             'Бесплатная психологическая помощь',
  //             'Кризисное жилье',
  //             'Социальное сопровождение',
  //             'Льготы и пособия',
  //             'Профессиональное обучение',
  //             'Бесплатное предоставление витаминов',
  //             'Социальный прокат средств безопасности'
  //         ]

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        marginBottom: "20px",
      }}
    >
      <div className="addPublic">
        <div className="mail_public">
          <div className="name_text">Контакты для обратной связи</div>
          <div className="mail_public_group">
            <div className="name_text mini_text">Электронная почта</div>
            <input type="email"></input>
            <div className="name_text mini_text">Телефон</div>
            <input type="tel"></input>
          </div>
        </div>
        <div className="info_organization">
          <div className="name_text">Информация об организации</div>
          <div className="info_organization_group">
            <div className="name_text mini_text">Наименование</div>
            <input type="text"></input>
            <div className="name_text mini_text">Электронная почта</div>
            <input type="email"></input>
            <div className="name_text mini_text">Телефон</div>
            <input type="tel"></input>
            <div className="name_text mini_text">Населенный пункт</div>
            <input type="text"></input>
            <div className="name_text mini_text">Улица</div>
            <input type="text"></input>
            <div className="name_text mini_text">Дом</div>
            <input type="number"></input>
            <div className="name_text mini_text">Корпус</div>
            <input type="number"></input>
            <div className="name_text mini_text">Квартира</div>
            <input type="number"></input>
            <div className="name_text mini_text type_org">
              Тип организации
              {organization.type.map((type) => (
                <label style={{ fontSize: "16px" }} key={type.id}>
                  <input
                    type="checkbox"
                    className="check_type"
                    value={type.name}
                  />
                  {type.name}
                </label>
              ))}
            </div>
            <div className="name_text mini_text">
              Категория помощи
              <div className="category_org">
                {organization.category.map((category) => (
                  <label style={{ fontSize: "16px" }} key={category.id}>
                    <input
                      type="checkbox"
                      className="check_type"
                      value={category.name}
                    />
                    {category.name}
                  </label>
                ))}
                <label>
                  <input type="checkbox" className="check_type" />
                  <input type="text" style={{ width: "80%", height: "15px" }} />
                </label>
              </div>
            </div>
            <div className="name_text mini_text">Дополнительные данные</div>
            <input className="dop" type="text"></input>
          </div>
        </div>
      </div>
      <MyButton>Отправить</MyButton>
    </div>
  );
});

export default AddPublic;
