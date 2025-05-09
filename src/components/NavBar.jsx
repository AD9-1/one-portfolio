import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-scroll";
const NavBar = () => {
  const props = ["Home", "About", "Skills", "Experience", "Contact"];
  const [isOpen, setIsOpen] = useState(false);
  const handleNavClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full h-16 bg-gray-300 flex items-center justify-between px-4 fixed z-20">
      <h1 className="text-3xl font-thin font-signature md:text-2xl">Aparna</h1>
      <ul className="hidden md:flex lg:flex">
        {props.map((prop, index) => (
          <li
            key={index}
            className="mx-4 hover:scale-110 duration-500 cursor-pointer"
            activeClass="text-blue-600 font-semibold border-b-2 border-blue-600"
          >
            <Link
              to={prop.toLowerCase()}
              smooth
              duration={500}
              activeClass="text-blue-600 font-semibold border-b-2 border-blue-600"
              className="cursor-pointer text-gray-600 hover:text-blue-400"
            >
              {prop}
            </Link>
          </li>
        ))}
      </ul>
      <div onClick={handleNavClick} className="md:hidden">
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>
      {isOpen && (
        <ul
          className="absolute top-16
         right-0 w-screen h-screen  flex flex-col items-center 
         justify-center gap-9
         bg-gradient-to-l from-gray-400 to-blue-300 md:hidden"
        >
          {props.map((prop, index) => (
            <li
              key={index}
              className="text-3xl text-gray-500 hover:scale-110 
              duration-500 cursor-pointer"
            >
             <Link onClick={handleNavClick}
              to={prop.toLowerCase()}
              smooth
              duration={500}
              activeClass="text-blue-600 font-semibold border-b-2 border-blue-600"
              className="cursor-pointer text-gray-600 hover:text-blue-800"
            >
              {prop}
            </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
