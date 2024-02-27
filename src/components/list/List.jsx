import React from "react";

import ListItems from "../listItems/ListItems";

const List = () => {

  return (
    <div className="catalog-list__labs">
      <ListItems
        title="Электронные учебные пособия"
      />
      <ListItems
        title="Обучающие программы"
      />
      <ListItems
        title="Программные тренажеры"

      />
      <ListItems
        title="Тренажеры"
      />
      
    </div>
  );
};

export default List;