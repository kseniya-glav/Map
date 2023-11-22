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
            <Placemark
              geometry={org.coordinates}
              modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
              properties={{
                hintContent: org.name,
                balloonContentHeader: org.name,
                balloonContentBody: `Адрес: г. ${org.localityName}, 
                  ${org.street}
                  ${org.numb_house} 
                  ${org.numb_housing ? "к. " + org.numb_housing : ""} 
                  ${org.numb_flat ? "оф./кв." + org.numb_flat : ""}
                  <br/>
                  ${
                    org.fio_director
                      ? "Уполномоченное лицо: " + org.fio_director + "<br/>"
                      : ""
                  }
                  ${org.phone ? "Телефон: " + org.phone + "<br/>" : ""}
                  ${
                    org.email ? "Эл.почта: " + org.email + "<br/>" : ""
                  }         
                  ${org.additional_data ? org.additional_data : ""}
                  `,
              }}
              options={{
                balloonPanelMaxMapArea: Infinity,
              }}
            />
          ) : (
            activeCategory.includes(org.name) && (
              <Placemark
                geometry={org.coordinates}
                modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
                properties={{
                  hintContent: org.name,
                  balloonContentHeader: org.name,
                  balloonContentBody: `Адрес: г. ${org.localityName}, 
                  ${org.street}
                  ${org.numb_house} 
                  ${org.numb_housing ? "к. " + org.numb_housing : ""} 
                  ${org.numb_flat ? "оф./кв." + org.numb_flat : ""}
                  <br/>
                  ${
                    org.fio_director
                      ? "Уполномоченное лицо: " + org.fio_director + "<br/>"
                      : ""
                  }
                  ${org.phone ? "Телефон: " + org.phone + "<br/>" : ""}
                  ${
                    org.email ? "Эл.почта: " + org.email + "<br/>" : ""
                  }         
                  ${org.additional_data ? org.additional_data : ""}
                  `,
                }}
                options={{
                  balloonPanelMaxMapArea: Infinity,
                }}
              />
            )
          ))
      )}
    </div>
  );
});

export default PlacemarkUI;

/// org.street д. org.numb_house к.numb_housing?numb_housing:"-" оф./кв.numb_flat?numb_flat:"-"
