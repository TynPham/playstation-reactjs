import React from "react";
import ProductCard from "./ProductCard";
import Title from "./Title";
import { exporePs4 } from "../../data/listData";

const ExplorePs4 = () => {
  return (
    <div className="sm:pb-8 pb-32">
      <Title data={exporePs4.titles} />
      <div className="grid sm:grid-cols-1 grid-cols-3 sm:px-0 md:px-24 px-40 mt-11">
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
