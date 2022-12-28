import React from "react";
import { TbWorld } from "react-icons/tb";
import { footerData } from "../../data/listData";

const Footer = () => {
  return (
    <div className="footer bg-[#00439c] sm:pt-6 pt-12 sm:mt-0 md:mt-0 mt-[7.5rem]">
      <div className="grid sm:grid-cols-1 grid-cols-2 sm:grid-rows-none grid-rows-[2fr_1fr] bg-[#00439c] sm:px-6 sm:gap-8 md:px-16 px-24">
        <div className="mt-6">
          <img
            className="w-[100px]"
            src="https://www.playstation.com/etc.clientlibs/global_pdc/clientlibs/clientlib-base/resources/ps-bug.svg"
            alt="pls"
          />
          <a
            className="flex items-center text-white mt-6"
            href="https://www.playstation.com/country-selector/index.html"
          >
            <TbWorld className="mr-3 text-[1.5rem]" />
            Country / Region: Vietnam
          </a>
        </div>
        <div className="grid grid-cols-3 text-white gap-x-4">
          <ul>
            {footerData[0].map((data, index) => (
              <li className="mb-[0.5rem]" key={index}>
                <a href="https://www.facebook.com/">{data}</a>
              </li>
            ))}
          </ul>
          <ul>
            {footerData[1].map((data, index) => (
              <li className="mb-[0.5rem]" key={index}>
                <a href="https://www.facebook.com/">{data}</a>
              </li>
            ))}
          </ul>
          <ul>
            {footerData[2].map((data, index) => (
              <li className="mb-[0.5rem]" key={index}>
                <a href="https://www.facebook.com/">{data}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img
            className="w-[120px] mb-2"
            src="https://www.playstation.com/etc.clientlibs/global_pdc/clientlibs/clientlib-base/resources/sie.svg"
            alt="sony"
          />
          <a
            className="flex items-center text-white"
            href="https://www.playstation.com/country-selector/index.html"
          >
            ©2022 Sony Interactive Entertainment Inc. All Rights Reserved.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
