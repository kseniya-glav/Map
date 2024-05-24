import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../../index";
import MyButton from "../../myButton/MyButton";

const InfOrg = observer(({ editMode }) => {
  const { admin_organization } = useContext(Context);
  const adminOrg = admin_organization;
  const selectedOrg = adminOrg.selectedOrg;

  const listOfHelpCategoriesSelected =
    adminOrg.spisokCats.find(
      (list) => list.organizationName === selectedOrg?.name
    )?.categoryName || [];

  const allCategory = JSON.parse(JSON.stringify(adminOrg.category));
  allCategory.forEach((el) => {
    if (listOfHelpCategoriesSelected.includes(el.name)) {
      el.checked = true;
    } else {
      el.checked = false;
    }
  });

  const [name, setName] = useState("");
  const [localityName, setLocalityName] = useState("");
  const [street, setStreet] = useState("");
  const [numb_house, setNumb_house] = useState("");
  const [numb_housing, setNumb_housing] = useState("");
  const [numb_flat, setNumb_flat] = useState("");
  const [type, setType] = useState("");

  const [category, setCategory] = useState(allCategory); //

  const [fio_director, setFio_director] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [work_schedule, setWork_schedule] = useState({});
  const [additional_data, setAdditional_data] = useState("");
  const [coordinates, setCoordinates] = useState([]);

  // const setCategoryFunction = (id) => {
  //   const updatedCheckboxes = category.map((checkbox) =>
  //     checkbox.id === id
  //       ? { ...checkbox, checked: !checkbox.checked }
  //       : checkbox
  //   );
  //   setCategory(updatedCheckboxes);
  //   // console.log("category", category);
  // };

  //const [selectedValue, setSelectedValue] = useState("Пермь");
  const dayweek = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];

  return (
    <div className="org_cart">
      <div className="stroka_2 name_text mini_text">
        Наименование организации
        {editMode ? (
          <input
            type="text"
            name="nameOrg"
            defaultValue={selectedOrg ? selectedOrg.name : "-"}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          <label className="inf_bd">
            {selectedOrg ? selectedOrg.name : "-"}
          </label>
        )}
      </div>
      <div className="stroka_2 name_text mini_text">
        Населенный пункт
        {editMode ? (
          <input
            type="text"
            defaultValue={selectedOrg ? selectedOrg.localityName : "-"}
            onChange={(e) => setLocalityName(e.target.value)}
          />
        ) : (
          <label className="inf_bd">
            {selectedOrg ? selectedOrg.localityName : "-"}
          </label>
        )}
      </div>
      <div className="stroka">
        <div className="stroka_2 name_text mini_text">
          Улица
          {editMode ? (
            <input
              type="text"
              defaultValue={selectedOrg ? selectedOrg.street : "-"}
              onChange={(e) => setStreet(e.target.value)}
            />
          ) : (
            <label className="inf_bd">
              {selectedOrg
                ? !selectedOrg.street
                  ? "--"
                  : selectedOrg.street
                : "--"}
            </label>
          )}
        </div>
        <div className="stroka_2 name_text mini_text">
          Дом
          {editMode ? (
            <input
              type="text"
              defaultValue={selectedOrg ? selectedOrg.numb_house : "-"}
              onChange={(e) => setNumb_house(e.target.value)}
            />
          ) : (
            <label className="inf_bd">
              {selectedOrg
                ? !selectedOrg.numb_house
                  ? "--"
                  : selectedOrg.numb_house
                : "--"}
            </label>
          )}
        </div>
        <div className="stroka_2 name_text mini_text">
          Корпус
          {editMode ? (
            <input
              type="text"
              defaultValue={selectedOrg ? selectedOrg.numb_housing : "-"}
              onChange={(e) => setNumb_housing(e.target.value)}
            />
          ) : (
            <label className="inf_bd">
              {selectedOrg
                ? !selectedOrg.numb_housing
                  ? "--"
                  : selectedOrg.numb_housing
                : "--"}
            </label>
          )}
        </div>
        <div className="stroka_2 name_text mini_text">
          Квартира
          {editMode ? (
            <input
              type="text"
              defaultValue={selectedOrg ? selectedOrg.numb_flat : "-"}
              onChange={(e) => setNumb_flat(e.target.value)}
            />
          ) : (
            <label className="inf_bd">
              {selectedOrg
                ? !selectedOrg.numb_flat
                  ? "--"
                  : selectedOrg.numb_flat
                : "--"}
            </label>
          )}
        </div>
      </div>

      <div
        className="add_type name_text mini_text"
        onChange={(e) => setType(e.target.value)}
      >
        Тип организации
        {editMode ? (
          adminOrg.type.map((type, index) => (
            <label style={{ fontSize: "16px" }} key={index}>
              <input
                type="radio"
                className="check_type"
                name="typeOfOrganization"
                defaultChecked={selectedOrg?.typeOrgName}
                value={type.name}
              />
              {type.name}
            </label>
          ))
        ) : (
          <label className="inf_bd">
            {selectedOrg
              ? !selectedOrg.typeOrgName
                ? "--"
                : selectedOrg.typeOrgName
              : "--"}
          </label>
        )}
      </div>
      <div className="add_categ name_text mini_text">
        Категория помощи
        {editMode ? (
          <div className="category_org">
            {allCategory.map((category, index) => (
              <label style={{ fontSize: "16px" }} key={index}>
                <input
                  type="checkbox"
                  className="check_type"
                  // name={category.name}
                  // defaultValue={category.name || ""}
                  defaultChecked={category.checked}
                  // onChange={() => setCategoryFunction(category.id)}
                  // defaultChecked={listOfHelpCategoriesSelected.includes(
                  //   category.name
                  // )}
                />
                {category.name}
              </label>
            ))}
          </div>
        ) : listOfHelpCategoriesSelected.length ? (
          listOfHelpCategoriesSelected?.map((list, index) => (
            <label className="inf_bd" key={index}>
              {list}
            </label>
          ))
        ) : (
          <label className="inf_bd">--</label>
        )}
      </div>

      {editMode ? (
        <div className="btn_add_org">
          <MyButton style={{ height: "25px" }}>
            Создать новую категорию
          </MyButton>
        </div>
      ) : (
        ""
      )}

      <div className="name_text mini_text">Руководитель организации</div>
      {editMode ? (
        <input
          type="text"
          defaultValue={selectedOrg ? selectedOrg.fio_director : ""}
          onChange={(e) => setFio_director(e.target.value)}
        />
      ) : (
        <label className="inf_bd">
          {selectedOrg
            ? !selectedOrg.fio_director
              ? "--"
              : selectedOrg.fio_director
            : "--"}
        </label>
      )}

      <div className="stroka">
        <div className="stroka_2 name_text mini_text">
          Электронная почта
          {editMode ? (
            <input
              type="email"
              defaultValue={selectedOrg ? selectedOrg.email : ""}
              onChange={(e) => setEmail(e.target.value)}
            />
          ) : (
            <label className="inf_bd">
              {selectedOrg
                ? !selectedOrg.email
                  ? "--"
                  : selectedOrg.email
                : "--"}
            </label>
          )}
        </div>

        <div className="stroka_2 name_text mini_text">
          Телефон
          {editMode ? (
            <input
              type="text"
              defaultValue={selectedOrg ? selectedOrg.phone : ""}
              onChange={(e) => setPhone(e.target.value)}
            />
          ) : (
            <label className="inf_bd">
              {selectedOrg
                ? !selectedOrg.phone
                  ? "--"
                  : selectedOrg.phone
                : "--"}
            </label>
          )}
        </div>
      </div>

      <div className="name_text mini_text">
        График работы
        {editMode
          ? dayweek.map((day, index) => (
              <>
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
              </>
            ))
          : selectedOrg.work_schedule
          ? dayweek.map((day, index) => (
              <>
                <div className="stroka" key={index}>
                  <div
                    className="stroka_2 day name_text mini_text"
                    value={day}
                    style={{ flexBasis: "150px" }}
                  >
                    {day}
                  </div>

                  {day === dayweek[0] ? (
                    !selectedOrg.work_schedule.monday.weekend ? (
                      <>
                        <div className="stroka">
                          <label>
                            {selectedOrg.work_schedule.monday.time[0]}
                          </label>
                          {"-"}
                          <label>
                            {selectedOrg.work_schedule.monday.time[1]}
                          </label>
                        </div>
                        <div className="stroka">
                          <div className="stroka_2 name_text mini_text">
                            Обед{" "}
                          </div>
                          <div className="stroka">
                            <label>
                              {selectedOrg.work_schedule.monday.lunch[0]}
                            </label>
                            {"-"}
                            <label>
                              {selectedOrg.work_schedule.monday.lunch[1]}
                            </label>
                          </div>
                        </div>
                      </>
                    ) : (
                      "Выходной"
                    )
                  ) : day === dayweek[1] ? (
                    !selectedOrg.work_schedule.tuesday.weekend ? (
                      <>
                        <div className="stroka">
                          <label>
                            {selectedOrg.work_schedule.tuesday.time[0]}
                          </label>
                          {"-"}
                          <label>
                            {selectedOrg.work_schedule.tuesday.time[1]}
                          </label>
                        </div>
                        <div className="stroka">
                          <div className="stroka_2 name_text mini_text">
                            Обед{" "}
                          </div>
                          <div className="stroka">
                            <label>
                              {selectedOrg.work_schedule.tuesday.lunch[0]}
                            </label>
                            {"-"}
                            <label>
                              {selectedOrg.work_schedule.tuesday.lunch[1]}
                            </label>
                          </div>
                        </div>
                      </>
                    ) : (
                      "Выходной"
                    )
                  ) : day === dayweek[2] ? (
                    !selectedOrg.work_schedule.wednesday.weekend ? (
                      <>
                        <div className="stroka">
                          <label>
                            {selectedOrg.work_schedule.wednesday.time[0]}
                          </label>
                          {"-"}
                          <label>
                            {selectedOrg.work_schedule.wednesday.time[1]}
                          </label>
                        </div>
                        <div className="stroka">
                          <div className="stroka_2 name_text mini_text">
                            Обед{" "}
                          </div>
                          <div className="stroka">
                            <label>
                              {selectedOrg.work_schedule.wednesday.lunch[0]}
                            </label>
                            {"-"}
                            <label>
                              {selectedOrg.work_schedule.wednesday.lunch[1]}
                            </label>
                          </div>
                        </div>
                      </>
                    ) : (
                      "Выходной"
                    )
                  ) : day === dayweek[3] ? (
                    !selectedOrg.work_schedule.thursday.weekend ? (
                      <>
                        <div className="stroka">
                          <label>
                            {selectedOrg.work_schedule.thursday.time[0]}
                          </label>
                          {"-"}
                          <label>
                            {selectedOrg.work_schedule.thursday.time[1]}
                          </label>
                        </div>
                        <div className="stroka">
                          <div className="stroka_2 name_text mini_text">
                            Обед{" "}
                          </div>
                          <div className="stroka">
                            <label>
                              {selectedOrg.work_schedule.thursday.lunch[0]}
                            </label>
                            {"-"}
                            <label>
                              {selectedOrg.work_schedule.thursday.lunch[1]}
                            </label>
                          </div>
                        </div>
                      </>
                    ) : (
                      "Выходной"
                    )
                  ) : day === dayweek[4] ? (
                    !selectedOrg.work_schedule.friday.weekend ? (
                      <>
                        <div className="stroka">
                          <label>
                            {selectedOrg.work_schedule.friday.time[0]}
                          </label>
                          {"-"}
                          <label>
                            {selectedOrg.work_schedule.friday.time[1]}
                          </label>
                        </div>
                        <div className="stroka">
                          <div className="stroka_2 name_text mini_text">
                            Обед{" "}
                          </div>
                          <div className="stroka">
                            <label>
                              {selectedOrg.work_schedule.friday.lunch[0]}
                            </label>
                            {"-"}
                            <label>
                              {selectedOrg.work_schedule.friday.lunch[1]}
                            </label>
                          </div>
                        </div>
                      </>
                    ) : (
                      "Выходной"
                    )
                  ) : day === dayweek[5] ? (
                    !selectedOrg.work_schedule.saturday.weekend ? (
                      <>
                        <div className="stroka">
                          <label>
                            {selectedOrg.work_schedule.saturday.time[0]}
                          </label>
                          {"-"}
                          <label>
                            {selectedOrg.work_schedule.saturday.time[1]}
                          </label>
                        </div>
                        <div className="stroka">
                          <div className="stroka_2 name_text mini_text">
                            Обед{" "}
                          </div>
                          <div className="stroka">
                            <label>
                              {selectedOrg.work_schedule.saturday.lunch[0]}
                            </label>
                            {"-"}
                            <label>
                              {selectedOrg.work_schedule.saturday.lunch[1]}
                            </label>
                          </div>
                        </div>
                      </>
                    ) : (
                      "Выходной"
                    )
                  ) : !selectedOrg.work_schedule.sunday.weekend ? (
                    <>
                      <div className="stroka">
                        <label>
                          {selectedOrg.work_schedule.sunday.time[0]}
                        </label>
                        {"-"}
                        <label>
                          {selectedOrg.work_schedule.sunday.time[1]}
                        </label>
                      </div>
                      <div className="stroka">
                        <div className="stroka_2 name_text mini_text">
                          Обед{" "}
                        </div>
                        <div className="stroka">
                          <label>
                            {selectedOrg.work_schedule.sunday.lunch[0]}
                          </label>
                          {"-"}
                          <label>
                            {selectedOrg.work_schedule.sunday.lunch[1]}
                          </label>
                        </div>
                      </div>
                    </>
                  ) : (
                    "Выходной"
                  )}
                </div>
              </>
            ))
          : ""}
      </div>

      <div className="name_text mini_text">
        Дополнительные данные
        {editMode ? (
          <>
            <br />
            <textarea
              cols="80"
              rows="5"
              className="dop"
              type="text"
              defaultValue={selectedOrg ? selectedOrg.additional_data : "--"}
              onChange={(e) => setAdditional_data(e.target.value)}
            />
          </>
        ) : (
          <label className="inf_bd">
            {selectedOrg
              ? !selectedOrg.additional_data
                ? "--"
                : selectedOrg.additional_data
              : "--"}
          </label>
        )}
      </div>

      <div className="name_text mini_text">
        Координаты
        {editMode ? (
          <div className="stroka">
            <div className="stroka_2 name_text mini_text">
              <input
                type="number"
                defaultValue={selectedOrg ? selectedOrg.coordinates[0] : ""}
                step="0.0000000000000000000001"
                min="0"
                max="200"
                onChange={(e) => setCoordinates(e.target.value)}
              />
            </div>
            <div className="stroka_2 name_text mini_text">
              <input
                type="number"
                defaultValue={selectedOrg ? selectedOrg.coordinates[1] : ""}
                step="0.0000000000000000000001"
                min="0"
                max="200"
                onChange={(e) => setCoordinates(e.target.value)}
              />
            </div>
          </div>
        ) : (
          <div className="stroka">
            <div className="stroka_2 name_text mini_text">
              <label className="inf_bd">
                {selectedOrg
                  ? !selectedOrg.coordinates[0]
                    ? "--"
                    : selectedOrg.coordinates[0]
                  : "--"}
              </label>
            </div>
            <div className="stroka_2 name_text mini_text">
              <label className="inf_bd">
                {selectedOrg
                  ? !selectedOrg.coordinates[1]
                    ? "--"
                    : selectedOrg.coordinates[1]
                  : "--"}
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default InfOrg;
