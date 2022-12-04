import React, { useState } from "react";
import { useEffect } from "react";
import { newGame } from "../../data";
import ListGame from "./ListGame";
import ListIntroduce from "./ListIntroduce";

const IntroduceGame = () => {
  const [currIndex, setcurrIndex] = useState(0);

  useEffect(() => {
    const autoTime = setTimeout(() => {
      if (currIndex === 5) {
        setcurrIndex(0);
        return;
      }
      setcurrIndex(currIndex + 1);
    }, 5000);

    return () => {
      clearTimeout(autoTime);
    };
  }, [currIndex]);

  const handleClickChangeImg = (index) => {
    setcurrIndex(index);
  };

  return (
    <div>
      <ListIntroduce newGame={newGame} currIndex={currIndex} />
      <ListGame
        newGame={newGame}
        currIndex={currIndex}
        handleClickChangeImg={handleClickChangeImg}
      />
    </div>
  );
};

export default IntroduceGame;
