import React, { useEffect, useState } from "react";

const About = () => {
  const [Data, setData] = useState([]);

  const [country, setCountry] = useState("indian");

  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const fetchApiData = async () => {
      const api = await fetch(
        `https://themealdb.com/api/json/v1/1/filter.php?a=${country}`
      );

      const jsonData = await api.json();

      console.log(jsonData.meals);

      setData(jsonData.meals);
    };

    fetchApiData();
  }, [country]);

  const submitHandler = async (e) => {
    e.preventDefault();

    const api =
      await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}
`);

    const inputData = await api.json();

    setData(inputData.meals)

    // if(setData(inputData.meals) == null){
    //   setData("indian")
    // }
    // else{
    //   setData(inputData.meals)
    // }
  };

  return (
    <div className="">
      <div>
        <div className="flex flex-row justify-between mr-4 ml-4 border py-2 px-2 rounded-md gap-2 bg-red-400 overflow-x-auto">
          <button
            onClick={() => setCountry("indian")}
            className=" bg-green-400 px-3 py-2 text-2xl rounded-lg cursor-pointer hover:bg-orange-500"
          >
            Indian
          </button>
          <button
            onClick={() => setCountry("american")}
            className=" bg-green-400 px-3 py-2 text-2xl rounded-lg cursor-pointer hover:bg-orange-500"
          >
            American
          </button>

          <button
            onClick={() => setCountry("canadian")}
            className=" bg-green-400 px-3 py-2 text-2xl rounded-lg cursor-pointer hover:bg-orange-500"
          >
            Canadian
          </button>
          <button
            onClick={() => setCountry("thai")}
            className=" bg-green-400 px-3 py-2 text-2xl rounded-lg cursor-pointer hover:bg-orange-500"
          >
            Thai
          </button>
          <button
            onClick={() => setCountry("british")}
            className=" bg-green-400 px-3 py-2 text-2xl rounded-lg cursor-pointer hover:bg-orange-500"
          >
            British
          </button>
          <button
            onClick={() => setCountry("russian")}
            className=" bg-green-400 px-3 py-2 text-2xl rounded-lg cursor-pointer hover:bg-orange-500"
          >
            Russian
          </button>
        </div>
      </div>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="search"
          onChange={(e) => setInputText(e.target.value)}
          className=" ml-14 w-[80%] border rounded-xl my-5 pl-5 text-lg "
        />
      </form>

      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {Data.map((data) => (
          <div
            key={data.idMeal}
            className=" border inline-block m-4 text-center rounded-lg"
          >
            <img
              src={data.strMealThumb}
              alt="foodImg"
              width={250}
              className=" rounded-lg"
            />
            <p className=" font-bold">{data.strMeal}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

// {Data.map((data) => (
//   <img key={data.idMeal} src={data.strMealThumb} alt="" />
// ))}
