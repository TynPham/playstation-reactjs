import React, { useRef } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { PlayStaIcon } from "../../logo";
import { Link } from "react-router-dom";
import NavLarge from "./NavLarge";
import { DataHeaderNav } from "../../context/context";
import NavSmall from "./NavSmall";

const Header = () => {
  const ulRef = useRef(null);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const menuRef = useRef(null);
  const closeRef = useRef(null);
  const navSmRef = useRef(null);

  const handleClickMenu = () => {
    menuRef.current.classList.add("hiddenEl");
    closeRef.current.classList.add("blockEl");
    navSmRef.current.classList.add("blockEl");
  };

  const handleClickClose = () => {
    menuRef.current.classList.remove("hiddenEl");
    closeRef.current.classList.remove("blockEl");
    navSmRef.current.classList.remove("blockEl");
  };

  return (
    <DataHeaderNav.Provider
      value={{
        ulRef,
        headerRef,
        logoRef,
        menuRef,
        closeRef,
        navSmRef,
      }}
    >
      <div
        ref={headerRef}
        className="header sm:fixed sticky z-10 top-0 w-full bg-white h-16 transition-all duration-[0.5s] sm:shadow-gameSd"
      >
        <div className="relative pl-5 pr-5 h-full flex justify-between items-center">
          <div className="nav flex">
            <Link
              to="/"
              className="flex items-center justify-center sm:absolute sm:left-1/2 sm:top-1/2 sm:translate-x-[-50%] sm:translate-y-[-50%]"
            >
              <span ref={logoRef} className="logo mr-3">
                <PlayStaIcon />
              </span>
            </Link>
            <NavLarge />
            <NavSmall />
          </div>
          <div className="flex items-center">
            <button className="sign-in bg-[#0070cc] text-white font-medium p-[0px_8px] rounded-2xl sm:mr-0 mr-5">
              Sign In
            </button>
            <div className="flex items-center gap-4 sm:absolute sm:left-5">
              <button
                ref={menuRef}
                className="menu text-xl sm:block hidden"
                onClick={handleClickMenu}
              >
                <AiOutlineMenu />
              </button>
              <button
                ref={closeRef}
                className="menu text-xl hidden"
                onClick={handleClickClose}
              >
                <AiOutlineClose />
              </button>
              <button className="search text-xl">
                <HiOutlineSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
    </DataHeaderNav.Provider>
  );
};

export default Header;
