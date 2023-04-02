import React from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";

type Props = {};

function Contact({}: Props) {
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Can't wait to hear from you!{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Contact Me</span>
        </h4>
        <div className="space-y-10">
          <div className="flex justify-center items-center space-x-5">
            <PhoneIcon className="text-[#F7AB0A] j-7 w-7 animate-pulse" />
            <p className="text-2xl">2533802356</p>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <EnvelopeIcon className="text-[#F7AB0A] j-7 w-7 animate-pulse" />
            <p className="text-2xl">am.almeida000@gmail.com</p>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <MapPinIcon className="text-[#F7AB0A] j-7 w-7 animate-pulse" />
            <p className="text-2xl">
              4135 38th Street <br />
              San Diego, California 92105
            </p>
          </div>
        </div>

        <form className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input className="contactInput" type="text" />
            <input className="contactInput" type="text" />
          </div>
          <input className="contactInput" type="text" />
          <textarea className="contactInput" name="" id="" />
          <button> Submit </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
