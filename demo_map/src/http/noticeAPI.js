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
