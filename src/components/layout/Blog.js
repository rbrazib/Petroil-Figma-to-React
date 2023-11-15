import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Button from "./Button";

const Blog = () => {
  return (
    <section className="bg-[#F0F0F0] pt-28 pb-40">
      <Container>
        <Flex className="flex justify-between">
          <div
            className="w-[339px] group"
            style={{
              background: "url(assets/blog1.png)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="h-full w-full bg-[#00000060] py-16 px-11">
              <p className="font-pop font-bold text-2xl text-white group-hover:text-primary">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </p>
              <Button
                item="Read More"
                className="py-2 px-4 mt-12 text-white font-pop font-semibold inline-block bg-[#ffffff6e]"
              />
            </div>
          </div>
          <div
            className="w-[339px] group"
            style={{
              background: "url(assets/blog3.png)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="h-full w-full bg-[#00000060] py-16 px-11">
              <p className="font-pop font-bold text-2xl text-white group-hover:text-primary">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </p>
              <Button
                item="Read More"
                className="py-2 px-4 mt-12 text-white font-pop font-semibold inline-block bg-[#ffffff6e]"
              />
            </div>
          </div>
          <div
            className="w-[339px] group"
            style={{
              background: "url(assets/blog2.png)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="h-full w-full bg-[#00000060] py-16 px-11">
              <p className="font-pop font-bold text-2xl text-white group-hover:text-primary">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </p>
              <Button
                item="Read More"
                className="py-2 px-4 mt-12 text-white font-pop font-semibold inline-block bg-[#ffffff6e]"
              />
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Blog;
