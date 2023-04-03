import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      className="flex flex-col relative h-screen text-center
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About{" "}
      </h3>
      <motion.img
        className="mb-20 md:mb:0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h[600px]"
        initial={{
          x: 200,
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src={
          "https://media.licdn.com/dms/image/D5603AQEv7_Y8S-_IEw/profile-displayphoto-shrink_100_100/0/1679972877520?e=1685577600&v=beta&t=LHgbtnkbVjTp5_Gl1HH3lsmCwNzIBbiVvAhQlmw0Zbo"
        }
        alt="another portrait"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-3xl font-semibold">
          A <span className="underline decoration-[#F7AB0A]">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          {`I'm based in sunny San Diego and began my coding journey back in 2020.
          After writing my first "for" loop, I was hooked and found myself
          tinkering in every console that I could. After learning the basics of
          JavaScript and consulting with my developer friends, I decided to bet
          on myself and enroll in LearningFuze's Full Immersion Boot Camp in
          Irvine, California. There, I made some lifelong friends (trauma bonding ftw!) and spent at least 8 hours a day learning the ins and outs of Full Stack Development.
          Since my time at LearningFuze, I've been strengthening my foundation in React and TypeScript as well as Tailwind.
          PS: this website was made with all of the above! `}
        </p>
      </div>
    </motion.div>
  );
}

export default About;
