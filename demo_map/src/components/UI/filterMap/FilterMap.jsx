import React, { useContext, useState } from "react";
import FilterButton from "../buttonFilter/FilterButton";
import "./FilterMap.css";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index";

const FilterMap = observer(() => {
  const { organization } = useContext(Context);
  const [checkedStateOrganization, setCheckedStateOrganization] =
    useState(true);
  const [checkedNonProfitOrganization, setCheckedNonProfitOrganization] =
    useState(true);

  function handleChangeStateOrganization() {
    setCheckedStateOrganization(!checkedStateOrganization);
    edidCheckedOrg(!checkedStateOrganization, "Государственная");
  }

  function handleChangeNonProfitOrganization() {
    setCheckedNonProfitOrganization(!checkedNonProfitOrganization);
    edidCheckedOrg(!checkedNonProfitOrganization, "Некоммерческая");
  }

  function edidCheckedOrg(checked, checkedOrg) {
    if (checked) {
      organization.setCheckedOrg(checkedOrg);
    } else {
      organization.removeCheckedOrg(checkedOrg);
    }
  }

  return (
    <div className="filter_map">
      <div className="filter type_organization">
        {organization.type.map((type, index) => (
          <label key={index}>
            <input
              type="checkbox"
              className="check_type"
              checked={
                type.name === "Государственная"
                  ? checkedStateOrganization
                  : checkedNonProfitOrganization
              }
              onChange={
                type.name === "Государственная"
                  ? handleChangeStateOrganization
                  : handleChangeNonProfitOrganization
              }
              value={type.name}
              key={type.id}
            />
            {type.name}
          </label>
        ))}
      </div>
      <div className="filter category">
        {organization.category.map((category) => (
          <FilterButton key={category.id} category={category}></FilterButton>
        ))}
      </div>
    </div>
  );
});

export default FilterMap;
