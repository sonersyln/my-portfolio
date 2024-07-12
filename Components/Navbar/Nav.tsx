import { Bars3Icon } from '@heroicons/react/20/solid'
import React from 'react'
import { Link, animateScroll } from 'react-scroll';

interface Props {
    openNav: () => void;

}

const Nav = ({openNav}:Props) => {
  return (
    <div className='w-[100%] fixed z-[1000] top-0 h-[12vh] bg-[#141c27] shadow-md'>
            <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]' onClick={() => animateScroll.scrollToTop()}>
                <h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold'>
                    SONER
                    <span className='text-yellow-300'>SEYLAN</span>
                </h1>
                <div className="nav-link" onClick={() => animateScroll.scrollToTop()}>Home</div>

                <Link to="aboutSection" smooth={true} duration={500} className="nav-link cursor-pointer">ABOUT</Link>

                <Link to="servicesSection" smooth={true} duration={500} className="nav-link cursor-pointer">SERVICES</Link>

                

                <Link to="projectSection" smooth={true} duration={500} className="nav-link cursor-pointer">PROJECT</Link>

                <Link to="footerSection" smooth={true} duration={500} className="nav-link cursor-pointer">CONTACT</Link>

                <div onClick={openNav}>
                    <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300'/>
                </div>
            </div>
    </div>
  )
}

export default Nav