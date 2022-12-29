import React from "react";
import { socialMedia } from "../../data/listData";
import SocialCard from "./SocialCard";

const SocialMedia = () => {
  return (
    <div className="sm:pt-0 bg-social pt-8 ">
      <h3 className="sm:text-2r text-center text-2.15r font-light">
        Follow us on social media
      </h3>
      <div className="flex justify-center mt-14">
        <div className="sm:grid-cols-2 sm:w-full sm:px-12 sm:pb-24 sm:gap-4 md:pb-24 grid grid-cols-4 justify-items-center w-4/5 px-20 pb-7.5r">
          {socialMedia.map((social, index) => (
            <div className="text-center" key={index}>
              <SocialCard social={social} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
