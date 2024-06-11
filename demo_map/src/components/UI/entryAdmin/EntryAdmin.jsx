import React, { useContext } from "react";
import "./EntryAdmin.css";

import { useNavigate } from "react-router-dom";
import { login } from "../../../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../../..";

import { useForm } from "react-hook-form";

const EntryAdmin = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const onSubmit = async (enteredData) => {
    try {
      const data = await login(enteredData);
      user.setUser(data);
      user.setIsAuth(true);
      navigate("/");
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 160px - 40px)",
        }}
      >
        <div style={{ display: "flex" }}>
          <div className="entryAdmin">
            <div
              className="name_text"
              style={{ display: "flex", justifyContent: "center" }}
            >
              Администратор
            </div>

            <div className="container-with-validation">
              <label className="name_text mini_text">Логин</label>
              <input
                {...register("email", {
                  required: "Поле обязательно к заполнению",
                  pattern: {
                    value:
                      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
                    message: "Некорректное значение для почты",
                  },
                })}
                type="text"
              />
              {errors?.email && (
                <span className="validation-error">
                  {errors?.email?.message || ""}
                </span>
              )}
            </div>

            <div className="container-with-validation">
              <label className="name_text mini_text">Пароль</label>
              <input
                {...register("password", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 4,
                    message: "Минимальная длина пароля - 4 символа",
                  },
                })}
                type="password"
              />
              {errors?.password && (
                <span className="validation-error">
                  {errors?.password?.message || ""}
                </span>
              )}
            </div>
          </div>
          <input type="submit" disabled={!isValid} value={"Войти"} />
        </div>
      </div>
    </form>
  );
});

export default EntryAdmin;
