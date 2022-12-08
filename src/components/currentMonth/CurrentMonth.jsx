import React from "react";
import { currentMonthIntro } from "../../data/singleData";
import Introduce from "../introduceGame/Introduce";
import ListCard from "./ListCard";

const CurrentMonth = () => {
  return (
    <div className="relative mt-8 ">
      <div className="relative">
        <Introduce game={currentMonthIntro} />
      </div>
      <ListCard />
    </div>
  );
};

export default CurrentMonth;
