import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { ShopContext } from "../Context/ShopContext";

const BestSeller = () => {

   const {products} = useContext(ShopContext)

    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        // setBestSeller(products)
 const bestProduct = products.filter((item) => (item.bestseller));

   setBestSeller(bestProduct.slice(0,5));

    },[])

  return (
    <>
      <div className=" my-10">
        <div className=" text-center  py-8 text-3xl">
          <Title text1={"BEST"} text2={"SELLER"} />

          <p className="w-3/4  m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
            expedita iusto minus nesciunt sint aut, illo error natus deleniti
            assumenda.
          </p>
        </div>
      </div>


            {/* product rendaring */}

           <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 gap-x-2">
            {
                bestSeller.map((item,index) => (
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }
           </div>


    </>
  );
};

export default BestSeller;
