import React from "react";
import { theLastOfUss } from "../../data/singleData";
import Introduce from "../introduceGame/Introduce";

const TheLastOfUs = () => {
  return (
    <div className="relative">
      <Introduce game={theLastOfUss} />
    </div>
  );
};

export default TheLastOfUs;
