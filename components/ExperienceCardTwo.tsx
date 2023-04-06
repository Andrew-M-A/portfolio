import React from "react";
import { motion } from "framer-motion";
import costco from "pages/public/costco-logo.png";

type Props = {};

function ExperienceCardTwo({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacit duration-200 overflow-hidden"
    >
      <motion.img
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        src={costco.src}
        alt="experience"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light"> Optical Member Service Clerk </h4>
        <p className="font-bold text-2xl mt-1"> Costco Wholesale </p>
        <div className="flex justify-center items-center space-x-2 my-2">
          {/* <img
            className="h-10 w-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
            alt=""
          /> */}
        </div>
        <p className="uppercase py-5 text-gray-300"> Feb 2012 - April 2022 </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Oversaw 35 Costco Optical locations and ensured that their jobs were
            done in line with Costco's Satisfaction Guarantee
          </li>
          <li>
            Campaigned for and achieved a premium raise for the entire
            department
          </li>
          <li>
            Achieved Costco Optical certification to better communicate
            technically with Opticians
          </li>
          <li>
            Created an algorithm to make checking prescription tolerances almost
            instantaneous
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCardTwo;
