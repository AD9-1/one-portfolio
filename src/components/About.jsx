import React from "react";

const About = () => {
  return (
    <div className=" h-auto bg-gradient-to-br from-orange-50 to-blue-400 px-6 py-28 ">
      <div
        name="about"
        className="max-w-screen-lg mx-auto flex flex-col md:flex-row md:justify-between"
      >
        <h1
          className=" w-fit h-fit text-4xl text-blue-900 font-bold mb-3 border-spacing-y-11 border-y-zinc-400 border-b-4
     tracking-normal md:text-6xl md:tracking-wider"
        >
          About
        </h1>

        <p className="text-md md:w-[30rem] lg:w-[40rem] text-gray-600 mb-4  md:text-md">
          I’m Aparna Dhara, born in India. I moved to Canada in 2022. I am
          really passionate about coding and I love to learn new things. I am a
          quick learner and I am always ready to take on new challenges. I am a
          hardworking person and I always give my best in whatever I do. I am
          always ready to take on new challenges and I am always ready to learn
          new things. I am a very positive person and I always try to keep a
          positive attitude towards life. I am always ready to help others and I
          am always ready to learn from others. I am a very positive person and
          I always try to keep a positive attitude towards life.Besides I sing
          classical musics and play badminton.
        </p>
      </div>
    </div>
  );
};

export default About;
