import { $authHost, $host } from "./index";

export const adding = async (
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
) => {
  const { data } = await $authHost.post("api/org/adding", {
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
    category_help_name,
  });

  const { data2 } = await $authHost.post("api/spisokCats/adding", {
    category_help_name,
    name,
  });

  return data, data2;
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

export const deleteOrg = async (id) => {
  try {
    await $authHost.delete(`api/org/delete/${id}`);
    return true;
  } catch (err) {
    return false;
  }
};

export const updateOrg = async (id, newData) => {
  const { data } = await $authHost.patch(`api/org/update/${id}`, newData);

  return data;
};

export const updateCatHelp = async (name, newData) => {
  const { data } = await $authHost.patch(
    `api/spisokCats/update`,
    name,
    newData
  );

  return data;
};

export const fetchAllOrg = async () => {
  try {
    const { data } = await $host.get("api/org/getAll");
    return data;
  } catch (err) {
    return [];
  }
};
