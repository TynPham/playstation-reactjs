import React from "react";
import ListGame from "./ListGame";
import { comingSoonList } from "../../data/NewGameAndComingSoon";

const ComingSoon = ({ ComingSoonRef }) => {
  return (
    <div
      ref={ComingSoonRef}
      className="bg-newGame w-full sm:px-0 md:px-20 px-32 pt-12 absolute left-full top-0 transition-all duration-300"
    >
      <div className="sm:px-4 flex flex-col text-white">
        <h3 className="text-1.25r font-bold">Coming soon</h3>
        <h5 className="text-1.35r mt-1">
          Amazing new experiences are just around the corner
        </h5>
      </div>
      <ListGame listGame={comingSoonList} />
    </div>
  );
};

export default ComingSoon;
