import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index";

const LocalityBar = observer(() => {
  const { organization } = useContext(Context);
  const [selectedValue, setSelectedValue] = useState("Пермь");

  function getCoordinates(e) {
    setSelectedValue(() => e.target.value);
    const selectedLoc = organization.locality.filter(
      (item) => item.name === e.target.value
    );
    organization.setSelectedLocality(selectedLoc[0].coordinates);
  }

  return (
    <div className="selectgorod">
      <select onChange={getCoordinates} value={selectedValue}>
        {organization.locality.map((locality) => (
          <option value={locality.name} key={locality.name}>
            {locality.name}
          </option>
        ))}
      </select>
    </div>
  );
});

export default LocalityBar;
