import React from "react";

const ListGame = ({ currIndex, handleClickChangeImg, newGame }) => {
  return (
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
  );
};

export default ListGame;
