import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { BiLogoFacebook } from "react-icons/bi";
import { IoLogoTwitter } from "react-icons/io";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import List from "./List";
import Item from "./Item";
const Footer = () => {
  return (
    <section className="bg-[#1F1F1F] py-56">
      <Container>
        <Flex className="flex">
          <div className="w-[40%]">
            <Image imgscr="assets/logo.png" />
            <div className="flex  mr-12 pt-9">
              <MdOutlineMarkEmailUnread className="text-base text-[#ffffff]" />
              <p className="text-xs	 text-[#FFFFFF] font-pop font-regular pl-1 after:absolute after:top-0 after:right-[-30px] after:w-[2px] after:text-red after:content-[''] after:bg-[#5C6A92] after:h-4">
                mail@yourcompany.com
              </p>
            </div>
            <div className="flex py-4">
              <FiPhoneCall className="text-base text-[#ffffff]" />
              <p className="text-xs	 text-[#FFFFFF] font-pop font-regular pl-1">
                +896 120 5889 (Toll free)
              </p>
            </div>
            <div className="flex">
              <CiLocationOn className="text-base text-[#ffffff]" />
              <p className="text-xs	 text-[#FFFFFF] font-pop font-regular pl-1">
                101 Baker Street, New York, USA, 12345
              </p>
            </div>
            <div className="pt-8">
              <Flex className="flex gap-x-3 text-white text-base">
                <BiLogoFacebook className="bg-primary w-7 h-7 rounded-full p-1" />
                <IoLogoTwitter className="bg-primary w-7 h-7 rounded-full p-1" />
                <GrLinkedinOption className="bg-primary w-7 h-7 rounded-full p-1" />
                <AiOutlineInstagram className="bg-primary w-7 h-7 rounded-full p-1" />
              </Flex>
            </div>
          </div>
          <div className="w-[20%] pt-4">
            <h2 className="text-white font-pop font-bold text-base pb-6">
              Company
            </h2>
            <List className="text-white">
              <Item itemName="Home" className="pb-[15px]" />
              <Item itemName="About" className="pb-[15px]" />
              <Item itemName="Sevices" className="pb-[15px]" />
              <Item itemName="Grallay" className="pb-[15px]" />
            </List>
          </div>
          <div className="w-[20%] pt-4">
            <h2 className="text-white font-pop font-bold text-base pb-6">
              Others
            </h2>
            <List className="text-white">
              <Item itemName="Blog" className="pb-[15px]" />
              <Item itemName="Contact" className="pb-[15px]" />
              <Item itemName="Terms & Conditions" className="pb-[15px]" />
              <Item itemName="Privacy Policy" className="pb-[15px]" />
            </List>
          </div>
          <div className="w-[20%] pt-4 pb-6">
            <h2 className="text-white font-pop font-bold text-base pb-5">
              Certificate
            </h2>
            <div className="flex justify-between">
              <Image imgscr="assets/Cert1.png" />
              <Image imgscr="assets/Cert2.png" />
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Footer;
