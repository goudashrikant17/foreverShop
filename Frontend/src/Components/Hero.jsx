import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <>
      <div className=" sm:flex justify-center items-center border border-gray-700 ">
        {/* left section  */}
        <div className=" sm:px-1 w-full sm:w-1/2 flex flex-col gap-2 items-center py-12">
          <div className=" inline-flex items-center gap-3">
            <p className=" w-8 sm:w-12 h-[2px] sm:[2px] bg-gray-700"></p>

            <p className=" prata-regular text-2xl lg:text-4xl ">
              OUR BESTSELLERS
            </p>
          </div>
          <h1 className=" prata-regular text-4xl lg:text-5xl font-bold lg:py-5 ">
            Latest Arrivals
          </h1>
          <div className=" inline-flex items-center">
            <p className=" prata-regular text-2xl lg:text-4xl  ">SHOP NOW </p>
            <p className=" w-8 sm:w-12 h-[2px] sm:[2px] bg-gray-700"></p>
          </div>
        </div>

        {/* right Section */}

        <img src={assets.hero_img} alt="" className=" w-full sm:w-1/2 " />
      </div>
    </>
  );
};

export default Hero;
