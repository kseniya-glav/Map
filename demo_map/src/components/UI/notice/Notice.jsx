import React from "react";
import MyButton from "../myButton/MyButton";
import "./Notice.css";

const Notice = () => {
  const type_organization = ["Государственная", "Некоммерческая"];
  const category = [
    "Бесплатные одежда и предметы первой необходимости",
    "Бесплатные продукты или готовая еда",
    "Бесплатная юридическая консультация",
    "Бесплатная психологическая помощь",
    "Кризисное жилье",
    "Социальное сопровождение",
    "Льготы и пособия",
    "Профессиональное обучение",
    "Бесплатное предоставление витаминов",
    "Социальный прокат средств безопасности",
  ];

  const notice = [
    "name 1",
    "name 2",
    "name 3",
    "name 4",
    "name 5",
    "name 6",
    "name 7",
    "name 8",
    "name 9",
    "name 10",
    "name 1",
    "name 2",
    "name 3",
    "name 4",
    "name 5",
    "name 6",
    "name 7",
    "name 8",
    "name 9",
    "name 10",
    "name 1",
    "name 2",
    "name 3",
    "name 4",
    "name 5",
    "name 6",
  ];

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
    <div className="notice">
      <div className="org_left">
        <div className="list_org_notice">
          {notice.map((org, index) => (
            <MyButton style={{ margin: "4px 0" }} key={index}>
              {org}
            </MyButton>
          ))}
        </div>

        <div className="notice_cart">
          <div className=" stroka_notice name_text mini_text">
            <div className="stroka_2">Отправитель</div>
            <label className="notice_text">Фамилия Имя</label>
          </div>
          <div className=" stroka_notice name_text mini_text">
            <div className="stroka_2">Наименование организации</div>
            <label className="notice_text">ООО "Помощь"</label>
          </div>
          <div className=" stroka_notice name_text mini_text">
            <div className="stroka_2">Эл. почта</div>
            <label className="notice_text">mail@mail.ru</label>
            <div className="stroka_2">Телефон</div>
            <label className="notice_text">+78593256421</label>
          </div>
          <div className=" stroka_notice name_text mini_text">
            <div className="stroka_2">Населенный пункт</div>
            <label className="notice_text">Пермь</label>
          </div>

          <div className=" stroka_notice name_text mini_text">
            <div className="stroka_2">Улица</div>
            <label className="notice_text">Ленина</label>

            <div className="stroka_2">Дом</div>
            <label className="notice_text">2</label>

            <div className="stroka_2">Корпус</div>
            <label className="notice_text"> - </label>

            <div className="stroka_2">Квартира</div>
            <label className="notice_text"> - </label>
          </div>

          <div className="name_text mini_text">Категория помощи</div>
          <div className="name_text mini_text">Тип организации</div>
          <div className="name_text mini_text">Дополнительные данные</div>

          <div className="btn_del_users">
            <MyButton>Удалить</MyButton>
          </div>
        </div>
      </div>
      <div className="org_rigth">
        <div className="name_text">Карточка организации</div>
        <div className="org_cart">
          <div className="name_text mini_text">
            Наименование организации
            <input type="text"></input>
          </div>
          <div className="stroka">
            <div className="stroka_2 name_text mini_text">
              <nobr>Населенный пункт</nobr>
              <input type="text"></input>
            </div>
            <div className="stroka_2 name_text mini_text">
              Дом
              <input type="number"></input>
            </div>
            <div className="stroka_2 name_text mini_text">
              Корпус
              <input type="number"></input>
            </div>
            <div className="stroka_2 name_text mini_text">
              Квартира
              <input type="number"></input>
            </div>
          </div>

          <div className="add_type name_text mini_text">
            Тип организации
            {type_organization.map((type, index) => (
              <label style={{ fontSize: "16px" }} key={index}>
                <input type="checkbox" className="check_type" value={type} />
                {type}
              </label>
            ))}
          </div>
          <div className="add_categ name_text mini_text">
            Категория помощи
            <div className="category_org">
              {category.map((category, index) => (
                <label style={{ fontSize: "16px" }} key={index}>
                  <input
                    type="checkbox"
                    className="check_type"
                    value={category}
                  />
                  {category}
                </label>
              ))}
            </div>
          </div>
          <div className="btn_add_org">
            <MyButton style={{ height: "25px" }}>
              Создать новую категорию
            </MyButton>
          </div>

          <div className="name_text mini_text">Руководитель организации</div>
          <input type="text"></input>

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
            График работы
            {day.map((day, index) => (
              <div className="stroka" key={index}>
                <div
                  className="stroka_2 day name_text mini_text"
                  value={day}
                  style={{ flexBasis: "150px" }}
                >
                  {day}
                </div>
                <div className="stroka">
                  <input
                    className="stroka_2"
                    type="time"
                    style={{ flexBasis: "80px" }}
                  ></input>
                  <input
                    className="stroka_2"
                    type="time"
                    style={{ flexBasis: "80px" }}
                  ></input>
                </div>
                <label className="stroka_2">
                  Выходной <input type="checkbox"></input>
                </label>
              </div>
            ))}
            <div className="stroka">
              <div className="stroka_2 name_text mini_text">Обед </div>
              <div className="stroka">
                <input
                  className="stroka_2"
                  type="time"
                  style={{ flexBasis: "80px" }}
                ></input>
                <input
                  className="stroka_2"
                  type="time"
                  style={{ flexBasis: "80px" }}
                ></input>
              </div>
            </div>
          </div>

          <div className="name_text mini_text">Дополнительные данные</div>
          <input className="dop" type="text"></input>

          <div className="stroka" style={{ marginTop: "30px" }}>
            <div className="stroka_2">
              <MyButton>Очистить данные</MyButton>
            </div>
            <div className="stroka_2">
              <MyButton>Добавить</MyButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
