import React from "react";
import ListHardware from "./ListHardware";
import { useState } from "react";
import { listHardware } from "../data";
import IntroHardware from "./IntroHardware";

const Hardware = () => {
  const [indexActive, setIndexActive] = useState(0);
  return (
    <div>
      <IntroHardware indexActive={indexActive} listHardware={listHardware} />
      <ListHardware
        indexActive={indexActive}
        setIndexActive={setIndexActive}
        listHardware={listHardware}
      />
    </div>
  );
};

export default Hardware;
