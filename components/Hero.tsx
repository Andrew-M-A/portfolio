import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";
import Background from "@/components/Background";
import img from "public/profile.jpeg";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Andrew Almeida.", "Welcome to my portfolio"],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <div className="flex flex-col space-y-2 items-center justify-center h-screen text-center overflow-hidden">
      <Background />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://media.licdn.com/dms/image/D5603AQEv7_Y8S-_IEw/profile-displayphoto-shrink_100_100/0/1679972877520?e=1685577600&v=beta&t=LHgbtnkbVjTp5_Gl1HH3lsmCwNzIBbiVvAhQlmw0Zbo"
        alt="portrait of self"
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Front End Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="red" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton"> About </button>
          </Link>
          <Link href="#experience">
            <button className="heroButton"> Experience </button>
          </Link>
          <Link href="#skills">
            <button className="heroButton"> Skills </button>
          </Link>
          <Link href="#projects">
            <button className="heroButton"> Projects </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
