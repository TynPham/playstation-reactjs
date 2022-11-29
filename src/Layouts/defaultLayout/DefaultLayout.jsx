import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Sony from "../../components/sony/Sony";

const DefaultLayout = () => {
  return (
    <>
      <Sony />
      <div className="containerr">
        <Outlet />
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default DefaultLayout;
