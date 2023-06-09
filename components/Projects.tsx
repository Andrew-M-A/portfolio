import React from "react";
import { motion } from "framer-motion";
import day from "pages/public/favicon.ico";

type Props = {};

function Projects({}: Props) {
  const projects = [1];

  return (
    <div className="h-screen relative flex justify-evenly items-center overflow-hidden text-left mx-auto md:flex-row max-w-full z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"></h3>
      <motion.div
        className="relative w-full flex overflow-y-hidden snap-x snap-mandatory z-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {projects.map((project, i) => (
          <div className="flex flex-col w-screen flex-shrink-0 snap-center space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <a href="https://www.withaid.org/">
              <motion.img
                src="https://media.licdn.com/dms/image/C560BAQFWLH1S1gfBuA/company-logo_200_200/0/1675797611026?e=1688601600&v=beta&t=2-R_wED5vjH9XPnbGBXICTVwRDylyXiVH4kPnL1jkZM"
                alt="With. Aid Logo"
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
              />
            </a>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-mono font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  {/* Case Study {i + 1} 0f {projects.length} */}
                  <a href="https://www.withaid.org/">With. Aid</a>
                </span>
                :
              </h4>
              <p className="text-lg text-center md:text-left font-mono">
                An engaging website to drive user subscriptions for a non-profit
                based in San Diego. Made in Webflow!
              </p>
            </div>
            <a href="https://daytodayvintage.webflow.io/">
              <motion.img
                src={day.src}
                alt="Stock Triangle Image"
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
              />
            </a>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center font-mono">
                <span className="underline decoration-[#F7AB0A]/50">
                  {/* Case Study {i + 1} 0f {projects.length} */}
                  <a href="https://daytodayvintage.webflow.io/">
                    Day to Day Vintage
                  </a>
                </span>
                :
              </h4>
              <p className="text-lg text-center md:text-left font-mono">
                A landing page and blog for a local vintage shop in San Diego.
                Made in Webflow!
              </p>
            </div>
          </div>
        ))}
      </motion.div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12 "></div>
    </div>
  );
}

export default Projects;
