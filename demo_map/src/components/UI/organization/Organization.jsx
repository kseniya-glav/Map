import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import MyButton from "../myButton/MyButton";
import "./Organization.css";
import { Context } from "../../../index";
import BtnForListOrg from "../buttonForList/BtnForListOrg";
import InfOrg from "./inf/InfOrg";
import { adding, deleteOrg } from "../../../http/orgAPI";
import Modal from "../modal/modal";

const Organization = observer(() => {
  const { admin_organization } = useContext(Context);
  const [editMode, setEditMode] = useState(false);

  const selectedOrg = admin_organization.selectedOrg;

  const setMode = () => {
    setEditMode((editMode) => !editMode);
  };

    
  const [name, setName] = useState("");
  const [locality_name, setLocality_name] = useState("");
  const [street, setStreet] = useState("")
  const [numb_house, setNumb_house] = useState("");
  const [numb_housing, setNumb_housing] = useState("");
  const [numb_flat, setNumb_flat] = useState("");
  const [type_org_name, setType_org_name] = useState("");
  const [category_help_name, setCategoryHelpName] = useState([]);
  const [fio_director, setFio_director] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [work_schedule, setWork_schedule] = useState({
    "monday": { "time": ["",""], "lunch":["",""], "weekend": Boolean},
    "tuesday": { "time": ["",""], "lunch":["",""], "weekend": Boolean},
    "wednesday": { "time": ["",""], "lunch":["",""], "weekend": Boolean},
    "thursday": { "time": ["",""], "lunch":["",""], "weekend": Boolean},
    "friday": { "time": ["",""], "lunch":["",""], "weekend": Boolean},
    "saturday": { "time": ["",""], "lunch":["",""], "weekend": Boolean},
    "sunday": { "time": ["",""], "lunch":["",""], "weekend": Boolean}
    });
  const [additional_data, setAdditional_data] = useState("");
  const [coordinates, setCoordinates] = useState(["", ""]);
  const [status_name, setStatus_name] = useState(false);


  const [modalActive, setModalActive] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);

  const onDeleteOrg = async () => {
    try {
      await deleteOrg(selectedOrg.id);
      admin_organization.removeOrg(selectedOrg.id);
      admin_organization.setSelectedOrg("");
      setEditMode(false);
      setModalDelete(false);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  const onAddOrg = async () => {
    try {
      await adding(name, locality_name, street, numb_house, numb_housing, numb_flat,
        type_org_name, fio_director, email, phone, work_schedule,
        additional_data, coordinates, status_name, category_help_name);
      setModalActive(false);


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
        <div className="list_org" disabled={editMode}>
          {admin_organization.org.map((org) => (
            <BtnForListOrg
              style={{ margin: "4px 0" }}
              key={org.id}
              org={org}
            ></BtnForListOrg>
          ))}
        </div>
        <div className="btn_add">
          <MyButton onClick={() => setModalActive(true)} >
            Добавить организацию
          </MyButton>
        </div>
      </div>
      <div className="org_rigth">
        <div className="name_text">Карточка организации</div>

        <InfOrg editMode={editMode} selectedOrg={selectedOrg} 
         name={selectedOrg.name} setName={setName}
         localityName={selectedOrg.locality_name} setLocalityName={setLocality_name}
         street={selectedOrg.street} setStreet={setStreet}
         numb_house={selectedOrg.numb_house} setNumb_house={setNumb_house}
         numb_housing={selectedOrg.numb_housing} setNumb_housing={setNumb_housing}
         numb_flat={selectedOrg.numb_flat} setNumb_flat={setNumb_flat}
         type_org_name={selectedOrg.type_org_name} setType_org_name={setType_org_name}
         category_help_name={selectedOrg.category_help_name} setCategoryHelpName={setCategoryHelpName}
         fio_director={selectedOrg.fio_director} setFio_director={setFio_director}
         email={selectedOrg.email} setEmail={setEmail}
         phone={selectedOrg.phone} setPhone={setPhone}
         work_schedule={selectedOrg.work_schedule} setWork_schedule={setWork_schedule}
         additional_data={selectedOrg.additional_data} setAdditional_data={setAdditional_data}
         coordinates={selectedOrg.coordinates} setCoordinates={setCoordinates}
         status_name={selectedOrg.status_name} setStatus_name={setStatus_name}
        />

        <div className="edit_inf">
          {editMode && (
            <div className="btn_add">
              <MyButton>Сохранить</MyButton>
            </div>
          )}
          {selectedOrg && (
            <div className="btn_add">
              <MyButton onClick={() => setMode()}>
                {!editMode ? "Редактировать" : "Отмена"}
              </MyButton>
            </div>
          )}
          {selectedOrg && (
            <MyButton onClick={() => setModalDelete(true)}>
              Удалить
            </MyButton>
          )}
        </div>

        <Modal active={modalDelete} setActive={setModalDelete} width={"45vw"}>
            <h1>
              Вы действительно хотите удалить организацию <br />«
              {selectedOrg.name}»?
            </h1>
            <MyButton onClick={onDeleteOrg}>Удалить</MyButton>
            <MyButton onClick={() => setModalDelete(false)}>Отменить</MyButton>
        </Modal>
      </div>

      <Modal active={modalActive} setActive={setModalActive} width={"60vw"}>
        <div>
          <form>
            <div className="name_text center">Добавить организацию</div>
            <InfOrg editMode={true} selectedOrg={""} 
                     name={name} setName={setName}
                     localityName={locality_name} setLocalityName={setLocality_name}
                     street={street} setStreet={setStreet}
                     numb_house={numb_house} setNumb_house={setNumb_house}
                     numb_housing={numb_housing} setNumb_housing={setNumb_housing}
                     numb_flat={numb_flat} setNumb_flat={setNumb_flat}
                     type_org_name={type_org_name} setType_org_name={setType_org_name}
                     category_help_name={category_help_name} setCategoryHelpName={setCategoryHelpName}
                     fio_director={fio_director} setFio_director={setFio_director}
                     email={email} setEmail={setEmail}
                     phone={phone} setPhone={setPhone}
                     work_schedule={work_schedule} setWork_schedule={setWork_schedule}
                     additional_data={additional_data} setAdditional_data={setAdditional_data}
                     coordinates={coordinates} setCoordinates={setCoordinates}
                     status_name={status_name} setStatus_name={setStatus_name}
            />
          </form>

          <div className="stroka" style={{ marginTop: "30px" }}>
            <div className="stroka_2">
              <MyButton onClick={() => setModalActive(false)}>
                Отменить
              </MyButton>
            </div>
            <div className="stroka_2">
              <MyButton onClick={onAddOrg}>Добавить</MyButton>
            </div>
          </div>
        </div>
      </Modal>


    </div>
    
  );
});

export default Organization;
