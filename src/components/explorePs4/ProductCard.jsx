import React from "react";

const ProductCard = ({ product }) => {
  return (
    <>
      <div>
        <img src={product.image} alt="ps4" />
      </div>
      <div className="pl-4">
        <div className="flex flex-col justify-center">
          <div className="text-black">
            <h3 className="text-[2.65rem] font-light">
              {product.contents.title}
            </h3>
            <p className="text-[1.3rem] opacity-70 mt-3 max-w-[400px] inline">
              {product.contents.content}
            </p>
          </div>
          <button className="p-[2px] rounded-[2rem] mt-8 hover:outline-[3px] hover:outline hover:outline-[#0070cc] text-left w-[max-content] ">
            <a
              href="https://www.facebook.com/"
              className=" rounded-[2rem] py-2 px-4 bg-[#0070cc] text-white font-semibold text-lg flex items-center"
            >
              Learn more
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
