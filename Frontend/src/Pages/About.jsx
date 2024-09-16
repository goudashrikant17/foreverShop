import React from "react";
import Title from "../Components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../Components/NewsletterBox";

const About = () => {
  return (
    <>
      <div>
        <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
        </div>

        <div className=" md:flex mt-8 gap-8">
          <img src={assets.about_img} alt="about_img" className=" md:w-2/5" />
          <div className=" md:w-3/5 flex justify-center flex-col  text-xl text-gray-400 text-left gap-4  mt-8 md:mt-0">
            <p>
              Forever was born out of a passion for innovation and a desire to
              revoluation the way people shop online. Our journey began with a
              simple idea: to provide a platform where customers can easily
              discover,explore, and purchase a wide range of products from the
              comfort of their homes.
            </p>
            <p>
              Since our inception, we've worked tirelessly to curate a diverse
              selection of high-qulity products that cater to every taste and
              preferance. From fashion and beauty to elections and home
              essentials, we offer an extensive collection sourced from trusted
              brands and supplies.
            </p>
            <h1 className=" text-black font-bold">Our Mission</h1>

            <p>
              Our mission at forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless experience that exceeds expections, from browsing and
              ordering to delivery and beyond.
            </p>
          </div>
        </div>

        <div className=" text-xl mt-16">
          <Title text1={"WHY"} text2={"CHOOSE US"} />
        </div>

        <div className=" md:flex mb-16 ">
          <div className=" border border-gray-400 py-16 px-10">
            <h1 className=" text-lg font-bold my-2">Quality Assurance:</h1>
            <p className=" text-base text-gray-400">
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>
          <div className=" border border-gray-400 py-16 px-10">
            <h1 className=" text-lg font-bold my-2">Quality Assurance:</h1>
            <p className=" text-base text-gray-400">
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>
          <div className=" border border-gray-400 py-16 px-10">
            <h1 className=" text-lg font-bold my-2">Quality Assurance:</h1>
            <p className=" text-base text-gray-400">
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>
        </div>

        <NewsletterBox/>
      </div>
    </>
  );
};

export default About;

// ------------------------------------------------------------------------------------------
// FOOD FETCHING API

// import React, { useEffect, useState } from "react";

// const About = () => {
//   const [Data, setData] = useState([]);

//   const [country, setCountry] = useState("indian");

//   const [inputText, setInputText] = useState("");

//   useEffect(() => {
//     const fetchApiData = async () => {
//       const api = await fetch(
//         `https://themealdb.com/api/json/v1/1/filter.php?a=${country}`
//       );

//       const jsonData = await api.json();

//       console.log(jsonData.meals);

//       setData(jsonData.meals);
//     };

//     fetchApiData();
//   }, [country]);

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     const api =
//       await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}
// `);

//     const inputData = await api.json();

//     setData(inputData.meals)

//     // if(setData(inputData.meals) == null){
//     //   setData("indian")
//     // }
//     // else{
//     //   setData(inputData.meals)
//     // }
//   };

//   return (
//     <div className="">
//       <div>
//         <div className="flex flex-row justify-between mr-4 ml-4 border py-2 px-2 rounded-md gap-2 bg-red-400 overflow-x-auto">
//           <button
//             onClick={() => setCountry("indian")}
//             className=" bg-green-400 px-3 py-2 text-2xl rounded-lg cursor-pointer hover:bg-orange-500"
//           >
//             Indian
//           </button>
//           <button
//             onClick={() => setCountry("american")}
//             className=" bg-green-400 px-3 py-2 text-2xl rounded-lg cursor-pointer hover:bg-orange-500"
//           >
//             American
//           </button>

//           <button
//             onClick={() => setCountry("canadian")}
//             className=" bg-green-400 px-3 py-2 text-2xl rounded-lg cursor-pointer hover:bg-orange-500"
//           >
//             Canadian
//           </button>
//           <button
//             onClick={() => setCountry("thai")}
//             className=" bg-green-400 px-3 py-2 text-2xl rounded-lg cursor-pointer hover:bg-orange-500"
//           >
//             Thai
//           </button>
//           <button
//             onClick={() => setCountry("british")}
//             className=" bg-green-400 px-3 py-2 text-2xl rounded-lg cursor-pointer hover:bg-orange-500"
//           >
//             British
//           </button>
//           <button
//             onClick={() => setCountry("russian")}
//             className=" bg-green-400 px-3 py-2 text-2xl rounded-lg cursor-pointer hover:bg-orange-500"
//           >
//             Russian
//           </button>
//         </div>
//       </div>

//       <form onSubmit={submitHandler}>
//         <input
//           type="text"
//           placeholder="search"
//           onChange={(e) => setInputText(e.target.value)}
//           className=" ml-14 w-[80%] border rounded-xl my-5 pl-5 text-lg "
//         />
//       </form>

//       <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//         {Data.map((data) => (
//           <div
//             key={data.idMeal}
//             className=" border inline-block m-4 text-center rounded-lg"
//           >
//             <img
//               src={data.strMealThumb}
//               alt="foodImg"
//               width={250}
//               className=" rounded-lg"
//             />
//             <p className=" font-bold">{data.strMeal}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default About;
