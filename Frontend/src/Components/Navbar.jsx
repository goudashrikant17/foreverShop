import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const {setShowSearch} = useContext(ShopContext);

  return (
    <>
      <div className=" flex items-center justify-between py-5 font-medium ">
      <NavLink to="/">
      <img src={assets.logo} alt="img" className="w-36 bg-white" />
      </NavLink>

        <ul className=" hidden sm:flex gap-5 text-sm text-gray-700">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className="w-full border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink
            to="/collection"
            className="flex flex-col items-center gap-1"
          >
            <p>COLLECTION</p>
            <hr className="w-full border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
            <hr className="w-full border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
            <hr className="w-full border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>

        <div className=" flex items-center ">
          <img onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            className="w-5 cursor-pointer mr-6"
            alt="search-icon"
          />
          <div className="group relative">
            <img
              src={assets.profile_icon}
              className=" w-5 cursor-pointer mr-6"
              alt="profile-icon"
            />
            <div className="DROPDOWN-MENU group-hover:block hidden absolute  right-0 pt-4">
              <div className=" flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-700">
                <p className=" cursor-pointer hover:text-black">My Profile</p>
                <p className=" cursor-pointer hover:text-black">Orders</p>
                <p className=" cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>
          <Link to="/cart" className=" relative">
            <div>
              <img src={assets.cart_icon} className="w-5 min-w-5" alt="cart" />
              <p className=" absolute right-[-5px] bottom-[-5px] w-4 text-center bg-black rounded-full leading-4 aspect-square text-white text-[8px]">
                10
              </p>
            </div>
          </Link>

          <div>
            <img
              onClick={() => setMobileNav(true)}
              src={assets.menu_icon}
              className=" w-5 cursor-pointer sm:hidden ml-6"
              alt=""
            />
            <div
              className={` absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all   ${
                mobileNav ? "w-full" : "w-0"
              }`}
            >
              <div className="flex flex-col ">
                <div
                  onClick={() => setMobileNav(false)}
                  className=" pl-1 py-1 flex items-center gap-4 cursor-pointer"
                >
                  <img
                    src={assets.dropdown_icon}
                    alt="back"
                    className="  h-4 rotate-180"
                  />
                  <p>Back</p>
                </div>

                <NavLink
                  onClick={() => setMobileNav(false)}
                  to="/"
                  className=" w-full py-2 pl-6 border "
                >
                  HOME
                </NavLink>
                <NavLink
                  onClick={() => setMobileNav(false)}
                  to="/collection"
                  className=" w-full py-2 pl-6 border "
                >
                  COLLECTION
                </NavLink>
                <NavLink
                  onClick={() => setMobileNav(false)}
                  to="/about"
                  className=" w-full py-2 pl-6 border "
                >
                  ABOUT
                </NavLink>
                <NavLink
                  onClick={() => setMobileNav(false)}
                  to="/contact"
                  className=" w-full py-2 pl-6 border "
                >
                  CONTACT
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
