import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import List from "./List";
import Button from "./Button";
const Map = () => {
  return (
    <>
      <div
        className="h-[450px]"
        style={{
          background: "url(assets/map.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <section className="bg-primary py-12  border-b-2 border-solid border-yellow-500">
        <Container>
          <Flex className="flex items-center">
            <div className="w-4/5">
              <h4 className="font-pop font-bold text-4xl text-white">
                Want to join as member branch in your area?
              </h4>
            </div>
            <div className="w-1/5 font-pop text-[16px] font-semibold text-white">
              <List className="flex justify-end items-center gap-x-12">
                <Button
                  item="Contact"
                  className="py-3 px-6 border-2 border-solid border-white"
                />
              </List>
            </div>
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default Map;
