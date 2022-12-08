import React from "react";

const Card = ({ card }) => {
  return (
    <>
      <a href="https://www.facebook.com/">
        <img
          src={card.image}
          alt="card"
          className="rounded-[1rem] shadow-cardSd hover:scale-[1.02] hover:shadow-cardSd2 transition-all duration-300"
        />
      </a>
      <h4 className="text-[1.75rem] mt-7 font-medium text-center text-white">
        {card.content}
      </h4>
    </>
  );
};

export default Card;
