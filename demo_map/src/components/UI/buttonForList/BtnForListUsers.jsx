import React, { useContext, useState } from "react";
import classes from "./BtnForListOrg.module.css";
import { Context } from "../../../index";
import { observer } from "mobx-react-lite";

const BtnForListUsers = observer(({ item }) => {
  const { user } = useContext(Context);
  const toogleClassCheck = item.active ? classes.toggled : "";

  function selectUser(item) {
    console.log(user.selectedUser)
    if (item.email === user.selectedUser.email) {
      user.setSelectedUser('');
      item.active = false;
    } else {
      user.setSelectedUser(item);
      user.removeAllSelectedUserActive();
      item.active = true;
    }
  }

  return (
    <button
      onClick={() => selectUser(item)}
      className={`${classes.myBtn} ${toogleClassCheck }`}
      //={{ background: category.color }}
    >
      {item.fio}
    </button>
  );
});

export default BtnForListUsers;
