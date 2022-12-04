import React, { useState } from "react";
import { newGame } from "../../data";

const IntroduceGame = () => {
  const [currIndex, setcurrIndex] = useState(0);

  const handleClickChangeImg = (index) => {
    setcurrIndex(index);
  };

  return (
    <div>
      <div className="relative">
        {newGame.map((game, index) => (
          <div
            key={index}
            className={`hidden bg-[rgba(0,0,0,0.8)] transition-all opcityKf ${
              index === currIndex ? "visiab" : ""
            }`}
          >
            <img src={game.image} alt="game" />
            <div className="absolute max-w-[550px] bottom-16 left-24">
              <img className="w-[80%]" src={game.logo} alt="logo" />
              <div className="text-white mt-6 ml-2">
                <h2 className="text-4xl">{game.contents.title}</h2>
                <p className="text-lg mt-5">{game.contents.content}</p>
              </div>
              <a
                href="https://www.facebook.com/"
                className="p-[14.5px_2px] rounded-[2rem] hover:outline-[3px] hover:outline hover:outline-white transition-all duration-100"
              >
                <button className="py-2 px-4 bg-white font-semibold text-lg rounded-[2rem] mt-8">
                  Find out more
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-6 px-24 gap-3">
        {newGame.map((game, index) => (
          <span
            onClick={() => handleClickChangeImg(index)}
            key={index}
            href="https://www.facebook.com/"
            className={`${
              index === currIndex ? "active" : ""
            } hover:translate-y-[-0.75rem] rounded-[1rem] transition-all duration-[0.3s] flex items-end justify-center group hover:shadow-gameSd max-w-[210px] p-[2px]`}
          >
            <button className="rounded-[1rem] overflow-hidden w-full opacity-70 group-hover:opacity-100">
              <img src={game.imgMin} alt="min" />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default IntroduceGame;
