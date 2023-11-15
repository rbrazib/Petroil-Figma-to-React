import React from "react";
import Button from "./Button";

const Services = () => {
  return (
    <section className="mt-7">
      <div className="flex flex-wrap">
        <div className="w-2/4 flex justify-center items-end flex-col">
          <h1 className="font-pop font-bold text-[64px] mr-36">Our Services</h1>
          <p className="font-pop font-medium w-[405px] mr-36 text-base">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div
          className="w-2/4 py-36 px-28"
          style={{
            background: "url(assets/services3.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className="text-white font-pop font-bold pb-5 text-4xl">
            Modern natural oil and gas refineries.
          </p>
          <Button
            item="Learn More"
            className="py-3 px-6 text-white font-pop font-semibold inline-block bg-primary"
          />
        </div>
        <div
          className="w-2/4 py-36 px-28"
          style={{
            background: "url(assets/services1.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className="text-white font-pop font-bold pb-5 text-4xl">
            Supply of national industries.
          </p>
          <Button
            item="Learn More"
            className="py-3 px-6 text-white font-pop font-semibold inline-block bg-primary"
          />
        </div>
        <div
          className="w-2/4 py-36 px-28"
          style={{
            background: "url(assets/services2.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className="text-white font-pop font-bold pb-5 text-4xl">
            National fuel distribution and supply.
          </p>
          <Button
            item="Learn More"
            className="py-3 px-6 text-white font-pop font-semibold inline-block bg-primary"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
