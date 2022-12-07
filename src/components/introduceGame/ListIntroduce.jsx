import React from "react";
import Introduce from "./Introduce";

const ListIntroduce = ({ newGame, currIndex }) => {
  return (
    <div>
      {newGame.map((game, index) => (
        <div
          key={index}
          className={`relative hidden transition-all opcityKf ${
            index === currIndex ? "visiab" : ""
          }`}
        >
          <Introduce index={index} game={game} currIndex={currIndex} />
        </div>
      ))}
    </div>
  );
};

export default ListIntroduce;
