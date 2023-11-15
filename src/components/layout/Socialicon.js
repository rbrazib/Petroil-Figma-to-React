import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { IoLogoTwitter } from "react-icons/io";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import Flex from "./Flex";
const Socialicon = () => {
  return (
    <Flex className="flex gap-x-5 justify-end text-white text-base">
      <BiLogoFacebook />
      <IoLogoTwitter />
      <GrLinkedinOption />
      <AiOutlineInstagram />
    </Flex>
  );
};

export default Socialicon;
