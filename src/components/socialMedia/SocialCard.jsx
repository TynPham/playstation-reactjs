import React from "react";

const SocialCard = ({ social }) => {
  return (
    <button className="sm:w-full w-82%">
      <img
        src={social.image}
        alt="social"
        className="rounded-2xl w-full shadow-socialCardSd hover:scale-1.02 hover:shadow-socialCardSd2 transition-all duration-300"
      />
    </button>
  );
};

export default SocialCard;
