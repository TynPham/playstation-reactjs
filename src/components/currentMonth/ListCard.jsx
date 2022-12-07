import React from "react";
import { listCard } from "../../data";
import Card from "./Card";

const ListCard = () => {
  return (
    <div className="grid grid-cols-3 px-28 bg-[#26254f] pb-12 justify-items-center">
      {listCard.map((card, index) => (
        <div key={index}>
          <Card card={card} />
        </div>
      ))}
    </div>
  );
};

export default ListCard;
