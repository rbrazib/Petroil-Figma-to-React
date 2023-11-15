import React from "react";
import Container from "./Container";
import Socialicon from "./Socialicon";
import Flex from "./Flex";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

const Topbar = () => {
  return (
    <header className="bg-[#282828] py-3.5 border-b-2 border-solid border-yellow-500 hidden lg:block md:block">
      <Container className="flex items-center justify-between">
        <Flex className="flex items-center">
          <div className="w-[80%] flex">
            <div className="flex items-center mr-12 relative ">
              <MdOutlineMarkEmailUnread className="text-base text-[#ffffff]" />
              <p className="text-xs	 text-[#FFFFFF] font-pop font-regular pl-1 after:absolute after:top-0 after:right-[-30px] after:w-[2px] after:text-red after:content-[''] after:bg-[#5C6A92] after:h-4">
                mail@yourcompany.com
              </p>
            </div>
            <div className="flex items-center">
              <FiPhoneCall className="text-base text-[#ffffff]" />
              <p className="text-xs	 text-[#FFFFFF] font-pop font-regular pl-1">
                mail@yourcompany.com
              </p>
            </div>
          </div>
          <div className=" w-[20%] ">
            <Socialicon />
          </div>
        </Flex>
      </Container>
    </header>
  );
};

export default Topbar;
