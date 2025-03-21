import React from "react";
import { FaGithub } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { BsFillPersonBadgeFill } from "react-icons/bs";
const Social = () => {
    const social=[{name:"GitHub",icon:<FaGithub size={30} />,link:""},]
  return (
    <div>
      <ul>
        <li
          className="w-28 bg-gradient-to-tr from-blue-400 to to-blue-800 text-white  py-2
        fixed top-1/4 left-0 flex items-center justify-around ml-[-68px] hover:ml-[-1px] hover:rounded-md duration-500"
        >
          <span className="text-lg"> GitHub</span>

          <FaGithub size={30} />
        </li>
      </ul>
    </div>
  );
};

export default Social;
