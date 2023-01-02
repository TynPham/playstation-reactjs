import React from "react";

const Card = ({ card, classes }) => {
  return (
    <>
      <a href="/">
        <img
          src={card.image}
          alt="card"
          className={`rounded-2xl shadow-cardSd hover:scale-1.02 hover:shadow-cardSd2 transition-all duration-300 ${
            card.newClass ? "rounded-lg" : ""
          }`}
        />
      </a>
      <h4
        className={`sm:mt-3 md:text-2xl text-1.75r mt-7 font-medium text-center text-white ${
          classes ? classes : ""
        } ${card.newClass ? "newClass" : ""}`}
      >
        {card.content}
      </h4>
    </>
  );
};

export default Card;
