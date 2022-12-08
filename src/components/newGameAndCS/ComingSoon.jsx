import React from "react";
import ListGame from "./ListGame";
import { comingSoonList } from "../../data/NewGameAndComingSoon";

const ComingSoon = ({ ComingSoonRef }) => {
  return (
    <div
      ref={ComingSoonRef}
      className="bg-[#121314] w-full px-32 pt-12 absolute left-[100%] top-0 transition-all duration-300"
    >
      <div className="flex flex-col text-white">
        <h3 className="text-[1.25rem] font-bold">Coming soon</h3>
        <h5 className="text-[1.35rem] mt-1">
          Amazing new experiences are just around the corner
        </h5>
      </div>
      <ListGame listGame={comingSoonList} />
    </div>
  );
};

export default ComingSoon;
