import React from "react";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CopyRight from "./CopyRight";
import { Outlet } from "react-router-dom";

const Rootlayout = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Outlet />
      <Footer />
      <CopyRight />
    </>
  );
};

export default Rootlayout;
