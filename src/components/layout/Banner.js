import React from "react";
import Image from "./Image";
import Container from "./Container";
import Button from "./Button";
const Banner = () => {
  return (
    <div>
      <div
        className="py-72"
        style={{
          background: "url(assets/banner.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <p className="text-white font-pop font-bold text-[64px] w-[841px] mt-7">
            We exist since 1975 on the oil and gas industry.
          </p>
          <Button
            item="LEARN MORE"
            className="py-3 inline-block px-10 m-8  text-white bg-primary hover:bg-transparent hover:border-2 border-solid border-white ml-0 hover:transition duration-300 ease-in-out"
          />
        </Container>
      </div>
    </div>
  );
};

export default Banner;
