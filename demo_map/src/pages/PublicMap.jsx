import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import classes from "./Pages.module.css";

import FilterMap from "../components/UI/filterMap/FilterMap";
import Footer from "../components/UI/footer/Footer";
import Carta from "../components/UI/map/Carta";
import Navbar from "../components/UI/navbar/Navbar";
import NavbarAdmin from "../components/UI/navbar/NavbarAdmin";
import { Context } from "../index";
import {
  fetchCategory,
  fetchLocality,
  fetchPlaceMark,
  fetchType,
  fetchSpisokCats,
} from "../http/orgAPI";

const PublicMap = observer(() => {
  const { organization } = useContext(Context);
  const { user } = useContext(Context);

  useEffect(() => {
    fetchCategory().then((data) => organization.setCategory(data));
    fetchType().then((data) => organization.setType(data));
    fetchLocality().then((data) => organization.setLocality(data));
    fetchPlaceMark().then((data) => organization.setOrg(data));
    fetchSpisokCats().then((data) => organization.setSpisokCats(data));
  }, []);

  return user.isAuth ? (
    <div>
      <NavbarAdmin />
      <div className={classes.carta_page}>
        <Carta />
        <FilterMap />
      </div>
    </div>
  ) : (
    <div>
      <Navbar />
      <div className={classes.carta_page}>
        <Carta />
        <FilterMap />
      </div>
      <Footer />
    </div>
  );
});

export default PublicMap;
