import React from "react";
import { socialMedia } from "../../data/listData";
import SocialCard from "./SocialCard";

const SocialMedia = () => {
  return (
    <div className="bg-[##f5f7fa] mt-8">
      <h3 className="text-center text-[2.15rem] font-light">
        Follow us on social media
      </h3>
      <div className="flex justify-center mt-14">
        <div className="grid grid-cols-4 justify-items-center w-[80%] px-80">
          {socialMedia.map((social, index) => (
            <div key={index}>
              <SocialCard social={social} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
