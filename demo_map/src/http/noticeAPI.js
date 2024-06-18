import { $authHost, $host } from "./index";

export const fetchAddingNotice = async (email_notifications, name, message) => {
  try {
    const { data } = await $host.post("api/notice/adding", {
      email_notifications,
      name,
      message,
    });
    return data;
  } catch (err) {
    return [];
  }
};

export const fetchAllNotice = async () => {
  try {
    const { data } = await $host.get("api/notice/getAll");
    return data;
  } catch (err) {
    return [];
  }
};

export const deleteNotice = async (id) => {
  try {
    await $authHost.delete(`api/notice/delete/${id}`);
    return true;
  } catch (err) {
    return false;
  }
};

export const fetchCategory = async () => {
  try {
    const { data } = await $host.get("api/category");
    return data;
  } catch (err) {
    return [];
  }
};

export const fetchType = async () => {
  try {
    const { data } = await $host.get("api/type");
    return data;
  } catch (err) {
    return [];
  }
};




