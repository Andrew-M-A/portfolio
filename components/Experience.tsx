import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import ExperienceCardTwo from "./ExperienceCardTwo";

type Props = {};

function Experience({}: Props) {
  return (
    <motion.div
      className="h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
        <ExperienceCard />
        <ExperienceCardTwo />
      </div>
    </motion.div>
  );
}

export default Experience;
