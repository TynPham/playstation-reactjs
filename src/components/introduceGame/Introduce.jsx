import React from "react";

const Introduce = ({ game, classChange }) => {
  return (
    <div>
      <img
        className={`${
          classChange ? "sm:h-[20rem] sm:object-[70%]" : ""
        } sm:h-[30rem] md:h-[26rem] object-cover object-center`}
        src={game.image}
        alt="game"
      />
      <div
        className={`${classChange ? "sm:text-center sm:static" : ""} absolute ${
          game.contents.primary
            ? "left-[50%] sm:w-full top-5 translate-x-[-50%] text-center"
            : "max-w-[550px] bottom-[5rem] sm:left-8 left-24"
        } `}
      >
        {game.logo ? (
          <img
            className="md:w-[55%] w-[80%] bottomToTop"
            src={game.logo}
            alt="logo"
          />
        ) : (
          ""
        )}
        <div className="text-white md:mt-0 mt-6 sm:px-4 sm:ml-0 ml-2 invisible bottomToTop delayAnimation">
          <h2
            className={`${
              classChange ? "sm:text-[2rem]" : ""
            } sm:text-2xl md:text-[1.75rem] ${
              game.contents.primary ? "text-[2.5rem] font-light" : "text-4xl"
            } ${game.class ? game.class : ""} `}
          >
            {game.contents.title}
            {game.contents.subTitle ? (
              <span
                className={`${
                  classChange ? "sm:text-[2.5rem] sm:mt-2" : ""
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
            } sm:text-base md:text-base text-lg sm:mt-4 mt-5`}
          >
            {game.contents.content}
          </p>
        </div>
        <a
          href="https://www.facebook.com/"
          className="sm:p-[10px_2px] p-[14.5px_2px] rounded-[2rem] hover:outline-[3px] hover:outline hover:outline-white transition-all duration-100"
        >
          <button className="sm:py-1 py-2 sm:px2 px-4 bg-white font-semibold text-lg rounded-[2rem] sm:mt-4 mt-8 invisible bottomToTop delayAnimation">
            {game.contents.primary ? "Start browsing" : "Find out more"}
          </button>
        </a>
      </div>
    </div>
  );
};

export default Introduce;
