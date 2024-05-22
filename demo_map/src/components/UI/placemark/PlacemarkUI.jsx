import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index";
import { Placemark } from "@pbe/react-yandex-maps";

const PlacemarkUI = observer(() => {
  const data = [
    // Вес красного сектора.
    { weight: 52, color: "red" },
    // Вес зеленого сектора.
    { weight: 42, color: "#880011" },
    // Вес желтого сектора.
    { weight: 23, color: "#035201" },
    // Вес синего сектора.
    { weight: 12, color: "#002f55" },
  ];

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

  const properties = (org) => {
    return {
      data: [
        { weight: 720, color: "#FFA002" },
        { weight: 420, color: "#880011" },
        { weight: 230, color: "#035201" },
        { weight: 120, color: "#002f55" },
      ],
      hintContent: org.name,
      balloonContentHeader: org.name,
      balloonContentBody: `
      Категории помощи: ${
        organization.spisokCats
          .map((item) =>
            item.organizationName === org.name ? item.categoryName : ""
          )
          .join("\n")
        // organization.spisokCats.map((listcat) => (
        // listcat.organizationName===org.name?
        // listcat.categoryName.map((nam)=>(nam))
        // :
        // ""))
      } <br/>
      Адрес: г. ${org.localityName}, 
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
      ${org.email ? "Эл.почта: " + org.email + "<br/>" : ""}         
      ${org.additional_data ? org.additional_data + "<br/>" : ""}
      ${
        org.work_schedule
          ? "График работы: " +
            "<br/>" +
            (org.work_schedule.monday.weekend
              ? "Понедельник - выходной"
              : "Понедельник " +
                org.work_schedule.monday.time[0] +
                " - " +
                org.work_schedule.monday.time[1] +
                "; " +
                "обед " +
                org.work_schedule.monday.lunch[0] +
                "-" +
                org.work_schedule.monday.lunch[1]) +
            "<br/>" +
            (org.work_schedule.tuesday.weekend
              ? "Вторник - выходной"
              : "Вторник " +
                org.work_schedule.tuesday.time[0] +
                " - " +
                org.work_schedule.tuesday.time[1] +
                "; " +
                "обед " +
                org.work_schedule.tuesday.lunch[0] +
                "-" +
                org.work_schedule.tuesday.lunch[1]) +
            "<br/>" +
            (org.work_schedule.wednesday.weekend
              ? "Среда - выходной"
              : "Среда " +
                org.work_schedule.wednesday.time[0] +
                " - " +
                org.work_schedule.wednesday.time[1] +
                "; " +
                "обед " +
                org.work_schedule.wednesday.lunch[0] +
                "-" +
                org.work_schedule.wednesday.lunch[1]) +
            "<br/>" +
            (org.work_schedule.thursday.weekend
              ? "Четверг - выходной"
              : "Четверг " +
                org.work_schedule.thursday.time[0] +
                " - " +
                org.work_schedule.thursday.time[1] +
                "; " +
                "обед " +
                org.work_schedule.thursday.lunch[0] +
                "-" +
                org.work_schedule.thursday.lunch[1]) +
            "<br/>" +
            (org.work_schedule.friday.weekend
              ? "Пятница - выходной"
              : "Пятница " +
                org.work_schedule.friday.time[0] +
                " - " +
                org.work_schedule.friday.time[1] +
                "; " +
                "обед " +
                org.work_schedule.friday.lunch[0] +
                "-" +
                org.work_schedule.friday.lunch[1]) +
            "<br/>" +
            (org.work_schedule.saturday.weekend
              ? "Суббота - выходной"
              : "Суббота " +
                org.work_schedule.saturday.time[0] +
                " - " +
                org.work_schedule.saturday.time[1] +
                "; " +
                "обед " +
                org.work_schedule.saturday.lunch[0] +
                "-" +
                org.work_schedule.saturday.lunch[1]) +
            "<br/>" +
            (org.work_schedule.sunday.weekend
              ? "Воскресенье - выходной"
              : "Воскресенье" +
                org.work_schedule.sunday.time[0] +
                " - " +
                org.work_schedule.sunday.time[1] +
                "; " +
                "обед " +
                org.work_schedule.sunday.lunch[0] +
                "-" +
                org.work_schedule.sunday.lunch[1])
          : ""
      }
        `,
    };
  };

  return (
    <div>
      {organization.org.map(
        (org, index) =>
          organization.checkedOrg.includes(org.typeOrgName) &&
          (activeCategory.length === 0 &&
          organization.selectedCategory.length === 0 ? (
            <Placemark
              key={index}
              geometry={org.coordinates}
              properties={properties(org)}
              options={{
                balloonPanelMaxMapArea: Infinity,
                // clusterIconLayout: "default#pieChart",
                // iconLayout: "default#pieChart",
                // iconLayout: "default#pieChart",
                // iconPieChartCoreRadius: 30,
                // iconPieChartRadius: 40,
              }}
            />
          ) : (
            activeCategory.includes(org.name) && (
              <Placemark
                key={index}
                geometry={org.coordinates}
                properties={properties(org)}
                options={{
                  balloonPanelMaxMapArea: Infinity,
                  // clusterIconLayout: "default#pieChart",
                  // iconLayout: "default#pieChart",
                  // iconLayout: "default#pieChart",
                  // iconPieChartCoreRadius: 30,
                  // iconPieChartRadius: 40,
                }}
              />
            )
          ))
      )}
    </div>
  );
});

export default PlacemarkUI;
