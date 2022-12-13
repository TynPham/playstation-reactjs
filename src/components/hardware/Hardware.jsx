import React from "react";
import ListHardware from "./ListHardware";
import { useState } from "react";
import { listHardware } from "../../data/listData";
import IntroHardware from "./IntroHardware";

const Hardware = () => {
  const [indexActive, setIndexActive] = useState(0);
  return (
    <div className="md:mt-4">
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
