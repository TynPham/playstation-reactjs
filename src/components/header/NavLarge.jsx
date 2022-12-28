import React from "react";
import { navArray } from "../../data/listData";
import SecondaryNav from "./secondaryNav/SecondaryNav";
import { FaAngleDown } from "react-icons/fa";
import { DataHeaderNav } from "../../context/context";
import { useContext } from "react";

const NavLarge = () => {
  const { ulRef, headerRef, logoRef } = useContext(DataHeaderNav);

  const handleClickOpen = (e) => {
    let parentElem = e.target.parentElement;
    if (
      parentElem.tagName.toLowerCase() === "a" ||
      e.target.tagName.toLowerCase() === "a"
    ) {
      return;
    }
    if (e.target.tagName.toLowerCase() === "li") {
      parentElem = e.target;
    }
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
    <ul
      ref={ulRef}
      className="flex items-center gap-2 sm:hidden sm:bg-white sm:left-0 sm:top-16 sm:w-full sm:h-full sm:px-6"
    >
      {navArray.map((result, index) => (
        <li
          onClick={handleClickOpen}
          key={index}
          className="flex items-center sm:justify-between gap-[2px] cursor-pointer hover:text-[#0070d1] group"
        >
          <span className="text-[0.875rem] font-semibold">{result.title}</span>
          <FaAngleDown className="mt-1 text-[#999] transition-all group-hover:text-[#0070d1] sm:-rotate-90" />
          <div className="subNav max-h-[220px] w-full bg-white absolute top-0 left-0 z-[-1] transition-all duration-500 opacity-0 invisible">
            <SecondaryNav item1={result.item.item1} item2={result.item.item2} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NavLarge;
