import React from "react";

const CardSl = () => {
  return (
    <div className="bg-bgLinear flex flex-col max-w-[445px] px-1 pt-2 pb-6 rounded-[1rem] group shadow-socialCardSd cursor-pointer hover:shadow-socialCardSd2">
      <div>
        <img
          className="w-[100%] rounded-[1rem] shadow-cardSd transition-all group-hover:shadow-cardSd2"
          src="https://blog.playstation.com/tachyon/2022/12/02ff801cf89acee0ff4620247b7cbeb55886401a-scaled.jpg?resize=1088,612&crop_strategy=smart"
          alt="slide"
        />
      </div>
      <div className="mt-3 px-5">
        <h4 className="text-2xl font-light">
          The Last of Us Part I arrives on PC March 3, 2023
        </h4>
        <p className="hiddenText mt-2 text-colorSilver">
          Prepare to endure and survive, PC players. We’re so excited to reveal
          The Last of Us Part I will be released on PC via Steam and the Epic
          Games Store March 3, 2023. We’ve been anticipating this launch for a
          while now, and we know many of you have as well. We’re thrilled to be
          […]
        </p>
      </div>
      <div className="flex mt-12 px-5">
        <div className="w-[12%] mr-4">
          <img
            className="w-[100%] rounded-[4px]"
            src="https://blog.playstation.com/tachyon/2022/12/9df179f134c873f63723d89f5befc7c80e0f728f.jpg"
            alt="slide"
          />
        </div>
        <div className="text-[13px] leading-[1.1rem]">
          <p className="font-semibold">Faith Ries</p>
          <p>Associate Communications Manager, Naughty Dog</p>
          <p className="text-colorSilver">Dec 08, 2022</p>
        </div>
      </div>
    </div>
  );
};

export default CardSl;
