import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (fio, email, phone, role, password) => {
  const { data } = await $authHost.post("api/user/registration", {
    fio,
    email,
    phone,
    password,
    role,
  });
  return jwt_decode(data.token);
};

export const login = async (user) => {
  const { data } = await $host.post("api/user/login", user);
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};

export const check = async () => {
  const { data } = await $authHost.get("api/user/auth");
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};

export const fetchAllUsers = async () => {
  try {
    const { data } = await $host.get("api/user/getAll");
    return data;
  } catch (err) {
    return [];
  }
};

export const deleteUser = async (id) => {
  try {
    await $authHost.delete(`api/user/delete/${id}`);
    return true;
  } catch (err) {
    return false;
  }
};

export const updateUser = async (id, newData) => {
  const { data } = await $authHost.patch(`api/user/update/${id}`, newData);
  return data;
};
