import React from "react";

const Card = ({ card, classes }) => {
  return (
    <>
      <a href="https://www.facebook.com/">
        <img
          src={card.image}
          alt="card"
          className={`rounded-[1rem] shadow-cardSd hover:scale-[1.02] hover:shadow-cardSd2 transition-all duration-300 ${
            card.newClass ? "rounded-[0.5rem]" : ""
          }`}
        />
      </a>
      <h4
        className={`md:text-2xl text-[1.75rem] sm:mt-3 mt-7 font-medium text-center text-white ${
          classes ? classes : ""
        } ${card.newClass ? "newClass" : ""}`}
      >
        {card.content}
      </h4>
    </>
  );
};

export default Card;
