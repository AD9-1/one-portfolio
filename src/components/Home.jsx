import React from "react";
import myImage from "../assets/new.JPG";
import { FaCircleArrowRight } from "react-icons/fa6";

const Home = () => {
  return (
    <div
      name="home"
      className="h-full bg-gradient-to-br from-orange-50 to-blue-400 pb-4 md:h-[70vh] md:pb-0"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-6 h-full md:flex-row ">
        <div className="w-full mt-52 md:mt-0 ">
          <h1 className="text-4xl text-blue-900 font-bold mb-3 -tracking-normal md:text-6xl md:tracking-wider">
            Bridging Technical Support and Development 
          </h1>
          <p className="text-md max-w-7xl text-gray-600 mb-4 leading-snug md:text-md">
            Dedicated software engineer with 5 years of technical support
            experience and 2 years of full-stack development expertise.
            Passionate about React, Node.js, and Express.js in building scalable
            applications and optimizing user experiences. With a strong
            foundation in troubleshooting and problem-solving.
          </p>

          <button className="group px-4 py-3 max-w-fit flex items-center gap-2 text-white bg-gradient-to-tr
          from-blue-400 via-slate-700 to-blue-400 rounded-md hover:scale-110 duration-500 mb-3">
            Skills
            <span className="group-hover:rotate-90">
              <FaCircleArrowRight />
            </span>
          </button>
        </div>
        <div className="w-full h-[350px] md:w-[70%]">
          <img
            src={myImage}
            alt="profile"
            className="h-full md:mx-auto object-fill rounded md:max-h-80 md:w-[60%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
