import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Sony from "../../components/sony/Sony";

const DefaultLayout = () => {
  return (
    <>
      <div className="sm:hidden block">
        <Sony />
      </div>

      <div className="containerr">
        <Outlet />
      </div>

      <Footer />
      <div className="sm:block hidden">
        <Sony />
      </div>
    </>
  );
};

export default DefaultLayout;
