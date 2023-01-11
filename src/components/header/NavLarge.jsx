import React from "react";
import { navArray } from "../../data/listData";
import SecondaryNav from "./secondaryNav/SecondaryNav";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { DataHeaderNav } from "../../context/context";
import { useContext } from "react";

const NavLarge = () => {
  const { ulRef, headerRef, logoRef } = useContext(DataHeaderNav);

  const handleClickOpen = (e) => {
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
    const svgClick = parentElem.querySelector(".svgElement");
    const listSVG = ulRef.current.querySelectorAll(".svgElement");
    const listSVGdif = Object.values(listSVG).filter(
      (item) => item !== svgClick
    );

    if (window.innerWidth > 738) {
      parentElem.querySelector(".subNav").classList.toggle("openSubNav");

      parentElem.classList.toggle("selecter");
      svgClick.classList.toggle("rotate");
      svgClick.classList.toggle("selecter");

      listSVGdif.forEach((item) => {
        item.classList.remove("rotate", "selecter");
        item.parentElement.classList.remove("selecter");
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
    } else {
      parentElem.querySelector(".subNav").classList.toggle("openSubNavsm");
      listSVGdif.forEach((item) => {
        item.parentElement
          .querySelector(".subNav")
          .classList.remove("openSubNavsm");
      });
    }
  };

  return (
    <ul
      ref={ulRef}
      className="sm:hidden sm:bg-white sm:text-black sm:absolute sm:left-0 sm:top-16 sm:w-full sm:h-screen sm:px-6 sm:pt-4 flex items-center gap-2"
    >
      {navArray.map((result, index) => (
        <li
          onClick={handleClickOpen}
          key={index}
          className="sm:hover:text-black sm:justify-between sm:gap-10 flex items-center gap-2p cursor-pointer hover:text-hover group"
        >
          <span className="sm:flex sm:items-center sm:gap-10 text-0.875 font-semibold">
            {result.iconsm}
            <p className="sm:text-base sm:font-semibold">{result.title}</p>
          </span>
          <FaAngleDown className="svgElement sm:hidden mt-1 text-light transition-all group-hover:text-hover" />
          <FaAngleRight className="sm:block hidden text-light2" />
          <div className="subNav sm:w-4/5 sm:h-screen sm:max-h-screen sm:px-4 sm:left-full sm:shadow-shadowNav max-h-220 w-full bg-white absolute top-0 left-0 -z-1 transition-all duration-500 opacity-0 invisible">
            <SecondaryNav item1={result.item.item1} item2={result.item.item2} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NavLarge;
