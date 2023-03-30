import React from "react";

type Props = {};

function Projects({}: Props) {
  return (
    <div className="h-screen relative flex flex-col justify-evenly items-center overflow-hidden text-left mx-auto md:flex-row max-w-full z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] "></div>
    </div>
  );
}

export default Projects;
