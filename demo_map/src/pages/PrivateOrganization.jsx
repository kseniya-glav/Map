import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";

import NavbarAdmin from "../components/UI/navbar/NavbarAdmin";
import Organization from "../components/UI/organization/Organization";
import { Context } from "../index";
import {
  fetchCategory,
  fetchLocality,
  fetchPlaceMark,
  fetchType,
  fetchSpisokCats,
} from "../http/orgAPI";

const PrivateOrganization = observer(() => {
  const { admin_organization } = useContext(Context);

  useEffect(() => {
    fetchCategory().then((data) => admin_organization.setCategory(data));
    fetchType().then((data) => admin_organization.setType(data));
    fetchLocality().then((data) => admin_organization.setLocality(data));
    fetchPlaceMark().then((data) => admin_organization.setOrg(data));
    fetchSpisokCats().then((data) => admin_organization.setSpisokCats(data));
  }, []);

  return (
    <div>
      <NavbarAdmin />
      <Organization />
    </div>
  );
});

export default PrivateOrganization;
