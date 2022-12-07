import React from "react";

const Introduce = ({ game }) => {
  return (
    <div>
      <img src={game.image} alt="game" />
      <div
        className={`absolute ${
          game.contents.primary
            ? "left-[50%] top-5 translate-x-[-50%] text-center"
            : "max-w-[550px] bottom-[5rem] left-24"
        } `}
      >
        {game.logo ? (
          <img className="w-[80%] bottomToTop" src={game.logo} alt="logo" />
        ) : (
          ""
        )}
        <div className="text-white mt-6 ml-2 invisible bottomToTop delayAnimation">
          <h2
            className={`${
              game.contents.primary ? "text-[2.5rem] font-light" : "text-4xl"
            } ${game.class ? game.class : ""} `}
          >
            {game.contents.title}
            {game.contents.subTitle ? (
              <span className="font-semibold block text-5xl">
                {game.contents.subTitle}
              </span>
            ) : (
              ""
            )}
          </h2>
          <p className="text-lg mt-5">{game.contents.content}</p>
        </div>
        <a
          href="https://www.facebook.com/"
          className="p-[14.5px_2px] rounded-[2rem] hover:outline-[3px] hover:outline hover:outline-white transition-all duration-100"
        >
          <button className="py-2 px-4 bg-white font-semibold text-lg rounded-[2rem] mt-8 invisible bottomToTop delayAnimation">
            {game.contents.primary ? "Start browsing" : "Find out more"}
          </button>
        </a>
      </div>
    </div>
  );
};

export default Introduce;
