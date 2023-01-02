import React from "react";

const ProductCard = ({ product }) => {
  return (
    <>
      <div>
        <img src={product.image} alt="ps4" />
      </div>
      <div className="pl-4">
        <div className="flex flex-col justify-center">
          <div className="sm:text-center text-black">
            <h3 className="md:text-2r text-2.65r font-light">
              {product.contents.title}
            </h3>
            <p className="md:text-1.2r text-1.3r opacity-70 mt-3 max-w-400 inline">
              {product.contents.content}
            </p>
          </div>
          <button className="sm:my-4 sm:m-auto p-2p rounded-2 mt-8 hover:outline-3p hover:outline hover:outline-btn text-left w-max">
            <a
              href="/"
              className="rounded-2 py-2 px-4 bg-signIn text-white font-semibold text-lg flex items-center"
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
