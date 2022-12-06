import React from "react";
import Header from "../../components/header/Header";
import IntroduceGame from "../../components/introduceGame/IntroduceGame";
import Hardware from "../../hardware/Hardware";

const Home = () => {
  return (
    <div className=" home h-[2000px]">
      <Header />
      <IntroduceGame />
      <Hardware />
    </div>
  );
};

export default Home;
