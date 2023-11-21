import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index";
import { Placemark } from "@pbe/react-yandex-maps";

const PlacemarkUI = observer(() => {
  const { organization } = useContext(Context);
  let activeCategory = [];
  if (organization.selectedCategory.length !== 0) {
    // Проверяю, есть ли организации удовлетворяющие выбранному условию
    organization.spisokCats.forEach((item) => {
      const isActiveCategory = organization.selectedCategory.every((selCat) => {
        return item.categoryName.findIndex((cat) => cat === selCat) !== -1;
      });
      if (isActiveCategory && !activeCategory.includes(item.organizationName)) {
        activeCategory.push(item.organizationName);
      }
    });
  }

  return (
    <div>
      {organization.org.map(
        (org) =>
          organization.checkedOrg.includes(org.typeOrgName) &&
          (activeCategory.length === 0 &&
          organization.selectedCategory.length === 0 ? (
            <Placemark geometry={org.coordinates} />
          ) : (
            activeCategory.includes(org.name) && (
              <Placemark geometry={org.coordinates} />
            )
          ))
      )}
    </div>
  );
});

export default PlacemarkUI;
