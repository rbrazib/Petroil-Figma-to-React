import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Button from "./Button";

const Company = () => {
  return (
    <section className="bg-[#F0F0F0] py-32">
      <Container>
        <Flex className="flex">
          <div className="bg-primary w-2/5">
            <h2 className="py-[100px] px-20 text-white text-[36px] font-pop font-bold">
              Learn more about our company
            </h2>
          </div>
          <div
            className="w-3/5 flex justify-center items-center"
            style={{
              background: "url(assets/company.png)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Button
              item="learn More"
              className="py-3 px-6 text-primary font-pop font-semibold inline-block bg-white"
            />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Company;
