import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../../index";
import MyButton from "../../myButton/MyButton";

const InfOrg = observer(({editMode}) => {
  const { admin_organization } = useContext(Context);
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
            {editMode?
                <input type="text" value={admin_organization.selectedOrg?admin_organization.selectedOrg.name:'-'}/>
                :
                <label className="inf_bd">{admin_organization.selectedOrg?admin_organization.selectedOrg.name:'-'}</label>
            }            
          </div>
          <div className="stroka_2 name_text mini_text">
              <nobr>Населенный пункт</nobr>
              {editMode?
                <input type="text" value={admin_organization.selectedOrg?admin_organization.selectedOrg.localityName:'-'}/>
                :
                <label className="inf_bd">{admin_organization.selectedOrg?admin_organization.selectedOrg.localityName:'-'}</label>
              }
            </div>
          <div className="stroka">
            <div className="stroka_2 name_text mini_text">
              Улица
              {editMode?
                <input type="text" value={admin_organization.selectedOrg?admin_organization.selectedOrg.street:'-'}/>
                :
                <label className="inf_bd">{admin_organization.selectedOrg?(!admin_organization.selectedOrg.street?"--":admin_organization.selectedOrg.street):'--'}</label>
              }
            </div>
            <div className="stroka_2 name_text mini_text">
              Дом
              {editMode?
                <input type="text" value={admin_organization.selectedOrg?admin_organization.selectedOrg.numb_house:'-'}/>
                :
                <label className="inf_bd">{admin_organization.selectedOrg?(!admin_organization.selectedOrg.numb_house?"--":admin_organization.selectedOrg.numb_house):'--'}</label>
              }
            </div>
            <div className="stroka_2 name_text mini_text">
              Корпус
              {editMode?
                <input type="text" value={admin_organization.selectedOrg?admin_organization.selectedOrg.numb_housing:'-'}/>
                :
                <label className="inf_bd">{admin_organization.selectedOrg?(!admin_organization.selectedOrg.numb_housing?"--":admin_organization.selectedOrg.numb_housing):'--'}</label>
              }
            </div>
            <div className="stroka_2 name_text mini_text">
                Квартира
              {editMode?
                <input type="text" value={admin_organization.selectedOrg?admin_organization.selectedOrg.numb_flat:'-'}/>
              :
                <label className="inf_bd">{admin_organization.selectedOrg?(!admin_organization.selectedOrg.numb_flat?"--":admin_organization.selectedOrg.numb_flat):"--"}</label>
              }
            </div>
          </div>

          <div className="add_type name_text mini_text">
            Тип организации
            {editMode?admin_organization.type.map((type) => (
              <label style={{ fontSize: "16px" }} key={type.id}>
                <input type="checkbox" 
                    className="check_type" 
                    value={type.name || ''} 
                    />
                {type.name}
              </label>
            ))
            :
            <label className="inf_bd">{admin_organization.selectedOrg?(!admin_organization.selectedOrg.typeOrgName?"--":admin_organization.selectedOrg.typeOrgName):"--"}</label>
            }

          </div>
          <div className="add_categ name_text mini_text">
            Категория помощи
            
              {editMode?
                (<div className="category_org">
                {admin_organization.category.map((category) => (
                <label style={{ fontSize: "16px" }} key={category.id}>
                  <input
                    type="checkbox"
                    className="check_type"
                    value={category.name  || ''}
                    disabled={!editMode}
                  />
                  {category.name}
                </label>
                ))}
                </div>)
              :
              admin_organization.spisokCats.map((listcat) => (
                listcat.organizationName===admin_organization.selectedOrg.name?
                listcat.categoryName.map((nam)=>(<label className="inf_bd">{nam}</label>))
                :
                ""
                 ))
              }

          </div>

          {editMode?(
          <div className="btn_add_org">
            <MyButton style={{ height: "25px" }}>
              Создать новую категорию
            </MyButton>
          </div>):""}

          <div className="name_text mini_text">Руководитель организации</div>
          {editMode?
          <input type="text" value={admin_organization.selectedOrg?admin_organization.selectedOrg.fio_director:''} disabled={!editMode}/>
          :
          <label className="inf_bd">{admin_organization.selectedOrg?(!admin_organization.selectedOrg.fio_director?"--":admin_organization.selectedOrg.fio_director):"--"}</label>
          }

          <div className="stroka">
            <div className="stroka_2 name_text mini_text">
              Электронная почта
              {editMode?
              <input type="email" value={admin_organization.selectedOrg?admin_organization.selectedOrg.email:''} disabled={!editMode}/>
              :
              <label className="inf_bd">{admin_organization.selectedOrg?(!admin_organization.selectedOrg.email?"--":admin_organization.selectedOrg.email):"--"}</label>
              }
            </div>

            <div className="stroka_2 name_text mini_text">
              Телефон
              {editMode?
              <input type="text" value={admin_organization.selectedOrg?admin_organization.selectedOrg.phone:''} disabled={!editMode}/>
              :
              <label className="inf_bd">{admin_organization.selectedOrg?(!admin_organization.selectedOrg.phone?"--":admin_organization.selectedOrg.phone):"--"}</label>
              }
            </div>
          </div>

          <div className="name_text mini_text">
            График работы
            {editMode?(dayweek.map((day) => (
              <><div className="stroka" key={day.id}>
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
                </div><div className="stroka">
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
                    </div></>
            )))
            :
            (admin_organization.selectedOrg.work_schedule ? dayweek.map((day) => (
                <>
                <div className="stroka" key={day.id}>
                      <div
                          className="stroka_2 day name_text mini_text"
                          value={day}
                          style={{ flexBasis: "150px" }}
                      >
                          {day}
                      </div>

                      { day === dayweek[0] ? (!admin_organization.selectedOrg.work_schedule.monday.weekend ?
                        <><div className="stroka">
                        <label>{admin_organization.selectedOrg.work_schedule.monday.time[0]}</label>
                        {"-"}
                        <label>{admin_organization.selectedOrg.work_schedule.monday.time[1]}</label>
                        </div><div className="stroka">
                            <div className="stroka_2 name_text mini_text">Обед </div>
                            <div className="stroka">
                                <label>{admin_organization.selectedOrg.work_schedule.monday.lunch[0]}</label>
                                {"-"}
                                <label>{admin_organization.selectedOrg.work_schedule.monday.lunch[1]}</label>
                            </div>
                        </div></>:"Выходной")
                    : (day === dayweek[1] ? (!admin_organization.selectedOrg.work_schedule.tuesday.weekend ?
                        <><div className="stroka">
                        <label>{admin_organization.selectedOrg.work_schedule.tuesday.time[0]}</label>
                        {"-"}
                        <label>{admin_organization.selectedOrg.work_schedule.tuesday.time[1]}</label>
                        </div><div className="stroka">
                            <div className="stroka_2 name_text mini_text">Обед </div>
                            <div className="stroka">
                                <label>{admin_organization.selectedOrg.work_schedule.tuesday.lunch[0]}</label>
                                {"-"}
                                <label>{admin_organization.selectedOrg.work_schedule.tuesday.lunch[1]}</label>
                            </div>
                        </div></>:"Выходной")
                    : (day === dayweek[2] ? (!admin_organization.selectedOrg.work_schedule.wednesday.weekend ?
                        <><div className="stroka">
                        <label>{admin_organization.selectedOrg.work_schedule.wednesday.time[0]}</label>
                        {"-"}
                        <label>{admin_organization.selectedOrg.work_schedule.wednesday.time[1]}</label>
                        </div><div className="stroka">
                            <div className="stroka_2 name_text mini_text">Обед </div>
                            <div className="stroka">
                                <label>{admin_organization.selectedOrg.work_schedule.wednesday.lunch[0]}</label>
                                {"-"}
                                <label>{admin_organization.selectedOrg.work_schedule.wednesday.lunch[1]}</label>
                            </div>
                        </div></>:"Выходной") 
                    : (day === dayweek[3] ? (!admin_organization.selectedOrg.work_schedule.thursday.weekend ?
                        <><div className="stroka">
                        <label>{admin_organization.selectedOrg.work_schedule.thursday.time[0]}</label>
                        {"-"}
                        <label>{admin_organization.selectedOrg.work_schedule.thursday.time[1]}</label>
                        </div><div className="stroka">
                            <div className="stroka_2 name_text mini_text">Обед </div>
                            <div className="stroka">
                                <label>{admin_organization.selectedOrg.work_schedule.thursday.lunch[0]}</label>
                                {"-"}
                                <label>{admin_organization.selectedOrg.work_schedule.thursday.lunch[1]}</label>
                            </div>
                        </div></>:"Выходной")  
                    : (day === dayweek[4] ? (!admin_organization.selectedOrg.work_schedule.friday.weekend ?
                        <><div className="stroka">
                        <label>{admin_organization.selectedOrg.work_schedule.friday.time[0]}</label>
                        {"-"}
                        <label>{admin_organization.selectedOrg.work_schedule.friday.time[1]}</label>
                        </div><div className="stroka">
                            <div className="stroka_2 name_text mini_text">Обед </div>
                            <div className="stroka">
                                <label>{admin_organization.selectedOrg.work_schedule.friday.lunch[0]}</label>
                                {"-"}
                                <label>{admin_organization.selectedOrg.work_schedule.friday.lunch[1]}</label>
                            </div>
                        </div></>:"Выходной")
                    : (day === dayweek[5] ? (!admin_organization.selectedOrg.work_schedule.saturday.weekend ?
                        <><div className="stroka">
                        <label>{admin_organization.selectedOrg.work_schedule.saturday.time[0]}</label>
                        {"-"}
                        <label>{admin_organization.selectedOrg.work_schedule.saturday.time[1]}</label>
                        </div><div className="stroka">
                            <div className="stroka_2 name_text mini_text">Обед </div>
                            <div className="stroka">
                                <label>{admin_organization.selectedOrg.work_schedule.saturday.lunch[0]}</label>
                                {"-"}
                                <label>{admin_organization.selectedOrg.work_schedule.saturday.lunch[1]}</label>
                            </div>
                        </div></>:"Выходной")
                    :   (!admin_organization.selectedOrg.work_schedule.sunday.weekend ?
                        <><div className="stroka">
                        <label>{admin_organization.selectedOrg.work_schedule.sunday.time[0]}</label>
                        {"-"}
                        <label>{admin_organization.selectedOrg.work_schedule.sunday.time[1]}</label>
                        </div><div className="stroka">
                            <div className="stroka_2 name_text mini_text">Обед </div>
                            <div className="stroka">
                                <label>{admin_organization.selectedOrg.work_schedule.sunday.lunch[0]}</label>
                                {"-"}
                                <label>{admin_organization.selectedOrg.work_schedule.sunday.lunch[1]}</label>
                            </div>
                        </div></>:"Выходной"))
                                    )
                                )
                            )
                        )
                    } 
                        
                  </div></>
              )):"")
            }
            
          </div>

          <div className="name_text mini_text">
            Дополнительные данные
            {editMode?
                <><br /><textarea cols="80" rows="5" className="dop" type="text" value={admin_organization.selectedOrg ? admin_organization.selectedOrg.additional_data : '--'} disabled={!editMode} /></>
            :
                <label className="inf_bd">{admin_organization.selectedOrg?(!admin_organization.selectedOrg.additional_data?"--":admin_organization.selectedOrg.additional_data):"--"}</label>
            }
            </div>

            <div className="name_text mini_text">Координаты
            {editMode?
                    <div className="stroka">
                        <div className="stroka_2 name_text mini_text">
                            <input type="number" value={admin_organization.selectedOrg?admin_organization.selectedOrg.coordinates[0]:''} step="0.0000000000000000000001" min="0" max="200" disabled={!editMode}/>
                        </div>
                        <div className="stroka_2 name_text mini_text">
                            <input type="number" value={admin_organization.selectedOrg?admin_organization.selectedOrg.coordinates[1]:''} step="0.0000000000000000000001" min="0" max="200" disabled={!editMode}/>
                        </div>
                    </div>
                :
                    <div className="stroka">
                        <div className="stroka_2 name_text mini_text">
                            <label className="inf_bd">{admin_organization.selectedOrg ? (!admin_organization.selectedOrg.coordinates[0] ? "--" : admin_organization.selectedOrg.coordinates[0]) : "--"}</label>
                        </div>
                        <div className="stroka_2 name_text mini_text">
                            <label className="inf_bd">{admin_organization.selectedOrg ? (!admin_organization.selectedOrg.coordinates[1] ? "--" : admin_organization.selectedOrg.coordinates[1]) : "--"}</label>
                        </div>

                    </div>

            }
            
            </div>

        </div>
  );
});

export default InfOrg;
