import React, { useContext, useState } from "react";
import classes from "./FilterButton.module.css";
import { Context } from "../../../index";
import { observer } from "mobx-react-lite";

const FilterButton = observer(({ category }) => {
  const { organization } = useContext(Context);
  const [btnState, setBtnState] = useState(false);
  const toogleClassCheck = btnState ? classes.toggled : "";

  function selectCategory(category) {
    if (btnState) {
      organization.removeSelectedCategory(category.name);
    } else {
      organization.setSelectedCategory(category.name);
    }
    setBtnState((btnState) => !btnState);
  }

  return (
    <button
      onClick={() => selectCategory(category)}
      className={`${classes.myBtn} ${toogleClassCheck}`}
      style={{ background: category.color }}
    >
      {category.name}
    </button>
  );
});

export default FilterButton;
