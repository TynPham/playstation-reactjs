import React from "react";
import Card from "../currentMonth/Card";

const ListGame = ({ listGame }) => {
  return (
    <div className="sm:px-4 sm:gap-x-6 sm:grid-cols-3 sm:gap-y-8 md:grid-cols-4 md:gap-y-6 grid grid-cols-6 gap-x-8 gap-y-10 mt-8">
      {listGame.map((game, index) => (
        <div key={index}>
          <Card card={game} classes="hiddenText2l" />
        </div>
      ))}
    </div>
  );
};

export default ListGame;
