import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../../index";
import MyButton from "../../myButton/MyButton";

const InfOrg = observer(
  ({
    editMode,
    selectedOrg,
    name,
    setName,
    localityName,
    setLocalityName,
    street,
    setStreet,
    numb_house,
    setNumb_house,
    numb_housing,
    setNumb_housing,
    numb_flat,
    setNumb_flat,
    type_org_name,
    setType_org_name,
    category_help_name,
    setCategoryHelpName,
    fio_director,
    setFio_director,
    email,
    setEmail,
    phone,
    setPhone,
    work_schedule,
    setWork_schedule,
    additional_data,
    setAdditional_data,
    coordinates,
    setCoordinates,
    status_name,
    setStatus_name,
  }) => {
    setName(name);
    setLocalityName(localityName);
    setStreet(street);
    setNumb_house(numb_house);
    setNumb_housing(numb_housing);
    setNumb_flat(numb_flat);
    setType_org_name(type_org_name);
    setCategoryHelpName(category_help_name);
    setFio_director(fio_director);
    setEmail(email);
    setPhone(phone);
    setWork_schedule(work_schedule);
    setAdditional_data(additional_data);
    setCoordinates(coordinates);
    setStatus_name(status_name);

    console.log("cathelpc", category_help_name);
    const { admin_organization } = useContext(Context);
    const adminOrg = admin_organization;
    //const selectedOrg = adminOrg.selectedOrg;

    const updateCoordinates = (index, newValue) => {
      const newNumbers = [...coordinates]; // Создаем копию массива
      newNumbers[index] = newValue; // Обновляем значение по указанному индексу
      setCoordinates(newNumbers); // Устанавливаем новый массив чисел
    };

    const listOfHelpCategoriesSelected =
      admin_organization.spisokCats.find(
        (list) => list.organizationName === selectedOrg?.name
      )?.categoryName || [];

    const allCategory = JSON.parse(JSON.stringify(admin_organization.category));

    allCategory.forEach((el) => {
      if (listOfHelpCategoriesSelected.includes(el.name)) {
        el.checked = true;
      } else {
        el.checked = false;
      }
    });

    const handleCheckboxChange = (value) => {
      if (category_help_name.includes(value)) {
        setCategoryHelpName(
          category_help_name.filter((item) => item !== value)
        );
      } else {
        setCategoryHelpName([...category_help_name, value]);
      }
    };

    const updateNestedField = (fieldName, nestedFieldName, index, newValue) => {
      if (index) {
        const newNumbers = [...work_schedule[fieldName][nestedFieldName]]; // Создаем копию массива
        newNumbers[index - 1] = newValue; // Обновляем значение по указанному индексу
        setWork_schedule({
          ...work_schedule,
          [fieldName]: {
            ...work_schedule[fieldName],
            [nestedFieldName]: newNumbers,
          },
        });
      } else {
        setWork_schedule({
          ...work_schedule,
          [fieldName]: {
            ...work_schedule[fieldName],
            [nestedFieldName]: newValue,
          },
        });
      }
    };

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
          Наименование организации*
          {editMode ? (
            <input
              type="text"
              name="nameOrg"
              defaultValue={selectedOrg ? selectedOrg.name : "-"}
              onChange={(e) => setName(e.target.value)}
              //value = {name}
            />
          ) : (
            <label className="inf_bd">
              {selectedOrg ? selectedOrg.name : "-"}
            </label>
          )}
        </div>
        <div className="stroka_2 name_text mini_text">
          Населенный пункт*
          {editMode ? (
            <input
              type="text"
              name="localityName"
              defaultValue={selectedOrg ? selectedOrg.localityName : "-"}
              onChange={(e) => setLocalityName(e.target.value)}
              //value = {localityName}
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
                //value = {street}
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
                //value = {numb_house}
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
                //value = {numb_housing}
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
                //value = {numb_flat}
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

        <div className="add_type name_text mini_text">
          Тип организации*
          {editMode ? (
            adminOrg.type.map((type, index) => (
              <label style={{ fontSize: "16px" }} key={index}>
                <input
                  type="radio"
                  className="check_type"
                  name="typeOfOrganization"
                  defaultChecked={selectedOrg?.typeOrgName}
                  onChange={(e) => setType_org_name(type.name)}
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
                    name={category.name}
                    //defaultValue={category.name || ""}
                    //defaultChecked={category.checked}
                    checked={category_help_name?.includes(category.name)}
                    onChange={() => handleCheckboxChange(category.name)}
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
            //value = {fio_director}
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
            Электронная почта*
            {editMode ? (
              <input
                type="email"
                defaultValue={selectedOrg ? selectedOrg.email : ""}
                onChange={(e) => setEmail(e.target.value)}
                //value = {email}
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
            Телефон*
            {editMode ? (
              <input
                type="text"
                defaultValue={selectedOrg ? selectedOrg.phone : ""}
                onChange={(e) => setPhone(e.target.value)}
                //value = {phone}
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

                    {day === dayweek[0] ? (
                      <>
                        <div className="stroka">
                          <input
                            className="stroka_2"
                            type="time"
                            style={{ flexBasis: "80px" }}
                            defaultValue={
                              selectedOrg.work_schedule?.monday.time[0]
                            }
                            onChange={(e) =>
                              updateNestedField(
                                "monday",
                                "time",
                                1,
                                e.target.value
                              )
                            }
                          ></input>
                          <input
                            className="stroka_2"
                            type="time"
                            style={{ flexBasis: "80px" }}
                            defaultValue={
                              selectedOrg.work_schedule?.monday.time[1]
                            }
                            onChange={(e) =>
                              updateNestedField(
                                "monday",
                                "time",
                                2,
                                e.target.value
                              )
                            }
                          ></input>
                          <label className="stroka_2">
                            Выходной{" "}
                            <input
                              type="checkbox"
                              defaultChecked={
                                selectedOrg.work_schedule?.monday.weekend
                              }
                              onChange={(e) =>
                                updateNestedField(
                                  "monday",
                                  "weekend",
                                  null,
                                  e.target.checked
                                )
                              }
                            ></input>
                          </label>
                        </div>

                        <div className="stroka">
                          <div className="stroka_2 name_text mini_text">
                            Обед{" "}
                          </div>
                          <div className="stroka">
                            <input
                              className="stroka_2"
                              type="time"
                              style={{ flexBasis: "80px" }}
                              defaultValue={
                                selectedOrg.work_schedule?.monday.lunch[0]
                              }
                              onChange={(e) =>
                                updateNestedField(
                                  "monday",
                                  "lunch",
                                  1,
                                  e.target.value
                                )
                              }
                            ></input>
                            <input
                              className="stroka_2"
                              type="time"
                              style={{ flexBasis: "80px" }}
                              defaultValue={
                                selectedOrg.work_schedule?.monday.lunch[1]
                              }
                              onChange={(e) =>
                                updateNestedField(
                                  "monday",
                                  "lunch",
                                  2,
                                  e.target.value
                                )
                              }
                            ></input>
                          </div>
                        </div>
                      </>
                    ) : day === dayweek[1] ? (
                      <>
                        <div className="stroka">
                          <input
                            className="stroka_2"
                            type="time"
                            style={{ flexBasis: "80px" }}
                            defaultValue={
                              selectedOrg.work_schedule?.tuesday.time[0]
                            }
                            onChange={(e) =>
                              updateNestedField(
                                "tuesday",
                                "time",
                                1,
                                e.target.value
                              )
                            }
                          ></input>
                          <input
                            className="stroka_2"
                            type="time"
                            style={{ flexBasis: "80px" }}
                            defaultValue={
                              selectedOrg.work_schedule?.tuesday.time[1]
                            }
                            onChange={(e) =>
                              updateNestedField(
                                "tuesday",
                                "time",
                                2,
                                e.target.value
                              )
                            }
                          ></input>
                          <label className="stroka_2">
                            Выходной{" "}
                            <input
                              type="checkbox"
                              defaultChecked={
                                selectedOrg.work_schedule?.tuesday.weekend
                              }
                              onChange={(e) =>
                                updateNestedField(
                                  "tuesday",
                                  "weekend",
                                  null,
                                  e.target.checked
                                )
                              }
                            ></input>
                          </label>
                        </div>

                        <div className="stroka">
                          <div className="stroka_2 name_text mini_text">
                            Обед{" "}
                          </div>
                          <div className="stroka">
                            <input
                              className="stroka_2"
                              type="time"
                              style={{ flexBasis: "80px" }}
                              defaultValue={
                                selectedOrg.work_schedule?.tuesday.lunch[0]
                              }
                              onChange={(e) =>
                                updateNestedField(
                                  "tuesday",
                                  "lunch",
                                  1,
                                  e.target.value
                                )
                              }
                            ></input>
                            <input
                              className="stroka_2"
                              type="time"
                              style={{ flexBasis: "80px" }}
                              defaultValue={
                                selectedOrg.work_schedule?.tuesday.lunch[1]
                              }
                              onChange={(e) =>
                                updateNestedField(
                                  "tuesday",
                                  "lunch",
                                  2,
                                  e.target.value
                                )
                              }
                            ></input>
                          </div>
                        </div>
                      </>
                    ) : day === dayweek[2] ? (
                      <>
                        <div className="stroka">
                          <input
                            className="stroka_2"
                            type="time"
                            style={{ flexBasis: "80px" }}
                            defaultValue={
                              selectedOrg.work_schedule?.wednesday.time[0]
                            }
                            onChange={(e) =>
                              updateNestedField(
                                "wednesday",
                                "time",
                                1,
                                e.target.value
                              )
                            }
                          ></input>
                          <input
                            className="stroka_2"
                            type="time"
                            style={{ flexBasis: "80px" }}
                            defaultValue={
                              selectedOrg.work_schedule?.wednesday.time[1]
                            }
                            onChange={(e) =>
                              updateNestedField(
                                "wednesday",
                                "time",
                                2,
                                e.target.value
                              )
                            }
                          ></input>
                          <label className="stroka_2">
                            Выходной{" "}
                            <input
                              type="checkbox"
                              defaultChecked={
                                selectedOrg.work_schedule?.wednesday.weekend
                              }
                              onChange={(e) =>
                                updateNestedField(
                                  "wednesday",
                                  "weekend",
                                  null,
                                  e.target.checked
                                )
                              }
                            ></input>
                          </label>
                        </div>

                        <div className="stroka">
                          <div className="stroka_2 name_text mini_text">
                            Обед{" "}
                          </div>
                          <div className="stroka">
                            <input
                              className="stroka_2"
                              type="time"
                              style={{ flexBasis: "80px" }}
                              defaultValue={
                                selectedOrg.work_schedule?.wednesday.lunch[0]
                              }
                              onChange={(e) =>
                                updateNestedField(
                                  "wednesday",
                                  "lunch",
                                  1,
                                  e.target.value
                                )
                              }
                            ></input>
                            <input
                              className="stroka_2"
                              type="time"
                              style={{ flexBasis: "80px" }}
                              defaultValue={
                                selectedOrg.work_schedule?.wednesday.lunch[1]
                              }
                              onChange={(e) =>
                                updateNestedField(
                                  "wednesday",
                                  "lunch",
                                  2,
                                  e.target.value
                                )
                              }
                            ></input>
                          </div>
                        </div>
                      </>
                    ) : day === dayweek[3] ? (
                      <>
                        <div className="stroka">
                          <input
                            className="stroka_2"
                            type="time"
                            style={{ flexBasis: "80px" }}
                            defaultValue={
                              selectedOrg.work_schedule?.thursday.time[0]
                            }
                            onChange={(e) =>
                              updateNestedField(
                                "thursday",
                                "time",
                                1,
                                e.target.value
                              )
                            }
                          ></input>
                          <input
                            className="stroka_2"
                            type="time"
                            style={{ flexBasis: "80px" }}
                            defaultValue={
                              selectedOrg.work_schedule?.thursday.time[1]
                            }
                            onChange={(e) =>
                              updateNestedField(
                                "thursday",
                                "time",
                                2,
                                e.target.value
                              )
                            }
                          ></input>
                          <label className="stroka_2">
                            Выходной{" "}
                            <input
                              type="checkbox"
                              defaultChecked={
                                selectedOrg.work_schedule?.thursday.weekend
                              }
                              onChange={(e) =>
                                updateNestedField(
                                  "thursday",
                                  "weekend",
                                  null,
                                  e.target.checked
                                )
                              }
                            ></input>
                          </label>
                        </div>

                        <div className="stroka">
                          <div className="stroka_2 name_text mini_text">
                            Обед{" "}
                          </div>
                          <div className="stroka">
                            <input
                              className="stroka_2"
                              type="time"
                              style={{ flexBasis: "80px" }}
                              defaultValue={
                                selectedOrg.work_schedule?.thursday.lunch[0]
                              }
                              onChange={(e) =>
                                updateNestedField(
                                  "thursday",
                                  "lunch",
                                  1,
                                  e.target.value
                                )
                              }
                            ></input>
                            <input
                              className="stroka_2"
                              type="time"
                              style={{ flexBasis: "80px" }}
                              defaultValue={
                                selectedOrg.work_schedule?.thursday.lunch[1]
                              }
                              onChange={(e) =>
                                updateNestedField(
                                  "thursday",
                                  "lunch",
                                  2,
                                  e.target.value
                                )
                              }
                            ></input>
                          </div>
                        </div>
                      </>
                    ) : day === dayweek[4] ? (
                      <>
                        <div className="stroka">
                          <input
                            className="stroka_2"
                            type="time"
                            style={{ flexBasis: "80px" }}
                            defaultValue={
                              selectedOrg.work_schedule?.friday.time[0]
                            }
                            onChange={(e) =>
                              updateNestedField(
                                "friday",
                                "time",
                                1,
                                e.target.value
                              )
                            }
                          ></input>
                          <input
                            className="stroka_2"
                            type="time"
                            style={{ flexBasis: "80px" }}
                            defaultValue={
                              selectedOrg.work_schedule?.friday.time[1]
                            }
                            onChange={(e) =>
                              updateNestedField(
                                "friday",
                                "time",
                                2,
                                e.target.value
                              )
                            }
                          ></input>
                          <label className="stroka_2">
                            Выходной{" "}
                            <input
                              type="checkbox"
                              defaultChecked={
                                selectedOrg.work_schedule?.friday.weekend
                              }
                              onChange={(e) =>
                                updateNestedField(
                                  "friday",
                                  "weekend",
                                  null,
                                  e.target.checked
                                )
                              }
                            ></input>
                          </label>
                        </div>

                        <div className="stroka">
                          <div className="stroka_2 name_text mini_text">
                            Обед{" "}
                          </div>
                          <div className="stroka">
                            <input
                              className="stroka_2"
                              type="time"
                              style={{ flexBasis: "80px" }}
                              defaultValue={
                                selectedOrg.work_schedule?.friday.lunch[0]
                              }
                              onChange={(e) =>
                                updateNestedField(
                                  "friday",
                                  "lunch",
                                  1,
                                  e.target.value
                                )
                              }
                            ></input>
                            <input
                              className="stroka_2"
                              type="time"
                              style={{ flexBasis: "80px" }}
                              defaultValue={
                                selectedOrg.work_schedule?.friday.lunch[1]
                              }
                              onChange={(e) =>
                                updateNestedField(
                                  "friday",
                                  "lunch",
                                  2,
                                  e.target.value
                                )
                              }
                            ></input>
                          </div>
                        </div>
                      </>
                    ) : day === dayweek[5] ? (
                      <>
                        <div className="stroka">
                          <input
                            className="stroka_2"
                            type="time"
                            style={{ flexBasis: "80px" }}
                            defaultValue={
                              selectedOrg.work_schedule?.saturday.time[0]
                            }
                            onChange={(e) =>
                              updateNestedField(
                                "saturday",
                                "time",
                                1,
                                e.target.value
                              )
                            }
                          ></input>
                          <input
                            className="stroka_2"
                            type="time"
                            style={{ flexBasis: "80px" }}
                            defaultValue={
                              selectedOrg.work_schedule?.saturday.time[1]
                            }
                            onChange={(e) =>
                              updateNestedField(
                                "saturday",
                                "time",
                                2,
                                e.target.value
                              )
                            }
                          ></input>
                          <label className="stroka_2">
                            Выходной{" "}
                            <input
                              type="checkbox"
                              defaultChecked={
                                selectedOrg.work_schedule?.saturday.weekend
                              }
                              onChange={(e) =>
                                updateNestedField(
                                  "saturday",
                                  "weekend",
                                  null,
                                  e.target.checked
                                )
                              }
                            ></input>
                          </label>
                        </div>

                        <div className="stroka">
                          <div className="stroka_2 name_text mini_text">
                            Обед{" "}
                          </div>
                          <div className="stroka">
                            <input
                              className="stroka_2"
                              type="time"
                              style={{ flexBasis: "80px" }}
                              defaultValue={
                                selectedOrg.work_schedule?.saturday.lunch[0]
                              }
                              onChange={(e) =>
                                updateNestedField(
                                  "saturday",
                                  "lunch",
                                  1,
                                  e.target.value
                                )
                              }
                            ></input>
                            <input
                              className="stroka_2"
                              type="time"
                              style={{ flexBasis: "80px" }}
                              defaultValue={
                                selectedOrg.work_schedule?.saturday.lunch[1]
                              }
                              onChange={(e) =>
                                updateNestedField(
                                  "saturday",
                                  "lunch",
                                  2,
                                  e.target.value
                                )
                              }
                            ></input>
                          </div>
                        </div>
                      </>
                    ) : day === dayweek[6] ? (
                      <>
                        <div className="stroka">
                          <input
                            className="stroka_2"
                            type="time"
                            style={{ flexBasis: "80px" }}
                            defaultValue={
                              selectedOrg.work_schedule?.sunday.time[0]
                            }
                            onChange={(e) =>
                              updateNestedField(
                                "sunday",
                                "time",
                                1,
                                e.target.value
                              )
                            }
                          ></input>
                          <input
                            className="stroka_2"
                            type="time"
                            style={{ flexBasis: "80px" }}
                            defaultValue={
                              selectedOrg.work_schedule?.sunday.time[1]
                            }
                            onChange={(e) =>
                              updateNestedField(
                                "sunday",
                                "time",
                                2,
                                e.target.value
                              )
                            }
                          ></input>
                          <label className="stroka_2">
                            Выходной{" "}
                            <input
                              type="checkbox"
                              defaultChecked={
                                selectedOrg.work_schedule?.sunday.weekend
                              }
                              onChange={(e) =>
                                updateNestedField(
                                  "sunday",
                                  "weekend",
                                  null,
                                  e.target.checked
                                )
                              }
                            ></input>
                          </label>
                        </div>

                        <div className="stroka">
                          <div className="stroka_2 name_text mini_text">
                            Обед{" "}
                          </div>
                          <div className="stroka">
                            <input
                              className="stroka_2"
                              type="time"
                              style={{ flexBasis: "80px" }}
                              defaultValue={
                                selectedOrg.work_schedule?.sunday.lunch[0]
                              }
                              onChange={(e) =>
                                updateNestedField(
                                  "sunday",
                                  "lunch",
                                  1,
                                  e.target.value
                                )
                              }
                            ></input>
                            <input
                              className="stroka_2"
                              type="time"
                              style={{ flexBasis: "80px" }}
                              defaultValue={
                                selectedOrg.work_schedule?.sunday.lunch[1]
                              }
                              onChange={(e) =>
                                updateNestedField(
                                  "sunday",
                                  "lunch",
                                  2,
                                  e.target.value
                                )
                              }
                            ></input>
                          </div>
                        </div>
                      </>
                    ) : null}
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
                              {selectedOrg.work_schedule?.monday.time[0]}
                            </label>
                            {"-"}
                            <label>
                              {selectedOrg.work_schedule?.monday.time[1]}
                            </label>
                          </div>
                          <div className="stroka">
                            <div className="stroka_2 name_text mini_text">
                              Обед{" "}
                            </div>
                            <div className="stroka">
                              <label>
                                {selectedOrg.work_schedule?.monday.lunch[0]}
                              </label>
                              {"-"}
                              <label>
                                {selectedOrg.work_schedule?.monday.lunch[1]}
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
                //value = {additional_data}
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
          Координаты*
          {editMode ? (
            <div className="stroka">
              <div className="stroka_2 name_text mini_text">
                <input
                  type="number"
                  defaultValue={selectedOrg ? selectedOrg.coordinates[0] : ""}
                  step="0.000000000001"
                  min="0"
                  max="200"
                  onChange={(e) => updateCoordinates(0, e.target.value)}
                  //value = {coordinates[0]}
                />
              </div>
              <div className="stroka_2 name_text mini_text">
                <input
                  type="number"
                  defaultValue={selectedOrg ? selectedOrg.coordinates[1] : ""}
                  step="0.000000000001"
                  min="0"
                  max="200"
                  onChange={(e) => updateCoordinates(1, e.target.value)}
                  //value = {coordinates[1]}
                />
              </div>
              <div className="stroka_2 name_text mini_text">
                Показывать на карте*
                <input
                  type="checkbox"
                  defaultChecked={selectedOrg ? selectedOrg.statusName : ""}
                  value={status_name}
                  onChange={(e) => setStatus_name(e.target.checked)}
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
              <div className="stroka_2 name_text mini_text">
                {selectedOrg.statusName
                  ? "Метка видна на карте"
                  : "Метка не видна на карте"}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default InfOrg;
