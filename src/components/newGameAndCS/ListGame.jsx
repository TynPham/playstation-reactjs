import React from "react";
import Card from "../currentMonth/Card";

const ListGame = ({ listGame }) => {
  return (
    <div className="grid sm:px-4 sm:grid-cols-3 md:grid-cols-4 grid-cols-6 md:gap-y-6 sm:gap-x-6 gap-x-8 sm:gap-y-8 gap-y-10 mt-8">
      {listGame.map((game, index) => (
        <div key={index}>
          <Card card={game} classes="hiddenText2l" />
        </div>
      ))}
    </div>
  );
};

export default ListGame;
