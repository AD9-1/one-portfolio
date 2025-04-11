import React from "react";
import skills from "../skills.json";
const Skill = () => {
  return (
    <div
      name="skill"
      className="w-full bg-gradient-to-br from-blue-400 to-orange-50 px-8 py-28 md:h-full "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full">
        <div className="pb-4">
          <p className="text-4xl tracking-normal md:text-6xl md:tracking-wider 
          inline text-blue-900 font-bold mb-3 border-spacing-y-11 border-y-zinc-400 border-b-4">
            Skill
          </p>
          <p className="py-4 text-lg  text-blue-900 font-medium">Check out some Works</p>
        </div>
        <div className="grid grid-cols-1 gap-10 px-0 md:px-12 md:grid-cols-2 lg:grid">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="shadow-md shadow-gray-600 rounded-lg bg-gray-200 p-3"
            >
              <img src={skill.image} alt="" className=" h-auto mx-auto mt-4" />

              <p className="my-2 text-center text-xl font-bold text-blue-900">
                {skill.name}
              </p>
              <p className="mb-4 text-left text-gray-600 from-neutral-50 text-sm">
                {skill.description}
              </p>
             <a href={skill.githublink}> <button className="bg-gradient-to-br from-orange-300
               to-blue-400 p-2 rounded text-blue-900 font-bold hover:scale-105 duration-200 mt-2">
                gitHubLink
              </button></a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
