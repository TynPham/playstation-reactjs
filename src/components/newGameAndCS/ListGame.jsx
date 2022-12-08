import React from "react";

const ListGame = () => {
  return (
    <div className="grid grid-cols-6 gap-x-8 gap-y-10 mt-8">
      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((e, index) => (
        <div key={index}>
          <a href="https://www.facebook.com/">
            <img
              src="https://gmedia.playstation.com/is/image/SIEPDC/fifa-23-standard-edition-pack-01-ps4-ps5-en-01aug22?$1200px$"
              alt="card"
              className="rounded-[0.5rem] shadow-cardSd hover:scale-[1.02] hover:shadow-cardSd2 transition-all duration-300"
            />
          </a>
          <h4 className="text-lg mt-3 font-normal text-center text-white">
            EA SPORTS™ FIFA 23
          </h4>
        </div>
      ))}
    </div>
  );
};

export default ListGame;
