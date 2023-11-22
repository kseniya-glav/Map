import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index";

const LocalityBar = observer(() => {
  const { organization } = useContext(Context);

  console.log(organization.selectedLocality);
  return (
    <div className="selectgorod">
      <select>
        {organization.locality.map((locality) => (
          <option
            value={locality.name}
            key={locality.name}
            onClick={() => organization.setSelectedLocality(locality)}
          >
            {locality.name}
          </option>
        ))}
      </select>
    </div>
  );
});

export default LocalityBar;
