import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="flex h-screen justify-center items-center flex-col bg-white">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl xl:text-8xl mb-14">
          PIZZAGHAR
        </h1>
        <Link className="flex text-xl bg-yellow-500 rounded-full lg:text-3xl text-black py-4 px-10 transition duration-300 ease-in-out animate-bounce" to="/" >
          Order now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
