import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

const About: React.FC = () => {
  const handleDownload = () => {
    window.open(
      "https://sonerseylan.com.tr/cv/Soner_Seylan.pdf",
      "_blank"
    );
  };
  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]">
            ABOUT ME
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            Shaping the Future{" "}
            <span className="text-yellow-400">with Technology</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              I am a Java developer working in software development. My goal is
              to effectively use technology to solve problems and enhance user
              experience. I strive to create innovative solutions and
              continuously improve myself to advance my role in projects.
            </p>
          </div>
          <button
            onClick={handleDownload}
            className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2"
          >
            <p>Download Cv</p>
            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
          </button>
        </div>
        <div className="lg:w-[500px] rounded-full mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative  bg-custom-radial-gradient">
          <Image
            src="/images/about.png"
            alt="user"
            layout="fill"
            objectFit="contain"
            className="relative z-[11] w-[100%] h-[100%] object-contain"
          />
          <div className="absolute rounded-full w-[100%] h-[100%] z-[10] bg-radial-gradient  top-[-1.5rem] right-[-1.5rem]">

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
