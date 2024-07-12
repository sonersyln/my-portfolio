import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

const About: React.FC = () => {
  const handleDownload = () => {
    window.open("https://sonerseylan.com.tr/cv/Soner_Seylan.pdf", "_blank");
  };
  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]">
            HAKKIMDA
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            Shaping the Future{" "}
            <span className="text-yellow-400">with Technology</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              Amacım, sorunları çözmek ve kullanıcı deneyimini geliştirmek için
              teknolojiyi etkin bir şekilde kullanmak. Projelerdeki rolümü
              ilerletmek için yenilikçi çözümler üretmeye ve kendimi sürekli
              geliştirmeye çalışıyorum.
            </p>
          </div>
          
        </div>
        <div
          data-aos="fade-left"
          className="lg:w-[500px] rounded-full mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative  bg-custom-radial-gradient"
        >
          <Image
            src="/images/about.png"
            alt="user"
            layout="fill"
            objectFit="contain"
            className="relative z-[11] w-[100%] h-[100%] object-contain"
          />
          <div className="absolute rounded-full w-[100%] h-[100%] z-[10] bg-radial-gradient  top-[-1.5rem] right-[-1.5rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
