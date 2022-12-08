import React from "react";
import Card from "../currentMonth/Card";

const ListGame = ({ listGame }) => {
  return (
    <div className="grid grid-cols-6 gap-x-8 gap-y-10 mt-8">
      {listGame.map((game, index) => (
        <div key={index}>
          <Card card={game} />
        </div>
      ))}
    </div>
  );
};

export default ListGame;
