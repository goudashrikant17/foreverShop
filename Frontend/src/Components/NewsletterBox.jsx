import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className=" w-full text-center ">
        <h1 className=" text-black font-semibold text-lg sm:text-2xl">
          Subscribe now & get 20% OFF
        </h1>
        <p className=" text-gray-400 my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
          exercitationem.
        </p>

        <form
          onSubmit={onSubmitHandler}
          className=" w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
        >
          <input
            className=" w-full sm:flex-1 outline-none"
            type="email"
            placeholder="enter your email"
            required
          />
          <button className=" bg-black text-white px-3 py-1" type="submit">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </>
  );
};

export default NewsletterBox;
