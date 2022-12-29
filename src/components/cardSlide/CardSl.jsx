import React from "react";

const CardSl = ({ card }) => {
  return (
    <div className="bg-bgLinear flex flex-col max-w-445 px-1 pt-2 pb-6 rounded-2xl min-h-536 shadow-socialCardSd cursor-pointer group hover:shadow-socialCardSd2">
      <div>
        <img
          className="w-full rounded-2xl shadow-cardSd transition-all group-hover:shadow-cardSd2"
          src={card.image}
          alt="slide"
        />
      </div>
      <div className="mt-3 px-5">
        <h4 className="text-2xl font-light hiddenText2l">{card.title}</h4>
        <p className="hiddenText mt-2 text-colorSilver">{card.content}</p>
      </div>
      <div className="flex mt-12 px-5">
        <div className="w-12% mr-4">
          <img
            className="w-full rounded-4p"
            src={card.poster.image}
            alt="slide"
          />
        </div>
        <div className="text-13p leading-1.1">
          <p className="font-semibold">{card.poster.name}</p>
          <p>{card.poster.content}</p>
          <p className="text-colorSilver">{card.poster.day}</p>
        </div>
      </div>
    </div>
  );
};

export default CardSl;
