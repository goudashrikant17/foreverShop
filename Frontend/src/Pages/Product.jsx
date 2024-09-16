import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";

const Product = () => {
  const { productId } = useParams();

  const { products } = useContext(ShopContext);

  const [productData, setProductData] = useState(false);

  const [image, setImage] = useState("");

  const [size, setSize] = useState("");

  const fetxhProductData = async () => {
    products.map((item) => {
      if (item._id == productId) {
        setProductData(item);
        console.log(item);

        setImage(item.image[0]);

        return null;
      }
    });
  };

  useEffect(() => {
    fetxhProductData();
  }, [productId, products]);

  return productData ? (
    <>
      {/* <div className=" border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
        <div className=" flex gap-12 sm:gap-12 flex-col sm:flex-row">
          <div className=" flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            <div className=" flex sm:flex-col sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
              <img src={productData.image} alt="" />
            </div>
          </div>
        </div>
      </div> */}

      <div className="flex flex-col lg:flex-row px-5 md:px-14 gap-12 mt-6">
        {/* left side */}
        <div className=" items-center">
          <img src={productData.image[0]} alt="img" />
        </div>

        {/* righrt side */}
        <div className="">
          <h1 className=" sm:text-3xl text-2xl font-bold">
            {productData.name}
          </h1>

          <div className=" flex items-center">
            <img
              src={assets.star_icon}
              alt="starImg"
              className=" w-[15px] h-[15px]"
            />
            <img
              src={assets.star_icon}
              alt="starImg"
              className=" w-[15px] h-[15px]"
            />
            <img
              src={assets.star_icon}
              alt="starImg"
              className=" w-[15px] h-[15px]"
            />
            <img
              src={assets.star_icon}
              alt="starImg"
              className=" w-[15px] h-[15px]"
            />

            <img
              src={assets.star_dull_icon}
              alt="starImg"
              className=" w-[15px] h-[15px]"
            />
            <p className=" pl-2">(122)</p>
          </div>

          <h1 className="  text-2xl sm:text-3xl font-bold my-2">
            ${productData.price}
          </h1>

          <p className=" text-gray-400 w-[80%] text-left">
            {productData.description}
          </p>

          <p className=" text-lg font-medium mb-3">Select Size</p>

          <div className="">
            {productData.sizes.map((item, index) => (
              <div
                onClick={() => setSize(item)}
                className={`border inline-block px-3 py-1 mr-2 bg-gray-200 cursor-pointer  ${
                  size == item ? "border-orange-500" : ""
                }`}
                key={index}
              >
                {item}
              </div>
            ))}
          </div>

          <button
            onClick={() => toast.success("Successfully add")}
            type="submit"
            className=" bg-black text-white px-3 py-2 mt-5"
          >
           ADD TO CART
          </button>

          <hr className="my-2" />

          <div className=" text-gray-400">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* ------------------------- */}

      <div className=" px-5 md:px-14 mt-16">
        <div>
          <button className=" font-bold px-4 py-2 border border-gray-400 ">
            Description
          </button>
          <button className=" border px-4 py-2 border-gray-400">
            Reviews(122)
          </button>
        </div>

        <div className=" border border-gray-400 px-7 py-6 space-y-3">
          <p className=" text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            possimus porro amet nesciunt quae esse quaerat aperiam nostrum rerum
            tempora quo dolor officia, eos odio asperiores incidunt error.
            Perspiciatis aliquid dolor aspernatur ab repellendus minima?
          </p>
          <p className=" text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            accusamus quo maxime similique et neque animi soluta distinctio,
          </p>
        </div>
      </div>
    </>
  ) : (
    <div className="  opacity-0"></div>
  );
};

export default Product;
