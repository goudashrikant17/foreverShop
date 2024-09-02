import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className=" block sm:flex gap-8 justify-around text-gray-400 mt-10 mb-4 px-4 py-2 ">
        <div className=" sm:w-1/2 flex flex-col my-4">
          <img src={assets.logo} className=" w-32" alt="" />
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            distinctio quis magnam eligendi id quaerat at, exercitationem quas.
            Possimus laboriosam praesentium qui ex? Voluptate, iure.
          </p>
        </div>

        <div className=" flex flex-col my-4">
          <h1 className=" text-2xl text-black  font-bold">COMPANY</h1>
          <ul className=" flex flex-col">
            <li className=" hover:text-black cursor-pointer">
              <Link to={"/"}>Home</Link>
            </li>
            <li className=" hover:text-black cursor-pointer">
              <Link to={"/about"}>About us</Link>
            </li>
            <li className=" hover:text-black cursor-pointer">Delivery</li>
            <li className=" hover:text-black cursor-pointer">privete Policy</li>
          </ul>
        </div>

        <div className=" flex flex-col my-4">
          <h1 className=" text-2xl text-black  font-bold text-nowrap">GET IN TOUCH</h1>
          <ul className=" flex flex-col">
            <li className=" hover:text-black cursor-pointer">+1-212-456-789</li>
            <li className=" hover:text-black cursor-pointer">
              contct@foreveryou.com
            </li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ forever.com - All Right Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
