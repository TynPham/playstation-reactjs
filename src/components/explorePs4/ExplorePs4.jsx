import React from "react";
import ProductCard from "./ProductCard";
import Title from "./Title";
import { exporePs4 } from "../../data/listData";

const ExplorePs4 = () => {
  return (
    <div className="pb-40">
      <Title data={exporePs4.titles} />
      <div className="grid grid-cols-3 px-40 mt-11">
        {exporePs4.data.map((product, index) => (
          <div key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePs4;
