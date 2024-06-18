import React, { useContext, useState } from "react";
import classes from "./BtnForListOrg.module.css";
import { Context } from "../../../index";
import { observer } from "mobx-react-lite";

const BtnForListNotice = observer(({ item }) => {
  const { noticeStore } = useContext(Context);
  const toogleClassCheck = item.active ? classes.toggled : "";

  function selectNotice(item) {
    if (item.id === noticeStore.selectedNotice.id) {
      noticeStore.setSelectedNotice("");
      item.active = false;
    } else {
      noticeStore.setSelectedNotice(item);
      noticeStore.removeAllSelectedNoticeActive();
      item.active = true;
    }
  }

  return (
    <button
      onClick={() => selectNotice(item)}
      className={`${classes.myBtn} ${toogleClassCheck}`}
      //={{ background: category.color }}
    >
      {item.email_notifications}
    </button>
  );
});

export default BtnForListNotice;
