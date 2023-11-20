import React, { useContext, useEffect } from "react";
import FilterButton from "../buttonFilter/FilterButton";
import "./FilterMap.css";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index";

const FilterMap = observer(() => {
  const { organization } = useContext(Context);

  //const type_organization = [ 'Государственная', 'Некоммерческая']
  // const category = ['Бесплатные (или дешевле, чем в магазинах) одежда и предметы первой необходимости',
  //             'Бесплатные продукты или готовая еда',
  //             'Бесплатная юридическая консультация',
  //             'Бесплатная психологическая помощь',
  //             'Кризисное жилье',
  //             'Социальное сопровождение',
  //             'Льготы и пособия',
  //             'Профессиональное обучение',
  //             'Бесплатное предоставление витаминов',
  //             'Социальный прокат средств безопасности',
  //             'todsvdbv',
  //             'fhbfgndfgn',
  //             'fbdfndb',
  //             'todsvdbv',
  //             'fhbfgndfgn',
  //             'fbdfndb'
  //         ]

  return (
    <div className="filter_map">
      <div className="filter type_organization">
        {organization.type.map((type) => (
          <label>
            <input
              type="checkbox"
              className="check_type"
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
