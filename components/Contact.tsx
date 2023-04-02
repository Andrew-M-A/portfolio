import React from "react";

type Props = {};

function Contact({}: Props) {
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="">
          Can't wait to hear from you!
          <span className="decoration-[#F7AB0A]/50 underline">
            {" "}
            Contact Me{" "}
          </span>
        </h4>
      </div>
    </div>
  );
}

export default Contact;
