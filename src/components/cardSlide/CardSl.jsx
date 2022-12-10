import React from "react";

const CardSl = ({ card }) => {
  return (
    <div className="bg-bgLinear flex flex-col max-w-[445px] px-1 pt-2 pb-6 rounded-[1rem] min-h-[536px] group shadow-socialCardSd cursor-pointer hover:shadow-socialCardSd2">
      <div>
        <img
          className="w-[100%] rounded-[1rem] shadow-cardSd transition-all group-hover:shadow-cardSd2"
          src={card.image}
          alt="slide"
        />
      </div>
      <div className="mt-3 px-5">
        <h4 className="text-2xl font-light hiddenText2l">{card.title}</h4>
        <p className="hiddenText mt-2 text-colorSilver">{card.content}</p>
      </div>
      <div className="flex mt-12 px-5">
        <div className="w-[12%] mr-4">
          <img
            className="w-[100%] rounded-[4px]"
            src={card.poster.image}
            alt="slide"
          />
        </div>
        <div className="text-[13px] leading-[1.1rem]">
          <p className="font-semibold">{card.poster.name}</p>
          <p>{card.poster.content}</p>
          <p className="text-colorSilver">{card.poster.day}</p>
        </div>
      </div>
    </div>
  );
};

export default CardSl;
