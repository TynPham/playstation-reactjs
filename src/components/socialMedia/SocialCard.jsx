import React from "react";

const SocialCard = ({ social }) => {
  return (
    <button className="w-[82%]">
      <img
        src={social.image}
        alt="social"
        className="rounded-[1rem] w-[100%] shadow-socialCardSd hover:scale-[1.02] hover:shadow-socialCardSd2 transition-all duration-300"
      />
    </button>
  );
};

export default SocialCard;
