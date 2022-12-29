import React from "react";
import { TbWorld } from "react-icons/tb";
import { footerData } from "../../data/listData";

const Footer = () => {
  return (
    <div className="sm:pt-6 sm:mt-0 footer md:mt-0 bg-footer pt-12">
      <div className="sm:grid-cols-1 sm:grid-rows-none sm:px-6 sm:gap-8 md:px-16 grid grid-cols-2 grid-rows-2-1 bg-footer px-24">
        <div className="mt-6">
          <img
            className="w-100"
            src="https://www.playstation.com/etc.clientlibs/global_pdc/clientlibs/clientlib-base/resources/ps-bug.svg"
            alt="pls"
          />
          <a
            className="flex items-center text-white mt-6"
            href="https://www.playstation.com/country-selector/index.html"
          >
            <TbWorld className="mr-3 text-1.5" />
            Country / Region: Vietnam
          </a>
        </div>
        <div className="grid grid-cols-3 text-white gap-x-4">
          <ul>
            {footerData[0].map((data, index) => (
              <li className="mb-2" key={index}>
                <a href="https://www.facebook.com/">{data}</a>
              </li>
            ))}
          </ul>
          <ul>
            {footerData[1].map((data, index) => (
              <li className="mb-2" key={index}>
                <a href="https://www.facebook.com/">{data}</a>
              </li>
            ))}
          </ul>
          <ul>
            {footerData[2].map((data, index) => (
              <li className="mb-2" key={index}>
                <a href="https://www.facebook.com/">{data}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img
            className="w-120 mb-2"
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
