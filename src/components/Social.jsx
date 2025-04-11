import React from "react";
import { FaGithub } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { BsFillPersonBadgeFill } from "react-icons/bs";
const Social = () => {
  const social = [
    {
      name: "GitHub",
      icon: <FaGithub size={30} />,
      link: "https://github.com/AD9-1",
    },
    {
      name: "Linkedin",
      icon: <FaLinkedin size={30} />,
      link: "https://www.linkedin.com/in/aparna-dhara/",
    },
    {
      name: "Resume",
      icon: <BsFillPersonBadgeFill size={30} />,
      link: "Resume/Aparna Dhara1.docx",
    },
    {
      name: "Mail",
      icon: <IoIosMail size={30} />,
    },
  ];
  return (
    <div className="fixed top-1/4 left-0">
      <ul className="hidden lg:block">
        {social.map((item,index) => {
          return (
            <li key={index}
              className="w-28 bg-gradient-to-tr from-blue-400 to to-blue-800
               text-white  py-2  flex items-center justify-around 
                 ml-[-75px] hover:ml-[-1px] hover:rounded-tr-md hover:rounded-br-md duration-500"
            >
              <span className="text-lg w-1/2"> {item.name}</span>
              <a href={item.link} target="_blank">{item.icon}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Social;
