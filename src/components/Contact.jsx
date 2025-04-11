import React from "react";
import { LuSquareArrowRight } from "react-icons/lu";
import { LuSquareArrowDown } from "react-icons/lu";
const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-br
     from-blue-400 to-orange-50 px-6 py-28 md:h-full"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full md:flex-row md:gap-10">
        <div className="h-fit flex-1">
          <p
            className="text-4xl md:text-6xl inline text-blue-900 font-bold mb-3
             border-spacing-y-11 border-y-zinc-400 border-b-4 "
          >
            Contact
          </p>
          <p className="py-4 text-lg flex items-center gap-3
           text-blue-900 font-medium animate-wavy-color ">
            Submit the form to get in touch
       <LuSquareArrowRight className="hidden md:block md:size-6 md:font-bold md:animate-slide-out " />
       <LuSquareArrowDown className="block md:hidden size-6 font-bold animate-slide-in " />
          </p>
        </div>
        <form
          action="https://getform.io/f/bgdpgwra" method="POST"
          className="flex flex-col w-full md:w-1/2 mt-8 md:mt-0 gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="p-2 border border-3 rounded-md focus:outline-cyan-800"
          />
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            className="p-2 border border-3 rounded-md focus:outline-cyan-800"
          />
          <textarea
            name="message"
            id=""
            rows="5"
            cols="30"
            placeholder="Enter your message"
            className="p-2 border border-3 rounded-md focus:outline-cyan-800"
          ></textarea>
          <button
            className="p-2 rounded-md bg-gradient-to-tl w-1/2
            from-slate-300 bg-gradient-to-tr to-blue-600 
            hover:scale-110 duration-100"
          >
            let's talk
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
