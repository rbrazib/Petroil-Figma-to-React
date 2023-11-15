import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";

const Supplier = () => {
  return (
    <section className="mt-20 ">
      <Container>
        <Flex className="flex justify-between items-center">
          <div className="max-w-[289px]">
            <h1 className="text-[48px] font-pop font-bold text-[#000000]">
              The biggest supplier on the country
            </h1>
          </div>
          <div className="max-w-[651px]">
            <p className="text-[16px] font-medium font-pop text-[#6C6C6C]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution.
            </p>
          </div>
        </Flex>
      </Container>
      <div className="flex justify-between mt-24">
        <div>
          <picture>
            <Image imgscr="assets/supplier1.png" loading="lazy" />
          </picture>
        </div>
        <div>
          <picture>
            <Image imgscr="assets/supplier2.png" />
          </picture>
        </div>
        <div>
          <picture>
            <Image imgscr="assets/supplier3.png" />
          </picture>
        </div>
        <div>
          <picture>
            <Image imgscr="assets/supplier4.png" />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Supplier;
