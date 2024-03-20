import React from "react";
import { FaArrowRight, FaMusic } from "react-icons/fa";
import Header from "./Header";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="mt-16 relative left-0 w-full h-full bg-pink-50">
        <div className="flex justify-evenly items-center py-10">
          <div className="">
            <h1 className="text-4xl font-bold mb-3">
              Music is{" "}
              <span className="text-pink-500 font-serif">Connection</span>
            </h1>
            <p className="mb-2">
              Are you looking for a unique gift for your girlfriend or
              boyfriend?
            </p>
            <p>Give away your personal love song now!</p>

            <button className="px-5 py-3 bg-pink-500 rounded-full text-white mt-4">
              Choose Your Song{" "}
              <FaArrowRight className="inline-block ml-2" size={15} />
            </button>
          </div>

          <div className="hidden md:block w-[450px] h-[550px]">
            <img
              className="w-full h-full object-cover rounded-full shadow-lg"
              src="https://images.pexels.com/photos/2808658/pexels-photo-2808658.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
