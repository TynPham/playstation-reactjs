import React from "react";
import ListGame from "./ListGame";

const NewGame = ({ NewGameRef }) => {
  return (
    <div
      ref={NewGameRef}
      className="bg-[#121314] w-full px-32 pt-12 absolute left-0 top-0 transition-all duration-300"
    >
      <div className="flex flex-col text-white">
        <h3 className="text-[1.25rem] font-bold">New releases</h3>
        <h5 className="text-[1.35rem] mt-1">
          Great PS5 and PS4 games available now
        </h5>
      </div>
      <ListGame />
    </div>
  );
};

export default NewGame;
