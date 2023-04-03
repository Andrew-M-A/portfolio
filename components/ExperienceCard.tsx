import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
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
        src="https://media.licdn.com/dms/image/C560BAQFWLH1S1gfBuA/company-logo_200_200/0/1675797611026?e=1688601600&v=beta&t=2-R_wED5vjH9XPnbGBXICTVwRDylyXiVH4kPnL1jkZM"
        alt="experience"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light"> Web Designer </h4>
        <p className="font-bold text-2xl mt-1">With. Company LLC</p>
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
        <p className="uppercase py-5 text-gray-300"> Freelance </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Designed and developed a visually striking website to drive user
            engagement
          </li>
          <li>
            Utilized Webflow designer to bring company's ideas to life and
            ensure that best practices were followed
          </li>
          <li>
            Coordinated with client daily to ensure that all aspects of the
            website are consistent and on brand
          </li>
          <li>
            Currently working on a proposal to secure funding to teach
            under-resourced youth web design/development
          </li>
          <li>
            Provided assistance for unhoused individuals in Downtown San Diego
            in the form of water and safe use kits
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
