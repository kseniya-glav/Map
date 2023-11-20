import { $authHost, $host } from "./index";

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

export const fetchLocality = async () => {
  try {
    const { data } = await $host.get("api/locality");
    return data;
  } catch (err) {
    return [];
  }
};

export const fetchPlaceMark = async () => {
  try {
    const { data } = await $host.get("api/org");
    return data;
  } catch (err) {
    return [];
  }
};

export const fetchOrg = async (typeName, catName, statusName, localityName) => {
  try {
    const { data } = await $host.get("api/org", {
      params: { typeName, catName, statusName, localityName },
    });
    return data;
  } catch (err) {
    return [];
  }
};

export const fetchSpisokCats = async () => {
  try {
    const { data } = await $host.get("api/spisokCats");
    return data;
  } catch (err) {
    return [];
  }
};
