import React from "react";
import { listCard } from "../../data/listData";
import Card from "./Card";

const ListCard = () => {
  return (
    <div className="sm:grid-cols-1 sm:px-4 grid grid-cols-3 px-28 bg-curMonth pb-12 justify-items-center">
      {listCard.map((card, index) => (
        <div key={index} className="sm:mt-8 sm:w-full w-85%">
          <Card card={card} />
        </div>
      ))}
    </div>
  );
};

export default ListCard;
