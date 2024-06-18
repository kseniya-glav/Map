import React, { useContext, useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import MyButton from "../myButton/MyButton";
import "./Notice.css";
import { Context } from "../../../index";
import { deleteNotice, fetchAllNotice } from "../../../http/noticeAPI";
import BtnForListNotice from "../buttonForList/BtnForListNotice";
import { adding } from "../../../http/orgAPI";
import InfOrg from "../organization/inf/InfOrg";
import Modal from "../modal/modal";


const Notice = observer(() => {
  const { noticeStore } = useContext(Context);


  const [editMode, setEditMode] = useState(false);

  const selectedNotice = noticeStore.selectedNotice;

  useEffect(() => {
    fetchAllNotice().then((data) => noticeStore.setAllNotice(data));
  }, [noticeStore]);


    const [modalDelete, setModalDelete] = useState(false);

    const onDeleteNotice = async () => {
      try {
        await deleteNotice(selectedNotice.id);
        noticeStore.removeNotice(selectedNotice.id);
        noticeStore.setSelectedNotice("");
        setEditMode(false);
        setModalDelete(false);
      } catch (e) {
        alert(e.response.data.message);
      }
    };

  const [name, setName] = useState("");
  const [locality_name, setLocality_name] = useState("");
  const [street, setStreet] = useState("");
  const [numb_house, setNumb_house] = useState("");
  const [numb_housing, setNumb_housing] = useState("");
  const [numb_flat, setNumb_flat] = useState("");
  const [type_org_name, setType_org_name] = useState("");
  const [category_help_name, setCategoryHelpName] = useState([]);
  const [fio_director, setFio_director] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [work_schedule, setWork_schedule] = useState({
    monday: { time: ["", ""], lunch: ["", ""], weekend: Boolean },
    tuesday: { time: ["", ""], lunch: ["", ""], weekend: Boolean },
    wednesday: { time: ["", ""], lunch: ["", ""], weekend: Boolean },
    thursday: { time: ["", ""], lunch: ["", ""], weekend: Boolean },
    friday: { time: ["", ""], lunch: ["", ""], weekend: Boolean },
    saturday: { time: ["", ""], lunch: ["", ""], weekend: Boolean },
    sunday: { time: ["", ""], lunch: ["", ""], weekend: Boolean },
  });
  const [additional_data, setAdditional_data] = useState("");
  const [coordinates, setCoordinates] = useState(["", ""]);
  const [status_name, setStatus_name] = useState(false);

  const onAddOrg = async () => {
    try {
      await adding(
        name,
        locality_name,
        street,
        numb_house,
        numb_housing,
        numb_flat,
        type_org_name,
        fio_director,
        email,
        phone,
        work_schedule,
        additional_data,
        coordinates,
        status_name,
        category_help_name
      );
    } catch (e) {
      alert(e.response.data.message);
    }
  };

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
          {noticeStore?.allNotice?.map((item, index) => (
            <BtnForListNotice
              style={{ margin: "4px 0" }}
              key={index}
              item={item}
            ></BtnForListNotice>
          ))}
        </div>

        {selectedNotice ? 
        <>
        <div className="notice_cart">
          <div className=" stroka_notice name_text mini_text">
            <div className="stroka_2 name_text mini_text">
              Отправитель: 
            <label className="notice_text">{selectedNotice?.name } </label>
            <label className="notice_text">{selectedNotice?.email_notifications } </label>
            </div>
          </div>
          <div className=" stroka_notice name_text mini_text">
            <div className="stroka_2">Наименование организации</div>
            <label className="notice_text">{selectedNotice?.message?.nameOrg}</label>
          </div>
          <div className=" stroka_notice name_text mini_text">
            <div className="stroka_2">Эл. почта</div>
            <label className="notice_text">{selectedNotice?.message?.emailOrg}</label>
            <div className="stroka_2">Телефон</div>
            <label className="notice_text">{selectedNotice?.message?.phoneOrg}</label>
          </div>
          <div className=" stroka_notice name_text mini_text">
            <div className="stroka_2">Населенный пункт</div>
            <label className="notice_text">{selectedNotice?.message?.localityName}</label>
          </div>

          <div className=" stroka_notice name_text mini_text">
            <div className="stroka_2">Улица</div>
            <label className="notice_text">{selectedNotice?.message?.street}</label>

            <div className="stroka_2">Дом</div>
            <label className="notice_text">{selectedNotice?.message?.numb_house}</label>

            <div className="stroka_2">Корпус</div>
            <label className="notice_text"> {selectedNotice?.message?.numb_housing} </label>

            <div className="stroka_2">Квартира</div>
            <label className="notice_text"> {selectedNotice?.message?.numb_flat} </label>
          </div>

          <div className=" stroka_notice name_text mini_text">
            <div className="stroka_2 name_text mini_text">
              Категория помощи 
            <label className="notice_text"> {selectedNotice?.message?.category.join(", ")} </label>
            </div>
          </div>

          <div className=" stroka_notice name_text mini_text">
          <div className="stroka_2 name_text mini_text">
              Тип организации
            <label className="notice_text"> {selectedNotice?.message?.typeOrgName} </label>
            </div>
          </div>
          <div className=" stroka_notice name_text mini_text">
            <div className="stroka_2 name_text mini_text">
              Дополнительные данные
            <label className="notice_text"> {selectedNotice?.message?.additional_information} </label>
            </div>
          </div>
          
        </div>
        <div className="btn_del_users">
            <MyButton onClick={() => setModalDelete(true)}>Удалить</MyButton>
        </div>
        <Modal active={modalDelete} setActive={setModalDelete} width={"45vw"}>
          <h1>
            Вы действительно хотите удалить уведомление от <br />«
            {selectedNotice?.email_notifications}»?
          </h1>
          <MyButton onClick={onDeleteNotice}>Удалить</MyButton>
          <MyButton onClick={() => setModalDelete(false)}>Отменить</MyButton>
        </Modal>
        </>
        : null}
      </div>
      <div className="org_rigth">
        <div className="name_text">Карточка организации</div>
        <InfOrg
              editMode={true}
              selectedOrg={""}
              name={name}
              setName={setName}
              localityName={locality_name}
              setLocalityName={setLocality_name}
              street={street}
              setStreet={setStreet}
              numb_house={numb_house}
              setNumb_house={setNumb_house}
              numb_housing={numb_housing}
              setNumb_housing={setNumb_housing}
              numb_flat={numb_flat}
              setNumb_flat={setNumb_flat}
              type_org_name={type_org_name}
              setType_org_name={setType_org_name}
              category_help_name={category_help_name}
              setCategoryHelpName={setCategoryHelpName}
              fio_director={fio_director}
              setFio_director={setFio_director}
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
              work_schedule={work_schedule}
              setWork_schedule={setWork_schedule}
              additional_data={additional_data}
              setAdditional_data={setAdditional_data}
              coordinates={coordinates}
              setCoordinates={setCoordinates}
              status_name={status_name}
              setStatus_name={setStatus_name}
            />

          <div className="stroka">
            <div className="stroka_2">
              <MyButton >
                Очистить данные
              </MyButton>
            </div>
            <div className="stroka_2">
              <MyButton onClick={onAddOrg}>Добавить</MyButton>
            </div>
          </div>
      </div>
    </div>
  );
});

export default Notice;
