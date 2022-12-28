import React from "react";
import { socialMedia } from "../../data/listData";
import SocialCard from "./SocialCard";

const SocialMedia = () => {
  return (
    <div className="bg-[#f5f7fa] sm:pt-0 pt-8">
      <h3 className="text-center sm:text[2rem] text-[2.15rem] font-light">
        Follow us on social media
      </h3>
      <div className="flex justify-center mt-14">
        <div className="grid sm:grid-cols-2 grid-cols-4 justify-items-center sm:w-full w-[80%] sm:px-12 sm:pb-24 md:pb-24 sm:gap-4 px-20">
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
