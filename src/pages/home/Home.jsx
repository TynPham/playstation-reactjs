import React from "react";
import CurrentMonth from "../../components/currentMonth/CurrentMonth";
import Header from "../../components/header/Header";
import IntroduceGame from "../../components/introduceGame/IntroduceGame";
import Hardware from "../../hardware/Hardware";

const Home = () => {
  return (
    <div className="home">
      <span className="hidden absolute top-0 -left-0 w-full h-full bg-white z-20 items-center justify-center md:flex sm:flex ">
        updating...
      </span>
      <Header />
      <IntroduceGame />
      <Hardware />
      <CurrentMonth />
    </div>
  );
};

export default Home;
