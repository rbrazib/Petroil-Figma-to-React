import React, { useEffect, useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import List from "./List";
import Item from "./Item";
import Button from "./Button";
import { RiBarChartHorizontalFill } from "react-icons/ri";
const Navbar = () => {
  let [show, setShow] = useState();
  useEffect(() => {
    function scrollWidth() {
      if (window.innerWidth < 1020) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
    scrollWidth();
    window.addEventListener("resize", scrollWidth);
  }, []);
  return (
    <nav className="bg-primary py-8 ">
      <Container>
        <Flex className="flex items-center">
          <div className="w-1/5">
            <Image imgscr="assets/logo.png" />
          </div>
          <div className="w-4/5 font-pop text-[16px] font-semibold text-white">
            <RiBarChartHorizontalFill
              className="lg:hidden"
              onClick={() => setShow(!show)}
            />
            {show && (
              <List className="flex justify-end items-center gap-x-12">
                <Item itemName="Home" href="/" />
                <Item itemName="About" href="about" />
                <Item itemName="Sevices" />
                <Item itemName="Grallay" />
                <Item itemName="Blog" />
                <Button
                  item="Contact"
                  className="py-3 px-6 border-2 border-solid border-white"
                />
              </List>
            )}
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
