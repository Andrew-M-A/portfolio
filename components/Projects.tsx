import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];

  return (
    <div className="h-screen relative flex justify-evenly items-center overflow-hidden text-left mx-auto md:flex-row max-w-full z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <motion.div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {projects.map((project, i) => (
          <div className="flex flex-col w-screen flex-shrink-0 snap-center space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              src="https://media.licdn.com/dms/image/D5603AQEv7_Y8S-_IEw/profile-displayphoto-shrink_100_100/0/1679972877520?e=1685577600&v=beta&t=LHgbtnkbVjTp5_Gl1HH3lsmCwNzIBbiVvAhQlmw0Zbo"
              alt="dummy"
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} 0f {projects.length}
                </span>
                : UPS Clone
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, eaque odio ipsum nostrum, quos consectetur
                doloremque doloribus iste quae voluptas inventore quasi nobis
                sint tenetur, ab eos illum tempore unde? Totam optio dolores
                vero ab, alias pariatur delectus saepe a sit odio atque quidem
                eos natus ratione commodi aliquam distinctio, iure excepturi
                fuga iusto tempore. Quo, eos hic. Fugiat, voluptates.
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
