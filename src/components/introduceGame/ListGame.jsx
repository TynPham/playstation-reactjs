import React, { useEffect } from "react";

const ListGame = ({
  currIndex,
  handleClickChangeImg,
  newGame,
  setcurrIndex,
}) => {
  useEffect(() => {
    const autoTime = setTimeout(() => {
      if (currIndex === newGame.length - 1) {
        setcurrIndex(0);
      } else {
        setcurrIndex(currIndex + 1);
      }
    }, 5000);

    return () => {
      clearTimeout(autoTime);
    };
  }, [currIndex, newGame.length, setcurrIndex]);

  return (
    <div className="sm:hidden mt-8 grid grid-cols-6 px-24 gap-3">
      {newGame.map((game, index) => (
        <span
          onClick={() => handleClickChangeImg(index)}
          key={index}
          className={`${
            index === currIndex ? "active" : ""
          } rounded-2xl transition-all flex items-end justify-center max-w-210 p-2p group hover:shadow-gameSd hover:-translate-y-3`}
        >
          <button
            className={`rounded-2xl overflow-hidden w-full opacity-70 group-hover:opacity-100 ${
              index === currIndex ? "opacity-100" : ""
            }`}
          >
            <img src={game.imgMin} alt="min" />
          </button>
        </span>
      ))}
    </div>
  );
};

export default ListGame;
