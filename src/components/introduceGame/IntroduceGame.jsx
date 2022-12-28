import React, { useEffect, useState } from "react";
import { newGame } from "../../data/listData";
import ListGame from "./ListGame";
import ListGameSm from "./ListGameSm";
import ListIntroduce from "./ListIntroduce";

const breakpoint = 738;

const IntroduceGame = () => {
  const [currIndex, setcurrIndex] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  const handleClickChangeImg = (index) => {
    setcurrIndex(index);
  };

  const handleSlideNext = () => {
    if (currIndex === newGame.length - 1) {
      setcurrIndex(0);
    } else {
      setcurrIndex(currIndex + 1);
    }
  };

  const handleSlidePrev = () => {
    if (currIndex === 0) {
      setcurrIndex(newGame.length - 1);
    } else {
      setcurrIndex(currIndex - 1);
    }
  };

  return (
    <div className="sm:mt-16">
      <ListIntroduce newGame={newGame} currIndex={currIndex} />
      {width >= breakpoint ? (
        <ListGame
          newGame={newGame}
          currIndex={currIndex}
          setcurrIndex={setcurrIndex}
          handleClickChangeImg={handleClickChangeImg}
        />
      ) : (
        <ListGameSm
          newGame={newGame}
          handleClickChangeImg={handleClickChangeImg}
          handleSlideNext={handleSlideNext}
          handleSlidePrev={handleSlidePrev}
        />
      )}
    </div>
  );
};

export default IntroduceGame;
