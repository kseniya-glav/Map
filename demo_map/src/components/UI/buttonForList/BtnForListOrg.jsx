import React, { useContext, useState } from "react";
import classes from "./BtnForListOrg.module.css";
import { Context } from "../../../index";
import { observer } from "mobx-react-lite";

const BtnForListOrg = observer(({ org }) => {
  const { admin_organization } = useContext(Context);
  const toogleClassCheck = org.active ? classes.toggled : "";

  function selectOrg(org) {
    if (org.name === admin_organization.selectedOrg.name) {
      admin_organization.setSelectedOrg('');
      org.active = false;
    } else {
      admin_organization.setSelectedOrg(org);
      admin_organization.removeAllSelectedOrgActive();
      org.active = true;
    }
  }

  return (
    <button
      onClick={() => selectOrg(org)}
      className={`${classes.myBtn} ${toogleClassCheck }`}
      //={{ background: category.color }}
    >
      {org.name}
    </button>
  );
});

export default BtnForListOrg;
