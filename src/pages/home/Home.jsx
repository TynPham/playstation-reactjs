import React from "react";
import Header from "../../components/header/Header";
import IntroduceGame from "../../components/introduceGame/IntroduceGame";

const Home = () => {
  return (
    <div className="home h-[2000px]">
      <Header />
      <IntroduceGame />
    </div>
  );
};

export default Home;
