import React from "react";
import CardSlide from "../../components/cardSlide/CardSlide";
import CurrentMonth from "../../components/currentMonth/CurrentMonth";
import ExplorePs4 from "../../components/explorePs4/ExplorePs4";
import Hardware from "../../components/hardware/Hardware";
import Header from "../../components/header/Header";
import IntroduceGame from "../../components/introduceGame/IntroduceGame";
import NewGameAndCS from "../../components/newGameAndCS/NewGameAndCS";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import TheLastOfUs from "../../components/theLastOfus/TheLastOfUs";

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
      <TheLastOfUs />
      <NewGameAndCS />
      <ExplorePs4 />
      <CardSlide />
      <SocialMedia />
    </div>
  );
};

export default Home;
