import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";

const BrandLogo = () => {
  return (
    <section className="py-28">
      <Container>
        <Flex className="flex justify-between">
          <div>
            <Image imgscr="assets/Logo1.png" />
          </div>
          <div>
            <Image imgscr="assets/Logo2.png" />
          </div>
          <div>
            <Image imgscr="assets/Logo3.png" />
          </div>
          <div>
            <Image imgscr="assets/Logo4.png" />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default BrandLogo;
