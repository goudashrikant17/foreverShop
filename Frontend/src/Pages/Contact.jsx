// import React from "react";
import Title from "../Components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../Components/NewsletterBox";

const Contact = () => {
  return (
    <>
      <div>
        <div className=" text-center my-5 text-lg">
          <Title text1={"CONTECT"} text2={"US"} />
        </div>

        <div className=" md:flex md:justify-center gap-10">
          <img
            className=" w-full md:max-w-[480px]"
            src={assets.contact_img}
            alt="contact_img"
          />

          <div className=" text-gray-400 text-xl mt-10 md:mt-0 space-y-5 flex flex-col justify-center">
            <h1 className=" text-gray-600 text-2xl font-bold">Our Store</h1>
            <div>
              <p>54709 Willims Station</p>
              <p>Suite350. Washington, USA</p>
            </div>
            <div>
              <p>Tel:(415) 555-0132</p>
              <p>Email:admin@forever.com</p>
            </div>

            <h1 className=" text-gray-600 text-2xl font-bold">Career at Forever</h1>
            <p>Learn more about our teams and job opening.</p>

            <button className=" text-white bg-black text-sm px-5 py-3 w-fit">Explore Jobs</button>
          </div>
        </div>

        <div className=" my-10">
        <NewsletterBox />
        </div>

      </div>
    </>
  );
};

export default Contact;
