import React from "react";

const Introduce = ({ game, classChange }) => {
  return (
    <div>
      <img
        className={`${
          classChange ? "sm:h-20r sm:object-70" : ""
        } sm:h-30r md:h-26r object-cover object-center`}
        src={game.image}
        alt="game"
      />
      <div
        className={`${classChange ? "sm:text-center sm:static" : ""} absolute ${
          game.contents.primary
            ? "sm:w-full left-1/2 top-5 -translate-x-1/2 text-center"
            : "sm:left-8 max-w-550 bottom-20 left-24"
        } `}
      >
        {game.logo ? (
          <img
            className="md:w-55% w-4/5 bottomToTop"
            src={game.logo}
            alt="logo"
          />
        ) : (
          ""
        )}
        <div className="sm:px-4 sm:ml-0 md:mt-0 text-white mt-6 ml-2 invisible bottomToTop delayAnimation">
          <h2
            className={`${
              classChange ? "sm:text-2r" : ""
            } sm:text-2xl md:text-1.75r ${
              game.contents.primary ? "text-2.5r font-light" : "text-4xl"
            } ${game.class ? game.class : ""} `}
          >
            {game.contents.title}
            {game.contents.subTitle ? (
              <span
                className={`${
                  classChange ? "sm:text-2.5r sm:mt-2" : ""
                } font-semibold block text-5xl`}
              >
                {game.contents.subTitle}
              </span>
            ) : (
              ""
            )}
          </h2>
          <p
            className={`${
              classChange ? "sm:text-xl" : ""
            } sm:text-base sm:mt-4 md:text-base text-lg mt-5`}
          >
            {game.contents.content}
          </p>
        </div>
        <a
          href="https://www.facebook.com/"
          className="sm:p-10-2 p-14.5-2 rounded-2 hover:outline-3p hover:outline hover:outline-white transition-all duration-100"
        >
          <button className="sm:py-1 sm:px2 sm:mt-4 py-2 px-4 bg-white font-semibold text-lg rounded-2 mt-8 invisible bottomToTop delayAnimation">
            {game.contents.primary ? "Start browsing" : "Find out more"}
          </button>
        </a>
      </div>
    </div>
  );
};

export default Introduce;
