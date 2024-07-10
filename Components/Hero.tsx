/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";


const Hero: React.FC = () => {
    const handleDownload = () => {
      window.open('https://sonerseylan.com.tr/cv/Soner_Seylan_Ozgecmis.pdf', '_blank');
    };

    
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpeg')] bg-cover bg-center ">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            HI, I'M <span className="text-yellow-400">SONER!</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
            facilis commodi amet consequatur aperiam eligendi ex quis quod nobis
            quas fugiat, perspiciatis, mollitia, porro voluptatibus!
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6" >
            <button 
            //indirme çalışmazsa sunucudan al pdfi
            onClick={handleDownload}
            className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
                <p>Download Cv</p>
                <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black"/>
            </button>
          </div>
        </div>
        <div className="w-[500px] hidden relative lg:flex items-center rounded-full h-[500px]">
          <Image
            src="/images/u1.png"
            alt="user"
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
