import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";
import { Link } from 'react-scroll';


interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={
        `fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`
      }
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <div className="nav-link-mobile" onClick={closeNav}>HOME</div>
        <Link to="aboutSection" smooth={true} duration={500} className="nav-link-mobile" onClick={closeNav}>ABOUT</Link>
        
        <Link to="servicesSection" smooth={true} duration={500} className="nav-link-mobile" onClick={closeNav}>SERVICES</Link>


        
        <Link to="projectSection" smooth={true} duration={500} className="nav-link-mobile" onClick={closeNav}>PROJECTS</Link>
        
        <Link to="footerSection" smooth={true} duration={500} className="nav-link-mobile" onClick={closeNav}>CONTACT</Link>
      </div>
      <div 
      onClick={closeNav} 
      className="absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400">
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
