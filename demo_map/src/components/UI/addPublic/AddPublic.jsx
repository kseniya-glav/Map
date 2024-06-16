import React, { useContext, useState } from "react";
import { Context } from "../../../index";
import "./AddPublic.css";
import { observer } from "mobx-react-lite";

import { useForm } from "react-hook-form";
import { fetchAddingNotice } from "../../../http/noticeAPI";

const AddPublic = observer(() => {
  const { organization } = useContext(Context);
  const [additionalCategory, setAdditionalCategory] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
  });

  const onSubmit = async (enteredData) => {
    const { emailUser, name, ...message } = enteredData;
    try {
      await fetchAddingNotice(emailUser, name, message);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
              <div className="container-with-validation">
                <label className="name_text mini_text">Электронная почта</label>
                <input
                  {...register("emailUser", {
                    required: "Поле обязательно к заполнению",
                    pattern: {
                      value:
                        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
                      message: "Некорректное значение для почты",
                    },
                  })}
                  type="text"
                />
                {errors.emailUser && (
                  <span className="validation-error">
                    {errors?.emailUser?.message || ""}
                  </span>
                )}
              </div>

              <div className="container-with-validation">
                <label className="name_text mini_text">ФИО</label>
                <input
                  {...register("name", {
                    required: "Поле обязательно к заполнению",
                  })}
                  type="text"
                />
                {errors.name && (
                  <span className="validation-error">
                    {errors?.name?.message || ""}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="info_organization">
            <div className="name_text">Информация об организации</div>
            <div className="info_organization_group">
              <div className="container-with-validation">
                <label className="name_text mini_text">Наименование</label>
                <input
                  {...register("nameOrg", {
                    required: "Поле обязательно к заполнению",
                  })}
                  type="text"
                />
                {errors.nameOrg && (
                  <span className="validation-error">
                    {errors?.nameOrg?.message || ""}
                  </span>
                )}
              </div>

              <div className="container-with-validation">
                <label className="name_text mini_text">Электронная почта</label>
                <input
                  {...register("emailOrg", {
                    required: "Поле обязательно к заполнению",
                    pattern: {
                      value:
                        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
                      message: "Некорректное значение для почты",
                    },
                  })}
                  type="text"
                />
                {errors.emailOrg && (
                  <span className="validation-error">
                    {errors?.emailOrg?.message || ""}
                  </span>
                )}
              </div>

              <div className="container-with-validation">
                <label className="name_text mini_text">Телефон</label>
                <input
                  {...register("phoneOrg", {
                    required: "Поле обязательно к заполнению",
                  })}
                  type="text"
                />
                {errors.phoneOrg && (
                  <span className="validation-error">
                    {errors?.phoneOrg?.message || ""}
                  </span>
                )}
              </div>

              <div className="container-with-validation">
                <label className="name_text mini_text">Населенный пункт</label>
                <input
                  {...register("localityName", {
                    required: "Поле обязательно к заполнению",
                  })}
                  type="text"
                />
                {errors.localityName && (
                  <span className="validation-error">
                    {errors?.localityName?.message || ""}
                  </span>
                )}
              </div>

              <div className="container-with-validation">
                <label className="name_text mini_text">Улица</label>
                <input
                  {...register("street", {
                    required: "Поле обязательно к заполнению",
                  })}
                  type="text"
                />
                {errors.street && (
                  <span className="validation-error">
                    {errors?.street?.message || ""}
                  </span>
                )}
              </div>

              <div className="container-with-validation">
                <label className="name_text mini_text">Дом</label>
                <input
                  {...register("numb_house", {
                    required: "Поле обязательно к заполнению",
                  })}
                  type="text"
                />
                {errors.numb_house && (
                  <span className="validation-error">
                    {errors?.numb_house?.message || ""}
                  </span>
                )}
              </div>

              <div className="container-with-validation">
                <label className="name_text mini_text">Корпус</label>
                <input {...register("numb_housing")} type="text" />
                {errors.numb_housing && (
                  <span className="validation-error">
                    {errors?.numb_housing?.message || ""}
                  </span>
                )}
              </div>

              <div className="container-with-validation">
                <label className="name_text mini_text">Квартира</label>
                <input {...register("numb_flat")} type="text" />
                {errors.numb_flat && (
                  <span className="validation-error">
                    {errors?.numb_flat?.message || ""}
                  </span>
                )}
              </div>

              <div className="name_text mini_text type_org">
                Тип организации
                {organization.type.map((type, index) => (
                  <label style={{ fontSize: "16px" }} key={index}>
                    <input
                      {...register("typeOrgName", {
                        required: "Поле обязательно к заполнению",
                      })}
                      id={index}
                      type="radio"
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
                  {organization.category.map((category, index) => (
                    <label style={{ fontSize: "16px" }} key={index}>
                      <input
                        {...register("category", {
                          required: "Выберите хотябы одну категорию",
                        })}
                        type="checkbox"
                        className="check_type"
                        value={category.name}
                      />
                      {category.name}
                    </label>
                  ))}
                  <label>
                    <input
                      type="checkbox"
                      className="check_type"
                      {...register("category", {
                        required: "Выберите хотябы одну категорию",
                      })}
                      value={additionalCategory}
                    />
                    <input
                      type="text"
                      style={{ width: "80%", height: "15px" }}
                      onChange={(e) => setAdditionalCategory(e.target.value)}
                    />
                  </label>
                  {errors.category && (
                    <span className="validation-error">
                      {errors?.category?.message || ""}
                    </span>
                  )}
                </div>
              </div>
              <div className="container-with-validation container-dop">
                <div className="name_text mini_text">Дополнительные данные</div>
                <textarea
                  className="dop"
                  {...register("additional_information")}
                />
              </div>
            </div>
          </div>
        </div>
        <input type="submit" disabled={!isValid} value={"Отправить"} />
      </div>
    </form>
  );
});

export default AddPublic;
