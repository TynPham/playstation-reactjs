import React from "react";
import ListGame from "./ListGame";
import { NewGameList } from "../../data/NewGameAndComingSoon";

const NewGame = ({ NewGameRef }) => {
  return (
    <div
      ref={NewGameRef}
      className="sm:px-0 md:px-20 bg-newGame w-full px-32 pt-12 absolute left-0 top-0 transition-all duration-300"
    >
      <div className="sm:px-4 flex flex-col text-white">
        <h3 className="text-1.25r font-bold">New releases</h3>
        <h5 className="text-1.35r mt-1">
          Great PS5 and PS4 games available now
        </h5>
      </div>
      <ListGame listGame={NewGameList} />
    </div>
  );
};

export default NewGame;
