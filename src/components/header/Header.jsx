import React, { useRef, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { PlayStaIcon } from "../../logo";
import { Link } from "react-router-dom";
import NavLarge from "./NavLarge";
import { DataHeaderNav } from "../../context/context";
import ModalSearch from "../modal/ModalSearch";

const Header = () => {
  const ulRef = useRef(null);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const menuRef = useRef(null);
  const closeRef = useRef(null);

  const [open, setOpen] = useState(false);
  const showModalSearch = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const handleClickMenu = () => {
    menuRef.current.classList.add("hiddenEl");
    closeRef.current.classList.add("blockEl");
    ulRef.current.classList.add("blockEl");
  };

  const handleClickClose = () => {
    menuRef.current.classList.remove("hiddenEl");
    closeRef.current.classList.remove("blockEl");
    ulRef.current.classList.remove("blockEl");
  };

  return (
    <DataHeaderNav.Provider
      value={{
        ulRef,
        headerRef,
        logoRef,
        menuRef,
        closeRef,
      }}
    >
      <div
        ref={headerRef}
        className="sm:fixed sm:shadow-gameSd header sticky z-10 top-0 w-full bg-white h-16 transition-all duration-[0.5s]"
      >
        <div className="relative pl-5 pr-5 h-full flex justify-between items-center">
          <div className="nav flex">
            <Link
              to="/"
              className="sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 flex items-center justify-center"
            >
              <span ref={logoRef} className="logo mr-3">
                <PlayStaIcon />
              </span>
            </Link>
            <NavLarge />
          </div>
          <div className="flex items-center">
            <Link to="/signIn">
              <button className="sm:mr-0 sign-in bg-signIn text-white font-medium py-0 px-2 rounded-2xl mr-5">
                Sign In
              </button>
            </Link>
            <div className="sm:absolute sm:left-5 flex items-center gap-4">
              <button
                ref={menuRef}
                className="menu sm:block text-xl hidden"
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
              <>
                <button className="search text-xl" onClick={showModalSearch}>
                  <HiOutlineSearch />
                </button>
                <ModalSearch
                  open={open}
                  handleCancel={handleCancel}
                  handleOk={handleOk}
                />
              </>
            </div>
          </div>
        </div>
      </div>
    </DataHeaderNav.Provider>
  );
};

export default Header;
