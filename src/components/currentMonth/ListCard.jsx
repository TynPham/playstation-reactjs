import React from "react";
import { listCard } from "../../data/listData";
import Card from "./Card";

const ListCard = () => {
  return (
    <div className="grid sm:grid-cols-1 grid-cols-3 sm:px-4 px-28 bg-[#26254f] pb-12 justify-items-center">
      {listCard.map((card, index) => (
        <div key={index} className="sm:mt-8 sm:w-full w-[85%]">
          <Card card={card} />
        </div>
      ))}
    </div>
  );
};

export default ListCard;
