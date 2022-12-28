import React, { useContext } from "react";
import { navArray } from "../../data/listData";
import { FaAngleRight } from "react-icons/fa";
import SecondaryNav from "./secondaryNav/SecondaryNav";
import { DataHeaderNav } from "../../context/context";

const NavSmall = () => {
  const { navSmRef } = useContext(DataHeaderNav);

  const handleClickOpenSm = (e) => {
    let parentElem = e.target;
    if (
      parentElem.parentElement.tagName.toLowerCase() === "a" ||
      e.target.tagName.toLowerCase() === "a"
    ) {
      return;
    }
    if (parentElem.tagName.toLowerCase() !== "li") {
      while (1) {
        parentElem = parentElem.parentElement;
        if (parentElem.tagName.toLowerCase() === "li") {
          break;
        }
      }
    }

    parentElem.querySelector(".subNav").classList.toggle("openSubNavsm");

    const ulElement = parentElem.parentElement;
    const listLiElementFilter = Object.values(
      ulElement.querySelectorAll("li")
    ).filter((item) => item !== parentElem);

    listLiElementFilter.forEach((e) => {
      e.querySelector(".subNav").classList.remove("openSubNavsm");
    });
  };

  return (
    <ul
      ref={navSmRef}
      className="text-black absolute top-16 left-0 bg-white w-full h-[100vh] px-6 pt-4 hidden"
    >
      {navArray.map((result, index) => (
        <li
          onClick={handleClickOpenSm}
          key={index}
          className="flex justify-between items-center mb-3"
        >
          <span className="flex items-center gap-10">
            {result.iconsm}
            <p className="text-base font-semibold">{result.title}</p>
          </span>
          <FaAngleRight className="text-[#858585]" />
          <div className="subNav w-4/5 h-screen px-4 bg-white absolute top-0 left-full z-[-1] transition-all duration-500 opacity-0 invisible shadow-shadowNav">
            <SecondaryNav item1={result.item.item1} item2={result.item.item2} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NavSmall;
