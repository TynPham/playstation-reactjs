import React, { useRef } from "react";
import { FaAngleDown } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import { PlayStaIcon } from "../../logo";
import SecondaryNav from "./secondaryNav/SecondaryNav";

const navArray = ["Games", "Hardware", "News", "Shop", "Support"];

const Header = () => {
  const ulRef = useRef(null);
  const headerRef = useRef(null);
  const logoRef = useRef(null);

  const handleClickOpen = (e) => {
    const parentElem = e.target.parentElement;
    parentElem.classList.toggle("selecter");

    const svgClick = parentElem.querySelector("svg");

    svgClick.classList.toggle("rotate");
    svgClick.classList.toggle("selecter");
    parentElem.querySelector(".subNav").classList.toggle("openSubNav");

    const listSVG = ulRef.current.querySelectorAll("svg");
    const listSVGdif = Object.values(listSVG).filter(
      (item) => item !== svgClick
    );
    listSVGdif.forEach((item) => {
      item.classList.remove("rotate");
      item.parentElement.classList.remove("selecter");
      item.classList.remove("selecter");
      item.parentElement
        .querySelector(".subNav")
        .classList.remove("openSubNav");
    });

    let isOpen = false;

    listSVG.forEach((item) => {
      if (item.classList.contains("rotate")) {
        isOpen = true;
      }
    });

    if (isOpen) {
      headerRef.current.classList.add("shrinkHeight");
      logoRef.current.querySelector("svg").classList.add("h34");
      listSVG.forEach((item) => {
        item.previousElementSibling.classList.add("scale92");
      });
    } else {
      headerRef.current.classList.remove("shrinkHeight");
      logoRef.current.querySelector("svg").classList.remove("h34");
      listSVG.forEach((item) => {
        item.previousElementSibling.classList.remove("scale92");
      });
    }
  };

  return (
    <div
      ref={headerRef}
      className="header sticky top-0 bg-white h-16 transition-all duration-[0.5s]"
    >
      <div className="relative pl-5 pr-5 h-full flex justify-between items-center">
        <div className="nav flex">
          <span ref={logoRef} className="logo mr-3">
            <PlayStaIcon />
          </span>
          <ul ref={ulRef} className="flex items-center gap-2">
            {navArray.map((item, index) => (
              <li
                onClick={handleClickOpen}
                key={index}
                className="flex items-center gap-[2px] cursor-pointer hover:text-[#0070d1] group"
              >
                <span className="text-[0.875rem] font-semibold">{item}</span>
                <FaAngleDown className="mt-1 text-[#999] transition-all group-hover:text-[#0070d1]" />
                <SecondaryNav />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
          <button className="sign-in bg-[#0070cc] text-white font-medium p-[0px_8px] rounded-2xl mr-5">
            Sign In
          </button>
          <button className="search text-xl">
            <HiOutlineSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
