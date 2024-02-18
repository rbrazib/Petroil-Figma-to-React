// import React from "react";
import React, { useRef, useEffect, useState } from "react";
import Banner from "../components/layout/Banner";
import Supplier from "../components/layout/Supplier";
import Company from "../components/layout/Company";
import BrandLogo from "../components/layout/BrandLogo";
import Blog from "../components/layout/Blog";
import Map from "../components/layout/Map";
import BackToTopButton from '../components/layout/BackToTopButton';

const Home = () => {
  return (
    <>
      <Banner />
      <Supplier />
      <Company />
      <BrandLogo />
      <Blog />
      <Map />
      <BackToTopButton />
    </>
  );
};

export default Home;
