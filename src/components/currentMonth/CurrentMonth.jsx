import React from "react";
import { currentMonthIntro } from "../../data/singleData";
import Introduce from "../introduceGame/Introduce";
import ListCard from "./ListCard";

const CurrentMonth = () => {
  return (
    <div className="relative mt-8 bg-[#26254f]">
      <div className="relative">
        <Introduce game={currentMonthIntro} classChange={true} />
      </div>
      <ListCard />
    </div>
  );
};

export default CurrentMonth;
