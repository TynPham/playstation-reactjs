import React from "react";
import { newGame } from "../../data";

const IntroduceGame = () => {
  return (
    <div>
      <div className="relative">
        <img src={newGame[0].image} alt="game" />
        <div className="absolute max-w-[550px] top-32 left-24">
          <img className="w-[80%]" src={newGame[0].logo} alt="logo" />
          <div className="text-white mt-6 ml-2">
            <h2 className="text-4xl">{newGame[0].contents.title}</h2>
            <p className="text-lg mt-5">{newGame[0].contents.content}</p>
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
      <div className="mt-8 grid grid-cols-6 px-24">
        <span
          href="https://www.facebook.com/"
          className="hover:translate-y-[-0.75rem] rounded-[1rem] rounded-[1rem] transition-all duration-[0.3s] flex items-end justify-center group hover:shadow-gameSd max-w-[210px]"
        >
          <button className="rounded-[1rem] overflow-hidden w-full opacity-70 group-hover:opacity-100">
            <img src={newGame[0].imgMin} alt="min" />
          </button>
        </span>
        <span
          href="https://www.facebook.com/"
          className="hover:translate-y-[-0.75rem] rounded-[1rem] rounded-[1rem] transition-all duration-[0.3s] flex items-end justify-center group hover:shadow-gameSd max-w-[210px]"
        >
          <button className="rounded-[1rem] overflow-hidden w-full opacity-70 group-hover:opacity-100">
            <img src={newGame[0].imgMin} alt="min" />
          </button>
        </span>
        <span
          href="https://www.facebook.com/"
          className="hover:translate-y-[-0.75rem] rounded-[1rem] rounded-[1rem] transition-all duration-[0.3s] flex items-end justify-center group hover:shadow-gameSd max-w-[210px]"
        >
          <button className="rounded-[1rem] overflow-hidden w-full opacity-70 group-hover:opacity-100">
            <img src={newGame[0].imgMin} alt="min" />
          </button>
        </span>
        <span
          href="https://www.facebook.com/"
          className="hover:translate-y-[-0.75rem] rounded-[1rem] rounded-[1rem] transition-all duration-[0.3s] flex items-end justify-center group hover:shadow-gameSd max-w-[210px]"
        >
          <button className="rounded-[1rem] overflow-hidden w-full opacity-70 group-hover:opacity-100">
            <img src={newGame[0].imgMin} alt="min" />
          </button>
        </span>
        <span
          href="https://www.facebook.com/"
          className="hover:translate-y-[-0.75rem] rounded-[1rem] rounded-[1rem] transition-all duration-[0.3s] flex items-end justify-center group hover:shadow-gameSd max-w-[210px]"
        >
          <button className="rounded-[1rem] overflow-hidden w-full opacity-70 group-hover:opacity-100">
            <img src={newGame[0].imgMin} alt="min" />
          </button>
        </span>
        <span
          href="https://www.facebook.com/"
          className="hover:translate-y-[-0.75rem] rounded-[1rem] rounded-[1rem] transition-all duration-[0.3s] flex items-end justify-center group hover:shadow-gameSd max-w-[210px]"
        >
          <button className="rounded-[1rem] overflow-hidden w-full opacity-70 group-hover:opacity-100">
            <img src={newGame[0].imgMin} alt="min" />
          </button>
        </span>
      </div>
    </div>
  );
};

export default IntroduceGame;
