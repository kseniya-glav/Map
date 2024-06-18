import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import NavbarAdmin from "../components/UI/navbar/NavbarAdmin";
import Notice from "../components/UI/notice/Notice";
import { Context } from "../index";
import { fetchCategory, fetchType } from "../http/noticeAPI";


const PrivateNotice = observer(() => {

  const { organization } = useContext(Context);

  useEffect(() => {
    fetchCategory().then((data) => organization.setCategory(data));
    fetchType().then((data) => organization.setType(data));
  }, [organization]);

  return (
    <div>
      <NavbarAdmin />
      <Notice />
    </div>
  );
});

export default PrivateNotice;
